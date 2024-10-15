import express from "express";

import {
  getUserProfileById,
  getUserProfiles,
  patchUserProfileById,
} from "../controllers/userProfilesController.js";

const userProfilesRouter = express.Router();

//GET get UserProfile by id   /api/userProfiles/:userId
userProfilesRouter.get("/:userId", getUserProfileById);

//GET get UserProfiles   /api/userProfiles
userProfilesRouter.get("/", getUserProfiles);

//PATCH update UserProfile by id   /api/userProfiles/:userId
userProfilesRouter.patch("/:userId", patchUserProfileById);

export default userProfilesRouter;
