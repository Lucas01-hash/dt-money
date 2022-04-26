import { useState } from "react"
import Modal from "react-modal"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { ModalTransction } from "./components/Modal-transactions"
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setNewTransactionModalOpen(false)
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <ModalTransction isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}

