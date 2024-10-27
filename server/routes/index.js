import express from "express";

import userProfilesRouter from "./userProfiles.js";
import userPostsRouter from "./userPosts.js";

//create router
const router = express.Router();

router.use("/userProfiles", userProfilesRouter);
router.use("/userPosts", userPostsRouter);

export default router;
