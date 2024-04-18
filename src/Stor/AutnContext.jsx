import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTokenMutation } from "../redux/AuthApi";

export const AuthContext = createContext(null);
const getAuthLocolStorage = () => {
  try {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth;
  } catch (error) {
    return null;
  }
};
export const AuthProvider = ({ children }) => {
 
  const navigate = useNavigate();
  const [user, setUser] = useState(getAuthLocolStorage());
  const AuthLogin = (newUser) => {
    localStorage.setItem("auth", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/");
  };

  const AuthLogaut = () => {
    localStorage.removeItem("auth");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ AuthLogin, user, AuthLogaut }}>
      {children}
    </AuthContext.Provider>
  );
};
