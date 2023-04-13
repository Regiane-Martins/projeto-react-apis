import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import * as s from "./styled";

function ModalCapture() {
  const context = useContext(GlobalContext);

  return (
    <s.Content onClick={() => context.setModalCapture(false)}>
      <s.ModalIcon
        src={process.env.PUBLIC_URL + "/img/Frame 15.svg"}
        alt="pokemon capturado"
      />
    </s.Content>
  );
}

export default ModalCapture;
