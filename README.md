### Node vs Rust Webserver comparison

Simple comparison of a few of popular web frameworks and languages

- NodeJS Express,
- NodeJS Fastify
- Rust (actix)
- Rust (axum)
- Go


## Running Benchmarks:

Will need Node.js, Rust, Go & K6 installed.

I used the following versions:

- node v20.10.0
- rustc 1.76.0 (07dca489a 2024-02-04)
- go version go1.22.0 darwin/arm64
- k6 v0.49.0 (go1.21.6, darwin/arm64)

Everything is managed using lerna, run the benchmark suite and it build the apps, run the benchmarks and print out a comparison table

```powershell
npm run benchmark
```