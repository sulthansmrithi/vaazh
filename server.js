const express = require('express');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

https.createServer({
	key: fs.readFileSync("key.pem"),
	cert: fs.readFileSync("cert.pem"),
},app).listen(port, ()=>{
	console.log('Server started at http://localhost:' + port);
})
