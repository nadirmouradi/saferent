import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await axios.post("http://localhost:8000/api/loginUser", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data;

          if (user) {
            user.accessToken = user.token;
            return user;
          } else {
            return;
          }
        } catch (err) {
          console.log(err);
          return;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      session.expires = token.exp ;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
