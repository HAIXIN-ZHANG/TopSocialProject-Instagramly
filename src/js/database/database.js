import {
  getData,
  postData,
  putData,
  deleteData,
  patchData,
  getResourcePath,
} from "./utils";

export const getProfiles = async () => {
  const profilesPath = getResourcePath(["userProfiles"]);
  const userProfiles = await getData(profilesPath);

  return userProfiles.data;
};

export const getPosts = async () => {
  const postsPath = getResourcePath(["userPosts"]);
  const userPosts = await getData(postsPath);

  return userPosts.data;
};

export const getPostById = async (id) => {
  const postsPath = getResourcePath(["userPosts", id]);
  const userPosts = await getData(postsPath);

  return userPosts.data;
};

export const createPost = async (data) => {
  const postsPath = getResourcePath(["userPosts"]);
  await postData(postsPath, data);
};

export const updatePostById = async (id, updatedPost) => {
  const postsPath = getResourcePath(["userPosts", id]);
  await putData(postsPath, updatedPost);
};

export const updateProfiles = async (profileData) => {
  const profilesPath = getResourcePath(["userProfiles", "1"]);

  const userProfiles = await patchData(profilesPath, profileData);

  return userProfiles.data;
};

export const deletePost = async (id, updatedPost) => {
  const postsPath = getResourcePath(["userPosts", id]);
  await deleteData(postsPath, updatedPost);
};
