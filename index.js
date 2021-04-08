// Set up app/express variables
var express    = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse application/urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

// Listen on localhost:2000
app.listen(2000);

// Post method at /runningsum
app.post("/runningsum", function (req, res) {
  // Parse JSON such that "arr": "[1, 2, 3, 4]" is now "arr": [1, 2, 3, 4]
  num_arr = JSON.parse(req.body.arr);
  // Calculate runningsum and put it in new_arr
  sum = 0;
  new_arr = [];
  for (i = 0; i < num_arr.length; i++) {
    sum += num_arr[i];
    new_arr.push(sum);
  }
  // Return new_arr as json string
  res.send(JSON.stringify({arr: new_arr}));
});
