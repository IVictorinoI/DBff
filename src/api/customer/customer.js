const https = require('https')
const gestorPessoa = require('../../repository/gestorPessoa')
const rendaBem = require('../../repository/rendaBem')
const extrato = require('../../repository/extrato')

const use = async (api) => {

  api.get('/customer/:cpf', async(req, res) => {

    customer = await getCompleteCustomer(req.params.cpf);

    res.json(customer)
  })

  api.get('/customer/health/:cpf', async(req, res) => {

    customer = await getCompleteCustomer(req.params.cpf);

    const currentDate = new Date()
    var dateToSubstact = new Date()
    var lastYear = new Date(dateToSubstact.setDate(currentDate.getDate()-365))
    var dateToSubstact = new Date()
    var lastSixMonths = new Date(dateToSubstact.setDate(currentDate.getDate()-180))
    const ageInMiliseconds = currentDate - new Date(customer.birthDate);
    const ageInYears = Math.ceil(ageInMiliseconds / (1000 * 60 * 60 * 24 * 30 * 12)); 

    const listOfDebsValues = customer.debts.map(a => parseFloat(a.value))    
    const listOfAssetsValues = customer.assets.map(a => parseFloat(a.estimatedValue))
    const listOfIncomesValues = customer.incomes.map(a => parseFloat(a.value))
    const listOfMovtoFinanc = customer.movtoFinanc.map(a => parseFloat(a.value))
    const listOfMovtoCartao = customer.movtoCartao.map(a => parseFloat(a.value))
    const listOfPendingDebsValues = customer.debts.filter(p => p.remainingValue>0).map(a => parseFloat(a.remainingValue))
    const listOfPaidLate = customer.debts.filter(p => p.paidLate).map(a => parseFloat(a.value))

    const totalDebs = listOfDebsValues.reduce((a, b) => a + b, 0)
    const totalPendingDebs = listOfPendingDebsValues.reduce((a, b) => a + b, 0)
    const totalPaidLate = listOfPaidLate.reduce((a, b) => a + b, 0)
    const totalAsset = listOfAssetsValues.reduce((a, b) => a + b, 0)
    const totalIncome = listOfIncomesValues.reduce((a, b) => a + b, 0)
    const totalMovtoFinanc = listOfMovtoFinanc.reduce((a, b) => a + b, 0)
    const totalMovtoCartao = listOfMovtoCartao.reduce((a, b) => a + b, 0)

    const totalCpfCheck = customer.cpfCheck.length
    const totalCpfCheckInLastYear = customer.cpfCheck.filter(p => new Date(p.date) > lastYear).length

    var score = 100;

    if(totalCpfCheckInLastYear)
      score -= 10

    if(totalPaidLate)
    score -= 15

    var ret = {
      identify: {
        name: customer.name,
        birthDate: customer.birthDate,
        age: ageInYears,        
      },
      good: {
        salary: customer.salary,
        totalIncome: totalIncome,
        totalAsset: totalAsset,
      },
      bad: {
        totalCpfCheck: totalCpfCheck,
        totalCpfCheckInLastYear: totalCpfCheckInLastYear,
        totalPaidLate: totalPaidLate
      },
      financeInfo: {
        totalDebs: totalDebs,
        totalPendingDebs: totalPendingDebs,
        totalMovtoCartao: totalMovtoCartao,
        totalMovtoFinanc: totalMovtoFinanc,        
      },
      score: {
        value: score
      }
    }

    res.json(ret)
  })
}

const getCompleteCustomer = async (cpf) => {
    var customer = await gestorPessoa.getCustomer(cpf)
    var debts = await gestorPessoa.getDebts(cpf)
    var assets = await rendaBem.getAssetByCustomer(cpf)
    var incomes = await rendaBem.getIncomeByCustomer(cpf)
    var cpfCheck = await extrato.getCpfCheck(cpf)
    var movtoFinanc = await extrato.getMovtoFinanc(cpf)
    var movtoCartao = await extrato.getMovtoCartao(cpf)

    customer.debts = debts
    customer.assets = assets
    customer.incomes = incomes
    customer.cpfCheck = cpfCheck
    customer.movtoFinanc = movtoFinanc
    customer.movtoCartao = movtoCartao

    return customer
}


module.exports = { use }