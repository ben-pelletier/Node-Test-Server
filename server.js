const express = require('express'),
      http = require('http'),
      app = express()

app.set('port', process.env.PORT || (process.argv[2] || 8080))

app.get('*', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

http.createServer(app).listen(app.get('port'), () => {
  console.log('Test server started on port ' + app.get('port'))
});
