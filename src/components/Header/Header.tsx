import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderPrpos {
  handleOpenTransactionModal: () => void
}

export function Header({handleOpenTransactionModal}: HeaderPrpos) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dtmoney" />
        <button onClick={handleOpenTransactionModal} type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
