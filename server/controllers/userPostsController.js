import axios from "axios";

const USER_POSTS_API_URL = "http://localhost:8000/userPosts";

export const getUserPosts = async function (req, res, next) {
  try {
    const response = await axios.get(USER_POSTS_API_URL);
    const userPosts = response.data;
    res.status(200).json({
      msg: "Get userPosts succeed",
      data: userPosts,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserPostById = async function (req, res, next) {
  const id = req.params.post_id;
  if (!id) {
    return res.status(400).send("Id is required");
  }
  try {
    const response = await axios.get(`${USER_POSTS_API_URL}/${id}`);
    const userPost = response.data;
    if (!userPost) {
      return res.status(404).json({
        msg: "UserPost not found",
      });
    }
    res.status(200).json({
      msg: "Get userPost succeed",
      data: userPost,
    });
  } catch (error) {
    next(error);
  }
};

export const postUserPost = async function (req, res, next) {
  const newUserPost = req.body;

  if (Object.keys(newUserPost).length === 0) {
    return res.status(400).send("UserPost is required");
  }

  try {
    await axios.post(USER_POSTS_API_URL, newUserPost, {
      headers: { "Content-Type": "application/json" },
    });
    res.status(200).json({
      msg: "UserPost is created",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUserPostById = async function (req, res, next) {
  const id = req.params.post_id;
  if (!id) {
    return res.status(400).send("Id is required");
  }
  try {
    await axios.delete(`${USER_POSTS_API_URL}/${id}`);
    res.status(200).json({
      msg: "UserPost is deleted",
    });
  } catch (error) {
    next(error);
  }
};

export const putUserPost = async function (req, res, next) {
  const id = req.params.post_id;
  if (!id) {
    return res.status(400).send("Id is required");
  }
  const updatedUserPost = req.body;
  try {
    await axios.put(`${USER_POSTS_API_URL}/${id}`, updatedUserPost, {
      headers: { "Content-Type": "application/json" },
    });
    res.status(200).json({
      msg: "UserPost is updated",
    });
  } catch (error) {
    next(error);
  }
};
