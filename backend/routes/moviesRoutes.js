import express from "express";

const router=express.Router();
import {createMovies, getMovies} from "../controllers/movies.controllers.js"


router.post("/movies/add",createMovies);
router.get("/allmovies",getMovies);



export default router;