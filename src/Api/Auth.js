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
  return response.json();
};

export const loginUser = async ({ email, password}) => {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
       
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
     
    });
    return response.json();
};