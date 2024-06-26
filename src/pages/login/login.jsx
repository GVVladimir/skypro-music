import { Link, useNavigate } from "react-router-dom";
import * as S from "../../App.Styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Stor/AutnContext";
import { loginUser, registrUser } from "../../Api/Auth";
import { useGetTokenMutation } from "../../redux/AuthApi";

export const Login = ({ isLoginMode = false }) => {
  const [getToken] = useGetTokenMutation();
  const { AuthLogin } = useContext(AuthContext);
  // const playBtnHendler = () => {
  //   localStorage.setItem("user", "true");
  //   const userData = localStorage.getItem("user");
  //   console.log(userData);
  //   setUser(userData);
  // };
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (email === "" || password === "") {
        setError("Заполните почту или пароль");
        return;
      }
      if (email === "") {
        setError("Заполните почту");
        return;
      }
      if (password === "") {
        setError("Заполните пароль");
        return;
      }
      if (password !== repeatPassword) {
        setError("Пароли не совпадают");
        return;
      }

      const user = await registrUser({ email, password, username: email });

      AuthLogin(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async ({ email, password }) => {
    try {
      if (email === "" || password === "") {
        setError("Заполните почту или пароль");
        return;
      }
      if (email === "") {
        setError("Заполните почту");
        return;
      }
      
      if (password === "") {
        setError("Заполните пароль");
        return;
      }
      const userData = await loginUser({ email, password });
      await getToken({email, password}).unwrap().then((data) =>{
        localStorage.setItem('token', JSON.stringify(data))
      });

      AuthLogin(userData);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <div>
      <>
        <S.PageContainer>
          {" "}
          <S.ModalForm>
            {" "}
            <Link to="/login">
              {" "}
              <S.ModalLogo>
                <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />{" "}
              </S.ModalLogo>{" "}
            </Link>{" "}
            {isLoginMode ? (
              <>
                <S.Inputs>
                  <S.ModalInput
                    type="text"
                    name="login"
                    placeholder="Почта"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <S.ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </S.Inputs>
                {error && <S.Error>{error}</S.Error>}
                <S.Buttons>
                  <S.PrimaryButton
                    onClick={() => handleLogin({ email, password })}
                  >
                    Войти
                  </S.PrimaryButton>
                  <Link to="/register">
                    <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
                  </Link>
                </S.Buttons>
              </>
            ) : (
              <>
                <S.Inputs>
                  <S.ModalInput
                    type="text"
                    name="login"
                    placeholder="Почта"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <S.ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <S.ModalInput
                    type="password"
                    name="repeat-password"
                    placeholder="Повторите пароль"
                    value={repeatPassword}
                    onChange={(event) => {
                      setRepeatPassword(event.target.value);
                    }}
                  />
                </S.Inputs>
                {error && <S.Error>{error}</S.Error>}
                <S.Buttons>
                  <S.PrimaryButton onClick={handleRegister}>
                    Зарегистрироваться
                  </S.PrimaryButton>
                </S.Buttons>
              </>
            )}
          </S.ModalForm>
        </S.PageContainer>
      </>
    </div>
  );
};
