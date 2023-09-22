import  express from "express";
import { loginPost } from "./controller/loginController";
const loginRoute = express.Router()

loginRoute.post('/',loginPost)
export default loginRoute
