import mongoose from "mongoose";
import NextAuth, { getServerSession } from "next-auth";
import bcrypt from "bcrypt";    
import {User} from "./../models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./mongoConnect";
//import { UserInfo } from "./../models/UserInfo";

export const authOptions = {
  secret: process.env.SECRET, 
  adapter: MongoDBAdapter(client),
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        state:true,
      }),
      CredentialsProvider({
        name: 'Credentials',
        id: 'credentials',
        credentials: {
          username: { label: "Email", type: "email", placeholder: "test@example.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const email = credentials?.email;
          const password = credentials?.password;

          mongoose.connect(process.env.MONGO_URL);
          const user = await User.findOne({email});
          const passwordOk = user && bcrypt.compareSync(password,user.password);

          if(passwordOk){
            return user;
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
    ],
};