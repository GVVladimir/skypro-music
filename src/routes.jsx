import { Routes, Route } from "react-router-dom";
import { Favorits } from "./pages/favorits/Favorits";
import { Main } from "./pages/main/main";
import { Category } from "./pages/category/category";
import { NotFaund } from "./pages/notFaund/notFaund";
// import { useState } from "react";
import { ProtectedRoute } from "./components/protector-rout/protector";
import { Login } from "./pages/login/login.jsx";
import { AuthProvider } from "./Stor/AutnContext";

export const AppRoutes = () => {
  // const [user, setUser] = useState(null);

  // const deletUserHendler = () => {
  //   localStorage.removeItem("user");
  //   setUser(null);
  // };

  return (
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/favorits" element={<Favorits />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
        <Route
          path="/login"
          element={<Login isLoginMode={true} />}
        />
        <Route path="*" element={<NotFaund />} />
        <Route path="/register" element={<Login/>} />
      </Routes>
    </AuthProvider>
  );
};
