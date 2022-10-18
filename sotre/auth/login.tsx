import create from "zustand";

type IUser = {
  user: IUserDetails;
  login?: () => IUserToken | undefined;
};

type IUserToken = {
  token: string;
  userId: number;
};

type IUserDetails = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};
const URL = "http://138.197.180.181:8353/user/auth/login";

const useLogin = create<IUser>()((set) => ({
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    role: "",
  },
  login: async (email: string, password: string) => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data: IUserDetails = await response.json();
    set({ user: data });

    return data;
  },
}));

export default useLogin;
