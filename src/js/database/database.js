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

export const updateProfiles = async (profileData) => {
  const profilesPath = getResourcePath(["userProfiles", "1"]);

  const userProfiles = await patchData(profilesPath, profileData);

  return userProfiles.data;
};

export const putProfile = async (id, updatedProfile) => {
  const profilesPath = getResourcePath(["userProfiles", id]);
  await putData(profilesPath, updatedProfile);
};

export const deletePost = async (id, updatedPost) => {
  const postsPath = getResourcePath(["userPosts", id]);
  await deleteData(postsPath, updatedPost);
};
