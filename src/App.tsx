import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { useState } from "react";
import Modal from "react-modal";
import { TransactionModal } from "./components/TransactionModal/TransactionModal";
import { TransactionsContexts } from "./context/TransactionsContexts";

Modal.setAppElement('#root')

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <TransactionsContexts.Provider value={[]}>
      <Header handleOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <TransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle />
    </TransactionsContexts.Provider>
  );
}
