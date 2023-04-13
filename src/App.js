import { GlobalContext } from "./context/GlobalContext";
import GlobalState from "./context/GlobalState";
import Router from "./components/routes/Router";

function App() {
  const context = GlobalState();
  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
