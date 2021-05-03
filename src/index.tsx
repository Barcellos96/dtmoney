import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'; //usar caso back-end nao esteja pronto
import {App} from './App';

createServer({ //função createServer
  routes(){ //rota ficticia
    this.namespace = 'api'; //todas chamadas 'api' estarão a partir do indereço de index.tsx/TransactionTable()

    this.get('/transactions', () => { //pegar (get) todos itens de /transactions terá um retorno em vetor (array)
      return [ //retorna mirage[200] = ok
        {
          id: 1,
          title: 'Transaction1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()

        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);