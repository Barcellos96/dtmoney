import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'; //usar caso back-end nao esteja pronto
import {App} from './App';

createServer({ //função createServer
  models: {//propriedade chamada Models
    transaction: Model, //do tipo model a tabela transaction //transaction joga no return schema.create('aqui', ) //nome da primeira tabela
  },

  //dados pré cadastrados
  seeds(server){
    server.db.loadData({ //passar o nome da tabela, que é o nome do model, só que sempre no plural
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ]
    })
  },

  routes(){ //rota ficticia
    this.namespace = 'api'; //todas chamadas 'api' estarão a partir do indereço de index.tsx/TransactionTable()

    this.get('/transactions', () => { //pegar (get) todos itens de /transactions terá um retorno em vetor (array)
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { // [201] código de sucesso para criação que aparece no console.log //schema é o Banco de Dados(BD)
      const data = JSON.parse(request.requestBody) //converter em json pq estão em JS

      return schema.create('transaction', data) 
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);