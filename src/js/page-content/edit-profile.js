import { putProfile, updateProfiles } from "../database/database.js";
import { refreshProfileSidebarData } from "./profile-sidebar.js";

export const bindEditProfile = async () => {
  // 获取 HTML 元素
  const modal = document.getElementById("edit-profile-modal");
  const btn = document.getElementById("edit-profile-btn");
  const close = document.getElementById("edit-profile-close");
  const cancel = document.getElementById("edit-profile-cancel");
  const save = document.getElementById("edit-profile-save");

  // 点击按钮时显示弹窗并填充数据
  btn.addEventListener("click", function () {
    // 获取侧边栏中的信息
    const userAvatar = document.getElementById("profile-avatar").src;
    const profileName = document.getElementById("profile-name").textContent;
    const profileEmail = document.getElementById("profile-email").textContent;
    const profileDescription = document.getElementById(
      "profile-description",
    ).textContent;
    const constellation = document.getElementById(
      "profile-constellation",
    ).textContent;
    const mbti = document.getElementById("profile-mbti").textContent;
    const hobby = document.getElementById("profile-hobby").textContent;
    const linked = document.getElementById("profile-linked").textContent;
    const x = document.getElementById("profile-x").textContent;
    const weChat = document.getElementById("profile-weChat").textContent;

    console.log(
      "Print all data",
      profileName,
      profileEmail,
      constellation,
      mbti,
      hobby,
      linked,
      x,
      weChat,
      profileDescription,
    );
    // // 将侧边栏中的信息填入弹窗表单
    document.getElementById("upload-avatar").src = userAvatar;
    document.getElementById("name").value = profileName;
    document.getElementById("email").value = profileEmail;
    document.getElementById("constellation").value = constellation;
    document.getElementById("MBTI").value = mbti;
    document.getElementById("hobby").value = hobby;
    document.getElementById("linked").value = linked;
    document.getElementById("x").value = x;
    document.getElementById("weChat").value = weChat;
    document.getElementById("profile-introduction").value = profileDescription;

    // 显示弹窗
    modal.style.display = "flex";
  });

  // 点击关闭按钮时隐藏弹窗
  close.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 点击保存按钮时隐藏弹窗
  save.addEventListener("click", async function () {
    modal.style.display = "none";

    // 获取表单中的信息

    const profileName = document.getElementById("name").value;
    const profileEmail = document.getElementById("email").value;
    const profileDescription = document.getElementById(
      "profile-introduction",
    ).value;
    const constellation = document.getElementById("constellation").value;
    const mbti = document.getElementById("MBTI").value;
    const hobby = document.getElementById("hobby").value;
    const linked = document.getElementById("linked").value;
    const x = document.getElementById("x").value;
    const weChat = document.getElementById("weChat").value;

    console.log(
      "Print all new data",
      profileName,
      profileEmail,
      constellation,
      mbti,
      hobby,
      linked,
      x,
      weChat,
      profileDescription,
    );

    await updateProfiles({
      name: profileName,
      email: profileEmail,
      description: profileDescription,
      hobby: hobby,
      constellation: constellation,
      mbti: mbti,
      linked: linked,
      x: x,
      wechat: weChat,
    });

    await refreshProfileSidebarData();
  });

  // 点击取消按钮时隐藏弹窗
  cancel.addEventListener("click", function () {
    modal.style.display = "none";
  });
};

export const bindUploadAvatar = () => {
  const dropArea = document.getElementById("drop-area");
  const fileInput = document.getElementById("file-input");

  // 点击图标区域时触发文件选择
  dropArea.addEventListener("click", () => {
    fileInput.click();
  });
  // 拖放事件处理
  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); // 防止默认事件
  });

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log(`已选择文件: ${files[0].name}`); // 可以在这里处理文件
      uploadFile(files[0]); // 上传文件
    }
  });
};

const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file); // 将文件添加到表单数据

  // 发送 POST 请求上传文件
  putProfile(1, { avatar: formData });
};
