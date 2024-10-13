import express from "express";

import {
  getUserProfileById,
  getUserProfiles,
  putUserProfileById,
} from "../controllers/userProfilesController.js";

const userProfilesRouter = express.Router();

//GET get UserProfile by id   /api/userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);

//GET get UserProfiles   /api/userProfiles
userProfilesRouter.get("/", getUserProfiles);

//PUT update UserProfile by id   /api/userProfiles/:userId
userProfilesRouter.put("/:userId", putUserProfileById);

export default userProfilesRouter;
