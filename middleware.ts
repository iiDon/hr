// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  const hasToken = request.cookies.has("token");

  const protectedRoutes = (): boolean => {
    const routes = [
      "/admin",
      "/admin/jobs",
      "/admin/condidates",
      "/admin/jobs/new-job",
    ];
    return routes.includes(request.nextUrl.pathname);
  };

  if (protectedRoutes()) {
    if (hasToken) {
      const cookie = request.cookies.get("token");
      const me = await fetch("http://138.197.180.181:8353/user/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${cookie}`,
        },
      });

      if (me.ok) {
        return NextResponse.next();
      }

      if (!me.ok) {
        request.cookies.delete("token");
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};
