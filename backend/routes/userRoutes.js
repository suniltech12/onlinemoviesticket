import express from "express";

const router=express.Router();

import {registerUser,userLogin} from "../controllers/user.controllers.js"

router.post("/register/new",registerUser);
router.post("/login",userLogin);








export default router;