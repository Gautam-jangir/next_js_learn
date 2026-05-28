import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        username: {},
        password: {}
      },

      async authorize(credentials) {
        if(
          credentials.username === "admin" &&
          credentials.password === "1234"
        ) {
          return {
            id: "1",
            name: "Gautam"
          }
        }

        return null
      }
    })
  ],
  
  secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST};