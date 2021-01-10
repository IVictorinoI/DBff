const https = require('https')
const axios = require('axios')

const getCustomer =  async (cpf) => {
    const apiUrl = `http://localhost:3001/api/customer?cpf=${cpf}`

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

const getCpfCheck = async (cpf) => {
    const consumer = await getCustomer(cpf)
    const apiUrl = `http://localhost:3002/api/cpfCheck?customer=${consumer._id}`

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

const getMovtoFinanc = async (cpf) => {
    const consumer = await getCustomer(cpf)
    const apiUrl = `http://localhost:3003/api/movtoFinanc?customer=${consumer._id}`

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


const getMovtoCartao = async (cpf) => {
    const consumer = await getCustomer(cpf)
    const apiUrl = `http://localhost:3004/api/movtoCartao?customer=${consumer._id}`

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

module.exports = { getCustomer, getCpfCheck, getMovtoFinanc, getMovtoCartao }