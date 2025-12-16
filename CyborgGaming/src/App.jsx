import './css/App.css'
import NavBar from './components/Global/NavBar';
import Footer from './components/Global/Footer';
import Home from "./pages/Home";
import Details from './pages/Details';
import Games from './pages/Games';
import { GameProvider } from "./contexts/GameContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <GameProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/games" element={<Games />}></Route>
        </Routes>
      <Footer />
    </GameProvider>
  );
}

export default App;