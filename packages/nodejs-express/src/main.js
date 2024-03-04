const express = require('express');
const crypto = require("crypto");
const app = express();

app.get('/', (req, res) => {
    res.json({randomString: crypto.randomBytes(256).toString('hex')});
});

// Make the server listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
