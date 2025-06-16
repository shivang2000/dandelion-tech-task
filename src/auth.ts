import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
  // session: { strategy: "jwt" },
  // debug: true,
  // useSecureCookies: false,
  // callbacks: {
  //   // authorized({ request, auth }) {
  //   //   const { pathname } = request.nextUrl;
  //   //   if (pathname === "/middleware-example") return !!auth;

  //   //   // const unProtectedRoutes = ["/login", "/api/auth/"];

  //   //   // const isUserOnProtectedRoutes = unProtectedRoutes.reduce(
  //   //   //   (acc, cur) => cur.includes(pathname) || acc,
  //   //   //   false
  //   //   // );

  //   //   // console.log("asdfasdvfkhbajsfhvads", auth, pathname);

  //   //   // if (auth === null && isUserOnProtectedRoutes) {
  //   //   //   const url = request.nextUrl.clone();
  //   //   //   url.pathname = "/login";

  //   //   //   // return NextResponse.rewrite(url);
  //   //   // }

  //   //   return true;
  //   // },
  //   jwt({ token, trigger, session, account }) {
  //     if (trigger === "update") token.name = session.user.name;
  //     if (account?.provider === "keycloak") {
  //       return { ...token, accessToken: account.access_token };
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     console.log("asdfasbldhjf bsdbfk asdfvgasdv fhas session", session);
  //     console.log(
  //       "asdfasbldhjf bsdbfk asdfvgasdv fhas session.accessToken",
  //       session.accessToken
  //     );
  //     console.log("asdfasbldhjf bsdbfk asdfvgasdv fhas token", token);

  //     if (token?.accessToken) session.accessToken = token.accessToken;

  //     return session;
  //   },
  // },
});

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    token?: string;
  }
}
