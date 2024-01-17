import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
