# Sistema integrador - DBff 
Backend for frontend - bff
**Node**

## Resumo
- Este sistema não possui nenhuma integração com banco de dados
- O Objetivo dele é atender 'Clients' que podem ser front ends ou mobiles.
- Faz as requests e aplica tratamentos, transformando dados brutos em informações relevantes.
- Faz requests para os sistemas ( [Sistema A](https://github.com/IVictorinoI/AGestorPessoa/), [Sistema B](https://github.com/IVictorinoI/BGestorRendaBem/) e [Sistema C](https://github.com/IVictorinoI/CExtrato/)) mostrando uma visão consolidada das informações. 
- A API possui swagger.


## Customer
Request para retorno das informações do cliente
![Customer](https://github.com/IVictorinoI/DBff/blob/main/Imagens/Customer.PNG)

### Customer/{cpf}
Retorna uma visão consolidada com todas as informações dos sistemas [Sistema A](https://github.com/IVictorinoI/AGestorPessoa/), [Sistema B](https://github.com/IVictorinoI/BGestorRendaBem/) e [Sistema C](https://github.com/IVictorinoI/CExtrato/)

Exemplo de retorno:
```javascript
{
  "name": "Victor Matheus Mendes",
  "cpf": "08021566906",
  "birthDate": "1992-06-23T00:00:00",
  "address": "Nações unidas, bairro pinheirinhos",
  "occupation": "Programador",
  "salary": 25000,
  "active": true,
  "id": 1,
  "debts": [
    {
      "customerId": 1,
      "title": "Prestação apartamento mes 01/2021",
      "dueDate": "2021-01-10T03:27:19.304",
      "value": 2300,
      "payValue": 2000,
      "remainingValue": 1300,
      "paidLate": true,
      "status": 0,
      "id": 1
    }
  ],
  "assets": [
    {
      "acquisitionDate": "2021-01-09 00:00:00",
      "customerId": 26,
      "estimatedValue": "600.0000000000",
      "id": 11,
      "payValue": "200.0000000000",
      "remainingValue": "400.0000000000",
      "status": 0,
      "title": "Conta 1",
      "type": 0
    },
    {
      "acquisitionDate": "2021-01-09 00:00:00",
      "customerId": 26,
      "estimatedValue": "120.0000000000",
      "id": 9,
      "payValue": "5.0000000000",
      "remainingValue": "115.0000000000",
      "status": 0,
      "title": "string",
      "type": 0
    }
  ],
  "incomes": [
    {
      "customerId": 26,
      "fixed": true,
      "id": 19,
      "value": "300.0000000000"
    },
    {
      "customerId": 26,
      "fixed": true,
      "id": 20,
      "value": "500.0000000000"
    },
    {
      "customerId": 26,
      "fixed": true,
      "id": 21,
      "value": "150.0000000000"
    }
  ],
  "cpfCheck": [
    {
      "_id": "5ffb1d9c0989150f249ca329",
      "date": "2021-01-10T15:30:36.154Z",
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e3cb9a95c09500cb1b6",
      "date": "2021-01-10T15:33:16.317Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e40b9a95c09500cb1b7",
      "date": "2021-01-10T15:33:20.688Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e41b9a95c09500cb1b8",
      "date": "2021-01-10T15:33:21.448Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e42b9a95c09500cb1b9",
      "date": "2021-01-10T15:33:22.114Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e42b9a95c09500cb1ba",
      "date": "2021-01-10T15:33:22.831Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e43b9a95c09500cb1bb",
      "date": "2021-01-10T15:33:23.533Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb1e44b9a95c09500cb1bc",
      "date": "2021-01-10T15:33:24.280Z",
      "origin": "ITAU",
      "customer": "5ffb1adc218a837e84f596d0",
      "__v": 0
    },
    {
      "_id": "5ffb445f230979555c8a3dff",
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "date": "2021-01-10T18:15:59.168Z",
      "__v": 0
    },
    {
      "_id": "5ffb4489230979555c8a3e00",
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "date": "2021-01-10T18:16:41.176Z",
      "__v": 0
    },
    {
      "_id": "5ffb44b8230979555c8a3e01",
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "date": "2021-01-10T18:17:28.613Z",
      "__v": 0
    },
    {
      "_id": "5ffb44d5230979555c8a3e02",
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "date": "2021-01-10T18:17:57.551Z",
      "__v": 0
    },
    {
      "_id": "5ffb44d6230979555c8a3e03",
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "date": "2021-01-10T18:17:58.452Z",
      "__v": 0
    }
  ],
  "movtoFinanc": [
    {
      "type": "TRANSFER",
      "inOrOut": "IN",
      "_id": "5ffb462f0466ac310c9dfe28",
      "value": 300,
      "origin": "string",
      "customer": "5ffb1adc218a837e84f596d0",
      "date": "2021-01-10T18:23:43.220Z",
      "__v": 0
    }
  ],
  "movtoCartao": [
    {
      "credDeb": "CRED",
      "_id": "5ffb2c7e0b326a38c4a9dee2",
      "value": 150,
      "origin": "MERCADO",
      "customer": "5ffb1adc218a837e84f596d0",
      "itens": [
        {
          "_id": "5ffb2c7e0b326a38c4a9dee3",
          "description": "CEBOLA",
          "value": 10
        },
        {
          "_id": "5ffb2c7e0b326a38c4a9dee4",
          "description": "OVO",
          "value": 5
        },
        {
          "_id": "5ffb2c7e0b326a38c4a9dee5",
          "description": "TV",
          "value": 5550
        }
      ],
      "date": "2021-01-10T16:34:06.852Z",
      "__v": 0
    }
  ]
}
```


### Customer/health/{cpf}
Retorna uma visão mais estratégica da saúda do cliente, esta visão seria um pequeno exemplo do poder que esta API tem de agrupar dados e transformá-los em informações relevantes

Exemplo de retorno:
```javascript
{
  "identify": {
    "name": "Victor Matheus Mendes",
    "birthDate": "1992-06-23T00:00:00",
    "age": 29
  },
  "good": {
    "salary": 1800,
    "totalIncome": 950,
    "totalAsset": 820
  },
  "bad": {
    "totalCpfCheck": 13,
    "totalCpfCheckInLastYear": 13,
    "totalPaidLate": 1300
  },
  "financeInfo": {
    "totalDebs": 1300,
    "totalPendingDebs": 150,
    "totalMovtoCartao": 150,
    "totalMovtoFinanc": 300
  },
  "score": {
    "value": 75
  }
}
```