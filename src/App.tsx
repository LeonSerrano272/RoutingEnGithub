import CompA from "./components/CompA"
import CompB from "./components/CompB"
import CompC from "./components/CompC"
import { Link, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <h1>Routing</h1>


      <nav>
        <li><Link to={"/home"}> CompLink</Link></li>
        <li><Link to={"/about"}> CompB</Link></li>
        <li><Link to={"/extra"}> CompC</Link></li>
      </nav>

      <Routes>
        <Route path="/*" element={<CompA/>} />
        <Route path="/home" element={<CompA/>} />
        <Route path="/about" element={<CompB/>} />
        <Route path="/extra" element={<CompC/>} />
      </Routes>

      <CompA/>
    </>
  )
}

export default App