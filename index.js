const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Aku senang dan bahagia selalu dan aku ingin jadi orang sukses')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})