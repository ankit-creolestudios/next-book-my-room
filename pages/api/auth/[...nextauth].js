// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "../../../models/user";
// import dbConnect from "../../../config/dbConnect";

// export default NextAuth({
//   session: {
//     jwt: true,
//   },
//   providers: [
//     Providers.Credentials({
//       async authorize(credentials) {
//         dbConnect();
//         const { email, password } = credentials;
//         if (!email || !password) {
//           throw new Error("Please enter email or password");
//         }
//         const user = await User.findOne({ email }).select("+password");
//         if (!user) {
//           throw new Error("Invalid email or password");
//         }
//         const isPassword = await user.comparePassword(password);
//         if (!isPassword) {
//           throw new Error("Invalid email or password");
//         }
//         return Promise.resolve(user);
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: async (token, user) => {
//       user && (token.user = user);
//       return Promise.resolve(token);
//     },
//     session: async (session, user) => {
//       session.user = user.user;
//       return Promise.resolve(session);
//     },
//   },
// });
