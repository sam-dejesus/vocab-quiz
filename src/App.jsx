import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Hompage'
import Glossary from './pages/Glossary'
import Scoreboard from './pages/Scoreboard'
import Quiz from './pages/Quiz'

function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Homepage/>}/>
    <Route path="/Glossary" element={<Glossary/>}/>
    <Route path="/Scoreboard"element={<Scoreboard/>}/>
    <Route path="/Quiz"element={<Quiz/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
