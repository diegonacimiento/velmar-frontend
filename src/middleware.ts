import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, decodeJwt } from "jose";

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

  const referer = request.headers.get("referer");

  // Si NO tiene sesión y visita a sign-in o sign-up lo permito
  if (
    !token &&
    matcherAuth.some((path) => request.nextUrl.pathname.includes(path))
  )
    return NextResponse.next();

  // Si NO tiene sesión redirijo a sign-in
  if (!token) return NextResponse.redirect(new URL("/sign-in", request.url));

  // Si llega hasta acá es porque el usuario tiene sesión iniciada
  try {
    // Verifica token con firma
    await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    const { role }: any = decodeJwt(token.value);

    // Protección de rutas por roles
    if (
      role === "customer" &&
      matcherCustomer.some((path) => request.nextUrl.pathname.includes(path))
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Protección de sign-in y sign-up, alguien con sesión iniciada no puede visitar esas rutas
    if (matcherAuth.some((path) => request.nextUrl.pathname.includes(path))) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Protección para que solo se pueda ingresar desde el cart
    if (
      request.nextUrl.pathname.includes("/information") &&
      !referer?.includes("/cart")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (
      request.nextUrl.pathname.includes("/payment") &&
      !referer?.includes("/information")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (
      request.nextUrl.pathname.includes("/success") &&
      !referer?.includes("/payment")
    ) {
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
