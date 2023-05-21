import "./App.css";
import Home from "./componets/Home";
import Header from "./componets/Header"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/> 
    </BrowserRouter>
  );
}

export default App;
