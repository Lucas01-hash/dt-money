import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export interface ITransaction {
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  created_at: Date
}

function currencyFormat(num:number, type: string) {
  return type === 'withdraw' 
  ? '- $' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  : '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                {(item.value < 0 , item.type === 'withdraw')
                  ? <td className="withdraw">{currencyFormat(item.value, item.type)}</td>
                  : <td className="deposit">{currencyFormat(item.value, item.type)}</td>
                }
                <td>{item.category}</td>
                <td>{new Date(item.created_at).toDateString()}</td>
              </tr>
            )
          })
          }
        </tbody>

      </table>
    </Container>
  )
}