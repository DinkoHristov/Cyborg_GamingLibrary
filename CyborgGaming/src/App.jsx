import './css/App.css'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { GameProvider } from "./contexts/GameContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GameProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </GameProvider>
  );
}

export default App;