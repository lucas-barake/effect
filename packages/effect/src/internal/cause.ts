import * as Arr from "../Array.js"
import type * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import type * as FiberId from "../FiberId.js"
import { constFalse, constTrue, dual, identity, pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as Hash from "../Hash.js"
import * as HashSet from "../HashSet.js"
import { NodeInspectSymbol, stringifyCircular, toJSON } from "../Inspectable.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import type { Predicate, Refinement } from "../Predicate.js"
import { hasProperty, isFunction } from "../Predicate.js"
import type { AnySpan, Span } from "../Tracer.js"
import type { NoInfer } from "../Types.js"
import { getBugErrorMessage } from "./errors.js"
import * as OpCodes from "./opCodes/cause.js"

// -----------------------------------------------------------------------------
// Models
// -----------------------------------------------------------------------------

/** @internal */
const CauseSymbolKey = "effect/Cause"

/** @internal */
export const CauseTypeId: Cause.CauseTypeId = Symbol.for(
  CauseSymbolKey
) as Cause.CauseTypeId

const variance = {
  /* c8 ignore next */
  _E: (_: never) => _
}

/** @internal */
const proto = {
  [CauseTypeId]: variance,
  [Hash.symbol](this: Cause.Cause<any>): number {
    return pipe(
      Hash.hash(CauseSymbolKey),
      Hash.combine(Hash.hash(flattenCause(this))),
      Hash.cached(this)
    )
  },
  [Equal.symbol](this: Cause.Cause<any>, that: unknown): boolean {
    return isCause(that) && causeEquals(this, that)
  },
  pipe() {
    return pipeArguments(this, arguments)
  },
  toJSON<E>(this: Cause.Cause<E>) {
    switch (this._tag) {
      case "Empty":
        return { _id: "Cause", _tag: this._tag }
      case "Die":
        return { _id: "Cause", _tag: this._tag, defect: toJSON(this.defect) }
      case "Interrupt":
        return { _id: "Cause", _tag: this._tag, fiberId: this.fiberId.toJSON() }
      case "Fail":
        return { _id: "Cause", _tag: this._tag, failure: toJSON(this.error) }
      case "Sequential":
      case "Parallel":
        return { _id: "Cause", _tag: this._tag, left: toJSON(this.left), right: toJSON(this.right) }
    }
  },
  toString<E>(this: Cause.Cause<E>) {
    return pretty(this)
  },
  [NodeInspectSymbol]<E>(this: Cause.Cause<E>) {
    return this.toJSON()
  }
}

// -----------------------------------------------------------------------------
// Constructors
// -----------------------------------------------------------------------------

/** @internal */
export const empty: Cause.Cause<never> = (() => {
  const o = Object.create(proto)
  o._tag = OpCodes.OP_EMPTY
  return o
})()

/** @internal */
export const fail = <E>(error: E): Cause.Cause<E> => {
  const o = Object.create(proto)
  o._tag = OpCodes.OP_FAIL
  o.error = error
  return o
}

/** @internal */
export const die = (defect: unknown): Cause.Cause<never> => {
  const o = Object.create(proto)
  o._tag = OpCodes.OP_DIE
  o.defect = defect
  return o
}

/** @internal */
export const interrupt = (fiberId: FiberId.FiberId): Cause.Cause<never> => {
  const o = Object.create(proto)
  o._tag = OpCodes.OP_INTERRUPT
  o.fiberId = fiberId
  return o
}

/** @internal */
export const parallel = <E, E2>(left: Cause.Cause<E>, right: Cause.Cause<E2>): Cause.Cause<E | E2> => {
  const o = Object.create(proto)
  o._tag = OpCodes.OP_PARALLEL
  o.left = left
  o.right = right
  return o
}

/** @internal */
export const sequential = <E, E2>(left: Cause.Cause<E>, right: Cause.Cause<E2>): Cause.Cause<E | E2> => {
  const o = Object.create(proto)
  o._tag = OpCodes.OP_SEQUENTIAL
  o.left = left
  o.right = right
  return o
}

// -----------------------------------------------------------------------------
// Refinements
// -----------------------------------------------------------------------------

/** @internal */
export const isCause = (u: unknown): u is Cause.Cause<unknown> => hasProperty(u, CauseTypeId)

/** @internal */
export const isEmptyType = <E>(self: Cause.Cause<E>): self is Cause.Empty => self._tag === OpCodes.OP_EMPTY

/** @internal */
export const isFailType = <E>(self: Cause.Cause<E>): self is Cause.Fail<E> => self._tag === OpCodes.OP_FAIL

/** @internal */
export const isDieType = <E>(self: Cause.Cause<E>): self is Cause.Die => self._tag === OpCodes.OP_DIE

/** @internal */
export const isInterruptType = <E>(self: Cause.Cause<E>): self is Cause.Interrupt => self._tag === OpCodes.OP_INTERRUPT

/** @internal */
export const isSequentialType = <E>(self: Cause.Cause<E>): self is Cause.Sequential<E> =>
  self._tag === OpCodes.OP_SEQUENTIAL

/** @internal */
export const isParallelType = <E>(self: Cause.Cause<E>): self is Cause.Parallel<E> => self._tag === OpCodes.OP_PARALLEL

// -----------------------------------------------------------------------------
// Getters
// -----------------------------------------------------------------------------

/** @internal */
export const size = <E>(self: Cause.Cause<E>): number => reduceWithContext(self, void 0, SizeCauseReducer)

/** @internal */
export const isEmpty = <E>(self: Cause.Cause<E>): boolean => {
  if (self._tag === OpCodes.OP_EMPTY) {
    return true
  }
  return reduce(self, true, (acc, cause) => {
    switch (cause._tag) {
      case OpCodes.OP_EMPTY: {
        return Option.some(acc)
      }
      case OpCodes.OP_DIE:
      case OpCodes.OP_FAIL:
      case OpCodes.OP_INTERRUPT: {
        return Option.some(false)
      }
      default: {
        return Option.none()
      }
    }
  })
}

/** @internal */
export const isFailure = <E>(self: Cause.Cause<E>): boolean => Option.isSome(failureOption(self))

/** @internal */
export const isDie = <E>(self: Cause.Cause<E>): boolean => Option.isSome(dieOption(self))

/** @internal */
export const isInterrupted = <E>(self: Cause.Cause<E>): boolean => Option.isSome(interruptOption(self))

/** @internal */
export const isInterruptedOnly = <E>(self: Cause.Cause<E>): boolean =>
  reduceWithContext(undefined, IsInterruptedOnlyCauseReducer)(self)

/** @internal */
export const failures = <E>(self: Cause.Cause<E>): Chunk.Chunk<E> =>
  Chunk.reverse(
    reduce<Chunk.Chunk<E>, E>(
      self,
      Chunk.empty<E>(),
      (list, cause) =>
        cause._tag === OpCodes.OP_FAIL ?
          Option.some(pipe(list, Chunk.prepend(cause.error))) :
          Option.none()
    )
  )

/** @internal */
export const defects = <E>(self: Cause.Cause<E>): Chunk.Chunk<unknown> =>
  Chunk.reverse(
    reduce<Chunk.Chunk<unknown>, E>(
      self,
      Chunk.empty<unknown>(),
      (list, cause) =>
        cause._tag === OpCodes.OP_DIE ?
          Option.some(pipe(list, Chunk.prepend(cause.defect))) :
          Option.none()
    )
  )

/** @internal */
export const interruptors = <E>(self: Cause.Cause<E>): HashSet.HashSet<FiberId.FiberId> =>
  reduce(self, HashSet.empty<FiberId.FiberId>(), (set, cause) =>
    cause._tag === OpCodes.OP_INTERRUPT ?
      Option.some(pipe(set, HashSet.add(cause.fiberId))) :
      Option.none())

/** @internal */
export const failureOption = <E>(self: Cause.Cause<E>): Option.Option<E> =>
  find<E, E>(self, (cause) =>
    cause._tag === OpCodes.OP_FAIL ?
      Option.some(cause.error) :
      Option.none())

/** @internal */
export const failureOrCause = <E>(self: Cause.Cause<E>): Either.Either<Cause.Cause<never>, E> => {
  const option = failureOption(self)
  switch (option._tag) {
    case "None": {
      // no `E` inside this `Cause`, so it can be safely cast to `never`
      return Either.right(self as Cause.Cause<never>)
    }
    case "Some": {
      return Either.left(option.value)
    }
  }
}

/** @internal */
export const dieOption = <E>(self: Cause.Cause<E>): Option.Option<unknown> =>
  find(self, (cause) =>
    cause._tag === OpCodes.OP_DIE ?
      Option.some(cause.defect) :
      Option.none())

/** @internal */
export const flipCauseOption = <E>(self: Cause.Cause<Option.Option<E>>): Option.Option<Cause.Cause<E>> =>
  match(self, {
    onEmpty: Option.some<Cause.Cause<E>>(empty),
    onFail: Option.map(fail),
    onDie: (defect) => Option.some(die(defect)),
    onInterrupt: (fiberId) => Option.some(interrupt(fiberId)),
    onSequential: Option.mergeWith(sequential),
    onParallel: Option.mergeWith(parallel)
  })

/** @internal */
export const interruptOption = <E>(self: Cause.Cause<E>): Option.Option<FiberId.FiberId> =>
  find(self, (cause) =>
    cause._tag === OpCodes.OP_INTERRUPT ?
      Option.some(cause.fiberId) :
      Option.none())

/** @internal */
export const keepDefects = <E>(self: Cause.Cause<E>): Option.Option<Cause.Cause<never>> =>
  match(self, {
    onEmpty: Option.none(),
    onFail: () => Option.none(),
    onDie: (defect) => Option.some(die(defect)),
    onInterrupt: () => Option.none(),
    onSequential: Option.mergeWith(sequential),
    onParallel: Option.mergeWith(parallel)
  })

/** @internal */
export const keepDefectsAndElectFailures = <E>(self: Cause.Cause<E>): Option.Option<Cause.Cause<never>> =>
  match(self, {
    onEmpty: Option.none(),
    onFail: (failure) => Option.some(die(failure)),
    onDie: (defect) => Option.some(die(defect)),
    onInterrupt: () => Option.none(),
    onSequential: Option.mergeWith(sequential),
    onParallel: Option.mergeWith(parallel)
  })

/** @internal */
export const linearize = <E>(self: Cause.Cause<E>): HashSet.HashSet<Cause.Cause<E>> =>
  match(self, {
    onEmpty: HashSet.empty(),
    onFail: (error) => HashSet.make(fail(error)),
    onDie: (defect) => HashSet.make(die(defect)),
    onInterrupt: (fiberId) => HashSet.make(interrupt(fiberId)),
    onSequential: (leftSet, rightSet) =>
      HashSet.flatMap(leftSet, (leftCause) => HashSet.map(rightSet, (rightCause) => sequential(leftCause, rightCause))),
    onParallel: (leftSet, rightSet) =>
      HashSet.flatMap(leftSet, (leftCause) => HashSet.map(rightSet, (rightCause) => parallel(leftCause, rightCause)))
  })

/** @internal */
export const stripFailures = <E>(self: Cause.Cause<E>): Cause.Cause<never> =>
  match(self, {
    onEmpty: empty,
    onFail: () => empty,
    onDie: die,
    onInterrupt: interrupt,
    onSequential: sequential,
    onParallel: parallel
  })

/** @internal */
export const electFailures = <E>(self: Cause.Cause<E>): Cause.Cause<never> =>
  match(self, {
    onEmpty: empty,
    onFail: die,
    onDie: die,
    onInterrupt: interrupt,
    onSequential: sequential,
    onParallel: parallel
  })

/** @internal */
export const stripSomeDefects = dual<
  (pf: (defect: unknown) => Option.Option<unknown>) => <E>(self: Cause.Cause<E>) => Option.Option<Cause.Cause<E>>,
  <E>(self: Cause.Cause<E>, pf: (defect: unknown) => Option.Option<unknown>) => Option.Option<Cause.Cause<E>>
>(
  2,
  <E>(self: Cause.Cause<E>, pf: (defect: unknown) => Option.Option<unknown>): Option.Option<Cause.Cause<E>> =>
    match(self, {
      onEmpty: Option.some<Cause.Cause<E>>(empty),
      onFail: (error) => Option.some(fail(error)),
      onDie: (defect) => {
        const option = pf(defect)
        return Option.isSome(option) ? Option.none() : Option.some(die(defect))
      },
      onInterrupt: (fiberId) => Option.some(interrupt(fiberId)),
      onSequential: Option.mergeWith(sequential),
      onParallel: Option.mergeWith(parallel)
    })
)

// -----------------------------------------------------------------------------
// Mapping
// -----------------------------------------------------------------------------

/** @internal */
export const as = dual<
  <E2>(error: E2) => <E>(self: Cause.Cause<E>) => Cause.Cause<E2>,
  <E, E2>(self: Cause.Cause<E>, error: E2) => Cause.Cause<E2>
>(2, (self, error) => map(self, () => error))

/** @internal */
export const map = dual<
  <E, E2>(f: (e: E) => E2) => (self: Cause.Cause<E>) => Cause.Cause<E2>,
  <E, E2>(self: Cause.Cause<E>, f: (e: E) => E2) => Cause.Cause<E2>
>(2, (self, f) => flatMap(self, (e) => fail(f(e))))

// -----------------------------------------------------------------------------
// Sequencing
// -----------------------------------------------------------------------------

/** @internal */
export const flatMap = dual<
  <E, E2>(f: (e: E) => Cause.Cause<E2>) => (self: Cause.Cause<E>) => Cause.Cause<E2>,
  <E, E2>(self: Cause.Cause<E>, f: (e: E) => Cause.Cause<E2>) => Cause.Cause<E2>
>(2, (self, f) =>
  match(self, {
    onEmpty: empty,
    onFail: (error) => f(error),
    onDie: (defect) => die(defect),
    onInterrupt: (fiberId) => interrupt(fiberId),
    onSequential: (left, right) => sequential(left, right),
    onParallel: (left, right) => parallel(left, right)
  }))

/** @internal */
export const flatten = <E>(self: Cause.Cause<Cause.Cause<E>>): Cause.Cause<E> => flatMap(self, identity)

/** @internal */
export const andThen: {
  <E, E2>(f: (e: E) => Cause.Cause<E2>): (self: Cause.Cause<E>) => Cause.Cause<E2>
  <E2>(f: Cause.Cause<E2>): <E>(self: Cause.Cause<E>) => Cause.Cause<E2>
  <E, E2>(self: Cause.Cause<E>, f: (e: E) => Cause.Cause<E2>): Cause.Cause<E2>
  <E, E2>(self: Cause.Cause<E>, f: Cause.Cause<E2>): Cause.Cause<E2>
} = dual(
  2,
  <E, E2>(self: Cause.Cause<E>, f: ((e: E) => Cause.Cause<E2>) | Cause.Cause<E2>): Cause.Cause<E2> =>
    isFunction(f) ? flatMap(self, f) : flatMap(self, () => f)
)

// -----------------------------------------------------------------------------
// Equality
// -----------------------------------------------------------------------------

/** @internal */
export const contains = dual<
  <E2>(that: Cause.Cause<E2>) => <E>(self: Cause.Cause<E>) => boolean,
  <E, E2>(self: Cause.Cause<E>, that: Cause.Cause<E2>) => boolean
>(2, (self, that) => {
  if (that._tag === OpCodes.OP_EMPTY || self === that) {
    return true
  }
  return reduce(self, false, (accumulator, cause) => {
    return Option.some(accumulator || causeEquals(cause, that))
  })
})

/** @internal */
const causeEquals = (left: Cause.Cause<unknown>, right: Cause.Cause<unknown>): boolean => {
  let leftStack: Chunk.Chunk<Cause.Cause<unknown>> = Chunk.of(left)
  let rightStack: Chunk.Chunk<Cause.Cause<unknown>> = Chunk.of(right)
  while (Chunk.isNonEmpty(leftStack) && Chunk.isNonEmpty(rightStack)) {
    const [leftParallel, leftSequential] = pipe(
      Chunk.headNonEmpty(leftStack),
      reduce(
        [HashSet.empty<unknown>(), Chunk.empty<Cause.Cause<unknown>>()] as const,
        ([parallel, sequential], cause) => {
          const [par, seq] = evaluateCause(cause)
          return Option.some(
            [
              pipe(parallel, HashSet.union(par)),
              pipe(sequential, Chunk.appendAll(seq))
            ] as const
          )
        }
      )
    )
    const [rightParallel, rightSequential] = pipe(
      Chunk.headNonEmpty(rightStack),
      reduce(
        [HashSet.empty<unknown>(), Chunk.empty<Cause.Cause<unknown>>()] as const,
        ([parallel, sequential], cause) => {
          const [par, seq] = evaluateCause(cause)
          return Option.some(
            [
              pipe(parallel, HashSet.union(par)),
              pipe(sequential, Chunk.appendAll(seq))
            ] as const
          )
        }
      )
    )
    if (!Equal.equals(leftParallel, rightParallel)) {
      return false
    }
    leftStack = leftSequential
    rightStack = rightSequential
  }
  return true
}

// -----------------------------------------------------------------------------
// Flattening
// -----------------------------------------------------------------------------

/**
 * Flattens a cause to a sequence of sets of causes, where each set represents
 * causes that fail in parallel and sequential sets represent causes that fail
 * after each other.
 *
 * @internal
 */
const flattenCause = (cause: Cause.Cause<unknown>): Chunk.Chunk<HashSet.HashSet<unknown>> => {
  return flattenCauseLoop(Chunk.of(cause), Chunk.empty())
}

/** @internal */
const flattenCauseLoop = (
  causes: Chunk.Chunk<Cause.Cause<unknown>>,
  flattened: Chunk.Chunk<HashSet.HashSet<unknown>>
): Chunk.Chunk<HashSet.HashSet<unknown>> => {
  // eslint-disable-next-line no-constant-condition
  while (1) {
    const [parallel, sequential] = pipe(
      causes,
      Arr.reduce(
        [HashSet.empty<unknown>(), Chunk.empty<Cause.Cause<unknown>>()] as const,
        ([parallel, sequential], cause) => {
          const [par, seq] = evaluateCause(cause)
          return [
            pipe(parallel, HashSet.union(par)),
            pipe(sequential, Chunk.appendAll(seq))
          ]
        }
      )
    )
    const updated = HashSet.size(parallel) > 0 ?
      pipe(flattened, Chunk.prepend(parallel)) :
      flattened
    if (Chunk.isEmpty(sequential)) {
      return Chunk.reverse(updated)
    }
    causes = sequential
    flattened = updated
  }
  throw new Error(getBugErrorMessage("Cause.flattenCauseLoop"))
}

// -----------------------------------------------------------------------------
// Finding
// -----------------------------------------------------------------------------

/** @internal */
export const find = dual<
  <E, Z>(pf: (cause: Cause.Cause<E>) => Option.Option<Z>) => (self: Cause.Cause<E>) => Option.Option<Z>,
  <E, Z>(self: Cause.Cause<E>, pf: (cause: Cause.Cause<E>) => Option.Option<Z>) => Option.Option<Z>
>(2, <E, Z>(self: Cause.Cause<E>, pf: (cause: Cause.Cause<E>) => Option.Option<Z>) => {
  const stack: Array<Cause.Cause<E>> = [self]
  while (stack.length > 0) {
    const item = stack.pop()!
    const option = pf(item)
    switch (option._tag) {
      case "None": {
        switch (item._tag) {
          case OpCodes.OP_SEQUENTIAL:
          case OpCodes.OP_PARALLEL: {
            stack.push(item.right)
            stack.push(item.left)
            break
          }
        }
        break
      }
      case "Some": {
        return option
      }
    }
  }
  return Option.none()
})

// -----------------------------------------------------------------------------
// Filtering
// -----------------------------------------------------------------------------

/** @internal */
export const filter: {
  <E, EB extends E>(
    refinement: Refinement<Cause.Cause<NoInfer<E>>, Cause.Cause<EB>>
  ): (self: Cause.Cause<E>) => Cause.Cause<EB>
  <E>(predicate: Predicate<Cause.Cause<NoInfer<E>>>): (self: Cause.Cause<E>) => Cause.Cause<E>
  <E, EB extends E>(self: Cause.Cause<E>, refinement: Refinement<Cause.Cause<E>, Cause.Cause<EB>>): Cause.Cause<EB>
  <E>(self: Cause.Cause<E>, predicate: Predicate<Cause.Cause<E>>): Cause.Cause<E>
} = dual(
  2,
  <E>(self: Cause.Cause<E>, predicate: Predicate<Cause.Cause<E>>): Cause.Cause<E> =>
    reduceWithContext(self, void 0, FilterCauseReducer(predicate))
)

// -----------------------------------------------------------------------------
// Evaluation
// -----------------------------------------------------------------------------

/**
 * Takes one step in evaluating a cause, returning a set of causes that fail
 * in parallel and a list of causes that fail sequentially after those causes.
 *
 * @internal
 */
const evaluateCause = (
  self: Cause.Cause<unknown>
): [HashSet.HashSet<unknown>, Chunk.Chunk<Cause.Cause<unknown>>] => {
  let cause: Cause.Cause<unknown> | undefined = self
  const stack: Array<Cause.Cause<unknown>> = []
  let _parallel = HashSet.empty<unknown>()
  let _sequential = Chunk.empty<Cause.Cause<unknown>>()
  while (cause !== undefined) {
    switch (cause._tag) {
      case OpCodes.OP_EMPTY: {
        if (stack.length === 0) {
          return [_parallel, _sequential]
        }
        cause = stack.pop()
        break
      }
      case OpCodes.OP_FAIL: {
        _parallel = HashSet.add(_parallel, Chunk.make(cause._tag, cause.error))
        if (stack.length === 0) {
          return [_parallel, _sequential]
        }
        cause = stack.pop()
        break
      }
      case OpCodes.OP_DIE: {
        _parallel = HashSet.add(_parallel, Chunk.make(cause._tag, cause.defect))
        if (stack.length === 0) {
          return [_parallel, _sequential]
        }
        cause = stack.pop()
        break
      }
      case OpCodes.OP_INTERRUPT: {
        _parallel = HashSet.add(_parallel, Chunk.make(cause._tag, cause.fiberId as unknown))
        if (stack.length === 0) {
          return [_parallel, _sequential]
        }
        cause = stack.pop()
        break
      }
      case OpCodes.OP_SEQUENTIAL: {
        switch (cause.left._tag) {
          case OpCodes.OP_EMPTY: {
            cause = cause.right
            break
          }
          case OpCodes.OP_SEQUENTIAL: {
            cause = sequential(cause.left.left, sequential(cause.left.right, cause.right))
            break
          }
          case OpCodes.OP_PARALLEL: {
            cause = parallel(
              sequential(cause.left.left, cause.right),
              sequential(cause.left.right, cause.right)
            )
            break
          }
          default: {
            _sequential = Chunk.prepend(_sequential, cause.right)
            cause = cause.left
            break
          }
        }
        break
      }
      case OpCodes.OP_PARALLEL: {
        stack.push(cause.right)
        cause = cause.left
        break
      }
    }
  }
  throw new Error(getBugErrorMessage("Cause.evaluateCauseLoop"))
}

// -----------------------------------------------------------------------------
// Reducing
// -----------------------------------------------------------------------------

/** @internal */
const SizeCauseReducer: Cause.CauseReducer<unknown, unknown, number> = {
  emptyCase: () => 0,
  failCase: () => 1,
  dieCase: () => 1,
  interruptCase: () => 1,
  sequentialCase: (_, left, right) => left + right,
  parallelCase: (_, left, right) => left + right
}

/** @internal */
const IsInterruptedOnlyCauseReducer: Cause.CauseReducer<unknown, unknown, boolean> = {
  emptyCase: constTrue,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: constTrue,
  sequentialCase: (_, left, right) => left && right,
  parallelCase: (_, left, right) => left && right
}

/** @internal */
const FilterCauseReducer = <E>(
  predicate: Predicate<Cause.Cause<E>>
): Cause.CauseReducer<unknown, E, Cause.Cause<E>> => ({
  emptyCase: () => empty,
  failCase: (_, error) => fail(error),
  dieCase: (_, defect) => die(defect),
  interruptCase: (_, fiberId) => interrupt(fiberId),
  sequentialCase: (_, left, right) => {
    if (predicate(left)) {
      if (predicate(right)) {
        return sequential(left, right)
      }
      return left
    }
    if (predicate(right)) {
      return right
    }
    return empty
  },
  parallelCase: (_, left, right) => {
    if (predicate(left)) {
      if (predicate(right)) {
        return parallel(left, right)
      }
      return left
    }
    if (predicate(right)) {
      return right
    }
    return empty
  }
})

/** @internal */
type CauseCase = SequentialCase | ParallelCase

const OP_SEQUENTIAL_CASE = "SequentialCase"

const OP_PARALLEL_CASE = "ParallelCase"

/** @internal */
interface SequentialCase {
  readonly _tag: typeof OP_SEQUENTIAL_CASE
}

/** @internal */
interface ParallelCase {
  readonly _tag: typeof OP_PARALLEL_CASE
}

/** @internal */
export const match = dual<
  <Z, E>(
    options: {
      readonly onEmpty: Z
      readonly onFail: (error: E) => Z
      readonly onDie: (defect: unknown) => Z
      readonly onInterrupt: (fiberId: FiberId.FiberId) => Z
      readonly onSequential: (left: Z, right: Z) => Z
      readonly onParallel: (left: Z, right: Z) => Z
    }
  ) => (self: Cause.Cause<E>) => Z,
  <Z, E>(
    self: Cause.Cause<E>,
    options: {
      readonly onEmpty: Z
      readonly onFail: (error: E) => Z
      readonly onDie: (defect: unknown) => Z
      readonly onInterrupt: (fiberId: FiberId.FiberId) => Z
      readonly onSequential: (left: Z, right: Z) => Z
      readonly onParallel: (left: Z, right: Z) => Z
    }
  ) => Z
>(2, (self, { onDie, onEmpty, onFail, onInterrupt, onParallel, onSequential }) => {
  return reduceWithContext(self, void 0, {
    emptyCase: () => onEmpty,
    failCase: (_, error) => onFail(error),
    dieCase: (_, defect) => onDie(defect),
    interruptCase: (_, fiberId) => onInterrupt(fiberId),
    sequentialCase: (_, left, right) => onSequential(left, right),
    parallelCase: (_, left, right) => onParallel(left, right)
  })
})

/** @internal */
export const reduce = dual<
  <Z, E>(zero: Z, pf: (accumulator: Z, cause: Cause.Cause<E>) => Option.Option<Z>) => (self: Cause.Cause<E>) => Z,
  <Z, E>(self: Cause.Cause<E>, zero: Z, pf: (accumulator: Z, cause: Cause.Cause<E>) => Option.Option<Z>) => Z
>(3, <Z, E>(self: Cause.Cause<E>, zero: Z, pf: (accumulator: Z, cause: Cause.Cause<E>) => Option.Option<Z>) => {
  let accumulator: Z = zero
  let cause: Cause.Cause<E> | undefined = self
  const causes: Array<Cause.Cause<E>> = []
  while (cause !== undefined) {
    const option = pf(accumulator, cause)
    accumulator = Option.isSome(option) ? option.value : accumulator
    switch (cause._tag) {
      case OpCodes.OP_SEQUENTIAL: {
        causes.push(cause.right)
        cause = cause.left
        break
      }
      case OpCodes.OP_PARALLEL: {
        causes.push(cause.right)
        cause = cause.left
        break
      }
      default: {
        cause = undefined
        break
      }
    }
    if (cause === undefined && causes.length > 0) {
      cause = causes.pop()!
    }
  }
  return accumulator
})

/** @internal */
export const reduceWithContext = dual<
  <C, E, Z>(context: C, reducer: Cause.CauseReducer<C, E, Z>) => (self: Cause.Cause<E>) => Z,
  <C, E, Z>(self: Cause.Cause<E>, context: C, reducer: Cause.CauseReducer<C, E, Z>) => Z
>(3, <C, E, Z>(self: Cause.Cause<E>, context: C, reducer: Cause.CauseReducer<C, E, Z>) => {
  const input: Array<Cause.Cause<E>> = [self]
  const output: Array<Either.Either<Z, CauseCase>> = []
  while (input.length > 0) {
    const cause = input.pop()!
    switch (cause._tag) {
      case OpCodes.OP_EMPTY: {
        output.push(Either.right(reducer.emptyCase(context)))
        break
      }
      case OpCodes.OP_FAIL: {
        output.push(Either.right(reducer.failCase(context, cause.error)))
        break
      }
      case OpCodes.OP_DIE: {
        output.push(Either.right(reducer.dieCase(context, cause.defect)))
        break
      }
      case OpCodes.OP_INTERRUPT: {
        output.push(Either.right(reducer.interruptCase(context, cause.fiberId)))
        break
      }
      case OpCodes.OP_SEQUENTIAL: {
        input.push(cause.right)
        input.push(cause.left)
        output.push(Either.left({ _tag: OP_SEQUENTIAL_CASE }))
        break
      }
      case OpCodes.OP_PARALLEL: {
        input.push(cause.right)
        input.push(cause.left)
        output.push(Either.left({ _tag: OP_PARALLEL_CASE }))
        break
      }
    }
  }
  const accumulator: Array<Z> = []
  while (output.length > 0) {
    const either = output.pop()!
    switch (either._tag) {
      case "Left": {
        switch (either.left._tag) {
          case OP_SEQUENTIAL_CASE: {
            const left = accumulator.pop()!
            const right = accumulator.pop()!
            const value = reducer.sequentialCase(context, left, right)
            accumulator.push(value)
            break
          }
          case OP_PARALLEL_CASE: {
            const left = accumulator.pop()!
            const right = accumulator.pop()!
            const value = reducer.parallelCase(context, left, right)
            accumulator.push(value)
            break
          }
        }
        break
      }
      case "Right": {
        accumulator.push(either.right)
        break
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error(
      "BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }
  return accumulator.pop()!
})

// -----------------------------------------------------------------------------
// Pretty Printing
// -----------------------------------------------------------------------------

/** @internal */
export const pretty = <E>(cause: Cause.Cause<E>, options?: {
  readonly renderErrorCause?: boolean | undefined
}): string => {
  if (isInterruptedOnly(cause)) {
    return "All fibers interrupted without errors."
  }
  return prettyErrors<E>(cause).map(function(e) {
    if (options?.renderErrorCause !== true || e.cause === undefined) {
      return e.stack
    }
    return `${e.stack} {\n${renderErrorCause(e.cause as PrettyError, "  ")}\n}`
  }).join("\n")
}

const renderErrorCause = (cause: PrettyError, prefix: string) => {
  const lines = cause.stack!.split("\n")
  let stack = `${prefix}[cause]: ${lines[0]}`
  for (let i = 1, len = lines.length; i < len; i++) {
    stack += `\n${prefix}${lines[i]}`
  }
  if (cause.cause) {
    stack += ` {\n${renderErrorCause(cause.cause as PrettyError, `${prefix}  `)}\n${prefix}}`
  }
  return stack
}

/** @internal */
export class PrettyError extends globalThis.Error implements Cause.PrettyError {
  span: undefined | Span = undefined
  constructor(originalError: unknown) {
    const originalErrorIsObject = typeof originalError === "object" && originalError !== null
    const prevLimit = Error.stackTraceLimit
    Error.stackTraceLimit = 1
    super(
      prettyErrorMessage(originalError),
      originalErrorIsObject && "cause" in originalError && typeof originalError.cause !== "undefined"
        ? { cause: new PrettyError(originalError.cause) }
        : undefined
    )
    if (this.message === "") {
      this.message = "An error has occurred"
    }
    Error.stackTraceLimit = prevLimit
    this.name = originalError instanceof Error ? originalError.name : "Error"
    if (originalErrorIsObject) {
      if (spanSymbol in originalError) {
        this.span = originalError[spanSymbol] as Span
      }
      Object.keys(originalError).forEach((key) => {
        if (!(key in this)) {
          // @ts-expect-error
          this[key] = originalError[key]
        }
      })
    }
    this.stack = prettyErrorStack(
      `${this.name}: ${this.message}`,
      originalError instanceof Error && originalError.stack
        ? originalError.stack
        : "",
      this.span
    )
  }
}

/**
 * A utility function for generating human-readable error messages from a generic error of type `unknown`.
 *
 * Rules:
 *
 * 1) If the input `u` is already a string, it's considered a message.
 * 2) If `u` is an Error instance with a message defined, it uses the message.
 * 3) If `u` has a user-defined `toString()` method, it uses that method.
 * 4) Otherwise, it uses `Inspectable.stringifyCircular` to produce a string representation and uses it as the error message,
 *   with "Error" added as a prefix.
 *
 * @internal
 */
export const prettyErrorMessage = (u: unknown): string => {
  // 1)
  if (typeof u === "string") {
    return u
  }
  // 2)
  if (typeof u === "object" && u !== null && u instanceof Error) {
    return u.message
  }
  // 3)
  try {
    if (
      hasProperty(u, "toString") &&
      isFunction(u["toString"]) &&
      u["toString"] !== Object.prototype.toString &&
      u["toString"] !== globalThis.Array.prototype.toString
    ) {
      return u["toString"]()
    }
  } catch {
    // something's off, rollback to json
  }
  // 4)
  return stringifyCircular(u)
}

const locationRegex = /\((.*)\)/g

/** @internal */
export const spanToTrace = globalValue("effect/Tracer/spanToTrace", () => new WeakMap())

const prettyErrorStack = (message: string, stack: string, span?: Span | undefined): string => {
  const out: Array<string> = [message]
  const lines = stack.startsWith(message) ? stack.slice(message.length).split("\n") : stack.split("\n")

  for (let i = 1; i < lines.length; i++) {
    if (lines[i].includes(" at new BaseEffectError") || lines[i].includes(" at new YieldableError")) {
      i++
      continue
    }
    if (lines[i].includes("Generator.next")) {
      break
    }
    if (lines[i].includes("effect_internal_function")) {
      break
    }
    out.push(
      lines[i]
        .replace(/at .*effect_instruction_i.*\((.*)\)/, "at $1")
        .replace(/EffectPrimitive\.\w+/, "<anonymous>")
    )
  }

  if (span) {
    let current: Span | AnySpan | undefined = span
    let i = 0
    while (current && current._tag === "Span" && i < 10) {
      const stackFn = spanToTrace.get(current)
      if (typeof stackFn === "function") {
        const stack = stackFn()
        if (typeof stack === "string") {
          const locationMatchAll = stack.matchAll(locationRegex)
          let match = false
          for (const [, location] of locationMatchAll) {
            match = true
            out.push(`    at ${current.name} (${location})`)
          }
          if (!match) {
            out.push(`    at ${current.name} (${stack.replace(/^at /, "")})`)
          }
        } else {
          out.push(`    at ${current.name}`)
        }
      } else {
        out.push(`    at ${current.name}`)
      }
      current = Option.getOrUndefined(current.parent)
      i++
    }
  }

  return out.join("\n")
}

/** @internal */
export const spanSymbol = Symbol.for("effect/SpanAnnotation")

/** @internal */
export const prettyErrors = <E>(cause: Cause.Cause<E>): Array<PrettyError> =>
  reduceWithContext(cause, void 0, {
    emptyCase: (): Array<PrettyError> => [],
    dieCase: (_, unknownError) => {
      return [new PrettyError(unknownError)]
    },
    failCase: (_, error) => {
      return [new PrettyError(error)]
    },
    interruptCase: () => [],
    parallelCase: (_, l, r) => [...l, ...r],
    sequentialCase: (_, l, r) => [...l, ...r]
  })
