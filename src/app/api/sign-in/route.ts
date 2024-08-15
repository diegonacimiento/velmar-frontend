import { decodeJwt } from "jose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const token = request.headers.get("Authorization");

  if (!token) {
    return NextResponse.json(
      { message: "Sign-in failed" },
      { status: 401 }
    );
  }

  const payload = decodeJwt(token as string);

  const response = NextResponse.json({ message: "Cookie set" });

  response.headers.set(
    "Set-Cookie",
    `velmar-token-f=${token}; HttpOnly; Secure=${
      process.env.NODE_ENV === "production"
    }; SameSite=Strict; expires=${new Date(
      (payload.exp as number) * 1000
    ).toUTCString()}; Path=/`
  );

  return response;
};
