import http from 'k6/http';
import { writeFileSync } from 'k6';

export const options = {
  scenarios: {
    delayed_start: {
      executor: 'constant-vus',
      startTime: '3s',
      duration: '10s',
      vus: 10
    },
  },
};

export default function() {
  http.get('http://127.0.0.1:3000');
}

export function handleSummary(summary) {
  console.log(writeFileSync("report.json", JSON.stringify(summary, undefined, 2)))
}
