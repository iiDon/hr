import React from "react";
import useLogin from "../../sotre/auth/login";

const login = () => {
  const login = useLogin((state) => state.login);
  const URL = "http://138.197.180.181:8353/user/auth/login";

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login({
      email: "",
      password: ""
    });
  };

  return (
    <form>
      <input type="email" />
      <input type="password" />

      <button onClick={handleLogin} type="submit">
        Login
      </button>
    </form>
  );
};

export default login;
