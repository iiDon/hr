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
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};
