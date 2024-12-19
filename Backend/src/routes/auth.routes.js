import { Router } from "express"
import {upload} from "../middlewares/multer.middleware.js"
import { login, logout, signUp } from "../controllers/auth.controllers.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";

const router = Router()

router.post('/signup',upload.none(),signUp);

router.post("/login",upload.none(),login);

router.post("/logout",upload.none(),verifyToken,logout)

export default router;