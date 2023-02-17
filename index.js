const express = require('express')
const app = express()
app.all('/', async function (req, res) => {
    
  let Opensea = `https://api.opensea.io/api/v1/collections?asset_owner=0x4ddf892e0051C0F20a97f6E6c1c4A8868e95A971&format=json`;

  const response = await axios.get(Opensea);
  const response2 =response.data
  console.log(response2)
    
    console.log("Just got a request!")
    res.send(response2)
})
app.listen(process.env.PORT || 3000)
