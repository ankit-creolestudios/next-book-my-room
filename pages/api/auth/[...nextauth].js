import NextAuth from "next-auth";
import User from "../../../models/user";
import dbConnect from "../../../config/dbConnect";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 30 * 60,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        // Check if email and password is entered
        if (!email || !password) {
          throw new Error("Please enter email or password");
        }

        // Find user in the database
        const user = await User.findOne({ email }).select("+password");

        console.log(user, "aka");
        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        // Check if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      console.log(user, "user");
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session(session, token) {
      // Add property to session, like an access_token from a provider.
      session.token = token;
      return session;
    },
  },
});
