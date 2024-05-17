import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get(`${process.env.COOKIE_NAME}`);

  if (!token) return NextResponse.redirect(new URL("/sign-in", request.url));

  try {
    await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
};

export const config = {
  matcher: [
    "/products/create",
    "/products/update/:path*",
    "/profile/:path*",
    "/cart/:path*",
    "/information/:path*",
    "/payment/:path*",
    "/sign-out/:path*",
    "/success/:path*",
  ],
};
