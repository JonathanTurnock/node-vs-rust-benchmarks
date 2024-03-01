# Express

```shell

> web-server@1.0.0 benchmark
> k6 run script.js


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: script.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 359 MB 12 MB/s
     data_sent......................: 37 MB  1.2 MB/s
     http_req_blocked...............: avg=500ns    min=0s      med=0s       max=1.72ms  p(90)=1µs    p(95)=1µs   
     http_req_connecting............: avg=15ns     min=0s      med=0s       max=929µs   p(90)=0s     p(95)=0s    
     http_req_duration..............: avg=627.63µs min=77µs    med=529µs    max=25.91ms p(90)=1.02ms p(95)=1.12ms
       { expected_response:true }...: avg=627.63µs min=77µs    med=529µs    max=25.91ms p(90)=1.02ms p(95)=1.12ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 467647
     http_req_receiving.............: avg=8.25µs   min=4µs     med=7µs      max=4.66ms  p(90)=11µs   p(95)=14µs  
     http_req_sending...............: avg=1.92µs   min=1µs     med=2µs      max=3.34ms  p(90)=2µs    p(95)=3µs   
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s     p(95)=0s    
     http_req_waiting...............: avg=617.45µs min=72µs    med=520µs    max=25.89ms p(90)=1.01ms p(95)=1.1ms 
     http_reqs......................: 467647 15588.048875/s
     iteration_duration.............: avg=639.04µs min=89.04µs med=539.83µs max=25.92ms p(90)=1.04ms p(95)=1.13ms
     iterations.....................: 467647 15588.048875/s
     vus............................: 10     min=10         max=10  
     vus_max........................: 10     min=10         max=10  


running (0m30.0s), 00/10 VUs, 467647 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```

# Fastify

```shell


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: script.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 838 MB  28 MB/s
     data_sent......................: 95 MB   3.2 MB/s
     http_req_blocked...............: avg=583ns    min=0s      med=0s       max=3.73ms  p(90)=1µs      p(95)=1µs     
     http_req_connecting............: avg=3ns      min=0s      med=0s       max=600µs   p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=236.53µs min=33µs    med=182µs    max=21.31ms p(90)=371µs    p(95)=458µs   
       { expected_response:true }...: avg=236.53µs min=33µs    med=182µs    max=21.31ms p(90)=371µs    p(95)=458µs   
     http_req_failed................: 0.00%   ✓ 0            ✗ 1192177
     http_req_receiving.............: avg=7.11µs   min=3µs     med=5µs      max=20.54ms p(90)=9µs      p(95)=13µs    
     http_req_sending...............: avg=2.29µs   min=1µs     med=2µs      max=8.81ms  p(90)=3µs      p(95)=6µs     
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s      p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=227.13µs min=27µs    med=173µs    max=13.84ms p(90)=361µs    p(95)=444µs   
     http_reqs......................: 1192177 39739.351227/s
     iteration_duration.............: avg=248.83µs min=40.45µs med=192.66µs max=21.33ms p(90)=383.83µs p(95)=475.04µs
     iterations.....................: 1192177 39739.351227/s
     vus............................: 10      min=10         max=10   
     vus_max........................: 10      min=10         max=10   


running (0m30.0s), 00/10 VUs, 1192177 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```

# Rust (actix)

```shell


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: script.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 1.3 GB  42 MB/s
     data_sent......................: 157 MB  5.2 MB/s
     http_req_blocked...............: avg=1.3µs    min=0s      med=0s      max=100.53ms p(90)=1µs      p(95)=2µs     
     http_req_connecting............: avg=5ns      min=0s      med=0s      max=808µs    p(90)=0s       p(95)=0s      
     http_req_duration..............: avg=122.88µs min=23µs    med=75µs    max=125.1ms  p(90)=179µs    p(95)=242µs   
       { expected_response:true }...: avg=122.88µs min=23µs    med=75µs    max=125.1ms  p(90)=179µs    p(95)=242µs   
     http_req_failed................: 0.00%   ✓ 0            ✗ 1961782
     http_req_receiving.............: avg=16.17µs  min=3µs     med=5µs     max=103.41ms p(90)=16µs     p(95)=24µs    
     http_req_sending...............: avg=4.75µs   min=1µs     med=2µs     max=75.68ms  p(90)=4µs      p(95)=8µs     
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...............: avg=101.95µs min=18µs    med=65µs    max=118.86ms p(90)=162µs    p(95)=219µs   
     http_reqs......................: 1961782 65392.506639/s
     iteration_duration.............: avg=147.3µs  min=30.04µs med=90.12µs max=125.27ms p(90)=201.29µs p(95)=272.12µs
     iterations.....................: 1961782 65392.506639/s
     vus............................: 10      min=10         max=10   
     vus_max........................: 10      min=10         max=10   


running (0m30.0s), 00/10 VUs, 1961782 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```

# Rust (axum)

```shell


          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: script.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
              * default: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 1.4 GB  47 MB/s
     data_sent......................: 177 MB  5.9 MB/s
     http_req_blocked...............: avg=1.04µs   min=0s      med=0s      max=51.96ms  p(90)=1µs      p(95)=1µs    
     http_req_connecting............: avg=5ns      min=0s      med=0s      max=1.15ms   p(90)=0s       p(95)=0s     
     http_req_duration..............: avg=108.26µs min=23µs    med=75µs    max=103.35ms p(90)=166µs    p(95)=218µs  
       { expected_response:true }...: avg=108.26µs min=23µs    med=75µs    max=103.35ms p(90)=166µs    p(95)=218µs  
     http_req_failed................: 0.00%   ✓ 0            ✗ 2212060
     http_req_receiving.............: avg=13.68µs  min=3µs     med=4µs     max=95.01ms  p(90)=11µs     p(95)=19µs   
     http_req_sending...............: avg=4.03µs   min=0s      med=1µs     max=47.01ms  p(90)=3µs      p(95)=8µs    
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s     
     http_req_waiting...............: avg=90.55µs  min=17µs    med=66µs    max=101.13ms p(90)=153µs    p(95)=198µs  
     http_reqs......................: 2212060 73726.444382/s
     iteration_duration.............: avg=130.21µs min=29.95µs med=87.45µs max=109.62ms p(90)=186.83µs p(95)=247.5µs
     iterations.....................: 2212060 73726.444382/s
     vus............................: 10      min=10         max=10   
     vus_max........................: 10      min=10         max=10   


running (0m30.0s), 00/10 VUs, 2212060 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  30s
```