import { NextRequest, NextResponse } from "next/server";

const allowedOrigin = process.env.FRONTEND_URL as string;

export const GET = async (request: NextRequest) => {
  const origin = request.headers.get("origin");

  const referer = request.headers.get("referer");

  const isSameOrigin =
    origin === allowedOrigin || referer?.startsWith(allowedOrigin);

  if (!isSameOrigin) {
    return NextResponse.json(
      {
        message: "CORS policy does not allow access from the specified origin.",
      },
      { status: 403, statusText: "Forbidden" }
    );
  }

  const response = NextResponse.json({ message: "Cookie set" });

  response.headers.set(
    "Set-Cookie",
    `${process.env.COOKIE_NAME}=${" "}; HttpOnly; Secure=${
      process.env.NODE_ENV === "production"
    }; SameSite=Strict; expires=${new Date(Date.now() * 0)}; Path=/`
  );

  return response;
};
