var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res)  => res.send('Hello world!'))

app.listen(3000, () => console.log('Node.js app listening on port 3000!'))
