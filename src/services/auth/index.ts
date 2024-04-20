import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/nodemailer";
import Github from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Github],
});
