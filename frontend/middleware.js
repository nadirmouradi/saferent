import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export default withAuth({
  callbacks: {
    async authorized({ req, token }) {
      const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      
      if (req.nextUrl.pathname === "/Dashboard") {
        return token;
      }
      if (req.nextUrl.pathname === "/Dashboard/:path*") {
        return token;
      }
      if (req.nextUrl.pathname === "/login" && session) {
        
        return NextResponse.redirect("/Dashboard");
      }

      return !!token;
    },
  },
});
export const config = { matcher: ["/Dashboard/:path*"] };
