const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const fs = require('fs')

app.set('view engine', 'ejs');


// main route


app.get('/', (req, res) => {
  res.send('Welcome to the main page we are still working here soo yea bye for noww')
});

app.get('/login', (req,res) => {
    fs.readFile('views/index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

