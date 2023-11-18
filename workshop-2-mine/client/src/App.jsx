import { Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import GameList from './components/game-list/GameList';
import CreateGame from './components/create-game/CreateGame';
import GameDetails from './components/game-details/GameDetails';
import EditPage from './components/edit-page/EditPage';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<CreateGame />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>
    </>
  );
}

export default App;
