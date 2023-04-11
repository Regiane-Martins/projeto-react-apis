import { Container } from "../container";
import * as s from "./styled";

function Modal() {
  return (
    <Container>
      <s.ModalIcon
        src={process.env.PUBLIC_URL + "/img/Frame 15.svg"}
        alt="pokemon capturado"
      />
    </Container>
  );
}

export default Modal;
