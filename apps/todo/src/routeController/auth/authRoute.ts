import  express from "express";
import signupRoute from "./signup/signupRoute";
import loginRoute from "./login/loginRoute";
const authRoute = express.Router()

authRoute.use('/login',loginRoute)
authRoute.use('/signup',signupRoute)
export default authRoute