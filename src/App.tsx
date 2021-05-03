import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

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
    <>
    {/* passar propriedade onOpenNewTransactionModal ---- funcionalidade props ---muito utilizado no react essa funcionalidade utilizada no Header */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} /> 

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}