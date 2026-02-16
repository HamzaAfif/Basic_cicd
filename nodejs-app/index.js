const express = require('express');
const app = express();
const port = 3000;

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`hi ${name}`);
});

app.get('/', (req, res) => {
  res.send('Node App is running. Try /hello/yourname');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;