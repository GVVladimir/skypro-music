import { Link } from "react-router-dom";

export const Login = ({user, setUser}) => {
  const playBtnHendler = () => {
    localStorage.setItem("user", "true");
    const userData = localStorage.getItem("user");
    console.log(userData)
    setUser(userData);
  };

  return (
    <div>
        <Link to="/">
        <button onClick={user===null && playBtnHendler}>login</button>
        </Link>
      
    </div>
  );
};
