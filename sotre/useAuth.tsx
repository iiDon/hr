import { deleteCookie, getCookie, setCookie } from "cookies-next";
import create from "zustand";

export interface IUser {
  id: number;
  email: string;
  isAdmin: boolean;
}

export interface IAuthState {
  user: IUser | null;
  isLoggedIn: boolean;
  checkAuth: () => void;
  error: boolean | string;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/`;

const useAuth = create<IAuthState>()((set, get) => ({
  user: null,
  isLoggedIn: false,
  error: false,
  logIn: async (email, password) => {
    const request = fetch(URL + "/user/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const response = await request;
    const data = await response.json();

    if ((await request).status === 200) {
      set({ isLoggedIn: true });
      setCookie("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        expires: new Date(Date.now() + 60 * 60 * 24 * 7),
      });

      const me = await fetch(URL + "/user/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${getCookie("token")}`,
        },
      });
      const meData = await me.json();
      set({ user: meData });
    }

    if ((await request).status === 400) {
      set({ error: (await request).statusText });
    }
  },
  logOut: () => {
    set({
      isLoggedIn: false,
      user: null,
    });
    deleteCookie("token");
  },
  checkAuth: () => {
    const token = getCookie("token");
    if (token) {
      set({ isLoggedIn: true });
    }
  },
}));

export default useAuth;
