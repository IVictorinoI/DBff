const https = require('https')
const axios = require('axios')

const getCustomer = async (cpf) => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsInJvbGUiOiJEZWZhdWx0Um9sZSIsIklkIjoiMSIsIm5iZiI6MTYxMDMwNjU5MiwiZXhwIjoxNjEyODk4NTkyLCJpYXQiOjE2MTAzMDY1OTJ9.UzZjg4e924sYkVBdouc7NSsBUscbXIoPIidTY5m2uN8'
  const apiUrl = 'https://localhost:44373/api/'

  var resp;
  await axios({
        url: `${apiUrl}v1/customers/byCpf/${cpf}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token,
        },
        responseType: 'json',
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    })
    .then(response => {
        resp = response
    })

    return resp.data[0];
}

const getDebts = async (cpf) => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InN0cmluZyIsInJvbGUiOiJEZWZhdWx0Um9sZSIsIklkIjoiMSIsIm5iZiI6MTYxMDMwNjU5MiwiZXhwIjoxNjEyODk4NTkyLCJpYXQiOjE2MTAzMDY1OTJ9.UzZjg4e924sYkVBdouc7NSsBUscbXIoPIidTY5m2uN8'
    const apiUrl = 'https://localhost:44373/api/'
  
    var resp;
    await axios({
          url: `${apiUrl}v1/debts/${cpf}`,
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'authorization': token,
          },
          responseType: 'json',
          httpsAgent: new https.Agent({ rejectUnauthorized: false })
      })
      .then(response => {
          resp = response
      })
  
      return resp.data;
  }


module.exports = { getCustomer, getDebts }