import express from "express";
//import { deleteUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/test", (req, res) => {
    res.send("it works!")
})


export default router;