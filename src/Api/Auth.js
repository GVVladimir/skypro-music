const registrUrl = "https://skypro-music-api.skyeng.tech/user/signup/";

export const registrUser = async ({ email, password, username }) => {
  const response = await fetch(registrUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  });
  const responsRegistUser = await response.json();
  if (response.status === 400) {
    const userEmailError = responsRegistUser.email
      ? `Почта:${responsRegistUser.email}`
      : "";
    const userPasswordError = responsRegistUser.password
      ? `Поле пароль:${responsRegistUser.password}`
      : "";
    const userNameError = responsRegistUser.username
      ? `Повтор пароля:${responsRegistUser.username}`
      : "";

    throw new Error(`${userEmailError}${userPasswordError}${userNameError}`);
  }
  return responsRegistUser;
};

export const loginUser = async ({ email, password }) => {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );
  const responsLoginUser = await response.json();
  if (response.status === 400) {
    const userEmailError = responsLoginUser.email
      ? `Почта:${responsLoginUser.email}`
      : "";
    const userPasswordError = responsLoginUser.password
      ? `Поле пароль:${responsLoginUser.password}`
      : "";
    throw new Error(`${userEmailError}${userPasswordError}`);
  }
  return responsLoginUser;
};
