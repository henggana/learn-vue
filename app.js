const express = require('express');
const app = express();

app.use('/static', express.static('public'))

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/markdown-editor', function(req, res) {
  res.render('markdown-editor');
});

app.listen(3000, function() {
  console.log("on port 3000!");
});
