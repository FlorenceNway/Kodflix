const express = require('express');
const app = express(); //store the express source code into variable so that we can access any of express methods
const port = 3001 // set where we want it to run - different port with frontend (our frontend is running on 3000)

app.get('/',(req,res) => res.send('Hello World')) //http request == get request / if you recieve http request to the endpoint(/,root) , do sth  www.example.com/(root)
// when we get http request with xxxx/ , responds send this code (hello world) localhost:3001/

app.listen(port, ()=> console.log('Example app listening on port'+port));