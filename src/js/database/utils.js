import axios from "axios";
import path from "path-browserify";

export const getData = async (path) => {
  try {
    console.log("getData", path);
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postData = async (path, data) => {
  try {
    await axios.post(path, data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    throw error;
  }
};

export const putData = async (path, data) => {
  try {
    await axios.put(path, data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (path) => {
  try {
    await axios.delete(path);
  } catch (error) {
    throw error;
  }
};

export const getResourcePath = (pathInfo) => {
  const dbPath =
    import.meta.env.VITE_PROD_DB_PATH || import.meta.env.VITE_LOCAL_DB_PATH;
  const protocol = dbPath.includes("localhost") ? "http://" : "https://";

  return protocol + dbPath + "/api/" + path.join(...pathInfo);
};
