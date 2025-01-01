import mongoose from "mongoose";
import {User} from "../../../models/User";
import { NextResponse } from "next/server";


export async function POST(req){
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const pass = body.password;
    if (!pass || pass.length < 5) {
        throw new Error("Password must be at least 5 characters");
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt);
    
    const createdUser = await User.create(body);
    return Response.json(createdUser);
    
}