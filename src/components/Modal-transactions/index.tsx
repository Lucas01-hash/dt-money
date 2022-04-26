import { FormEvent, useState } from "react"
import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from "./styles"

interface INewTransactioModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalTransction ({isOpen, onRequestClose}: INewTransactioModalProps){
  const [title, setTitle] = useState('')
  const [value, setValue] = useState<number>()
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')


  function handleCreateNewTransactio(event: FormEvent){
    event.preventDefault()

    console.log({
      title, value, category, type
    })
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >

      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >

        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransactio}>
      <h2>Cadastrar transação</h2>
      <form action="">
        <input name="title" placeholder="title" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="value" value={value} onChange={event => setValue(Number(event.target.value))}/>

      <TransactionTypeContainer>
        <RadioBox
        type="button"
        onClick={()=> {setType('deposit')}}
        isActive={type=== 'deposit'}
        activeColor="green"
        >
          <img src={incomeImg} alt="" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
        type="button"
        onClick={()=> {setType('withdraw')}}
        isActive={type=== 'withdraw'}
        activeColor="red"
        >
          <img src={outcomeImg} alt="" />
          <span>Saida</span>
        </RadioBox>
      </TransactionTypeContainer>

        <input name="category" placeholder="category" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit">
        register transaction
        </button>
      </form>
      </Container>

    </Modal>
  )
}