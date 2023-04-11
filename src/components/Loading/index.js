import * as s from "./styled";

function Loading() {
  return (
    <s.Loader>
      <s.LoaderIcon src={process.env.PUBLIC_URL + "/img/loading.svg"} alt="loading" />
    </s.Loader>
  );
}

export default Loading;
