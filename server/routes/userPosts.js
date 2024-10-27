import express from "express";

import {
  getUserPosts,
  getUserPostById,
  postUserPost,
  putUserPost,
  deleteUserPostById,
} from "../controllers/userPostsController.js";

const userPostsRouter = express.Router();

//GET get all user posts  /api/userPosts
userPostsRouter.get("/", getUserPosts);

//GET get a user post by id /api/userPosts/:post_id
userPostsRouter.get("/:post_id", getUserPostById);

//POST post a user post   /api/userPosts
userPostsRouter.post("/", postUserPost);

//PUT update a user post by id   /api/userPosts/:post_id
userPostsRouter.put("/:post_id", putUserPost);

//DELETE delete a user post by id  /api/userPosts/:post_id
userPostsRouter.delete("/:post_id", deleteUserPostById);

export default userPostsRouter;
