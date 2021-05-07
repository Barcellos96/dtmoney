import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

//sempre precisar que precisar uma informação seja compartilha entre mais de um componente, repassar inforção pra um componente que esteja envolta de outros componentes

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){ //patern (padrao) = sempre que uma função for para clicar ou tiver interação do usuário inicio de função com HANDLE
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    //TransactionProvider nao recebe conteudo dentro é para ser <TransactionProvider/>, mas iremos fazer um props em TransactionsContext
    // passar propriedade onOpenNewTransactionModal ---- funcionalidade props ---muito utilizado no react essa funcionalidade utilizada no Header 
    <TransactionProvider> 
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider> 
  );
}