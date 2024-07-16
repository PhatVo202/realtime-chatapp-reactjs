import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { ContextProvider } from "./context/app.context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
