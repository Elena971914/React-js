import { createContext } from "react"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as authService from "../services/authServices";
import { usePersistedState } from "../hooks/usePersistedState";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    //[setState, setPersistedState]           (key, defaultValue)
  const [auth, setAuth] = usePersistedState('auth',{});
  const navigate = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem("accessToken");
  // }, []); === remove the access token from the session in the first render

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
    id: auth._id,
    logoutHandler,
  };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

AuthContext.displayName = 'AuthContext'

export default AuthContext
