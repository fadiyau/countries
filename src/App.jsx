import { Routes, Route } from "react-router-dom";
// import Navbar from "./pages/navbar";
import Homepage from "./pages/home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Homepage}/>
      </Routes>
      
    </>
  )
}

export default App;
