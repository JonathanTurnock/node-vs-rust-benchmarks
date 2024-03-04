const { globSync } = require("glob");
const { resolve } = require("path");
const { table } = require("table");
const Path = require('path');

const reportFiles = globSync("results/*.json");

const results = [
    [
        "Name", 
        "Req Dur (avg)", 
        "Req Dur (min)", 
        "Req Dur (med)", 
        "Req Dur (max)", 
        "Req Dur (p(90))", 
        "Req Dur (p(95))",
        "Data Recv (Count)",
        "Data Recv (Rate)",
        "Reqs (Count)",
        "Reqs (Rate)"
    ]
]

reportFiles.forEach(path => {
    const row = []
    const p = Path.parse(path)
    row.push(p.name)

    const {metrics} = require(resolve(__dirname, path))

    row.push(metrics.http_req_duration.avg)
    row.push(metrics.http_req_duration.min)
    row.push(metrics.http_req_duration.med)
    row.push(metrics.http_req_duration.max)

    row.push(metrics.http_req_duration["p(90)"])
    row.push(metrics.http_req_duration["p(95)"])

    row.push(metrics.data_received.count.toFixed(2))
    row.push(metrics.data_received.rate.toFixed(2))

    row.push(metrics.http_reqs.count.toFixed(2))
    row.push(metrics.http_reqs.rate.toFixed(2))

    results.push(row)
})

console.log(table(results))
