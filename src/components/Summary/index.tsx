import { useEffect, useState } from "react"
import IncomeImg from "../../assets/income.svg"
import OutCome from "../../assets/outcome.svg"
import Total from "../../assets/total.svg"
import { api } from "../../services/api"
import { Container } from "./styles"

export interface ITransactions {
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  created_at: Date
}

export function Summary() {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api('/transactions')
      .then(response => setTransactions(response.data))
  }, [])

  function SumDeposits() {
    let depositsValue = 0
    let withdrawValue = 0
    for (let item of transactions) {
      item.type === 'deposit'
        ? depositsValue += item.value
        : withdrawValue += item.value
    }
    return {
      depositsValue: '$' + depositsValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
      withdrawValue: '$' + withdrawValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }

  function balanceValue() {
    let balanceValue = 0
    for (let item of transactions) {
      item.type === 'deposit'
        ? balanceValue += item.value
        : balanceValue -= item.value
    }

    return '$' + balanceValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')  
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="" />
        </header>
        <strong>{SumDeposits().depositsValue}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={OutCome} alt="" />
        </header>
        <strong>{SumDeposits().withdrawValue}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="" />
        </header>
        <strong>{balanceValue()}</strong>
      </div>
    </Container>
  )
}