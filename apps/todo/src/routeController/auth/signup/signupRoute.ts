import  express from "express";
import { signupPost } from "./controller/signupController";
const signupRoute = express.Router()

signupRoute.post('/',signupPost)
export default signupRoute
