# Results from a first run

Load tests were conducted with the minimal api as well as `k6` running locally, having started the minimal api via

```console
dotnet run --configuration Release --launch-profile http-production --project .\src\MinimalApi\
```

## Out of the box minimal API

This uses the out of the box minimal api, with the default `WeatherForecast` endpoint.

```console
$ k6 run .\minimal_api.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: .\minimal_api.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * contacts: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 244 MB 8.1 MB/s
     data_sent......................: 42 MB  1.4 MB/s
     http_req_blocked...............: avg=1.75µs   min=0s med=0s       max=11.34ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=49ns     min=0s med=0s       max=3.34ms   p(90)=0s     p(95)=0s
   ✓ http_req_duration..............: avg=618.79µs min=0s med=520µs    max=581.63ms p(90)=1.03ms p(95)=1.52ms
       { expected_response:true }...: avg=618.79µs min=0s med=520µs    max=581.63ms p(90)=1.03ms p(95)=1.52ms
   ✓ http_req_failed................: 0.00%  ✓ 0            ✗ 445434
     http_req_receiving.............: avg=29.89µs  min=0s med=0s       max=18.29ms  p(90)=0s     p(95)=11.3µs
     http_req_sending...............: avg=7.4µs    min=0s med=0s       max=28ms     p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s med=0s       max=0s       p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=581.48µs min=0s med=519.2µs  max=581.05ms p(90)=1.01ms p(95)=1.41ms
     http_reqs......................: 445434 14847.075314/s
     iteration_duration.............: avg=662.99µs min=0s med=521.59µs max=603.14ms p(90)=1.04ms p(95)=1.56ms
     iterations.....................: 445434 14847.075314/s
     vus............................: 10     min=10         max=10
     vus_max........................: 10     min=10         max=10


running (0m30.0s), 00/10 VUs, 445434 complete and 0 interrupted iterations
contacts ✓ [======================================] 10 VUs  30s
```

## Out of the box minimal API delayed

This uses the out of the box minimal api, with the default `WeatherForecast` endpoint, but with a 1000ms delay added to
the endpoint.

```console
$ k6 run .\minimal_api.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: .\minimal_api.js
     output: -

  scenarios: (100.00%) 1 scenario, 10 max VUs, 1m0s max duration (incl. graceful stop):
           * contacts: 10 looping VUs for 30s (gracefulStop: 30s)


     data_received..................: 164 kB 5.4 kB/s
     data_sent......................: 29 kB  933 B/s
     http_req_blocked...............: avg=390.66µs min=0s med=0s    max=11.71ms p(90)=0s    p(95)=0s
     http_req_connecting............: avg=351.59µs min=0s med=0s    max=11.71ms p(90)=0s    p(95)=0s
   ✗ http_req_duration..............: avg=1.01s    min=1s med=1.01s max=1.19s   p(90)=1.01s p(95)=1.01s
       { expected_response:true }...: avg=1.01s    min=1s med=1.01s max=1.19s   p(90)=1.01s p(95)=1.01s
   ✓ http_req_failed................: 0.00%  ✓ 0        ✗ 300
     http_req_receiving.............: avg=75.78µs  min=0s med=0s    max=1.57ms  p(90)=0s    p(95)=575.02µs
     http_req_sending...............: avg=25.83µs  min=0s med=0s    max=2.15ms  p(90)=0s    p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s med=0s    max=0s      p(90)=0s    p(95)=0s
     http_req_waiting...............: avg=1.01s    min=1s med=1.01s max=1.19s   p(90)=1.01s p(95)=1.01s
     http_reqs......................: 300    9.825775/s
     iteration_duration.............: avg=1.01s    min=1s med=1.01s max=1.2s    p(90)=1.01s p(95)=1.01s
     iterations.....................: 300    9.825775/s
     vus............................: 10     min=10     max=10
     vus_max........................: 10     min=10     max=10


running (0m30.5s), 00/10 VUs, 300 complete and 0 interrupted iterations
contacts ✓ [======================================] 10 VUs  30s
ERRO[0031] thresholds on metrics 'http_req_duration' have been crossed
```
