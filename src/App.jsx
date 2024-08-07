import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import { Navbar } from "./components";

const ContainedApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Landing />}/>
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <ContainedApp />
    </Router>
  );
}

export default App;
