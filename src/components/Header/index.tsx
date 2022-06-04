import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleOpenCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt-money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          New transaction
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleOpenCloseTransactionModal}
        >
          <h2>cadastrar transaçao</h2>
        </Modal>
      </Content>
    </Container>
  );
}
