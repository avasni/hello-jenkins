let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('new world');
});

app.listen(process.env.PORT || 5055, function () {
  console.log('Example app listening on port 5055!')
});

module.exports = app;
