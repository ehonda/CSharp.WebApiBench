import http from 'k6/http';

export const options = {
  // TODO: What does this do?
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-vus',
      vus: 10,
      duration: '30s'
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'] // 95% of requests should be below 200ms
  },
};

export default function () {
    http.get('http://localhost:5064/weatherforecast')
}
