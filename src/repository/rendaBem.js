const https = require('https')
const axios = require('axios')

const getAssetByCustomer = async (cpf) => {
  const apiUrl = `http://127.0.0.1:5000/asset?cpf=${cpf}`

  var resp;
  await axios({
        url: apiUrl,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        responseType: 'json',
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
    .then(response => {
        resp = response
    })

    return resp.data;
}

const getIncomeByCustomer = async (cpf) => {
    const apiUrl = `http://127.0.0.1:5000/income?cpf=${cpf}`
  
    var resp;
    await axios({
          url: apiUrl,
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
          responseType: 'json',
          httpsAgent: new https.Agent({ rejectUnauthorized: false })
      })
      .then(response => {
          resp = response
      })
  
      return resp.data;
  }

module.exports = { getAssetByCustomer, getIncomeByCustomer }