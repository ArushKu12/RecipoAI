import { asyncHandler } from "../utils/handler.utils.js";
import {z} from 'zod'
import { ErrorResponse, SuccessResponse } from "../utils/response.utils.js";
import prisma from '../config/prisma.config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signUpType = z.object({
    email:z.string().includes("@"),
    password:z.string(),
    name:z.string()
})

export const signUp = asyncHandler(async (req,res) => {
    const result = signUpType.safeParse(req.body);

    if(!result.success) return ErrorResponse(res,403,"Invalid Input Data");

    const { email,password,name} = req.body;

    

    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    })

    if(existingUser) return ErrorResponse(res,403,'User Already Exists');

    const updatedPassword = await bcrypt.hash(password,10);

    const user = await prisma.user.create({
        data:{
            email,password:updatedPassword,name
        }
    })

    return SuccessResponse(res,"User Created Successfully")



})

export const login = asyncHandler(async (req,res) => {
    const { identifier, password }  = req.body;
 
    if (!identifier || !password) return ErrorResponse(res, 400, `Fill all the details`);
    
    const user = await prisma.user.findFirst({
        where:{
            name:identifier
        },
        select:{
            id:true,
            name:true,
            email:true,
            password:true
        }
    })

    if(!user) return ErrorResponse(res,411,"User does not Exist");

    const checkUser = await bcrypt.compare(password,user.password);

    if(!checkUser) return ErrorResponse(res,403,"Incorrect Password");

    const accessToken = jwt.sign({
        id:user.id
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'1d'
    })

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .json({
        success: true,
        message: `Logged In`,
        accessToken
    });

})

export const logout = asyncHandler(async (req, res) => {
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .json({
        success: true,
        message: "Logged out"
    });
});