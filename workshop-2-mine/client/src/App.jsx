import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import * as authService from "./services/authServices";

import Header from "./components/header/Header";
import GameList from "./components/game-list/GameList";
import CreateGame from "./components/create-game/CreateGame";
import GameDetails from "./components/game-details/GameDetails";
import EditPage from "./components/edit-page/EditPage";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AuthContext from "./contexts/authContext";
import Logout from "./components/logout/Logout";

function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("accessToken");
  }, []);

  //this function is being called from useForm with all values from the form fields
  const loginSubmitHandler = async (values) => {
    //result is an object returned from the server
    const result = await authService.login(values.email, values.password);
    //the current user that is logged in
    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const logoutHandler = () => {
    setAuth({});
    
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    isAuthenticated: !!auth.email,
    email: auth.email,
    logoutHandler,
  };

  return (
    <>
      <AuthContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/create" element={<CreateGame />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
