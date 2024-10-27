import { getProfiles } from "../database/database.js";

// 获取 HTML 元素
const avatarElement = document.getElementById("profile-avatar");
const nameElement = document.getElementById("profile-name");
const emailElement = document.getElementById("profile-email");
const descriptionElement = document.getElementById("profile-description");

// media 元素
const constellationElement = document.getElementById("profile-constellation");
const mbtiElement = document.getElementById("profile-mbti");
const hobbyElement = document.getElementById("profile-hobby");
const linkedElement = document.getElementById("profile-linked");
const xElement = document.getElementById("profile-x");
const wechatElement = document.getElementById("profile-weChat");

export const refreshProfileSidebarData = async () => {
  const profiles = await getProfiles();
  const mainUserprofile = profiles[0];
  console.log("mainUserprofile", mainUserprofile);

  // 更新元素内容
  avatarElement.src = mainUserprofile.avatar; // 设置头像
  nameElement.textContent = mainUserprofile.name; // 设置名字
  emailElement.textContent = mainUserprofile.email; // 设置邮箱
  descriptionElement.textContent = mainUserprofile.description; // 设置描述

  // 设置其他信息
  constellationElement.textContent = mainUserprofile.constellation;
  mbtiElement.textContent = mainUserprofile.mbti;
  hobbyElement.textContent = mainUserprofile.hobby;
  linkedElement.textContent = mainUserprofile.linked;
  xElement.textContent = mainUserprofile.x;
  wechatElement.textContent = mainUserprofile.wechat;
};
