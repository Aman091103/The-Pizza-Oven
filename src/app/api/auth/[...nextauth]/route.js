import mongoose from "mongoose";
import NextAuth, { getServerSession } from "next-auth";
import bcrypt from "bcrypt";    
import {User} from "./../../../../models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./../../../../libs/mongoConnect";
import { UserInfo } from "./../../../../models/UserInfo";
import {authOptions} from "./../../../../libs/authoptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }