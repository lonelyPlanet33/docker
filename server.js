const express = require('express');

const HOST = process.env.HOST;
const PORT = 3000;

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

const app = express();
app.get('/', (req, res) => {
  console.log(`Requesting ip: ${req.connection.remoteAddress}`);
  res.send('Hello World!!');
});

app.listen(PORT, HOST, ()=>{
    console.log(`Running on http://${HOST}:${PORT}`);
});