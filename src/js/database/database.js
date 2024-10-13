import {
  getData,
  postData,
  putData,
  deleteData,
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
