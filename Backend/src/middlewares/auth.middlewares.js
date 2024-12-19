import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/handler.utils.js";
import { ErrorResponse } from "../utils/response.utils.js";
import prisma from "../config/prisma.config.js";


export const verifyToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "") || req.body?.accessToken;
    if (!token) return ErrorResponse(res, 401, `Unauthorized request`);

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await prisma.user.findUnique({
            where: {
              id: decodedToken.id,
            },
            select: {
              id: true,
              email: true,
              name: true,
            }
          });
        req.user = user;
    } catch (error) {
        return ErrorResponse(res, 401, `Session expired. Login again.`);
    }

    next();
});