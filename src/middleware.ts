import { auth } from "@/auth";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

// This function can be marked `async` if using `await` inside
// export async function middleware(...args: [NextApiRequest, NextApiResponse]) {
//   const [req, res] = args;

//   for (let key of Object.keys(req.cookies)) {
//     console.log("asdfjasdhgfvjhadsfg", req.cookies[key]);
//   }
//   const token = await getToken({ req, secret });
//   console.log("JSON Web Token", token);

//   const response = await auth(...args);

//   return response;

//   // return NextResponse.redirect(new URL("/", request.url));
// }

export const middleware = auth;

export const config = {
  matcher: "/:path*",
};
