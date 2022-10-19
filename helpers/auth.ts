import { hasCookie, getCookie, deleteCookie } from "cookies-next";

export const isAuthenticated = async () => {
  if (hasCookie("token")) {
    const me = await fetch("http://138.197.180.181:8353/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie("token")}`,
      },
    });

    if (me.ok) {
      return true;
    }

    if (!me.ok) {
      deleteCookie("token");
      localStorage.removeItem("user");
      return false;
    }
  }

  return false;
};
