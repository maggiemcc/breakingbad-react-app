const express = require('express');
const axios = require('axios');

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/characters', (req, res) => {
  console.log(req)
  axios.get(`https://www.breakingbadapi.com/api/characters`)
  .then((response) => res.json(response.data))
  .catch((err) => res.status(500).json({type: 'error', message: err.message }))
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))