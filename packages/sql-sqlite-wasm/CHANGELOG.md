# @effect/sql-sqlite-wasm

## 0.45.0

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.54.0
  - @effect/sql@0.44.0

## 0.44.0

### Patch Changes

- Updated dependencies [[`40c3c87`](https://github.com/Effect-TS/effect/commit/40c3c875f724264312b43002859c82bed9ad0df9), [`ed2c74a`](https://github.com/Effect-TS/effect/commit/ed2c74ae8fa4ea0dd06ea84a3e58cd32e6916104), [`073a1b8`](https://github.com/Effect-TS/effect/commit/073a1b8be5dbfa87454393ee7346f5bc36a4fd63), [`f382e99`](https://github.com/Effect-TS/effect/commit/f382e99e409838a879246250fc3994b9bf5b3c2c), [`e8c7ba5`](https://github.com/Effect-TS/effect/commit/e8c7ba5fd3eb0c3ae3039fc24c09d69391987989), [`7e10415`](https://github.com/Effect-TS/effect/commit/7e1041599ade25103428703f5d2dfd7378a09636), [`e9bdece`](https://github.com/Effect-TS/effect/commit/e9bdececdc24f60a246be5055eca71a0d49ea7f2), [`8d95eb0`](https://github.com/Effect-TS/effect/commit/8d95eb0356b1d1736204836c275d201a547d208d)]:
  - effect@3.17.0
  - @effect/experimental@0.53.0
  - @effect/sql@0.43.0

## 0.43.0

### Minor Changes

- [#5192](https://github.com/Effect-TS/effect/pull/5192) [`17a5ea8`](https://github.com/Effect-TS/effect/commit/17a5ea8fa29785fe6e4c9480f2a2e9c8c59f3f38) Thanks @nikelborm! - Updated deprecated OTel Resource attributes names and values.

  Many of the attributes have undergone the process of deprecation not once, but twice. Most of the constants holding attribute names have been renamed. These are minor changes.

  Additionally, there were numerous changes to the attribute keys themselves. These changes can be considered major.

  In the `@opentelemetry/semantic-conventions` package, new attributes having ongoing discussion about them are going through a process called incubation, until a consensus about their necessity and form is reached. Otel team [recommends](https://github.com/open-telemetry/opentelemetry-js/blob/main/semantic-conventions/README.md#unstable-semconv) devs to copy them directly into their code. Luckily, it's not necessary because all of the new attribute names and values came out of this process (some of them were changed again) and are now considered stable.

  ## Reasoning for minor version bump

  | Package                    | Major attribute changes                                                       | Major value changes               |
  | -------------------------- | ----------------------------------------------------------------------------- | --------------------------------- |
  | Clickhouse client          | `db.system` -> `db.system.name` <br/> `db.name` -> `db.namespace`             |                                   |
  | MsSQL client               | `db.system` -> `db.system.name` <br/> `db.name` -> `db.namespace`             | `mssql` -> `microsoft.sql_server` |
  | MySQL client               | `db.system` -> `db.system.name` <br/> `db.name` -> `db.namespace`             |                                   |
  | Pg client                  | `db.system` -> `db.system.name` <br/> `db.name` -> `db.namespace`             |                                   |
  | Bun SQLite client          | `db.system` -> `db.system.name`                                               |                                   |
  | Node SQLite client         | `db.system` -> `db.system.name`                                               |                                   |
  | React.Native SQLite client | `db.system` -> `db.system.name`                                               |                                   |
  | Wasm SQLite client         | `db.system` -> `db.system.name`                                               |                                   |
  | SQLite Do client           | `db.system` -> `db.system.name`                                               |                                   |
  | LibSQL client              | `db.system` -> `db.system.name`                                               |                                   |
  | D1 client                  | `db.system` -> `db.system.name`                                               |                                   |
  | Kysely client              | `db.statement` -> `db.query.text`                                             |                                   |
  | @effect/sql                | `db.statement` -> `db.query.text` <br/> `db.operation` -> `db.operation.name` |                                   |

### Patch Changes

- Updated dependencies [[`f5dfabf`](https://github.com/Effect-TS/effect/commit/f5dfabf51ba481a4468c1509c537314978ef6cec), [`17a5ea8`](https://github.com/Effect-TS/effect/commit/17a5ea8fa29785fe6e4c9480f2a2e9c8c59f3f38), [`d25f22b`](https://github.com/Effect-TS/effect/commit/d25f22be7598abe977caf6cdac3b0dd78b438c48)]:
  - effect@3.16.14
  - @effect/sql@0.42.0
  - @effect/experimental@0.52.1

## 0.42.0

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.52.0
  - @effect/sql@0.41.0

## 0.41.14

### Patch Changes

- Updated dependencies [[`c1c05a8`](https://github.com/Effect-TS/effect/commit/c1c05a8242fb5df7445b4a12387a60eac7726eb7), [`81fe4a2`](https://github.com/Effect-TS/effect/commit/81fe4a2c81d5e30e180a60e68c52016a27b350db)]:
  - effect@3.16.13
  - @effect/experimental@0.51.14
  - @effect/sql@0.40.14

## 0.41.13

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.13
  - @effect/sql@0.40.13

## 0.41.12

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.12
  - @effect/sql@0.40.12

## 0.41.11

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.11
  - @effect/sql@0.40.11

## 0.41.10

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.10
  - @effect/sql@0.40.10

## 0.41.9

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.9
  - @effect/sql@0.40.9

## 0.41.8

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.8
  - @effect/sql@0.40.8

## 0.41.7

### Patch Changes

- Updated dependencies [[`905da99`](https://github.com/Effect-TS/effect/commit/905da996aad665057b4ca6dba1a4af44fb8835bd)]:
  - effect@3.16.12
  - @effect/experimental@0.51.7
  - @effect/sql@0.40.7

## 0.41.6

### Patch Changes

- Updated dependencies [[`96c1292`](https://github.com/Effect-TS/effect/commit/96c129262835410b311a51d0bf7f58b8f6fc9a12)]:
  - @effect/experimental@0.51.6
  - @effect/sql@0.40.6

## 0.41.5

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.5
  - @effect/sql@0.40.5

## 0.41.4

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.4
  - @effect/sql@0.40.4

## 0.41.3

### Patch Changes

- Updated dependencies [[`46c3216`](https://github.com/Effect-TS/effect/commit/46c321657d93393506278327418e36f8e7a77f86)]:
  - @effect/sql@0.40.3
  - @effect/experimental@0.51.3

## 0.41.2

### Patch Changes

- Updated dependencies [[`99590a6`](https://github.com/Effect-TS/effect/commit/99590a6ca9128eb1ede265b6670b655311995614), [`6c3e24c`](https://github.com/Effect-TS/effect/commit/6c3e24c2308f7d4a29b8f4270ab81bca22ac6bb4)]:
  - effect@3.16.11
  - @effect/experimental@0.51.2
  - @effect/sql@0.40.2

## 0.41.1

### Patch Changes

- Updated dependencies [[`faad30e`](https://github.com/Effect-TS/effect/commit/faad30ec8742916be59f9db642d0fc98225b636c)]:
  - effect@3.16.10
  - @effect/experimental@0.51.1
  - @effect/sql@0.40.1

## 0.41.0

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.51.0
  - @effect/sql@0.40.0

## 0.40.0

### Patch Changes

- Updated dependencies [[`5137c70`](https://github.com/Effect-TS/effect/commit/5137c703461d8d3b363c112140a6e7f798241d07), [`c23d25c`](https://github.com/Effect-TS/effect/commit/c23d25c3e7c541f1f63b28484d8c461d86c67e99)]:
  - effect@3.16.9
  - @effect/experimental@0.50.0
  - @effect/sql@0.39.0

## 0.39.2

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.49.2
  - @effect/sql@0.38.2

## 0.39.1

### Patch Changes

- Updated dependencies [[`8cb98d5`](https://github.com/Effect-TS/effect/commit/8cb98d53e68330228287ce2a2e0d8a4c86bcab3b), [`db2dd3c`](https://github.com/Effect-TS/effect/commit/db2dd3c3a8a77d791eae19e66153527e1cde4e6e)]:
  - effect@3.16.8
  - @effect/experimental@0.49.1
  - @effect/sql@0.38.1

## 0.39.0

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.49.0
  - @effect/sql@0.38.0

## 0.38.12

### Patch Changes

- Updated dependencies [[`1bb0d8a`](https://github.com/Effect-TS/effect/commit/1bb0d8ab96782e99434356266b38251554ea0294)]:
  - effect@3.16.7
  - @effect/experimental@0.48.12
  - @effect/sql@0.37.12

## 0.38.11

### Patch Changes

- Updated dependencies [[`a5f7595`](https://github.com/Effect-TS/effect/commit/a5f75956ef9a15a83c416517ef493f0ee2f5ee8a), [`a02470c`](https://github.com/Effect-TS/effect/commit/a02470c75579e91525a25adb3f21b3650d042fdd), [`f891d45`](https://github.com/Effect-TS/effect/commit/f891d45adffdafd3f94a2eca23faa354e3a409a8)]:
  - effect@3.16.6
  - @effect/experimental@0.48.11
  - @effect/sql@0.37.11

## 0.38.10

### Patch Changes

- Updated dependencies [[`bf418ef`](https://github.com/Effect-TS/effect/commit/bf418ef14a0f2ec965535793d5cea8fa8ba177ac)]:
  - effect@3.16.5
  - @effect/experimental@0.48.10
  - @effect/sql@0.37.10

## 0.38.9

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.48.9
  - @effect/sql@0.37.9

## 0.38.8

### Patch Changes

- Updated dependencies [[`74ab9a0`](https://github.com/Effect-TS/effect/commit/74ab9a0a9e16d6e019369d256e1e24175c8bc3f3), [`770008e`](https://github.com/Effect-TS/effect/commit/770008eca3aad2899a2ed951236e575793294b28)]:
  - effect@3.16.4
  - @effect/experimental@0.48.8
  - @effect/sql@0.37.8

## 0.38.7

### Patch Changes

- Updated dependencies [[`a2d57c9`](https://github.com/Effect-TS/effect/commit/a2d57c9ac596445009ca12859b78e00e5d89b936)]:
  - @effect/experimental@0.48.7
  - @effect/sql@0.37.7

## 0.38.6

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.48.6
  - @effect/sql@0.37.6

## 0.38.5

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.48.5
  - @effect/sql@0.37.5

## 0.38.4

### Patch Changes

- Updated dependencies [[`87722fc`](https://github.com/Effect-TS/effect/commit/87722fce693a9b49284bbddbf82d30714c688261), [`36217ee`](https://github.com/Effect-TS/effect/commit/36217eeb1337edd9ac3f9a635b80a6385d22ae8f)]:
  - effect@3.16.3
  - @effect/experimental@0.48.4
  - @effect/sql@0.37.4

## 0.38.3

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.48.3
  - @effect/sql@0.37.3

## 0.38.2

### Patch Changes

- Updated dependencies [[`0ddf148`](https://github.com/Effect-TS/effect/commit/0ddf148a247aa87af043d276b8453a714a400897)]:
  - effect@3.16.2
  - @effect/experimental@0.48.2
  - @effect/sql@0.37.2

## 0.38.1

### Patch Changes

- Updated dependencies [[`71174d0`](https://github.com/Effect-TS/effect/commit/71174d09691314a9b6b66189e456fd21e3eb6543), [`d615e6e`](https://github.com/Effect-TS/effect/commit/d615e6e5b944f6fd5e627e31752c7ca7e4e1c17d)]:
  - effect@3.16.1
  - @effect/experimental@0.48.1
  - @effect/sql@0.37.1

## 0.38.0

### Patch Changes

- Updated dependencies [[`ee0bd5d`](https://github.com/Effect-TS/effect/commit/ee0bd5d24864752c54cb359f67a67dd903971ec4), [`5189800`](https://github.com/Effect-TS/effect/commit/51898004e11766b8cf6d95e960b636f6d5db79ec), [`58bfeaa`](https://github.com/Effect-TS/effect/commit/58bfeaa64ded8c88f772b184311c0c0dbac10960), [`194d748`](https://github.com/Effect-TS/effect/commit/194d7486943f56f3267ef415395ac220a4b3e634), [`918c9ea`](https://github.com/Effect-TS/effect/commit/918c9ea1a57facb154f0fb26792021f337054dee), [`9198e6f`](https://github.com/Effect-TS/effect/commit/9198e6fcc1a3ff4fefb3363004de558d8de01f40), [`2a370bf`](https://github.com/Effect-TS/effect/commit/2a370bf625fdeede5659721468eb0d527e403279), [`58ccb91`](https://github.com/Effect-TS/effect/commit/58ccb91328c8df5d49808b673738bc09df355201), [`fd47834`](https://github.com/Effect-TS/effect/commit/fd478348203fa89462b0a1d067ce4de034353df4)]:
  - effect@3.16.0
  - @effect/experimental@0.48.0
  - @effect/sql@0.37.0

## 0.37.0

### Patch Changes

- Updated dependencies [[`cc5bb2b`](https://github.com/Effect-TS/effect/commit/cc5bb2b918a9450a975f702dabcea891bda382cb)]:
  - effect@3.15.5
  - @effect/experimental@0.47.0
  - @effect/sql@0.36.0

## 0.36.8

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.46.8
  - @effect/sql@0.35.8

## 0.36.7

### Patch Changes

- Updated dependencies [[`f570554`](https://github.com/Effect-TS/effect/commit/f57055459524587b041340577dad85476bb35f81), [`78047e8`](https://github.com/Effect-TS/effect/commit/78047e8dfc8005b66f87afe50bb95981fea51561)]:
  - effect@3.15.4
  - @effect/experimental@0.46.7
  - @effect/sql@0.35.7

## 0.36.6

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.46.6
  - @effect/sql@0.35.6

## 0.36.5

### Patch Changes

- Updated dependencies [[`4577f54`](https://github.com/Effect-TS/effect/commit/4577f548d67273e576cdde423bdd34a4b910766a)]:
  - effect@3.15.3
  - @effect/experimental@0.46.5
  - @effect/sql@0.35.5

## 0.36.4

### Patch Changes

- Updated dependencies [[`89657ac`](https://github.com/Effect-TS/effect/commit/89657ac2fbda9ba38ac2962ce96949e536a464f9)]:
  - @effect/sql@0.35.4
  - @effect/experimental@0.46.4

## 0.36.3

### Patch Changes

- Updated dependencies [[`b8722b8`](https://github.com/Effect-TS/effect/commit/b8722b817e2306fe8c8245f3f9e32d85b824b961)]:
  - effect@3.15.2
  - @effect/experimental@0.46.3
  - @effect/sql@0.35.3

## 0.36.2

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.46.2
  - @effect/sql@0.35.2

## 0.36.1

### Patch Changes

- Updated dependencies [[`787ce70`](https://github.com/Effect-TS/effect/commit/787ce7042e35b657963473c6efe47752868cd811), [`1269641`](https://github.com/Effect-TS/effect/commit/1269641a99ae43069f7648ff79ffe8729b54b348), [`1269641`](https://github.com/Effect-TS/effect/commit/1269641a99ae43069f7648ff79ffe8729b54b348)]:
  - effect@3.15.1
  - @effect/experimental@0.46.1
  - @effect/sql@0.35.1

## 0.36.0

### Patch Changes

- Updated dependencies [[`c654595`](https://github.com/Effect-TS/effect/commit/c65459587b51da140b78098e81fdbfece65d53e2), [`d9f5dea`](https://github.com/Effect-TS/effect/commit/d9f5deae0f02f5de2b9fcb1cca8b142ba4bc2bba), [`49aa723`](https://github.com/Effect-TS/effect/commit/49aa7236a15e13f818c86edbca08c4af67c8dfaf), [`74c14d0`](https://github.com/Effect-TS/effect/commit/74c14d01d0cb48cf517a1b6e29a373a96ed0ff5b), [`e4f49b6`](https://github.com/Effect-TS/effect/commit/e4f49b66857e01b74ab6a9a0bc7132f44cd04cbb), [`6f02224`](https://github.com/Effect-TS/effect/commit/6f02224b3fc46a682ad2defb1a260841956c6780), [`1dcfd41`](https://github.com/Effect-TS/effect/commit/1dcfd41ff96abd706901293a00c1893cb29dd8fd), [`b21ab16`](https://github.com/Effect-TS/effect/commit/b21ab16b6f773e7ec4369db4e752c35e719f7870), [`fcf1822`](https://github.com/Effect-TS/effect/commit/fcf1822f98fcda60351d64e9d2c2c13563d7e6db), [`0061dd1`](https://github.com/Effect-TS/effect/commit/0061dd140740165e91569a684cce27a77b23229e), [`8421e6e`](https://github.com/Effect-TS/effect/commit/8421e6e49332bca8f96f482dfd48680e238b3a89), [`fa10f56`](https://github.com/Effect-TS/effect/commit/fa10f56b96bd9af070ba99ebc3279aa93954261e)]:
  - effect@3.15.0
  - @effect/experimental@0.46.0
  - @effect/sql@0.35.0

## 0.35.1

### Patch Changes

- Updated dependencies [[`24a9ebb`](https://github.com/Effect-TS/effect/commit/24a9ebbb5af598f0bfd6ecc45307e528043fe011)]:
  - effect@3.14.22
  - @effect/experimental@0.45.1
  - @effect/sql@0.34.1

## 0.35.0

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.45.0
  - @effect/sql@0.34.0

## 0.34.21

### Patch Changes

- Updated dependencies [[`2f3b7d4`](https://github.com/Effect-TS/effect/commit/2f3b7d4e1fa1ef8790b0ca4da22eb88872ee31df)]:
  - effect@3.14.21
  - @effect/experimental@0.44.21
  - @effect/sql@0.33.21

## 0.34.20

### Patch Changes

- Updated dependencies [[`17e2f30`](https://github.com/Effect-TS/effect/commit/17e2f3091408cf0fca9414d4af3bdf7b2765b378)]:
  - effect@3.14.20
  - @effect/experimental@0.44.20
  - @effect/sql@0.33.20

## 0.34.19

### Patch Changes

- Updated dependencies [[`056a910`](https://github.com/Effect-TS/effect/commit/056a910d0a0b8b00b0dc9df4a070466b2b5c2f6c), [`3273d57`](https://github.com/Effect-TS/effect/commit/3273d572c2b3175a842677f19efeea4cd65ab016)]:
  - effect@3.14.19
  - @effect/experimental@0.44.19
  - @effect/sql@0.33.19

## 0.34.18

### Patch Changes

- Updated dependencies [[`b1164d4`](https://github.com/Effect-TS/effect/commit/b1164d49a1dfdf299e9971367b6fc6be4df0ddff)]:
  - effect@3.14.18
  - @effect/experimental@0.44.18
  - @effect/sql@0.33.18

## 0.34.17

### Patch Changes

- Updated dependencies [[`0b54681`](https://github.com/Effect-TS/effect/commit/0b54681cd89245e211d8f49272be0f1bf2f81813), [`41a59d5`](https://github.com/Effect-TS/effect/commit/41a59d5916a296b12b0d5ead9e859e05f40b4cce)]:
  - effect@3.14.17
  - @effect/experimental@0.44.17
  - @effect/sql@0.33.17

## 0.34.16

### Patch Changes

- Updated dependencies [[`ee14444`](https://github.com/Effect-TS/effect/commit/ee144441021ec77039e43396eaf90714687bb495)]:
  - effect@3.14.16
  - @effect/experimental@0.44.16
  - @effect/sql@0.33.16

## 0.34.15

### Patch Changes

- Updated dependencies [[`239cc99`](https://github.com/Effect-TS/effect/commit/239cc995ce645946210a3c3d2cb52bd3547c0687), [`8b6c947`](https://github.com/Effect-TS/effect/commit/8b6c947eaa8e45a67ecb3c37d45cd27f3e41d165), [`c50a63b`](https://github.com/Effect-TS/effect/commit/c50a63bbecb9f560b9cae349c447eed877d1b9b6)]:
  - effect@3.14.15
  - @effect/experimental@0.44.15
  - @effect/sql@0.33.15

## 0.34.14

### Patch Changes

- Updated dependencies [[`6ed8d15`](https://github.com/Effect-TS/effect/commit/6ed8d1589beb181d30abc79afebdaabc1d101538)]:
  - effect@3.14.14
  - @effect/experimental@0.44.14
  - @effect/sql@0.33.14

## 0.34.13

### Patch Changes

- Updated dependencies [[`ee77788`](https://github.com/Effect-TS/effect/commit/ee77788747e7ebbde6bfa88256cde49dbbad3608), [`5fce6ba`](https://github.com/Effect-TS/effect/commit/5fce6ba19c3cc63cc0104e737e581ad989dedbf0), [`570e45f`](https://github.com/Effect-TS/effect/commit/570e45f8cb936e42ec48f67f21bb2b7252f36c0c)]:
  - effect@3.14.13
  - @effect/experimental@0.44.13
  - @effect/sql@0.33.13

## 0.34.12

### Patch Changes

- Updated dependencies [[`c2ad9ee`](https://github.com/Effect-TS/effect/commit/c2ad9ee9f3c4c743390edf35ed9e85a20be33811), [`9c68654`](https://github.com/Effect-TS/effect/commit/9c686542b6eb3ea188cb70673ef2e41223633e89)]:
  - effect@3.14.12
  - @effect/experimental@0.44.12
  - @effect/sql@0.33.12

## 0.34.11

### Patch Changes

- Updated dependencies [[`e536127`](https://github.com/Effect-TS/effect/commit/e536127c1e6f2fb3a542c73ae919435a629a346b)]:
  - effect@3.14.11
  - @effect/experimental@0.44.11
  - @effect/sql@0.33.11

## 0.34.10

### Patch Changes

- Updated dependencies [[`bc7efa3`](https://github.com/Effect-TS/effect/commit/bc7efa3b031bb25e1ed3c8f2d3fb5e8da166cadc)]:
  - effect@3.14.10
  - @effect/experimental@0.44.10
  - @effect/sql@0.33.10

## 0.34.9

### Patch Changes

- Updated dependencies [[`d78249f`](https://github.com/Effect-TS/effect/commit/d78249f0b67f63cf4baf806ff090cba33293daf0)]:
  - effect@3.14.9
  - @effect/experimental@0.44.9
  - @effect/sql@0.33.9

## 0.34.8

### Patch Changes

- Updated dependencies [[`b3a2d32`](https://github.com/Effect-TS/effect/commit/b3a2d32772e6f7f20eacf2e18128e99324c4d378)]:
  - effect@3.14.8
  - @effect/experimental@0.44.8
  - @effect/sql@0.33.8

## 0.34.7

### Patch Changes

- Updated dependencies [[`b542a4b`](https://github.com/Effect-TS/effect/commit/b542a4bf195be0c9af1523e1ba96c953decc4d25)]:
  - effect@3.14.7
  - @effect/experimental@0.44.7
  - @effect/sql@0.33.7

## 0.34.6

### Patch Changes

- Updated dependencies [[`47618c1`](https://github.com/Effect-TS/effect/commit/47618c1ad84ebcc5a51133a3fff5aa5012d49d45), [`6077882`](https://github.com/Effect-TS/effect/commit/60778824a4794336c33807801f813f8751d1c7e4)]:
  - effect@3.14.6
  - @effect/experimental@0.44.6
  - @effect/sql@0.33.6

## 0.34.5

### Patch Changes

- Updated dependencies [[`40dbfef`](https://github.com/Effect-TS/effect/commit/40dbfeff239b6e567706752114f31b2fce7de4e3), [`5a5ebdd`](https://github.com/Effect-TS/effect/commit/5a5ebdddfaddd259538b4599a6676281faca778e)]:
  - effect@3.14.5
  - @effect/experimental@0.44.5
  - @effect/sql@0.33.5

## 0.34.4

### Patch Changes

- Updated dependencies [[`e4ba2c6`](https://github.com/Effect-TS/effect/commit/e4ba2c66a878e81b5e295d6d49aaf724b80a28ef)]:
  - effect@3.14.4
  - @effect/experimental@0.44.4
  - @effect/sql@0.33.4

## 0.34.3

### Patch Changes

- Updated dependencies [[`37aa8e1`](https://github.com/Effect-TS/effect/commit/37aa8e137725a902e70cd1e468ea98b873aa5056), [`34f03d6`](https://github.com/Effect-TS/effect/commit/34f03d66875f21f266f102223a03cd14c2ed6ea6)]:
  - effect@3.14.3
  - @effect/experimental@0.44.3
  - @effect/sql@0.33.3

## 0.34.2

### Patch Changes

- Updated dependencies [[`f87991b`](https://github.com/Effect-TS/effect/commit/f87991b6d8a2edfaf90b01cebda4b466992ae865), [`f87991b`](https://github.com/Effect-TS/effect/commit/f87991b6d8a2edfaf90b01cebda4b466992ae865), [`0a3e3e1`](https://github.com/Effect-TS/effect/commit/0a3e3e18eea5e0d1882f1a6c906198e6ef226a41)]:
  - effect@3.14.2
  - @effect/experimental@0.44.2
  - @effect/sql@0.33.2

## 0.34.1

### Patch Changes

- Updated dependencies [[`4a274fe`](https://github.com/Effect-TS/effect/commit/4a274fe9f623182b6b902827e0e83bd89ca3b05c)]:
  - effect@3.14.1
  - @effect/experimental@0.44.1
  - @effect/sql@0.33.1

## 0.34.0

### Patch Changes

- Updated dependencies [[`1f47e4e`](https://github.com/Effect-TS/effect/commit/1f47e4e12546ab691b29bfb7b5128bb17b93baa5), [`26dd75f`](https://github.com/Effect-TS/effect/commit/26dd75f276a0d8a63eab313bd5a167d5072c9780), [`aba2d1d`](https://github.com/Effect-TS/effect/commit/aba2d1d831ea149481bd4dd755528c0afa8239ce), [`3131f8f`](https://github.com/Effect-TS/effect/commit/3131f8fd12ba9eb31b90fa2f42bf88b12309133c), [`04dff2d`](https://github.com/Effect-TS/effect/commit/04dff2d01ac68c260f29a6d4743381825c353c86), [`aba2d1d`](https://github.com/Effect-TS/effect/commit/aba2d1d831ea149481bd4dd755528c0afa8239ce), [`c7fac0c`](https://github.com/Effect-TS/effect/commit/c7fac0cd7eadcd5cc0c3a987051c5b57ad271638), [`aba2d1d`](https://github.com/Effect-TS/effect/commit/aba2d1d831ea149481bd4dd755528c0afa8239ce), [`ffaa3f3`](https://github.com/Effect-TS/effect/commit/ffaa3f3969df26610fcc02ad537340641d44e803), [`ab957c1`](https://github.com/Effect-TS/effect/commit/ab957c1fee714868f56c7ab4e802b9d449e9b666), [`35db9ce`](https://github.com/Effect-TS/effect/commit/35db9ce228f1416c8abacc6dc9c36fbd0f33ef0f), [`aba2d1d`](https://github.com/Effect-TS/effect/commit/aba2d1d831ea149481bd4dd755528c0afa8239ce), [`cf77ea9`](https://github.com/Effect-TS/effect/commit/cf77ea9ab4fc89e66a43f682a9926ccdee6c57ed), [`26dd75f`](https://github.com/Effect-TS/effect/commit/26dd75f276a0d8a63eab313bd5a167d5072c9780), [`baaab60`](https://github.com/Effect-TS/effect/commit/baaab60b737f35dfab8e4a21bce28a195d19e899)]:
  - effect@3.14.0
  - @effect/experimental@0.44.0
  - @effect/sql@0.33.0

## 0.33.4

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.43.4
  - @effect/sql@0.32.4

## 0.33.3

### Patch Changes

- Updated dependencies [[`0c4803f`](https://github.com/Effect-TS/effect/commit/0c4803fcc69262d11a97ce49d0e9b4288df0651f), [`6f65ac4`](https://github.com/Effect-TS/effect/commit/6f65ac4eac1489cd6ea390e18b0908670722adad)]:
  - effect@3.13.12
  - @effect/experimental@0.43.3
  - @effect/sql@0.32.3

## 0.33.2

### Patch Changes

- Updated dependencies [[`fad8cca`](https://github.com/Effect-TS/effect/commit/fad8cca9bbfcc2eaeb44b97c15dbe0a1eda75315), [`4296293`](https://github.com/Effect-TS/effect/commit/4296293049414d0cf2d915a26c552b09f946b9a0), [`9c241ab`](https://github.com/Effect-TS/effect/commit/9c241abe47ccf7a5257b98a4a64a63054a12741d), [`082b0c1`](https://github.com/Effect-TS/effect/commit/082b0c1b9f4252bcdd69608f2e4a9226f953ac3f), [`be12983`](https://github.com/Effect-TS/effect/commit/be12983bc7e7537b41cd8910fc4eb7d1da56ab07), [`de88127`](https://github.com/Effect-TS/effect/commit/de88127a5a5906ccece98af74787b5ae0e65e431)]:
  - effect@3.13.11
  - @effect/experimental@0.43.2
  - @effect/sql@0.32.2

## 0.33.1

### Patch Changes

- Updated dependencies [[`527c964`](https://github.com/Effect-TS/effect/commit/527c9645229f5be9714a7e60a38a9e753c4bbfb1)]:
  - effect@3.13.10
  - @effect/experimental@0.43.1
  - @effect/sql@0.32.1

## 0.33.0

### Patch Changes

- Updated dependencies [[`2976e52`](https://github.com/Effect-TS/effect/commit/2976e52538d9dc9ffdcbc84d4ac748cff9305971)]:
  - effect@3.13.9
  - @effect/experimental@0.43.0
  - @effect/sql@0.32.0

## 0.32.1

### Patch Changes

- Updated dependencies [[`c65d336`](https://github.com/Effect-TS/effect/commit/c65d3362d07ec815ff3b46278314e8a31706ddc2), [`22d2ebb`](https://github.com/Effect-TS/effect/commit/22d2ebb4b11f5a44351a4736e65da391a3b647d0)]:
  - effect@3.13.8
  - @effect/experimental@0.42.1
  - @effect/sql@0.31.1

## 0.32.0

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.42.0
  - @effect/sql@0.31.0

## 0.31.7

### Patch Changes

- Updated dependencies [[`840cc73`](https://github.com/Effect-TS/effect/commit/840cc7329908db7ca693ef47b07d4f845c29cadd), [`9bf8a74`](https://github.com/Effect-TS/effect/commit/9bf8a74b967f18d931743dd5196af326c9118e9c), [`87ba23c`](https://github.com/Effect-TS/effect/commit/87ba23c41c193503ed0c612b0d32d0b253794c64)]:
  - effect@3.13.7
  - @effect/experimental@0.41.7
  - @effect/sql@0.30.7

## 0.31.6

### Patch Changes

- Updated dependencies [[`3154ce4`](https://github.com/Effect-TS/effect/commit/3154ce4692fa18b804982158d3c4c8a8a5fae386)]:
  - effect@3.13.6
  - @effect/experimental@0.41.6
  - @effect/sql@0.30.6

## 0.31.5

### Patch Changes

- Updated dependencies [[`367bb35`](https://github.com/Effect-TS/effect/commit/367bb35f4c2a254e1fb211d96db2474a7aed9020), [`6cf11c3`](https://github.com/Effect-TS/effect/commit/6cf11c3a75773ceec2877c85ddc760f381f0866d), [`a0acec8`](https://github.com/Effect-TS/effect/commit/a0acec851f72e19466363d24b9cc218acd00006a)]:
  - effect@3.13.5
  - @effect/experimental@0.41.5
  - @effect/sql@0.30.5

## 0.31.4

### Patch Changes

- Updated dependencies [[`17d9e89`](https://github.com/Effect-TS/effect/commit/17d9e89f9851663bdbb6c1e685601d97806114a4)]:
  - effect@3.13.4
  - @effect/experimental@0.41.4
  - @effect/sql@0.30.4

## 0.31.3

### Patch Changes

- Updated dependencies [[`cc5588d`](https://github.com/Effect-TS/effect/commit/cc5588df07f9103513547cb429ce041b9436a8bd), [`623c8cd`](https://github.com/Effect-TS/effect/commit/623c8cd053ed6ee3d353aaa8778d484670fca2bb), [`00b4eb1`](https://github.com/Effect-TS/effect/commit/00b4eb1ece12a16e222e6220965bb4024d6752ac), [`f2aee98`](https://github.com/Effect-TS/effect/commit/f2aee989b0a600900ce83e7f460d02908620c80f), [`fb798eb`](https://github.com/Effect-TS/effect/commit/fb798eb9061f1191badc017d1aa649360254da20), [`2251b15`](https://github.com/Effect-TS/effect/commit/2251b1528810bb695b37ce388b653cec0c5bf80c), [`2e15c1e`](https://github.com/Effect-TS/effect/commit/2e15c1e33648add0b29fe274fbcb7294b7515085), [`a4979db`](https://github.com/Effect-TS/effect/commit/a4979db021aef16e731be64df196b72088fc4376), [`b74255a`](https://github.com/Effect-TS/effect/commit/b74255a304ad49d60bedb1a260fd697f370af27a), [`d7f6a5c`](https://github.com/Effect-TS/effect/commit/d7f6a5c7d26c1963dcd864ca62360d20d08c7b49), [`9dd8979`](https://github.com/Effect-TS/effect/commit/9dd8979e940915b1cc1b1f264f3d019c77a65a02), [`477b488`](https://github.com/Effect-TS/effect/commit/477b488284f47c5469d7fba3e4065fb7e3b6556e), [`10932cb`](https://github.com/Effect-TS/effect/commit/10932cbf58fc721ada631cebec42f773ce96d3cc), [`9f6c784`](https://github.com/Effect-TS/effect/commit/9f6c78468b3b5e9ebfc38ffdfb70702901ee977b), [`2c639ec`](https://github.com/Effect-TS/effect/commit/2c639ecee332de4266e36022c989c35ae4e02105), [`886aaa8`](https://github.com/Effect-TS/effect/commit/886aaa81e06dfd3cd9391e8ea987d8cd5ada1124)]:
  - effect@3.13.3
  - @effect/experimental@0.41.3
  - @effect/sql@0.30.3

## 0.31.2

### Patch Changes

- Updated dependencies [[`31be72a`](https://github.com/Effect-TS/effect/commit/31be72ada118cb84a942e67b1663263f8db74a9f)]:
  - effect@3.13.2
  - @effect/experimental@0.41.2
  - @effect/sql@0.30.2

## 0.31.1

### Patch Changes

- Updated dependencies [[`b56a211`](https://github.com/Effect-TS/effect/commit/b56a2110569fd0ec0b57ac137743e926d49f51cc)]:
  - effect@3.13.1
  - @effect/experimental@0.41.1
  - @effect/sql@0.30.1

## 0.31.0

### Patch Changes

- Updated dependencies [[`8baef83`](https://github.com/Effect-TS/effect/commit/8baef83e7ff0b7bc0738b680e1ef013065386cff), [`655bfe2`](https://github.com/Effect-TS/effect/commit/655bfe29e44cc3f0fb9b4e53038f50b891c188df), [`d90cbc2`](https://github.com/Effect-TS/effect/commit/d90cbc274e2742d18671fe65aa4764c057eb6cba), [`75632bd`](https://github.com/Effect-TS/effect/commit/75632bd44b8025101d652ccbaeef898c7086c91c), [`c874a2e`](https://github.com/Effect-TS/effect/commit/c874a2e4b17e9d71904ca8375bb77b020975cb1d), [`bf865e5`](https://github.com/Effect-TS/effect/commit/bf865e5833f77fd8f6c06944ca9d507b54488301), [`f98b2b7`](https://github.com/Effect-TS/effect/commit/f98b2b7592cf20f9d85313e7f1e964cb65878138), [`de8ce92`](https://github.com/Effect-TS/effect/commit/de8ce924923eaa4e1b761a97eb45ec967389f3d5), [`cf8b2dd`](https://github.com/Effect-TS/effect/commit/cf8b2dd112f8e092ed99d78fd728db0f91c29050), [`db426a5`](https://github.com/Effect-TS/effect/commit/db426a5fb41ab84d18e3c8753a7329b4de544245), [`6862444`](https://github.com/Effect-TS/effect/commit/6862444094906ad4f2cb077ff3b9cc0b73880c8c), [`5fc8a90`](https://github.com/Effect-TS/effect/commit/5fc8a90ba46a5fd9f3b643f0b5aeadc69d717339), [`546a492`](https://github.com/Effect-TS/effect/commit/546a492e60eb2b8b048a489a474b934ea0877005), [`65c4796`](https://github.com/Effect-TS/effect/commit/65c47966ce39055f02cf5c808daabb3ea6442b0b), [`9760fdc`](https://github.com/Effect-TS/effect/commit/9760fdc37bdaef9da8b150e46b86ddfbe2ad9221), [`5b471e7`](https://github.com/Effect-TS/effect/commit/5b471e7d4317e8ee5d72bbbd3e0c9775160949ab), [`4f810cc`](https://github.com/Effect-TS/effect/commit/4f810cc2770e9f1f266851d2cb6257112c12af49)]:
  - effect@3.13.0
  - @effect/experimental@0.41.0
  - @effect/sql@0.30.0

## 0.30.1

### Patch Changes

- Updated dependencies [[`4018eae`](https://github.com/Effect-TS/effect/commit/4018eaed2733241676ddb8c52416f463a8c32e35), [`543d36d`](https://github.com/Effect-TS/effect/commit/543d36d1a11452560b01ab966a82529ad5fee8c9), [`f70a65a`](https://github.com/Effect-TS/effect/commit/f70a65ac80c6635d80b12beaf4d32a9cc59fa143), [`ba409f6`](https://github.com/Effect-TS/effect/commit/ba409f69c41aeaa29e475c0630735726eaf4dbac), [`3d2e356`](https://github.com/Effect-TS/effect/commit/3d2e3565e8a43d1bdb5daee8db3b90f56d71d859)]:
  - effect@3.12.12
  - @effect/experimental@0.40.1
  - @effect/sql@0.29.1

## 0.30.0

### Patch Changes

- Updated dependencies [[`b6a032f`](https://github.com/Effect-TS/effect/commit/b6a032f07bffa020a848c813881879395134fa20), [`42ddd5f`](https://github.com/Effect-TS/effect/commit/42ddd5f144ce9f9d94a036679ebbd626446d37f5), [`2fe447c`](https://github.com/Effect-TS/effect/commit/2fe447c6354d334f9c591b8a8481818f5f0e797e)]:
  - effect@3.12.11
  - @effect/experimental@0.40.0
  - @effect/sql@0.29.0

## 0.29.4

### Patch Changes

- Updated dependencies [[`e30f132`](https://github.com/Effect-TS/effect/commit/e30f132c336c9d0760bad39f82a55c7ce5159eb7), [`33fa667`](https://github.com/Effect-TS/effect/commit/33fa667c2623be1026e1ccee91bd44f73b09020a), [`87f5f28`](https://github.com/Effect-TS/effect/commit/87f5f2842e4196cb88d13f10f443ff0567e82832), [`4dbd170`](https://github.com/Effect-TS/effect/commit/4dbd170538e8fb7a36aa7c469c6f93b6c7000091)]:
  - effect@3.12.10
  - @effect/experimental@0.39.4
  - @effect/sql@0.28.4

## 0.29.3

### Patch Changes

- Updated dependencies [[`1b4a4e9`](https://github.com/Effect-TS/effect/commit/1b4a4e904ef5227ec7d9114d4e417eca19eed940)]:
  - effect@3.12.9
  - @effect/experimental@0.39.3
  - @effect/sql@0.28.3

## 0.29.2

### Patch Changes

- [#4380](https://github.com/Effect-TS/effect/pull/4380) [`c45b559`](https://github.com/Effect-TS/effect/commit/c45b5592b5fd1189a5c932cfe05bd7d5f6d68508) Thanks @fubhy! - Fixed module imports

- Updated dependencies [[`766113c`](https://github.com/Effect-TS/effect/commit/766113c0ea3512cdb887650ead8ba314236e22ee), [`712277f`](https://github.com/Effect-TS/effect/commit/712277f949052a24b46e4aa234063a6abf395c90), [`f269122`](https://github.com/Effect-TS/effect/commit/f269122508693b111142994dd48698ddc75f3d69), [`430c846`](https://github.com/Effect-TS/effect/commit/430c846cbac05b187e3d24ac8dfee0cf22506f7c), [`7b03057`](https://github.com/Effect-TS/effect/commit/7b03057507d2dab5e6793beb9c578dedaaeb15fe), [`a9c94c8`](https://github.com/Effect-TS/effect/commit/a9c94c807755610831211a686d2fad849ab38eb4), [`107e6f0`](https://github.com/Effect-TS/effect/commit/107e6f0557a1e2d3b0dce25d62fa1e2601521752), [`65c11b9`](https://github.com/Effect-TS/effect/commit/65c11b9266ec9447c31c26fe3ed35c73bd3b81fd), [`e386d2f`](https://github.com/Effect-TS/effect/commit/e386d2f1b3ab3ac2c14ee76de11f5963d32a3df4), [`9172efb`](https://github.com/Effect-TS/effect/commit/9172efba98bc6a82353e6ec2af61ac08f038ba64)]:
  - effect@3.12.8
  - @effect/experimental@0.39.2
  - @effect/sql@0.28.2

## 0.29.1

### Patch Changes

- Updated dependencies [[`8dff1d1`](https://github.com/Effect-TS/effect/commit/8dff1d1bff76cdba643cad7f0bf864300f08bc61)]:
  - effect@3.12.7
  - @effect/experimental@0.39.1
  - @effect/sql@0.28.1

## 0.29.0

### Patch Changes

- Updated dependencies [[`5e43ce5`](https://github.com/Effect-TS/effect/commit/5e43ce50bae116865906112e7f88d390739d778b), [`289c13b`](https://github.com/Effect-TS/effect/commit/289c13b38e8e35b214d46d385d05dead176c87cd), [`8b4e75d`](https://github.com/Effect-TS/effect/commit/8b4e75d35daea807c447ca760948a717aa66bb52), [`fc5e0f0`](https://github.com/Effect-TS/effect/commit/fc5e0f0d357a0051cfa01c1ede83ffdd3cb41ab1), [`004fd2b`](https://github.com/Effect-TS/effect/commit/004fd2bbd1459e64fb1b57f02eeb791ca5ea1ea5), [`b2a31be`](https://github.com/Effect-TS/effect/commit/b2a31be85c35d891351ce4f9a2cc93ece0c257f6), [`5514d05`](https://github.com/Effect-TS/effect/commit/5514d05b5cd586ff5868b8bd41c959e95e6c33cd), [`bf5f0ae`](https://github.com/Effect-TS/effect/commit/bf5f0ae9daa0170471678e22585e8ec14ce667bb), [`3b19bcf`](https://github.com/Effect-TS/effect/commit/3b19bcfd3aaadb6c9253428622df524537c8e626), [`b064b3b`](https://github.com/Effect-TS/effect/commit/b064b3b293615fd268cc5a5647d0981eb67750b8), [`289c13b`](https://github.com/Effect-TS/effect/commit/289c13b38e8e35b214d46d385d05dead176c87cd), [`f474678`](https://github.com/Effect-TS/effect/commit/f474678bf10b8f1c80e3dc096ddc7ecf20b2b23e), [`ee187d0`](https://github.com/Effect-TS/effect/commit/ee187d098007a402844c94d04f0cd8f07695377a)]:
  - @effect/experimental@0.39.0
  - effect@3.12.6
  - @effect/sql@0.28.0

## 0.28.0

### Patch Changes

- Updated dependencies [[`bd0d489`](https://github.com/Effect-TS/effect/commit/bd0d4892b098bc4c589444af9f50259c2c02ec0f), [`a8b0ddb`](https://github.com/Effect-TS/effect/commit/a8b0ddb84710054799fc8f57485b95d00093ada1), [`507d546`](https://github.com/Effect-TS/effect/commit/507d546bd49db31000425fb5da88c434e4291bea), [`a8b0ddb`](https://github.com/Effect-TS/effect/commit/a8b0ddb84710054799fc8f57485b95d00093ada1), [`8db239b`](https://github.com/Effect-TS/effect/commit/8db239b9c869a3707f6566b9d9dbdf53c4df03fc), [`84a0911`](https://github.com/Effect-TS/effect/commit/84a091181634c3a022c94234cec7764a3aeef1be), [`84a0911`](https://github.com/Effect-TS/effect/commit/84a091181634c3a022c94234cec7764a3aeef1be), [`3179a9f`](https://github.com/Effect-TS/effect/commit/3179a9f65d23369a6a9a1f80f7750566dd28df22), [`6cb9b76`](https://github.com/Effect-TS/effect/commit/6cb9b766396d0b2ed995cf26957359713efd202e), [`1fcbe55`](https://github.com/Effect-TS/effect/commit/1fcbe55345042d8468f6a98c84081bd00b6bcf5a), [`bd0d489`](https://github.com/Effect-TS/effect/commit/bd0d4892b098bc4c589444af9f50259c2c02ec0f), [`d9a63d9`](https://github.com/Effect-TS/effect/commit/d9a63d9d385653865954cac895065360d54cc56b)]:
  - @effect/experimental@0.38.0
  - @effect/sql@0.27.0
  - effect@3.12.5

## 0.27.1

### Patch Changes

- Updated dependencies [[`5b50ea4`](https://github.com/Effect-TS/effect/commit/5b50ea4a10cf9acd51f9624b2474d9d5ded74019), [`c170a68`](https://github.com/Effect-TS/effect/commit/c170a68b6266100774461fcd6c0e0fabb60112f2), [`a66c2eb`](https://github.com/Effect-TS/effect/commit/a66c2eb473245092cd41f04c2eb2b7b02cf53718)]:
  - effect@3.12.4
  - @effect/experimental@0.37.1
  - @effect/sql@0.26.1

## 0.27.0

### Patch Changes

- Updated dependencies [[`d7dac48`](https://github.com/Effect-TS/effect/commit/d7dac48a477cdfeec509dbe9f33fce6a1b02b63d), [`1d7fd2b`](https://github.com/Effect-TS/effect/commit/1d7fd2b7ee8eeecc912d27adf76ed897db236dc5), [`1d7fd2b`](https://github.com/Effect-TS/effect/commit/1d7fd2b7ee8eeecc912d27adf76ed897db236dc5)]:
  - effect@3.12.3
  - @effect/experimental@0.37.0
  - @effect/sql@0.26.0

## 0.26.2

### Patch Changes

- Updated dependencies [[`734af82`](https://github.com/Effect-TS/effect/commit/734af82138e78b9c57a8355b1c6b80e80d38b222), [`b63c780`](https://github.com/Effect-TS/effect/commit/b63c78010893101520448ddda7019c487cf7eedd), [`c640d77`](https://github.com/Effect-TS/effect/commit/c640d77b33ad417876f4e8ffe8574ee6cbe5607f), [`0def088`](https://github.com/Effect-TS/effect/commit/0def0887cfdb6755729a64dfd52b3b9f46b0576c)]:
  - effect@3.12.2
  - @effect/experimental@0.36.2
  - @effect/sql@0.25.2

## 0.26.1

### Patch Changes

- Updated dependencies [[`302b57d`](https://github.com/Effect-TS/effect/commit/302b57d2cbf9b9ccc17450945aeebfb33cfe8d43), [`0988083`](https://github.com/Effect-TS/effect/commit/0988083d4594938590df5a287e5b27d38526dd07), [`8b46be6`](https://github.com/Effect-TS/effect/commit/8b46be6a3b8160362ab5ea9171c5e6932505125c), [`bfe8027`](https://github.com/Effect-TS/effect/commit/bfe802734b450a4b4ee069d1125dd37995db2bff), [`16dd657`](https://github.com/Effect-TS/effect/commit/16dd657033d8afac2ffea567b3c8bb27c9b249b6), [`39db211`](https://github.com/Effect-TS/effect/commit/39db211414e90c8db8fdad7dc8ce5b4661bcfaef)]:
  - effect@3.12.1
  - @effect/experimental@0.36.1
  - @effect/sql@0.25.1

## 0.26.0

### Patch Changes

- Updated dependencies [[`abb22a4`](https://github.com/Effect-TS/effect/commit/abb22a429b9c52c31e84856294f175d2064a9b4d), [`f369a89`](https://github.com/Effect-TS/effect/commit/f369a89e98bc682969803b9304adaf4557bb36c2), [`642376c`](https://github.com/Effect-TS/effect/commit/642376c63fd7d78754db991631a4d50a5dc79aa3), [`3d2b7a7`](https://github.com/Effect-TS/effect/commit/3d2b7a7e942a7157afae5b1cdbc6f3fef116428e), [`73f9c6f`](https://github.com/Effect-TS/effect/commit/73f9c6f2ff091512cf904cc54ab59965b86e87c8), [`17cb451`](https://github.com/Effect-TS/effect/commit/17cb4514590e8a86263f7aed009f24da8a237342), [`d801820`](https://github.com/Effect-TS/effect/commit/d80182060c2ee945d7e0e4728812abf9465a0d6a), [`e1eeb2d`](https://github.com/Effect-TS/effect/commit/e1eeb2d7064b3870041dab142f3057970699bbf1), [`c11f3a6`](https://github.com/Effect-TS/effect/commit/c11f3a60a05c3b5fc8e7ce90136728154dc505b0), [`618f7e0`](https://github.com/Effect-TS/effect/commit/618f7e092a1011e5090dca1e69b5e9285689654b), [`c0ba834`](https://github.com/Effect-TS/effect/commit/c0ba834d1995cf5a8b250e4780fd43f3e3881151), [`e1eeb2d`](https://github.com/Effect-TS/effect/commit/e1eeb2d7064b3870041dab142f3057970699bbf1)]:
  - effect@3.12.0
  - @effect/experimental@0.36.0
  - @effect/sql@0.25.0

## 0.25.3

### Patch Changes

- Updated dependencies [[`39457d4`](https://github.com/Effect-TS/effect/commit/39457d4897d9bc7df8af5c05d352866bbeae82eb), [`a475cc2`](https://github.com/Effect-TS/effect/commit/a475cc25fd7c9f26b27a8e98f8fbe43cc9e6ee3e), [`199214e`](https://github.com/Effect-TS/effect/commit/199214e21c616d8a0ccd7ed5f92e944e6c580193), [`b3c160d`](https://github.com/Effect-TS/effect/commit/b3c160d7a1fdfc2d3fb2440530f1ab80efc65133)]:
  - effect@3.11.10
  - @effect/experimental@0.35.3
  - @effect/sql@0.24.3

## 0.25.2

### Patch Changes

- Updated dependencies [[`1c08a0b`](https://github.com/Effect-TS/effect/commit/1c08a0b8505badcffb4d9cade5a746ea90c9557e), [`1ce703b`](https://github.com/Effect-TS/effect/commit/1ce703b041bbd7560c5c437c9b9be48f027937fd), [`1ce703b`](https://github.com/Effect-TS/effect/commit/1ce703b041bbd7560c5c437c9b9be48f027937fd)]:
  - effect@3.11.9
  - @effect/experimental@0.35.2
  - @effect/sql@0.24.2

## 0.25.1

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.35.1
  - @effect/sql@0.24.1

## 0.25.0

### Patch Changes

- Updated dependencies [[`1a6b52d`](https://github.com/Effect-TS/effect/commit/1a6b52dcf020d36e38a7bc90b648152cf5a8ccba)]:
  - effect@3.11.8
  - @effect/experimental@0.35.0
  - @effect/sql@0.24.0

## 0.24.3

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.34.3
  - @effect/sql@0.23.3

## 0.24.2

### Patch Changes

- Updated dependencies [[`2408616`](https://github.com/Effect-TS/effect/commit/24086163b60b09cc6d0885bd565ef080dcbe866b), [`cec0b4d`](https://github.com/Effect-TS/effect/commit/cec0b4d152ef660be2ccdb0927255f2471436e6e), [`cec0b4d`](https://github.com/Effect-TS/effect/commit/cec0b4d152ef660be2ccdb0927255f2471436e6e), [`8d978c5`](https://github.com/Effect-TS/effect/commit/8d978c53f6fcc98d9d645ecba3e4b55d4297dd36), [`cec0b4d`](https://github.com/Effect-TS/effect/commit/cec0b4d152ef660be2ccdb0927255f2471436e6e), [`cec0b4d`](https://github.com/Effect-TS/effect/commit/cec0b4d152ef660be2ccdb0927255f2471436e6e)]:
  - effect@3.11.7
  - @effect/experimental@0.34.2
  - @effect/sql@0.23.2

## 0.24.1

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.34.1
  - @effect/sql@0.23.1

## 0.24.0

### Patch Changes

- Updated dependencies [[`662d1ce`](https://github.com/Effect-TS/effect/commit/662d1ce6fb7da384a95888d5b2bb5605bdf3208d), [`31c62d8`](https://github.com/Effect-TS/effect/commit/31c62d83cbdcf9850a8b5331faa239601c60f78a)]:
  - effect@3.11.6
  - @effect/experimental@0.34.0
  - @effect/sql@0.23.0

## 0.23.7

### Patch Changes

- Updated dependencies [[`9f5a6f7`](https://github.com/Effect-TS/effect/commit/9f5a6f701bf7ba31adccd1f1bcfa8ab5614c9be8), [`ef70ffc`](https://github.com/Effect-TS/effect/commit/ef70ffc417ec035ede40c62b7316e447cc7c1932), [`22905cf`](https://github.com/Effect-TS/effect/commit/22905cf5addfb1ff3d2a6135c52036be958ae911), [`9f5a6f7`](https://github.com/Effect-TS/effect/commit/9f5a6f701bf7ba31adccd1f1bcfa8ab5614c9be8), [`1e59e4f`](https://github.com/Effect-TS/effect/commit/1e59e4fd778da18296812a2a32f36ca8ae50f60d), [`8d914e5`](https://github.com/Effect-TS/effect/commit/8d914e504e7a22d0ea628e8af265ee450ff9530f), [`03bb00f`](https://github.com/Effect-TS/effect/commit/03bb00faa74f9e168a54a8cc0828a664fbb1ab05), [`9f5a6f7`](https://github.com/Effect-TS/effect/commit/9f5a6f701bf7ba31adccd1f1bcfa8ab5614c9be8), [`14e1149`](https://github.com/Effect-TS/effect/commit/14e1149f1af5a022f06eb8c2e4ba9fec17fe7426), [`9f5a6f7`](https://github.com/Effect-TS/effect/commit/9f5a6f701bf7ba31adccd1f1bcfa8ab5614c9be8), [`9f5a6f7`](https://github.com/Effect-TS/effect/commit/9f5a6f701bf7ba31adccd1f1bcfa8ab5614c9be8)]:
  - effect@3.11.5
  - @effect/experimental@0.33.7
  - @effect/sql@0.22.7

## 0.23.6

### Patch Changes

- Updated dependencies []:
  - @effect/experimental@0.33.6
  - @effect/sql@0.22.6

## 0.23.5

### Patch Changes

- [#4090](https://github.com/Effect-TS/effect/pull/4090) [`e993627`](https://github.com/Effect-TS/effect/commit/e9936278d9b72a8b96c37cf7968d0e095069c488) Thanks @rocwang! - Add the missing dependency on @effect/experimental to @effect/sql-X

- Updated dependencies [[`518b258`](https://github.com/Effect-TS/effect/commit/518b258a8a67ecd332a9252c35cc060f8368dee2), [`6e323a3`](https://github.com/Effect-TS/effect/commit/6e323a36faaee46b328c8e3cf60a76b3aff9907f), [`518b258`](https://github.com/Effect-TS/effect/commit/518b258a8a67ecd332a9252c35cc060f8368dee2), [`6e323a3`](https://github.com/Effect-TS/effect/commit/6e323a36faaee46b328c8e3cf60a76b3aff9907f)]:
  - effect@3.11.4
  - @effect/experimental@0.33.5
  - @effect/sql@0.22.5

## 0.23.4

### Patch Changes

- Updated dependencies [[`90906f7`](https://github.com/Effect-TS/effect/commit/90906f7f154b12c7182e8f39e3c55ef3937db857), [`3862cd3`](https://github.com/Effect-TS/effect/commit/3862cd3c7f6a542ed65fb81255b3bd696ce2f567), [`3862cd3`](https://github.com/Effect-TS/effect/commit/3862cd3c7f6a542ed65fb81255b3bd696ce2f567), [`343b6aa`](https://github.com/Effect-TS/effect/commit/343b6aa6ac4a74276bfc7c63ccbf4a1d72bc1bed), [`afba339`](https://github.com/Effect-TS/effect/commit/afba339adc11dad56b5a3b7ca94487e58f34d613)]:
  - effect@3.11.3
  - @effect/sql@0.22.4

## 0.23.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.22.3

## 0.23.2

### Patch Changes

- Updated dependencies [[`01cee56`](https://github.com/Effect-TS/effect/commit/01cee560b58d94b24cc20e98083251b73e658b41)]:
  - effect@3.11.2
  - @effect/sql@0.22.2

## 0.23.1

### Patch Changes

- Updated dependencies [[`dd8a2d8`](https://github.com/Effect-TS/effect/commit/dd8a2d8e80d33b16719fc69361eaedf0b59d4620), [`a71bfef`](https://github.com/Effect-TS/effect/commit/a71bfef46f5061bb2502a61a333638a987b62273)]:
  - effect@3.11.1
  - @effect/sql@0.22.1

## 0.23.0

### Patch Changes

- Updated dependencies [[`147434b`](https://github.com/Effect-TS/effect/commit/147434b03d5e1fd692dd9f126e5ab0910f3b76d3), [`6e69493`](https://github.com/Effect-TS/effect/commit/6e694930048bbaf98110f35f41566aeb9752d471), [`147434b`](https://github.com/Effect-TS/effect/commit/147434b03d5e1fd692dd9f126e5ab0910f3b76d3), [`5eff3f6`](https://github.com/Effect-TS/effect/commit/5eff3f6fa3aae7e86948a62cbfd63b8d6c3bdf92), [`d9fe79b`](https://github.com/Effect-TS/effect/commit/d9fe79bb5a3fe105d8e7a3bc2922a8ad936a5d10), [`251d189`](https://github.com/Effect-TS/effect/commit/251d189420bbba71990574e91098c499065f9a9b), [`5a259f3`](https://github.com/Effect-TS/effect/commit/5a259f3711b4369f55d885b568bdb21136155261), [`b4ce4ea`](https://github.com/Effect-TS/effect/commit/b4ce4ea7fd514a7e572f2dcd879c98f334981b0e), [`15fcc5a`](https://github.com/Effect-TS/effect/commit/15fcc5a0ea4bbf40ab48fa6a04fdda74f76f4c07), [`9bc9a47`](https://github.com/Effect-TS/effect/commit/9bc9a476800dc645903c888a68bb1d3baa3383c6), [`aadb8a4`](https://github.com/Effect-TS/effect/commit/aadb8a48d2cba197c06ec9996505510e48e4e5cb), [`1e2747c`](https://github.com/Effect-TS/effect/commit/1e2747c63a4820d1459cbbc88c71212983bd68bd), [`9264162`](https://github.com/Effect-TS/effect/commit/9264162a82783a651776fb7b87604564a63e7070), [`e0b9b09`](https://github.com/Effect-TS/effect/commit/e0b9b09e70c386b2da17d1f0a15b0511861c89e8), [`c36f3b9`](https://github.com/Effect-TS/effect/commit/c36f3b95df5ce9d71b66f22f26ce12eda8d3e848), [`aadb8a4`](https://github.com/Effect-TS/effect/commit/aadb8a48d2cba197c06ec9996505510e48e4e5cb)]:
  - effect@3.11.0
  - @effect/sql@0.22.0

## 0.22.4

### Patch Changes

- Updated dependencies [[`3069614`](https://github.com/Effect-TS/effect/commit/30696149271129fc618f6f2ccd1d8f2f6c0f9cd7), [`09a5e52`](https://github.com/Effect-TS/effect/commit/09a5e522fd9b221f05d85b1d1c8a740d4973c302)]:
  - effect@3.10.20
  - @effect/sql@0.21.4

## 0.22.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.21.3

## 0.22.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.21.2

## 0.22.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.21.1

## 0.22.0

### Minor Changes

- [#4022](https://github.com/Effect-TS/effect/pull/4022) [`1b1ba09`](https://github.com/Effect-TS/effect/commit/1b1ba099bca49ff48ffe931cc1b607314a5eaafa) Thanks @tim-smart! - allow cloning a SqlClient with transforms disabled

### Patch Changes

- [#4021](https://github.com/Effect-TS/effect/pull/4021) [`e9dfea3`](https://github.com/Effect-TS/effect/commit/e9dfea3f394444ebd8929e5cfe05ce740cf84d6e) Thanks @tim-smart! - add .reactive method to SqlClient interface

- Updated dependencies [[`e9dfea3`](https://github.com/Effect-TS/effect/commit/e9dfea3f394444ebd8929e5cfe05ce740cf84d6e), [`1b1ba09`](https://github.com/Effect-TS/effect/commit/1b1ba099bca49ff48ffe931cc1b607314a5eaafa)]:
  - @effect/sql@0.21.0

## 0.21.5

### Patch Changes

- Updated dependencies [[`944025b`](https://github.com/Effect-TS/effect/commit/944025bc5ce139f4a85846aa689bf30ec06a8ec1), [`54addee`](https://github.com/Effect-TS/effect/commit/54addee438a644bf010646c52042c7b89c5fc0a7)]:
  - effect@3.10.19
  - @effect/sql@0.20.12

## 0.21.4

### Patch Changes

- Updated dependencies [[`af409cf`](https://github.com/Effect-TS/effect/commit/af409cf1d2ff973be11cc079ea373eaeedca25de)]:
  - effect@3.10.18
  - @effect/sql@0.20.11

## 0.21.3

### Patch Changes

- Updated dependencies [[`42c4ce6`](https://github.com/Effect-TS/effect/commit/42c4ce6f8d8c7d847e97757650a8ad9419a829d7)]:
  - effect@3.10.17
  - @effect/sql@0.20.10

## 0.21.2

### Patch Changes

- Updated dependencies [[`4dca30c`](https://github.com/Effect-TS/effect/commit/4dca30cfcdafe4542e236489f71d6f171a5b4e38), [`1d99867`](https://github.com/Effect-TS/effect/commit/1d998671be3cd11043f232822e91dd8c98fccfa9), [`6dae414`](https://github.com/Effect-TS/effect/commit/6dae4147991a97ec14a99289bd25fadae7541e8d), [`6b0d737`](https://github.com/Effect-TS/effect/commit/6b0d737078bf63b97891e6bc47affc04b28f9cf7), [`d8356aa`](https://github.com/Effect-TS/effect/commit/d8356aad428a0c2290db52380220f81d9ec94232)]:
  - effect@3.10.16
  - @effect/sql@0.20.9

## 0.21.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.20.8

## 0.21.0

### Minor Changes

- [#3934](https://github.com/Effect-TS/effect/pull/3934) [`7807f50`](https://github.com/Effect-TS/effect/commit/7807f502a693d97be5b767fe7f1a7dcd7bd9420c) Thanks @tim-smart! - use wa-sqlite for sqlite-wasm package

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.20.7

## 0.20.6

### Patch Changes

- Updated dependencies [[`8398b32`](https://github.com/Effect-TS/effect/commit/8398b3208242a88239d4449910b7baf923cfe3b6), [`72e55b7`](https://github.com/Effect-TS/effect/commit/72e55b7c610784fcebdbadc592c876e23e76a986)]:
  - effect@3.10.15
  - @effect/sql@0.20.6

## 0.20.5

### Patch Changes

- Updated dependencies [[`f983946`](https://github.com/Effect-TS/effect/commit/f9839467b4cad6e788297764ef9f9f0b9fd203f9), [`2d8a750`](https://github.com/Effect-TS/effect/commit/2d8a75081eb83a0a81f817fdf6f428369c5064ab)]:
  - effect@3.10.14
  - @effect/sql@0.20.5

## 0.20.4

### Patch Changes

- Updated dependencies [[`995bbdf`](https://github.com/Effect-TS/effect/commit/995bbdffea2e332f203cd5b474cd6a1c77dfa6ae)]:
  - effect@3.10.13
  - @effect/sql@0.20.4

## 0.20.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.20.3

## 0.20.2

### Patch Changes

- Updated dependencies [[`dd14efe`](https://github.com/Effect-TS/effect/commit/dd14efe0ace255f571273aae876adea96267d7e6)]:
  - effect@3.10.12
  - @effect/sql@0.20.2

## 0.20.1

### Patch Changes

- Updated dependencies [[`5eef499`](https://github.com/Effect-TS/effect/commit/5eef4998b6ccb7a5404d9e4fef85e57fa35fbb8a)]:
  - effect@3.10.11
  - @effect/sql@0.20.1

## 0.20.0

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.20.0

## 0.19.0

### Patch Changes

- Updated dependencies [[`cd720ae`](https://github.com/Effect-TS/effect/commit/cd720aedf7f2571edec0843d6a633e84e4832b28), [`cd720ae`](https://github.com/Effect-TS/effect/commit/cd720aedf7f2571edec0843d6a633e84e4832b28), [`b631f40`](https://github.com/Effect-TS/effect/commit/b631f40abbe649b2a089764585b5c39f6a695ac6)]:
  - effect@3.10.10
  - @effect/sql@0.19.0

## 0.18.5

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.16

## 0.18.4

### Patch Changes

- Updated dependencies [[`a123e80`](https://github.com/Effect-TS/effect/commit/a123e80f111a625428a5b5622b7f55ee1073566b), [`bd5fcd3`](https://github.com/Effect-TS/effect/commit/bd5fcd3e6b603b1e505af90d6a00627c8eca6d41), [`0289d3b`](https://github.com/Effect-TS/effect/commit/0289d3b6391031d00329365bab9791b355031fe3), [`7386b71`](https://github.com/Effect-TS/effect/commit/7386b710e5be570e17f468928a6ed19d549a3e12), [`4211a23`](https://github.com/Effect-TS/effect/commit/4211a2355bb3af3f0e756e2aae9d293379f25662)]:
  - effect@3.10.9
  - @effect/sql@0.18.15

## 0.18.3

### Patch Changes

- Updated dependencies [[`68b5c9e`](https://github.com/Effect-TS/effect/commit/68b5c9e44f34192cef26e1cadda5e661a027df41), [`9c9928d`](https://github.com/Effect-TS/effect/commit/9c9928dfeacd9ac33dc37eb0ca3d7d8c39175ada), [`6306e66`](https://github.com/Effect-TS/effect/commit/6306e6656092b350d4ede5746da6f245ec9f7e07), [`361c7f3`](https://github.com/Effect-TS/effect/commit/361c7f39a2c10ede9324847c3d3ba192a6f9b20a)]:
  - effect@3.10.8
  - @effect/sql@0.18.14

## 0.18.2

### Patch Changes

- Updated dependencies [[`33f5b9f`](https://github.com/Effect-TS/effect/commit/33f5b9ffaebea4f1bd0e391b44c41fb6230e743a), [`50f0281`](https://github.com/Effect-TS/effect/commit/50f0281b0d2116726b8927a6217622d5f394f3e4)]:
  - effect@3.10.7
  - @effect/sql@0.18.13

## 0.18.1

### Patch Changes

- Updated dependencies [[`ce1c21f`](https://github.com/Effect-TS/effect/commit/ce1c21ffc11902ac9ab453a51904207859d38552)]:
  - effect@3.10.6
  - @effect/sql@0.18.12

## 0.18.0

### Minor Changes

- [#3852](https://github.com/Effect-TS/effect/pull/3852) [`70dd4d7`](https://github.com/Effect-TS/effect/commit/70dd4d7cd2376e39244fa1729938f1b3ec55aec7) Thanks @sukovanej! - Use `layer` / `layerConfig` naming convention for the /sql-\* packages. Make `layer` constructors accept a raw config object. Add `layerConfig` constructors that accept `Config.Config<...>`.

### Patch Changes

- Updated dependencies [[`3a6d757`](https://github.com/Effect-TS/effect/commit/3a6d757badeebe00d8ef4d67530d073c8264dcfa), [`59d813a`](https://github.com/Effect-TS/effect/commit/59d813aa4973d1115cfc70cc3667508335f49693)]:
  - effect@3.10.5
  - @effect/sql@0.18.11

## 0.17.10

### Patch Changes

- Updated dependencies [[`2367708`](https://github.com/Effect-TS/effect/commit/2367708be449f9526a2047e321302d7bfb16f18e)]:
  - effect@3.10.4
  - @effect/sql@0.18.10

## 0.17.9

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.9

## 0.17.8

### Patch Changes

- Updated dependencies [[`b9423d8`](https://github.com/Effect-TS/effect/commit/b9423d8bf8181a2389fdbce1e3c14ac6fe8d54f5)]:
  - effect@3.10.3
  - @effect/sql@0.18.8

## 0.17.7

### Patch Changes

- Updated dependencies [[`714e119`](https://github.com/Effect-TS/effect/commit/714e11945e45e5a2554ee058e6c43f82a8e309cf), [`c1afd55`](https://github.com/Effect-TS/effect/commit/c1afd55c54e61f9c432823d21b3d016f79160a37)]:
  - effect@3.10.2
  - @effect/sql@0.18.7

## 0.17.6

### Patch Changes

- Updated dependencies [[`9604d6b`](https://github.com/Effect-TS/effect/commit/9604d6b616435103dafea8b53637a9d1450b4750)]:
  - effect@3.10.1
  - @effect/sql@0.18.6

## 0.17.5

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.5

## 0.17.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.4

## 0.17.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.3

## 0.17.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.2

## 0.17.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.18.1

## 0.17.0

### Patch Changes

- Updated dependencies [[`4a01828`](https://github.com/Effect-TS/effect/commit/4a01828b66d6213e9bbe18979c893b13f7bb29bf), [`4a01828`](https://github.com/Effect-TS/effect/commit/4a01828b66d6213e9bbe18979c893b13f7bb29bf), [`c79c4c1`](https://github.com/Effect-TS/effect/commit/c79c4c178390fe61ff6dda88c9e058862349343a), [`38d30f0`](https://github.com/Effect-TS/effect/commit/38d30f08b8da62f9c3e308b9250738cb8d17bdb5), [`5821ce3`](https://github.com/Effect-TS/effect/commit/5821ce3455b47d25e0a40cae6ce22af9db5fa556)]:
  - effect@3.10.0
  - @effect/sql@0.18.0

## 0.16.0

### Patch Changes

- Updated dependencies [[`dacbf7d`](https://github.com/Effect-TS/effect/commit/dacbf7db59899065aee4e5dd95a6459880e09ceb)]:
  - @effect/sql@0.17.0

## 0.15.6

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.16.6

## 0.15.5

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.16.5

## 0.15.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.16.4

## 0.15.3

### Patch Changes

- Updated dependencies [[`61a99b2`](https://github.com/Effect-TS/effect/commit/61a99b2bf9d757870ef0c2ec9d4c877cdd364a3d)]:
  - effect@3.9.2
  - @effect/sql@0.16.3

## 0.15.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.16.2

## 0.15.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.16.1

## 0.15.0

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.16.0

## 0.14.1

### Patch Changes

- Updated dependencies [[`3b2ad1d`](https://github.com/Effect-TS/effect/commit/3b2ad1d58a2e33dc1a72b7037396bd25ca1702a9)]:
  - effect@3.9.1
  - @effect/sql@0.15.1

## 0.14.0

### Patch Changes

- Updated dependencies [[`ff3d1aa`](https://github.com/Effect-TS/effect/commit/ff3d1aab290b4d1173b2dfc7e4c76abb4babdc16), [`0ba66f2`](https://github.com/Effect-TS/effect/commit/0ba66f2451641fd6990e02ec1ed01c014db9dab0), [`bf77f51`](https://github.com/Effect-TS/effect/commit/bf77f51b323c383224ebf08adf77a7a6e8c9b3cd), [`016f9ad`](https://github.com/Effect-TS/effect/commit/016f9ad931a4b3d09a34e5caf13d87c5b8e9c984), [`0779681`](https://github.com/Effect-TS/effect/commit/07796813f07de035719728733096ba64ce333469), [`534129f`](https://github.com/Effect-TS/effect/commit/534129f8113ce1a8ec50828083e16da9c86326c6), [`d75140c`](https://github.com/Effect-TS/effect/commit/d75140c7a664ceda43142d999f4ff8dcd36d6dda), [`be0451c`](https://github.com/Effect-TS/effect/commit/be0451c149b6618af79cb839cdf04af2db1efb03), [`9237ac6`](https://github.com/Effect-TS/effect/commit/9237ac69bc07de5b3b60076a0ad2921c21de7457), [`be0451c`](https://github.com/Effect-TS/effect/commit/be0451c149b6618af79cb839cdf04af2db1efb03), [`5b36494`](https://github.com/Effect-TS/effect/commit/5b364942e9a9003fdb8217324f8a2d8369c969da), [`c716adb`](https://github.com/Effect-TS/effect/commit/c716adb250ebbea1d1048d818ef7fed4f621d186), [`4986391`](https://github.com/Effect-TS/effect/commit/49863919cd8628c962a712fb1df30d2983820933), [`d75140c`](https://github.com/Effect-TS/effect/commit/d75140c7a664ceda43142d999f4ff8dcd36d6dda), [`d1387ae`](https://github.com/Effect-TS/effect/commit/d1387aebd1ff01bbebde26be46d488956e4daef6)]:
  - effect@3.9.0
  - @effect/sql@0.15.0

## 0.13.1

### Patch Changes

- Updated dependencies [[`88e85db`](https://github.com/Effect-TS/effect/commit/88e85db34bd402526e27a323e950d053fa34d232), [`83887ca`](https://github.com/Effect-TS/effect/commit/83887ca1b1793916913d8550a4db4450cd14a044), [`5266b6c`](https://github.com/Effect-TS/effect/commit/5266b6cd86d76c3886da041c8829bca04b1a3110), [`cdead5c`](https://github.com/Effect-TS/effect/commit/cdead5c9cfd54dc6c4f215d9732f654c4a12e991), [`766a8af`](https://github.com/Effect-TS/effect/commit/766a8af307b414aca3648d91c4eab7493a5ec862)]:
  - effect@3.8.5
  - @effect/sql@0.14.1

## 0.13.0

### Patch Changes

- Updated dependencies [[`f100e20`](https://github.com/Effect-TS/effect/commit/f100e2087172d7e4ab8c0d1ee9a5780b9712382a)]:
  - @effect/sql@0.14.0

## 0.12.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.13.4

## 0.12.3

### Patch Changes

- Updated dependencies [[`0a68746`](https://github.com/Effect-TS/effect/commit/0a68746c89651c364db2ee8c72dcfe552e1782ea), [`4509656`](https://github.com/Effect-TS/effect/commit/45096569d50262275ee984f44c456f5c83b62683)]:
  - @effect/sql@0.13.3
  - effect@3.8.4

## 0.12.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.13.2

## 0.12.1

### Patch Changes

- Updated dependencies [[`d5c8e7e`](https://github.com/Effect-TS/effect/commit/d5c8e7e47373f9fd78637f24e36d6fb61ee35eb4)]:
  - @effect/sql@0.13.1

## 0.12.0

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.13.0

## 0.11.6

### Patch Changes

- Updated dependencies [[`bb5ec6b`](https://github.com/Effect-TS/effect/commit/bb5ec6b4b6a6f537394596c5a596faf52cb2aef4)]:
  - effect@3.8.3
  - @effect/sql@0.12.6

## 0.11.5

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.12.5

## 0.11.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.12.4

## 0.11.3

### Patch Changes

- Updated dependencies [[`f0d8ef1`](https://github.com/Effect-TS/effect/commit/f0d8ef1ce97ec2a87b09b3e24150cfeab85d6e2f)]:
  - effect@3.8.2
  - @effect/sql@0.12.3

## 0.11.2

### Patch Changes

- Updated dependencies [[`10bf621`](https://github.com/Effect-TS/effect/commit/10bf6213f36d8ddb00f058a4609b85220f3d8334), [`ae36fa6`](https://github.com/Effect-TS/effect/commit/ae36fa68f754eeab9a54b6dc0f8b44db513aa2b6)]:
  - effect@3.8.1
  - @effect/sql@0.12.2

## 0.11.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.12.1

## 0.11.0

### Patch Changes

- Updated dependencies [[`fcfa6ee`](https://github.com/Effect-TS/effect/commit/fcfa6ee30ffd07d998bf22799357bf58580a116f), [`bb9931b`](https://github.com/Effect-TS/effect/commit/bb9931b62e249a3b801f2cb9d097aec0c8511af7), [`5798f76`](https://github.com/Effect-TS/effect/commit/5798f7619529de33e5ba06f551806f68fedc19db), [`5f0bfa1`](https://github.com/Effect-TS/effect/commit/5f0bfa17205398d4e4818bfbcf9e1b505b3b1fc5), [`812a4e8`](https://github.com/Effect-TS/effect/commit/812a4e86e2d1aa23b477ef5829aa0e5c07784936), [`273565e`](https://github.com/Effect-TS/effect/commit/273565e7901639e8d0541930ab715aea9c80fbaa), [`569a801`](https://github.com/Effect-TS/effect/commit/569a8017ef0a0bc203e4312867cbdd37b0effbd7), [`aa1fa53`](https://github.com/Effect-TS/effect/commit/aa1fa5301e886b9657c8eb0d38cb87cef92a8305), [`02f6b06`](https://github.com/Effect-TS/effect/commit/02f6b0660e12bee1069532a9cc18d3ab855257be), [`12b893e`](https://github.com/Effect-TS/effect/commit/12b893e63cc6dfada4aca7773b4783940e2edf25), [`bbad27e`](https://github.com/Effect-TS/effect/commit/bbad27ec0a90860593f759405caa877e7f4a655f), [`adf7d7a`](https://github.com/Effect-TS/effect/commit/adf7d7a7dfce3a7021e9f3b0d847dc85be89d754), [`007289a`](https://github.com/Effect-TS/effect/commit/007289a52d5877f8e90e2dacf38171ff9bf603fd), [`42a8f99`](https://github.com/Effect-TS/effect/commit/42a8f99740eefdaf2c4544d2c345313f97547a36), [`eebfd29`](https://github.com/Effect-TS/effect/commit/eebfd29633fd5d38b505c5c0842036f61f05e913), [`040703d`](https://github.com/Effect-TS/effect/commit/040703d0e100cd5511e52d812c15492414262b5e)]:
  - effect@3.8.0
  - @effect/sql@0.12.0

## 0.10.3

### Patch Changes

- Updated dependencies [[`ccd67df`](https://github.com/Effect-TS/effect/commit/ccd67df6b44ae7075a03759bc7866f6bc9ebb03e)]:
  - @effect/sql@0.11.3

## 0.10.2

### Patch Changes

- Updated dependencies [[`d8aff79`](https://github.com/Effect-TS/effect/commit/d8aff79d4cbedee33d0552ec43fdced007cae358), [`35a0f81`](https://github.com/Effect-TS/effect/commit/35a0f813141652d696461cd5d19fd146adaf85be), [`d8aff79`](https://github.com/Effect-TS/effect/commit/d8aff79d4cbedee33d0552ec43fdced007cae358)]:
  - @effect/sql@0.11.2
  - effect@3.7.3

## 0.10.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.11.1

## 0.10.0

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.11.0

## 0.9.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.10.4

## 0.9.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.10.3

## 0.9.2

### Patch Changes

- Updated dependencies [[`8a601d7`](https://github.com/Effect-TS/effect/commit/8a601d7a1f8ffe52ac9e6d67e9282a1495fe59c9), [`353ba19`](https://github.com/Effect-TS/effect/commit/353ba19f9b2b9e959f0a00d058c6d40a4bc02db7)]:
  - effect@3.7.2
  - @effect/sql@0.10.2

## 0.9.1

### Patch Changes

- Updated dependencies [[`79859e7`](https://github.com/Effect-TS/effect/commit/79859e71040d8edf1868b8530b90c650f4321eff), [`f6a469c`](https://github.com/Effect-TS/effect/commit/f6a469c190b9f00eee5ea0cd4d5912a0ef8b46f5), [`dcb9ec0`](https://github.com/Effect-TS/effect/commit/dcb9ec0db443894dd204d87450f779c44b9ad7f1), [`79aa6b1`](https://github.com/Effect-TS/effect/commit/79aa6b136e1f29b36f34e88cb2ff162bff2bb4ed)]:
  - effect@3.7.1
  - @effect/sql@0.10.1

## 0.9.0

### Patch Changes

- Updated dependencies [[`db89601`](https://github.com/Effect-TS/effect/commit/db89601ee9c1050c4e762b7bd7ec65a6a2799dfe), [`2f456cc`](https://github.com/Effect-TS/effect/commit/2f456cce5012b9fcb6b4e039190d527813b75b92), [`8745e41`](https://github.com/Effect-TS/effect/commit/8745e41ed96e3765dc6048efc2a9afbe05c8a1e9), [`e557838`](https://github.com/Effect-TS/effect/commit/e55783886b046d3c5f33447f455f9ccf2fa75922), [`d6e7e40`](https://github.com/Effect-TS/effect/commit/d6e7e40b1e2ad0c59aa02f07344d28601b14ebdc), [`8356321`](https://github.com/Effect-TS/effect/commit/8356321598da04bd77c1001f45a4e447bec5591d), [`192f2eb`](https://github.com/Effect-TS/effect/commit/192f2ebb2c4ddbf4bfd8baedd32140b2376868f4), [`718cb70`](https://github.com/Effect-TS/effect/commit/718cb70038629a6d58d02e407760e341f7c94474), [`e9d0310`](https://github.com/Effect-TS/effect/commit/e9d03107acbf204d9304f3e8aea0816b7d3c7dfb), [`6bf28f7`](https://github.com/Effect-TS/effect/commit/6bf28f7e3b1e5e0608ff567205fea0581d11666f)]:
  - effect@3.7.0
  - @effect/sql@0.10.0

## 0.8.7

### Patch Changes

- Updated dependencies [[`e809286`](https://github.com/Effect-TS/effect/commit/e8092865900608c4df7a6b7991b1c13cc1e4ca2d)]:
  - effect@3.6.8
  - @effect/sql@0.9.7

## 0.8.6

### Patch Changes

- Updated dependencies [[`50ec889`](https://github.com/Effect-TS/effect/commit/50ec8897a49b7d1fe84f63107f89d543c52f3dfc)]:
  - effect@3.6.7
  - @effect/sql@0.9.6

## 0.8.5

### Patch Changes

- Updated dependencies [[`f960bf4`](https://github.com/Effect-TS/effect/commit/f960bf45239e9badac6e0ad3a602f4174cd7bbdf), [`46a575f`](https://github.com/Effect-TS/effect/commit/46a575f48a05457b782fb21f7827d338c9b59320)]:
  - effect@3.6.6
  - @effect/sql@0.9.5

## 0.8.4

### Patch Changes

- Updated dependencies [[`14a47a8`](https://github.com/Effect-TS/effect/commit/14a47a8c1f3cff2186b8fe7a919a1d773888fb5b), [`35be739`](https://github.com/Effect-TS/effect/commit/35be739a413e32ed251f775714af2f87355e8664), [`f8326cc`](https://github.com/Effect-TS/effect/commit/f8326cc1095630a3fbee3f25d6b4e74edb905903), [`0c09841`](https://github.com/Effect-TS/effect/commit/0c0984173be3d58f050b300a1a8aa89d76ba49ae), [`8dd3959`](https://github.com/Effect-TS/effect/commit/8dd3959e967ca2b38ba601d94a80f1c50e9445e0), [`2cb6ebb`](https://github.com/Effect-TS/effect/commit/2cb6ebbf782b79643befa061c6adcf0366a7b8b3), [`5e9f51e`](https://github.com/Effect-TS/effect/commit/5e9f51e4a1169018d7f59a0db444c783cc1d5794), [`83a108a`](https://github.com/Effect-TS/effect/commit/83a108a254341721d20a82633b1e1d406d2368a3), [`f2c8dbb`](https://github.com/Effect-TS/effect/commit/f2c8dbb77e196c9a36cb3bf2ae3b82ce68e9874d), [`5e9f51e`](https://github.com/Effect-TS/effect/commit/5e9f51e4a1169018d7f59a0db444c783cc1d5794)]:
  - effect@3.6.5
  - @effect/sql@0.9.4

## 0.8.3

### Patch Changes

- Updated dependencies [[`c3446d3`](https://github.com/Effect-TS/effect/commit/c3446d3e57b0cbfe9341d6f2aebf5f5d6fefefe3)]:
  - @effect/sql@0.9.3

## 0.8.2

### Patch Changes

- Updated dependencies [[`cfcfbdf`](https://github.com/Effect-TS/effect/commit/cfcfbdfe586b011a5edc28083fd5391edeee0023)]:
  - @effect/sql@0.9.2

## 0.8.1

### Patch Changes

- Updated dependencies [[`e9da539`](https://github.com/Effect-TS/effect/commit/e9da5396bba99b2ddc20c97c7955154e6da4cab5), [`4fabf75`](https://github.com/Effect-TS/effect/commit/4fabf75b44ea98b1773059bd589167d5d8f64f06)]:
  - @effect/sql@0.9.1

## 0.8.0

### Minor Changes

- [#3457](https://github.com/Effect-TS/effect/pull/3457) [`a07990d`](https://github.com/Effect-TS/effect/commit/a07990de977fb60ab4af1e8f3a2250454dedbb34) Thanks @IMax153! - Add support for executing raw SQL queries with the underlying SQL client.

  This is primarily useful when the SQL client returns special results for certain
  query types.

  For example, because MySQL does not support the `RETURNING` clause, the `mysql2`
  client will return a [`ResultSetHeader`](https://sidorares.github.io/node-mysql2/docs/documentation/typescript-examples#resultsetheader)
  for `INSERT`, `UPDATE`, `DELETE`, and `TRUNCATE` operations.

  To gain access to the raw results of a query, you can use the `.raw` property on
  the `Statement`:

  ```ts
  import * as Effect from "effect/Effect"
  import * as SqlClient from "@effect/sql/SqlClient"
  import * as MysqlClient from "@effect/sql/MysqlClient"

  const DatabaseLive = MysqlClient.layer({
    database: Config.succeed("database"),
    username: Config.succeed("root"),
    password: Config.succeed(Redacted.make("password"))
  })

  const program = Effect.gen(function* () {
    const sql = yield* SqlClient.SqlClient

    const result = yield* sql`INSERT INTO usernames VALUES ("Bob")`.raw

    console.log(result)
    /**
     * ResultSetHeader {
     *   fieldCount: 0,
     *   affectedRows: 1,
     *   insertId: 0,
     *   info: '',
     *   serverStatus: 2,
     *   warningStatus: 0,
     *   changedRows: 0
     * }
     */
  })

  program.pipe(Effect.provide(DatabaseLive), Effect.runPromise)
  ```

### Patch Changes

- Updated dependencies [[`8295281`](https://github.com/Effect-TS/effect/commit/8295281ae9bd7441e680402540bf3c8682ec417b), [`c940df6`](https://github.com/Effect-TS/effect/commit/c940df63800bf3c4396d91cf28ec34938642fd2c), [`00b6c6d`](https://github.com/Effect-TS/effect/commit/00b6c6d4001f5de728b7d990a1b14560b4961a63), [`a07990d`](https://github.com/Effect-TS/effect/commit/a07990de977fb60ab4af1e8f3a2250454dedbb34), [`f8d95a6`](https://github.com/Effect-TS/effect/commit/f8d95a61ad0762147933c5c32bb6d7237e18eef4)]:
  - effect@3.6.4
  - @effect/sql@0.9.0

## 0.7.7

### Patch Changes

- Updated dependencies [[`04adcac`](https://github.com/Effect-TS/effect/commit/04adcace913e6fc483df266874a68005e9e04ccf)]:
  - effect@3.6.3
  - @effect/sql@0.8.7

## 0.7.6

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.8.6

## 0.7.5

### Patch Changes

- Updated dependencies [[`fd4b2f6`](https://github.com/Effect-TS/effect/commit/fd4b2f6516b325740dde615f1cf0229edf13ca0c)]:
  - effect@3.6.2
  - @effect/sql@0.8.5

## 0.7.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.8.4

## 0.7.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.8.3

## 0.7.2

### Patch Changes

- Updated dependencies [[`510a34d`](https://github.com/Effect-TS/effect/commit/510a34d4cc5d2f51347a53847f6c7db84d2b17c6), [`45dbb9f`](https://github.com/Effect-TS/effect/commit/45dbb9ffeaf93d9e4df99d0cd4920e41ba9a3978)]:
  - effect@3.6.1
  - @effect/sql@0.8.2

## 0.7.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.8.1

## 0.7.0

### Patch Changes

- Updated dependencies [[`42d0706`](https://github.com/Effect-TS/effect/commit/42d07067e9823ceb8977eff9672d9a290941dad5)]:
  - @effect/sql@0.8.0

## 0.6.0

### Patch Changes

- Updated dependencies [[`1e0fe80`](https://github.com/Effect-TS/effect/commit/1e0fe802b36c257971296617473ce0abe730e8dc), [`8135294`](https://github.com/Effect-TS/effect/commit/8135294b591ea94fde7e6f94a504608f0e630520), [`cd255a4`](https://github.com/Effect-TS/effect/commit/cd255a48872d8fb924cf713ef73f0883a9cc6987), [`3845646`](https://github.com/Effect-TS/effect/commit/3845646828e98f3c7cda1217f6cfe5f642ac0603), [`2d09078`](https://github.com/Effect-TS/effect/commit/2d09078c5948b37fc2f79ef858fe4ca3e4814085), [`4bce5a0`](https://github.com/Effect-TS/effect/commit/4bce5a0274203550ccf117d830721891b0a3d182), [`4ddbff0`](https://github.com/Effect-TS/effect/commit/4ddbff0bb4e3ffddfeb509c59835b83245fb975e), [`e74cc38`](https://github.com/Effect-TS/effect/commit/e74cc38cb420a320c4d7ef98180f19d452a8b316), [`bb069b4`](https://github.com/Effect-TS/effect/commit/bb069b49ef291c532a02c1e8e74271f6d1bb32ec), [`cd255a4`](https://github.com/Effect-TS/effect/commit/cd255a48872d8fb924cf713ef73f0883a9cc6987), [`7d02174`](https://github.com/Effect-TS/effect/commit/7d02174af3bcbf054e5cdddb821c91d0f47e8285)]:
  - effect@3.6.0
  - @effect/sql@0.7.0

## 0.5.3

### Patch Changes

- Updated dependencies [[`6359644`](https://github.com/Effect-TS/effect/commit/635964446323cf55d4060559337e710e4a24496e), [`7f41e42`](https://github.com/Effect-TS/effect/commit/7f41e428830bf3043b8be0d28dcd235d5747c942), [`f566fd1`](https://github.com/Effect-TS/effect/commit/f566fd1d7eea531a0d981dd24037f14a603a1273)]:
  - effect@3.5.9
  - @effect/sql@0.6.3

## 0.5.2

### Patch Changes

- Updated dependencies [[`1ba640c`](https://github.com/Effect-TS/effect/commit/1ba640c702f187a866023bf043c26e25cce941ef), [`c8c71bd`](https://github.com/Effect-TS/effect/commit/c8c71bd20eb87d23133dac6156b83bb08941597c), [`a26ce58`](https://github.com/Effect-TS/effect/commit/a26ce581ca7d407e1e81439b58c8045b3fa65231)]:
  - effect@3.5.8
  - @effect/sql@0.6.2

## 0.5.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.6.1

## 0.5.0

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.6.0

## 0.4.3

### Patch Changes

- [#3310](https://github.com/Effect-TS/effect/pull/3310) [`99bddcf`](https://github.com/Effect-TS/effect/commit/99bddcfb3d6eab4d489d055404e26ad81afe52fc) Thanks @fubhy! - Added additional pure annotations to improve tree-shakeability

- Updated dependencies [[`3afcc93`](https://github.com/Effect-TS/effect/commit/3afcc93413a3d910beb69e4ce9ae120e4adaffd5), [`99bddcf`](https://github.com/Effect-TS/effect/commit/99bddcfb3d6eab4d489d055404e26ad81afe52fc)]:
  - effect@3.5.7
  - @effect/sql@0.5.3

## 0.4.2

### Patch Changes

- Updated dependencies [[`cc327a1`](https://github.com/Effect-TS/effect/commit/cc327a1bccd22a4ee27ec7e58b53205e93b23e2c), [`4bfe4fb`](https://github.com/Effect-TS/effect/commit/4bfe4fb5c82f597c9beea9baa92e772593598b60), [`2b14d18`](https://github.com/Effect-TS/effect/commit/2b14d181462cad8359da4fa6bc6dfda0f742c398)]:
  - effect@3.5.6
  - @effect/sql@0.5.2

## 0.4.1

### Patch Changes

- Updated dependencies [[`a9d7800`](https://github.com/Effect-TS/effect/commit/a9d7800f6a253192b653d77778b0674f39b1ca39)]:
  - effect@3.5.5
  - @effect/sql@0.5.1

## 0.4.0

### Minor Changes

- [#3260](https://github.com/Effect-TS/effect/pull/3260) [`53c0db0`](https://github.com/Effect-TS/effect/commit/53c0db06872d5b5edea2a706e83249908385325c) Thanks @tim-smart! - replace /platform RefailError with use of the "cause" property

### Patch Changes

- Updated dependencies [[`53c0db0`](https://github.com/Effect-TS/effect/commit/53c0db06872d5b5edea2a706e83249908385325c), [`ed0dde4`](https://github.com/Effect-TS/effect/commit/ed0dde4888e6f1a97ad5bba06b755d26a6a1c52e), [`ca775ce`](https://github.com/Effect-TS/effect/commit/ca775cec53baebc1a43d9b8852a3ac6726178498), [`5be9cc0`](https://github.com/Effect-TS/effect/commit/5be9cc044025a9541b9b7acefa2d3fc05fa1301b), [`203658f`](https://github.com/Effect-TS/effect/commit/203658f8001c132b25764ab70344b171683b554c), [`eb1c4d4`](https://github.com/Effect-TS/effect/commit/eb1c4d44e54b9d8d201a366d1ff94face2a6dcd3)]:
  - @effect/sql@0.5.0
  - effect@3.5.4

## 0.3.27

### Patch Changes

- Updated dependencies [[`edb0da3`](https://github.com/Effect-TS/effect/commit/edb0da383746d760f35d8582f5fb0cc0eeca9217), [`c8d3fb0`](https://github.com/Effect-TS/effect/commit/c8d3fb0fe23585f6efb724af51fbab3ba1ad6e83), [`dabd028`](https://github.com/Effect-TS/effect/commit/dabd028decf9b7983ca16ebe0f48c05c11a84b68), [`786b2ab`](https://github.com/Effect-TS/effect/commit/786b2ab29d525c877bb84035dac9e2d6499339d1), [`fc57354`](https://github.com/Effect-TS/effect/commit/fc573547d41667016fce05eaee75960fcc6dce4d)]:
  - effect@3.5.3
  - @effect/sql@0.4.27

## 0.3.26

### Patch Changes

- Updated dependencies [[`639208e`](https://github.com/Effect-TS/effect/commit/639208eeb8a44622994f832bc2d45d06ab636bc8), [`6684b4c`](https://github.com/Effect-TS/effect/commit/6684b4c27d77a7fcc7af2e261a450edf971b62b5), [`6684b4c`](https://github.com/Effect-TS/effect/commit/6684b4c27d77a7fcc7af2e261a450edf971b62b5), [`6684b4c`](https://github.com/Effect-TS/effect/commit/6684b4c27d77a7fcc7af2e261a450edf971b62b5)]:
  - effect@3.5.2
  - @effect/sql@0.4.26

## 0.3.25

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.25

## 0.3.24

### Patch Changes

- Updated dependencies [[`55fdd76`](https://github.com/Effect-TS/effect/commit/55fdd761ee95afd73b6a892c13fee92b36c02837)]:
  - effect@3.5.1
  - @effect/sql@0.4.24

## 0.3.23

### Patch Changes

- Updated dependencies [[`a1f5b83`](https://github.com/Effect-TS/effect/commit/a1f5b831a1bc7535988b370d68d0b3eb1123e0ce), [`a1f5b83`](https://github.com/Effect-TS/effect/commit/a1f5b831a1bc7535988b370d68d0b3eb1123e0ce), [`a1f5b83`](https://github.com/Effect-TS/effect/commit/a1f5b831a1bc7535988b370d68d0b3eb1123e0ce), [`60bc3d0`](https://github.com/Effect-TS/effect/commit/60bc3d0867b13e48b24dc22604b4dd2e7b2c1ca4), [`5ab348f`](https://github.com/Effect-TS/effect/commit/5ab348f265db3d283aa091ddca6d2d49137c16f2), [`60bc3d0`](https://github.com/Effect-TS/effect/commit/60bc3d0867b13e48b24dc22604b4dd2e7b2c1ca4), [`3e04bf8`](https://github.com/Effect-TS/effect/commit/3e04bf8a7127e956cadb7684a8f4c661df57663b), [`e7fc45f`](https://github.com/Effect-TS/effect/commit/e7fc45f0c7002aafdaec7878149ac064cd104ea3), [`a1f5b83`](https://github.com/Effect-TS/effect/commit/a1f5b831a1bc7535988b370d68d0b3eb1123e0ce), [`4626de5`](https://github.com/Effect-TS/effect/commit/4626de59c25b384216faa0be87bf0b8cd36357d0), [`f01e7db`](https://github.com/Effect-TS/effect/commit/f01e7db317827255d7901f523f2e28b43298e8df), [`60bc3d0`](https://github.com/Effect-TS/effect/commit/60bc3d0867b13e48b24dc22604b4dd2e7b2c1ca4), [`79d2d91`](https://github.com/Effect-TS/effect/commit/79d2d91464d95dde0e9444d43e7a7f309f05d6e6), [`ac71f37`](https://github.com/Effect-TS/effect/commit/ac71f378f2413e5aa91c95f649ffe898d6a26114), [`8432360`](https://github.com/Effect-TS/effect/commit/8432360ce68614a419bb328083a4109d0fc8aa93), [`e4bf1bf`](https://github.com/Effect-TS/effect/commit/e4bf1bf2b4a970eacd77c9b77b5ea8c68bc84498), [`13cb861`](https://github.com/Effect-TS/effect/commit/13cb861a5eded15c55c6cdcf6a8acde8320367a6), [`79d2d91`](https://github.com/Effect-TS/effect/commit/79d2d91464d95dde0e9444d43e7a7f309f05d6e6), [`e7fc45f`](https://github.com/Effect-TS/effect/commit/e7fc45f0c7002aafdaec7878149ac064cd104ea3), [`9f66825`](https://github.com/Effect-TS/effect/commit/9f66825f1fce0fe8d10420c285f7dc4c71e8af8d)]:
  - effect@3.5.0
  - @effect/sql@0.4.23

## 0.3.22

### Patch Changes

- Updated dependencies [[`7af137c`](https://github.com/Effect-TS/effect/commit/7af137c9433f6e74959b3887561ec1e6f12e10ee), [`ee4b3dc`](https://github.com/Effect-TS/effect/commit/ee4b3dc5f68d19dc3ae1c2d12901c5b8ffbebabb), [`097d25c`](https://github.com/Effect-TS/effect/commit/097d25cb5d13c049e01789651be56b09620186ef)]:
  - effect@3.4.9
  - @effect/sql@0.4.22

## 0.3.21

### Patch Changes

- Updated dependencies [[`a435e0f`](https://github.com/Effect-TS/effect/commit/a435e0fc5378b33a49bcec92ee235df6f16a2419), [`b5554db`](https://github.com/Effect-TS/effect/commit/b5554db36c4dd6f64fa5e6a62a29b2759c54217a), [`a9c4fb3`](https://github.com/Effect-TS/effect/commit/a9c4fb3bf3c6e92cd1c142b0605fddf7eb3c697c)]:
  - effect@3.4.8
  - @effect/sql@0.4.21

## 0.3.20

### Patch Changes

- Updated dependencies [[`a5737d6`](https://github.com/Effect-TS/effect/commit/a5737d6db2b921605c332eabbc5402ee3d17357b)]:
  - effect@3.4.7
  - @effect/sql@0.4.20

## 0.3.19

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.19

## 0.3.18

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.18

## 0.3.17

### Patch Changes

- Updated dependencies [[`5c0ceb0`](https://github.com/Effect-TS/effect/commit/5c0ceb00826cce9e50bf9d41d83e191d5352c030), [`5c0ceb0`](https://github.com/Effect-TS/effect/commit/5c0ceb00826cce9e50bf9d41d83e191d5352c030), [`33735b1`](https://github.com/Effect-TS/effect/commit/33735b16b41bd26929d8f4754c190925db6323b7), [`5c0ceb0`](https://github.com/Effect-TS/effect/commit/5c0ceb00826cce9e50bf9d41d83e191d5352c030), [`139d4b3`](https://github.com/Effect-TS/effect/commit/139d4b39fb3bff2eeaa7c0c809c581da42425a83)]:
  - effect@3.4.6
  - @effect/sql@0.4.17

## 0.3.16

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.16

## 0.3.15

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.15

## 0.3.14

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.14

## 0.3.13

### Patch Changes

- Updated dependencies [[`a047af9`](https://github.com/Effect-TS/effect/commit/a047af99447dfffc729e9c8ef0ca143537927e91)]:
  - effect@3.4.5
  - @effect/sql@0.4.13

## 0.3.12

### Patch Changes

- Updated dependencies [[`72638e3`](https://github.com/Effect-TS/effect/commit/72638e3d99f0e93a24febf6c225256ce92d4a20b), [`d7dde2b`](https://github.com/Effect-TS/effect/commit/d7dde2b4af08b37af859d4c327c1f5c6f00cf9d9), [`9b2fc3b`](https://github.com/Effect-TS/effect/commit/9b2fc3b9dfd304a2bd0508ef2313cfc54357be0c)]:
  - effect@3.4.4
  - @effect/sql@0.4.12

## 0.3.11

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.11

## 0.3.10

### Patch Changes

- [#3079](https://github.com/Effect-TS/effect/pull/3079) [`bbdd365`](https://github.com/Effect-TS/effect/commit/bbdd36567706c94cdec45bacea825941c347b6cd) Thanks @tim-smart! - update dependencies

- [#3079](https://github.com/Effect-TS/effect/pull/3079) [`bbdd365`](https://github.com/Effect-TS/effect/commit/bbdd36567706c94cdec45bacea825941c347b6cd) Thanks @tim-smart! - update to typescript 5.5

- Updated dependencies [[`c342739`](https://github.com/Effect-TS/effect/commit/c3427396226e1ad7b95b40595a23f9bdff3e3365), [`8898e5e`](https://github.com/Effect-TS/effect/commit/8898e5e238622f6337583d91ee23609c1f5ccdf7), [`ff78636`](https://github.com/Effect-TS/effect/commit/ff786367c522975f40f0f179a0ecdfcfab7ecbdb), [`c86bd4e`](https://github.com/Effect-TS/effect/commit/c86bd4e134c23146c216f9ff97e03781d55991b6), [`bbdd365`](https://github.com/Effect-TS/effect/commit/bbdd36567706c94cdec45bacea825941c347b6cd), [`bbdd365`](https://github.com/Effect-TS/effect/commit/bbdd36567706c94cdec45bacea825941c347b6cd)]:
  - effect@3.4.3
  - @effect/sql@0.4.10

## 0.3.9

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.9

## 0.3.8

### Patch Changes

- Updated dependencies [[`3da1497`](https://github.com/Effect-TS/effect/commit/3da1497b5c9cc886d300258bc928fd68a4fefe6f)]:
  - effect@3.4.2
  - @effect/sql@0.4.8

## 0.3.7

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.7

## 0.3.6

### Patch Changes

- Updated dependencies [[`66a1910`](https://github.com/Effect-TS/effect/commit/66a19109ff90c4252123b8809b8c8a74681dba6a)]:
  - effect@3.4.1
  - @effect/sql@0.4.6

## 0.3.5

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.5

## 0.3.4

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.4

## 0.3.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.3

## 0.3.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.2

## 0.3.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.4.1

## 0.3.0

### Minor Changes

- [#3035](https://github.com/Effect-TS/effect/pull/3035) [`d33d8b0`](https://github.com/Effect-TS/effect/commit/d33d8b050b8e3c87dcde9587083e6c1cf733f72b) Thanks @tim-smart! - restructure sql modules to have flat imports

### Patch Changes

- Updated dependencies [[`c0ce180`](https://github.com/Effect-TS/effect/commit/c0ce180861ad0938053c0e6145e813fa6404df3b), [`d33d8b0`](https://github.com/Effect-TS/effect/commit/d33d8b050b8e3c87dcde9587083e6c1cf733f72b), [`61707b6`](https://github.com/Effect-TS/effect/commit/61707b6ffc7397c2ba0dce22512b44955724f60f), [`9c1b5b3`](https://github.com/Effect-TS/effect/commit/9c1b5b39e6c19604ce834f072a114ad392c50a06), [`a35faf8`](https://github.com/Effect-TS/effect/commit/a35faf8d116f94899bfc03feab33b004c8ddfdf7), [`ff73c0c`](https://github.com/Effect-TS/effect/commit/ff73c0cacd66132bfad2e5211b3eae347729c667), [`984d516`](https://github.com/Effect-TS/effect/commit/984d516ccd9412dc41188f6a46b748dd20dd5848), [`8c3b8a2`](https://github.com/Effect-TS/effect/commit/8c3b8a2ce208eab753b6206a51605a424f104e98), [`017e2f9`](https://github.com/Effect-TS/effect/commit/017e2f9b371ce24ea4945e5d7390c934ad3c39cf), [`91bf8a2`](https://github.com/Effect-TS/effect/commit/91bf8a2e9d1959393b3cf7366cc1d584d3e666b7), [`c6a4a26`](https://github.com/Effect-TS/effect/commit/c6a4a266606575fd2c7165940c4072ad4c57d01f)]:
  - effect@3.4.0
  - @effect/sql@0.4.0

## 0.2.37

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.3.18

## 0.2.36

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.3.17

## 0.2.35

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.3.16

## 0.2.34

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.3.15

## 0.2.33

### Patch Changes

- Updated dependencies [[`6c89408`](https://github.com/Effect-TS/effect/commit/6c89408cd7b9204ec4c5828a46cd5312d8afb5e7)]:
  - effect@3.3.5
  - @effect/sql@0.3.14

## 0.2.32

### Patch Changes

- Updated dependencies [[`a67b8fe`](https://github.com/Effect-TS/effect/commit/a67b8fe2ace08419424811b5f0d9a5378eaea352)]:
  - effect@3.3.4
  - @effect/sql@0.3.13

## 0.2.31

### Patch Changes

- Updated dependencies [[`06ede85`](https://github.com/Effect-TS/effect/commit/06ede85d6e84710e6622463be95ff3927fb30dad), [`7204ca5`](https://github.com/Effect-TS/effect/commit/7204ca5761c2b1d27999a624db23aa10b6e0504d)]:
  - effect@3.3.3
  - @effect/sql@0.3.12

## 0.2.30

### Patch Changes

- Updated dependencies [[`3572646`](https://github.com/Effect-TS/effect/commit/3572646d5e0804f85bc7f64633fb95722533f9dd), [`1aed347`](https://github.com/Effect-TS/effect/commit/1aed347a125ed3847ec90863424810d6759cbc85), [`df4bf4b`](https://github.com/Effect-TS/effect/commit/df4bf4b62e7b316c6647da0271fc5544a84e7ba2), [`f085f92`](https://github.com/Effect-TS/effect/commit/f085f92dfa204afb41823ffc27d437225137643d)]:
  - effect@3.3.2
  - @effect/sql@0.3.11

## 0.2.29

### Patch Changes

- Updated dependencies [[`eb98c5b`](https://github.com/Effect-TS/effect/commit/eb98c5b79ab50aa0cde239bd4e660dd19dbab612), [`184fed8`](https://github.com/Effect-TS/effect/commit/184fed83ac36cba05a75a5a8013f740f9f696e3b), [`6068e07`](https://github.com/Effect-TS/effect/commit/6068e073d4cc8b3c8583583fd5eb3efe43f7d5ba), [`3a77e20`](https://github.com/Effect-TS/effect/commit/3a77e209783933bac3aaddba1b05ff6a9ac72b36)]:
  - effect@3.3.1
  - @effect/sql@0.3.10

## 0.2.28

### Patch Changes

- Updated dependencies [[`1f4ac00`](https://github.com/Effect-TS/effect/commit/1f4ac00a91c336c9c9c9b8c3ed9ceb9920ebc9bd), [`9305b76`](https://github.com/Effect-TS/effect/commit/9305b764cceeae4f16564435ae7172f79c2bf822), [`0f40d98`](https://github.com/Effect-TS/effect/commit/0f40d989da10f68df3ecd72b36849401ad679bfb), [`b761ef0`](https://github.com/Effect-TS/effect/commit/b761ef00eaf6c67b7ffe34798b98aae5347ab376), [`b53f69b`](https://github.com/Effect-TS/effect/commit/b53f69bff1452a487b21198cd83961f844e02d36), [`0f40d98`](https://github.com/Effect-TS/effect/commit/0f40d989da10f68df3ecd72b36849401ad679bfb), [`5bd549e`](https://github.com/Effect-TS/effect/commit/5bd549e4bd7144727db438ecca6b8dc9b3ef7e22), [`67f160a`](https://github.com/Effect-TS/effect/commit/67f160a213de0219a565d4bf653b3cbf24f58e8f)]:
  - effect@3.3.0
  - @effect/sql@0.3.9

## 0.2.27

### Patch Changes

- [#2932](https://github.com/Effect-TS/effect/pull/2932) [`fd8d860`](https://github.com/Effect-TS/effect/commit/fd8d8604320e69405226e47b62fc7d7656bd643a) Thanks @tim-smart! - update @effect/sql dependencies

- Updated dependencies []:
  - @effect/sql@0.3.8

## 0.2.26

### Patch Changes

- Updated dependencies [[`8c5d280`](https://github.com/Effect-TS/effect/commit/8c5d280c0402284a4e58372867a15a431cb99461), [`6ba6d26`](https://github.com/Effect-TS/effect/commit/6ba6d269f5891e6b11aa35c5281dde4bf3273004), [`3f28bf2`](https://github.com/Effect-TS/effect/commit/3f28bf274333611906175446b772243f34f1b6d5), [`5817820`](https://github.com/Effect-TS/effect/commit/58178204a770d1a78c06945ef438f9fffbb50afa)]:
  - effect@3.2.9
  - @effect/sql@0.3.7

## 0.2.25

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.3.6

## 0.2.24

### Patch Changes

- Updated dependencies [[`fb91f17`](https://github.com/Effect-TS/effect/commit/fb91f17098b48497feca9ec976feb87e4a82451b)]:
  - effect@3.2.8
  - @effect/sql@0.3.5

## 0.2.23

### Patch Changes

- Updated dependencies [[`6801fca`](https://github.com/Effect-TS/effect/commit/6801fca44366be3ee1b6b99f54bd4f38a1b5e4f4)]:
  - effect@3.2.7
  - @effect/sql@0.3.4

## 0.2.22

### Patch Changes

- Updated dependencies [[`cc8ac50`](https://github.com/Effect-TS/effect/commit/cc8ac5080daba8622ca2ff5dab5c37ddfab732ba)]:
  - effect@3.2.6
  - @effect/sql@0.3.3

## 0.2.21

### Patch Changes

- Updated dependencies [[`3e86ced`](https://github.com/Effect-TS/effect/commit/3e86cedfa2507dbf5475c1cb10e0018d00e5593d)]:
  - @effect/sql@0.3.2

## 0.2.20

### Patch Changes

- [#2858](https://github.com/Effect-TS/effect/pull/2858) [`a0f989d`](https://github.com/Effect-TS/effect/commit/a0f989d382f3df432dd10f345ae0054d58545852) Thanks @tim-smart! - ensure sqlite wasm type id is unique

- Updated dependencies []:
  - @effect/sql@0.3.1

## 0.2.19

### Patch Changes

- [#2838](https://github.com/Effect-TS/effect/pull/2838) [`bf66289`](https://github.com/Effect-TS/effect/commit/bf662893dca07351b249e4ec1d1a9d0108d6f9e1) Thanks @tim-smart! - allow additional span attributes to be passed to sql clients

## 0.2.18

### Patch Changes

- Updated dependencies [[`af0543c`](https://github.com/Effect-TS/effect/commit/af0543cbe62e9b9c0bd0ecb1ce2e5814b2c3caaa), [`608b01f`](https://github.com/Effect-TS/effect/commit/608b01fc342dbae2a642b308a67b84ead530ecea), [`031c712`](https://github.com/Effect-TS/effect/commit/031c7122a24ac42e48d6a434646b4f5d279d7442), [`a44e532`](https://github.com/Effect-TS/effect/commit/a44e532cf3a6a498b12a5aacf8124aa267e24ba0)]:
  - @effect/sql@0.3.0
  - effect@3.2.5

## 0.2.17

### Patch Changes

- Updated dependencies [[`1af94df`](https://github.com/Effect-TS/effect/commit/1af94df6b74aeb4f6ebcbe80e074b4cb252e62e3), [`e313a01`](https://github.com/Effect-TS/effect/commit/e313a01b7e80f6cb7704055a190e5623c9d22c6d)]:
  - effect@3.2.4
  - @effect/sql@0.2.17

## 0.2.16

### Patch Changes

- [#2803](https://github.com/Effect-TS/effect/pull/2803) [`5af633e`](https://github.com/Effect-TS/effect/commit/5af633eb5ff6560a64d87263d1692bb9c75f7b3c) Thanks @tim-smart! - update dependencies

- Updated dependencies [[`45578e8`](https://github.com/Effect-TS/effect/commit/45578e8faa80ae33d23e08f6f19467f818b7788f)]:
  - effect@3.2.3
  - @effect/sql@0.2.16

## 0.2.15

### Patch Changes

- Updated dependencies [[`5d9266e`](https://github.com/Effect-TS/effect/commit/5d9266e8c740746ac9e186c3df6090a1b57fbe2a), [`9f8122e`](https://github.com/Effect-TS/effect/commit/9f8122e78884ab47c5e5f364d86eee1d1543cc61), [`6a6f670`](https://github.com/Effect-TS/effect/commit/6a6f6706b8613c8c7c10971b8d81a0f9e440a6f2)]:
  - effect@3.2.2
  - @effect/sql@0.2.15

## 0.2.14

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.14

## 0.2.13

### Patch Changes

- Updated dependencies [[`c1e991d`](https://github.com/Effect-TS/effect/commit/c1e991dd5ba87901cd0e05697a8b4a267e7e954a)]:
  - effect@3.2.1
  - @effect/sql@0.2.13

## 0.2.12

### Patch Changes

- Updated dependencies [[`146cadd`](https://github.com/Effect-TS/effect/commit/146cadd9d004634a3ff85c480bf92cf975c853e2), [`7135748`](https://github.com/Effect-TS/effect/commit/713574813a0f64085db0b5240ba39e7a0a7c137e), [`7135748`](https://github.com/Effect-TS/effect/commit/713574813a0f64085db0b5240ba39e7a0a7c137e), [`963b4e7`](https://github.com/Effect-TS/effect/commit/963b4e7ac87e2468feb6a344f7ab4ee4ad711198), [`64c9414`](https://github.com/Effect-TS/effect/commit/64c9414e960e82058ca09bbb3976d6fbef303a8e), [`7135748`](https://github.com/Effect-TS/effect/commit/713574813a0f64085db0b5240ba39e7a0a7c137e), [`2cbb76b`](https://github.com/Effect-TS/effect/commit/2cbb76bb52500a3f4bf27d1c91482518cbea56d7), [`870c5fa`](https://github.com/Effect-TS/effect/commit/870c5fa52cd61e745e8e828d38c3f09f00737553), [`7135748`](https://github.com/Effect-TS/effect/commit/713574813a0f64085db0b5240ba39e7a0a7c137e), [`64c9414`](https://github.com/Effect-TS/effect/commit/64c9414e960e82058ca09bbb3976d6fbef303a8e)]:
  - effect@3.2.0
  - @effect/sql@0.2.12

## 0.2.11

### Patch Changes

- Updated dependencies [[`17fc22e`](https://github.com/Effect-TS/effect/commit/17fc22e132593c5caa563705a4748ba0f04a853c), [`810f222`](https://github.com/Effect-TS/effect/commit/810f222268792b13067c7a7bf317b93a9bb8917b), [`596aaea`](https://github.com/Effect-TS/effect/commit/596aaea022648b2e06fb1ec22f1652043d6fe64e)]:
  - effect@3.1.6
  - @effect/sql@0.2.11

## 0.2.10

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.10

## 0.2.9

### Patch Changes

- [#2712](https://github.com/Effect-TS/effect/pull/2712) [`01b4553`](https://github.com/Effect-TS/effect/commit/01b4553df4d2a7c5824a112f405a49f8fcfebbf4) Thanks [@vecerek](https://github.com/vecerek)! - Use constants from `@opentelemetry/semantic-conventions` as span attribute names instead of hard-coded values

- Updated dependencies [[`01b4553`](https://github.com/Effect-TS/effect/commit/01b4553df4d2a7c5824a112f405a49f8fcfebbf4)]:
  - @effect/sql@0.2.9

## 0.2.8

### Patch Changes

- Updated dependencies [[`6ac4847`](https://github.com/Effect-TS/effect/commit/6ac48479447c01a4f35d655552af93e47e562610)]:
  - effect@3.1.5
  - @effect/sql@0.2.8

## 0.2.7

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.7

## 0.2.6

### Patch Changes

- Updated dependencies [[`e41e911`](https://github.com/Effect-TS/effect/commit/e41e91122fa6dd12fc81e50dcad0db891be67146)]:
  - effect@3.1.4
  - @effect/sql@0.2.6

## 0.2.5

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.5

## 0.2.4

### Patch Changes

- Updated dependencies [[`1f6dc96`](https://github.com/Effect-TS/effect/commit/1f6dc96f51c7bb9c8d11415358308604ba7c7c8e)]:
  - effect@3.1.3
  - @effect/sql@0.2.4

## 0.2.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.3

## 0.2.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.2

## 0.2.1

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.2.1

## 0.2.0

### Minor Changes

- [#2693](https://github.com/Effect-TS/effect/pull/2693) [`0724274`](https://github.com/Effect-TS/effect/commit/07242746ed8a3b0383631108360a0ad4f6e062f0) Thanks [@tim-smart](https://github.com/tim-smart)! - make @effect/sql dialect agnostic

  All of the client implementations now share the same Context.Tag. This means you can create
  services that support multiple SQL flavors.

  You can now use the `@effect/sql` package to access the client apis:

  ```ts
  import * as Sql from "@effect/sql"
  import { Effect } from "effect"

  Effect.gen(function* () {
    const sql = yield* Sql.client.Client
    yield* sql`SELECT * FROM users`
  })
  ```

  If you need a functionality that is specific to a implementation, you can use the tag from the
  implementation package:

  ```ts
  import * as Sqlite from "@effect/sql-sqlite-node"
  import { Effect } from "effect"

  Effect.gen(function* () {
    const sql = yield* Sqlite.client.SqliteClient
    const dump = yield* sql.export
  })
  ```

  If you need to run a different query depending on the dialect, you can use the `sql.onDialect` api:

  ```ts
  import * as Sql from "@effect/sql"
  import { Effect } from "effect"

  Effect.gen(function* () {
    const sql = yield* Sql.client.Client
    yield* sql.onDialect({
      sqlite: () => sql`SELECT * FROM sqlite_master`,
      mysql: () => sql`SHOW TABLES`,
      mssql: () => sql`SELECT * FROM sys.tables`,
      pg: () => sql`SELECT * FROM pg_catalog.pg_tables`
    })
  })
  ```

### Patch Changes

- [#2693](https://github.com/Effect-TS/effect/pull/2693) [`0724274`](https://github.com/Effect-TS/effect/commit/07242746ed8a3b0383631108360a0ad4f6e062f0) Thanks [@tim-smart](https://github.com/tim-smart)! - add .returning helper to insert and update apis

- Updated dependencies [[`0724274`](https://github.com/Effect-TS/effect/commit/07242746ed8a3b0383631108360a0ad4f6e062f0), [`0724274`](https://github.com/Effect-TS/effect/commit/07242746ed8a3b0383631108360a0ad4f6e062f0)]:
  - @effect/sql@0.2.0

## 0.1.17

### Patch Changes

- Updated dependencies [[`2e1cdf6`](https://github.com/Effect-TS/effect/commit/2e1cdf67d141281288fffe9a5c10d1379a800513), [`d3cf2d8`](https://github.com/Effect-TS/effect/commit/d3cf2d80038310ccc0a6a015d13d86291a953b41), [`56ec8dd`](https://github.com/Effect-TS/effect/commit/56ec8ddc3495f11a1ca8acc59098d9a2f5ced615)]:
  - effect@3.1.2
  - @effect/sql@0.1.17

## 0.1.16

### Patch Changes

- Updated dependencies [[`e5e56d1`](https://github.com/Effect-TS/effect/commit/e5e56d138dbed3204636f605229c6685f89659fc)]:
  - effect@3.1.1
  - @effect/sql@0.1.16

## 0.1.15

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.1.15

## 0.1.14

### Patch Changes

- Updated dependencies [[`c3c12c6`](https://github.com/Effect-TS/effect/commit/c3c12c6625633fe80e79f9db75a3b8cf8ca8b11d), [`ba64ea6`](https://github.com/Effect-TS/effect/commit/ba64ea6757810c5e74cad3863a7d19d4d38af66b), [`b5de2d2`](https://github.com/Effect-TS/effect/commit/b5de2d2ce5b1afe8be90827bf898a95cec40eb2b), [`a1c7ab8`](https://github.com/Effect-TS/effect/commit/a1c7ab8ffedacd18c1fc784f4ff5844f79498b83), [`a023f28`](https://github.com/Effect-TS/effect/commit/a023f28336f3865687d9a30c1883e36909906d85), [`1c9454d`](https://github.com/Effect-TS/effect/commit/1c9454d532eae79b9f759aea77f59332cc6d18ed), [`a023f28`](https://github.com/Effect-TS/effect/commit/a023f28336f3865687d9a30c1883e36909906d85), [`92d56db`](https://github.com/Effect-TS/effect/commit/92d56dbb3f33e36636c2a2f1030c56492e39cf4d)]:
  - effect@3.1.0
  - @effect/sql@0.1.14

## 0.1.13

### Patch Changes

- [#2656](https://github.com/Effect-TS/effect/pull/2656) [`557707b`](https://github.com/Effect-TS/effect/commit/557707bc9e5f230c8964d2757012075c34339b5c) Thanks [@tim-smart](https://github.com/tim-smart)! - update dependencies

- Updated dependencies [[`557707b`](https://github.com/Effect-TS/effect/commit/557707bc9e5f230c8964d2757012075c34339b5c), [`f4ed306`](https://github.com/Effect-TS/effect/commit/f4ed3068a70b50302d078a30d18ca3cfd2bc679c), [`661004f`](https://github.com/Effect-TS/effect/commit/661004f4bf5f8b25f5a0678c21a3a822188ce461), [`e79cb83`](https://github.com/Effect-TS/effect/commit/e79cb83d3b19098bc40a3012e2a059b8426306c2)]:
  - effect@3.0.8
  - @effect/sql@0.1.13

## 0.1.12

### Patch Changes

- Updated dependencies [[`18de56b`](https://github.com/Effect-TS/effect/commit/18de56b4a6b6d1f99230dfabf9147d59ea4dd759)]:
  - effect@3.0.7
  - @effect/sql@0.1.12

## 0.1.11

### Patch Changes

- [#2621](https://github.com/Effect-TS/effect/pull/2621) [`f363af0`](https://github.com/Effect-TS/effect/commit/f363af08df9426a8bc629d80ef57d8b7e243ffa6) Thanks [@tim-smart](https://github.com/tim-smart)! - add sql transaction tracing spans

- [#2621](https://github.com/Effect-TS/effect/pull/2621) [`f363af0`](https://github.com/Effect-TS/effect/commit/f363af08df9426a8bc629d80ef57d8b7e243ffa6) Thanks [@tim-smart](https://github.com/tim-smart)! - update sql span attributes to follow semantic conventions

- [#2621](https://github.com/Effect-TS/effect/pull/2621) [`f363af0`](https://github.com/Effect-TS/effect/commit/f363af08df9426a8bc629d80ef57d8b7e243ffa6) Thanks [@tim-smart](https://github.com/tim-smart)! - add sql`...`.unprepared, to run a query without trying to PREPARE it

- Updated dependencies [[`ffe4f4e`](https://github.com/Effect-TS/effect/commit/ffe4f4e95db35fff6869e360b072e3837befa0a1), [`027418e`](https://github.com/Effect-TS/effect/commit/027418edaa6aa6c0ae4861b95832827b45adace4), [`f363af0`](https://github.com/Effect-TS/effect/commit/f363af08df9426a8bc629d80ef57d8b7e243ffa6), [`ac1898e`](https://github.com/Effect-TS/effect/commit/ac1898eb7bc96880f911c276048e2ea3d6fe9c50), [`ffe4f4e`](https://github.com/Effect-TS/effect/commit/ffe4f4e95db35fff6869e360b072e3837befa0a1), [`f363af0`](https://github.com/Effect-TS/effect/commit/f363af08df9426a8bc629d80ef57d8b7e243ffa6), [`f363af0`](https://github.com/Effect-TS/effect/commit/f363af08df9426a8bc629d80ef57d8b7e243ffa6)]:
  - effect@3.0.6
  - @effect/sql@0.1.11

## 0.1.10

### Patch Changes

- Updated dependencies [[`6222404`](https://github.com/Effect-TS/effect/commit/62224044678751829ed2f128e05133a91c6b0569), [`868ed2a`](https://github.com/Effect-TS/effect/commit/868ed2a8fe94ee7f4206a6070f29dcf2a5ba1dc3)]:
  - effect@3.0.5
  - @effect/sql@0.1.10

## 0.1.9

### Patch Changes

- Updated dependencies [[`9a24667`](https://github.com/Effect-TS/effect/commit/9a246672008a2b668d43fbfd2fe5508c54b2b920)]:
  - effect@3.0.4
  - @effect/sql@0.1.9

## 0.1.8

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.1.8

## 0.1.7

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.1.7

## 0.1.6

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.1.6

## 0.1.5

### Patch Changes

- Updated dependencies [[`a7b4b84`](https://github.com/Effect-TS/effect/commit/a7b4b84bd5a25f51aba922f9259c3a58c98c6a4e)]:
  - effect@3.0.3
  - @effect/sql@0.1.5

## 0.1.4

### Patch Changes

- [#2562](https://github.com/Effect-TS/effect/pull/2562) [`2cecdbd`](https://github.com/Effect-TS/effect/commit/2cecdbd1cf30befce4e84796ccd953ea55ecfb86) Thanks [@fubhy](https://github.com/fubhy)! - Added provenance publishing

- Updated dependencies [[`2cecdbd`](https://github.com/Effect-TS/effect/commit/2cecdbd1cf30befce4e84796ccd953ea55ecfb86)]:
  - effect@3.0.2
  - @effect/sql@0.1.4

## 0.1.3

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.1.3

## 0.1.2

### Patch Changes

- Updated dependencies []:
  - @effect/sql@0.1.2

## 0.1.1

### Patch Changes

- Updated dependencies [[`3da0cfa`](https://github.com/Effect-TS/effect/commit/3da0cfa12c407fd930dc480be1ecc9217a8058f8), [`570e8d8`](https://github.com/Effect-TS/effect/commit/570e8d87e7c0e9ad4cd2686462fdb9b4812f7716), [`f838c15`](https://github.com/Effect-TS/effect/commit/f838c15ca83938a5ee9bfec49deb025564a570ff), [`8edacca`](https://github.com/Effect-TS/effect/commit/8edacca37f8e37c01a63fec332b06d9361efaa7b)]:
  - effect@3.0.1
  - @effect/sql@0.1.1

## 0.1.0

### Minor Changes

- [#2104](https://github.com/Effect-TS/effect/pull/2104) [`1499974`](https://github.com/Effect-TS/effect/commit/14999741d2e19c1747f6a7e19d68977f6429cdb8) Thanks [@IMax153](https://github.com/IMax153)! - initial @effect/sql release

- [#2207](https://github.com/Effect-TS/effect/pull/2207) [`2fb7d9c`](https://github.com/Effect-TS/effect/commit/2fb7d9ca15037ff62a578bb9fe5732da5f4f317d) Thanks [@github-actions](https://github.com/apps/github-actions)! - Release Effect 3.0 🎉

### Patch Changes

- Updated dependencies [[`1b5f0c7`](https://github.com/Effect-TS/effect/commit/1b5f0c77e7fd477a0026071e82129a948227f4b3), [`d50a652`](https://github.com/Effect-TS/effect/commit/d50a652479f4d1d64f48da05c79fa847e6e51548), [`9a3bd47`](https://github.com/Effect-TS/effect/commit/9a3bd47ebd0750c7e498162734f6d21895de0cb2), [`1499974`](https://github.com/Effect-TS/effect/commit/14999741d2e19c1747f6a7e19d68977f6429cdb8), [`be9d025`](https://github.com/Effect-TS/effect/commit/be9d025e42355260ace02dd135851a8935a4deba), [`78b767c`](https://github.com/Effect-TS/effect/commit/78b767c2b1625186e17131761a0edbac25d21850), [`1499974`](https://github.com/Effect-TS/effect/commit/14999741d2e19c1747f6a7e19d68977f6429cdb8), [`1b5f0c7`](https://github.com/Effect-TS/effect/commit/1b5f0c77e7fd477a0026071e82129a948227f4b3), [`5c2b561`](https://github.com/Effect-TS/effect/commit/5c2b5614f583b88784ed68126ae939832fb3c092), [`a18f594`](https://github.com/Effect-TS/effect/commit/a18f5948f1439a147232448b2c443472fda0eceb), [`1499974`](https://github.com/Effect-TS/effect/commit/14999741d2e19c1747f6a7e19d68977f6429cdb8), [`2f96d93`](https://github.com/Effect-TS/effect/commit/2f96d938b90f8c19377583279e3c7afd9b509c50), [`5a2314b`](https://github.com/Effect-TS/effect/commit/5a2314b70ec79c2c02b51cef45a5ddec8327daa1), [`271b79f`](https://github.com/Effect-TS/effect/commit/271b79fc0b66a6c11e07a8779ff8800493a7eac2), [`1b5f0c7`](https://github.com/Effect-TS/effect/commit/1b5f0c77e7fd477a0026071e82129a948227f4b3), [`2fb7d9c`](https://github.com/Effect-TS/effect/commit/2fb7d9ca15037ff62a578bb9fe5732da5f4f317d), [`53d1c2a`](https://github.com/Effect-TS/effect/commit/53d1c2a77559081fbb89667e343346375c6d6650), [`e7e1bbe`](https://github.com/Effect-TS/effect/commit/e7e1bbe68486fdf31c8f84b0880522d39adcaad3), [`10c169e`](https://github.com/Effect-TS/effect/commit/10c169eadc874e91b4defca3f467b4e6a50fd8f3), [`6424181`](https://github.com/Effect-TS/effect/commit/64241815fe6a939e91e6947253e7dceea1306aa8)]:
  - effect@3.0.0
  - @effect/sql@0.1.0
