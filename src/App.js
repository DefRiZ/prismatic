import { Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Routes></Routes>
      </div>
      <div className="footer"> </div>
    </div>
  );
}

export default App;
