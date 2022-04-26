import { createServer } from 'miragejs'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id:1, 
          title: 'compras do mês',
          value: 1200,
          type: 'deposit',
          category: 'Restaurante',
          created_at: new Date()
        },
        {
          id:2, 
          title: 'conta de energia',
          value: 346.49,
          type: 'withdraw',
          category: 'Home',
          created_at: new Date()
        },
        {
          id:3, 
          title: 'conta de agua',
          value: 50.89,
          type: 'withdraw',
          category: 'Home',
          created_at: new Date()
        },
        {
          id:4, 
          title: 'conta de internet',
          value: 99.90,
          type: 'withdraw',
          category: 'Home',
          created_at: new Date()
        },
        {
          id:4, 
          title: 'pedreiro',
          value: 300,
          type: 'withdraw',
          category: 'Home',
          created_at: new Date()
        },
        {
          id:4, 
          title: 'salario',
          value: 3000,
          type: 'deposit',
          category: 'Home',
          created_at: new Date()
        },
        {
          id:4, 
          title: 'salario',
          value: 402,
          type: 'withdraw',
          category: 'Home',
          created_at: new Date()
        },
      
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

