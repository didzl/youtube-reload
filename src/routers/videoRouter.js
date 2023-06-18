import express from "express";

const videoRouter = express.Router();
const handleWatchUser = (req, res) => res.send("Wtatch Video");
videoRouter.get("/watch", handleWatchUser);

export default videoRouter;
