require('dotenv').config
const express = require('express');
const app = express();

const routes = require('./routes/route');

app.use(express.json());

app.use('/api/v1',routes);
  
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`)
});



