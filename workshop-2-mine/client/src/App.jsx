import { Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Catalogue from './components/catalogue/Catalogue';
import CreateGame from './components/create-game/CreateGame';
import DetailsPage from './components/details-page/DetailsPage';
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
        <Route path="/games" element={<Catalogue />} />
        <Route path="/games/create" element={<CreateGame />} />
      </Routes>
    </>
  );
}

export default App;
