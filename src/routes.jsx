import { Routes, Route } from "react-router-dom";
import { Favorits } from "./pages/favorits/Favorits";
import { Main } from "./pages/main/main";
import { Category } from "./pages/category/category";
import { NotFaund } from "./pages/notFaund/notFaund";
import { useState } from "react";
import { ProtectedRoute } from "./components/protector-rout/protector";
import { Login } from "./pages/login/login";

export const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const deletUserHendler = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main user={user} deletUserHendler={deletUserHendler}/>} />
        <Route path="/favorits" element={<Favorits />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="*" element={<NotFaund />} />
    </Routes>
  );
};
