import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { decode } from "jsonwebtoken";

const matcherAuth = ["/sign-in", "/sign-up"];

const matcherCustomer = [
  "/products/create",
  "/products/update",
  "/brands/create",
  "/brands/update",
  "/categories/create",
  "/categories/update",
];

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get(`${process.env.COOKIE_NAME}`);

  if (
    !token &&
    matcherAuth.some((path) => request.nextUrl.pathname.includes(path))
  )
    return NextResponse.next();

  if (!token) return NextResponse.redirect(new URL("/sign-in", request.url));

  try {
    await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    const { role }: any = decode(token.value);

    if (
      role === "customer" &&
      matcherCustomer.some((path) => request.nextUrl.pathname.includes(path))
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (matcherAuth.some((path) => request.nextUrl.pathname.includes(path))) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
};

export const config = {
  matcher: [
    "/sign-in",
    "/sign-up",
    "/products/create",
    "/products/update/:path*",
    "/brands/create",
    "/brands/update/:path*",
    "/categories/create",
    "/categories/update/:path*",
    "/profile/:path*",
    "/cart/:path*",
    "/information/:path*",
    "/payment/:path*",
    "/sign-out/:path*",
    "/success/:path*",
  ],
};
