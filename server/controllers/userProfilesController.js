import axios from "axios";

const USER_PROFILES_API_URL = "http://localhost:8000/userProfiles";

export const getUserProfileById = async function (req, res, next) {
  console.log("userPosts", req.params.userId);
  const id = req.params.userId;
  if (!id) {
    return res.status(400).send("Id is required");
  }
  try {
    const response = await axios.get(`${USER_PROFILES_API_URL}/${id}`);
    const userProfile = response.data;

    res.status(200).json({
      msg: "Get UserProfile succeed",
      data: userProfile,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserProfiles = async function (req, res, next) {
  try {
    const response = await axios.get(USER_PROFILES_API_URL);
    const userProfiles = response.data;
    res.status(200).json({
      msg: "Get userProfiles succeed",
      data: userProfiles,
    });
  } catch (error) {
    next(error);
  }
};

export const patchUserProfileById = async function (req, res, next) {
  const id = req.params.userId;
  if (!id) {
    return res.status(400).send("Id is required");
  }
  const userProfileData = req.body;

  try {
    const response = await axios.patch(
      `${USER_PROFILES_API_URL}/${id}`,
      userProfileData,
    );
    const userProfile = response.data;

    res.status(200).json({
      msg: "Patch UserProfile succeed",
      data: userProfile,
    });
  } catch (error) {
    next(error);
  }
};
