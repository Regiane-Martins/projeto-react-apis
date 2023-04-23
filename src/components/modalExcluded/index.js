import * as s from "./styled";

function ModalExcluded() {
  return (
    <s.Content>
      <s.ModalIcon
        src={process.env.PUBLIC_URL + "/img/Frame 16.svg"}
        alt="pokemon capturado"
      />
    </s.Content>
  );
}

export default ModalExcluded;
