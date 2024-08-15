import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const token = request.headers.get("Authorization");

  const response = NextResponse.json({ message: "Cookie set" });

  response.headers.set(
    "Set-Cookie",
    `velmar-token-f=${token}; HttpOnly; Secure=${
      process.env.NODE_ENV === "production"
    }; SameSite=Strict; expires=${new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000
    )}; Path=/`
  );

  return response;
};
