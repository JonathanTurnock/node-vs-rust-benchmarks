### Node vs Rust Webserver comparison

Simple comparison of a couple of popular web frameworks

- NodeJS Express,
- NodeJS Fastify
- Rust (actix)
- Rust (axum)

Testing methodology was to run the tests until the numbers normalized and then pull out a good representative example.

Tests run on a 13-inch, M1, 2020 16GB.

**Testing:**
Endpoint is a simple endpoint that generates a random string of size 256, i.e.

```javascript
const crypto = require('crypto')
const fastify = require('fastify')({logger: false});

fastify.get('/', async (request, reply) => {
    return {randomString: crypto.randomBytes(256).toString('hex')};
});

fastify.listen({port: 3000})
```

Utilized K6, to run tests which yielded the following comparison:

| Metric                      | Express   | Fastify   | Rust (actix) | Rust (axum) |
|-----------------------------|-----------|-----------|--------------|-------------|
| **Data Received**           | 359 MB    | 838 MB    | 1.3 GB       | 1.4 GB      |
| **Data Sent**               | 37 MB     | 95 MB     | 157 MB       | 177 MB      |
| **HTTP Requests (Total)**   | 467,647   | 1,192,177 | 1,961,782    | 2,212,060   |
| **HTTP Req Duration (avg)** | 627.63 µs | 236.53 µs | 122.88 µs    | 108.26 µs   |
| **Longest Req**             | 25.91 ms  | 21.31 ms  | 125.1 ms     | 103.35 ms   |
| **Requests/sec**            | 15,588.05 | 39,739.35 | 65,392.51    | 73,726.44   |
| **Failed Requests**         | 0% (0)    | 0% (0)    | 0% (0)       | 0% (0)      |
| **VUs (Virtual Users)**     | 10        | 10        | 10           | 10          |

Detailed run results can be read from [RESULTS.md](RESULTS.md)

## Running Benchmarks:

Will need Node.js, Rust & K6 installed.

I used the following versions:

- node v20.10.0
- rustc 1.76.0 (07dca489a 2024-02-04)
- k6 v0.49.0 (go1.21.6, darwin/arm64)

To run the JS apps run

```shell
npm run express
```

OR

```shell
npm run fastify
```

To run the rust app uncomment the relevant app to be tested and run

```shell
cargo build -r
./target/release/web-server
```

To run the tests run k6 using the `benchmark` npm script

```shell
npm run benchmark
```