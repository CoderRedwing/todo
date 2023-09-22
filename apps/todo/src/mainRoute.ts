import  express from "express";
import authRoute from "./routeController/auth/authRoute";

const mainRoute = express.Router()

mainRoute.use('/auth',authRoute)
export default mainRoute