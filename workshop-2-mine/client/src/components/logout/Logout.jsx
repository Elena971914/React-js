import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import * as authServices from "../../services/authServices";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    try {
      authServices.logout()
      .then(() => logoutHandler())
      .then(navigate("/"));
    } catch {
      () => navigate("/");
    }
  }, []);

  return null
}
