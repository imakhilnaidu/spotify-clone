import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exists if user logged in only...
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // If user token exists it will goes to whatever the next page is....
  if (pathname.includes("/api/auth") || token) {
    // It will redirects to home page if user trying to access login page after logged in...
    if (pathname === "/login") {
      return NextResponse.redirect("/");
    }
    return NextResponse.next();
  }

  // Redirect them to login page if they dont logged in....
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  } else {
    console.log("else is working");
  }
}
