import { NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({ message: "Cookie set" });

  response.headers.set(
    "Set-Cookie",
    `${process.env.COOKIE_NAME}=${" "}; HttpOnly; Secure=${
      process.env.NODE_ENV === "production"
    }; SameSite=Strict; expires=${new Date(Date.now() * 0)}; Path=/`
  );

  return response;
};
