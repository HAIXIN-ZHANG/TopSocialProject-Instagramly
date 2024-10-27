import { createPost, updatePostById } from "../database/database.js";
import { convertToBase64 } from "../base64Utils.js";
import { refreshPostData } from "./post-content.js";

export const bindEditPost = async () => {
  // 获取 HTML 元素
  const modal = document.getElementById("edit-post-modal");
  const btn = document.getElementById("edit-post-btn");
  const cancel = document.getElementById("edit-post-cancel");
  const post = document.getElementById("edit-post-post");
  const close = document.getElementById("edit-post-close");
  const postTextInput = document.getElementById("post-text");
  const postImageInput = document.getElementById("post-image");

  const postImage = document.getElementById("post-file-image");
  const postDropArea = document.getElementById("post-drop-area");
  const fileInput = document.getElementById("post-file-input");
  const postModalTitle = document.getElementById("post-modal-title");

  // 点击按钮时显示弹窗并填充数据
  btn.addEventListener("click", function () {
    // 显示弹窗
    modal.style.display = "flex";

    // 点击图标区域时触发文件选择
    postDropArea.addEventListener("click", () => {
      fileInput.click();
    });
  });

  const postId = document
    .getElementById("post-modal-title")
    .getAttribute("data-post-id");

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log(`已选择文件: ${files[0].name}`); // 可以在这里处理文件

      postImage.src = URL.createObjectURL(files[0]);

      console.log(`postImage.src`, postImage.src);
      postImage.style.display = "block";
    }
  });

  // 点击关闭按钮时隐藏弹窗
  close.addEventListener("click", function () {
    modal.style.display = "none";
    postTextInput.value = "";
    postImageInput.value = "";
    postImage.src = "";
    postModalTitle.innerText = "Create Post";
  });

  // 点击取消按钮时隐藏弹窗
  cancel.addEventListener("click", function () {
    modal.style.display = "none";
    // clear the input fields
    postTextInput.value = "";
    postImageInput.value = "";
    postImage.src = "";
    postModalTitle.innerText = "Create Post";
  });

  // 点击编辑按钮时显示弹窗并填充数据
  post.addEventListener("click", async function () {
    modal.style.display = "none";

    const userName = document.getElementById("profile-name").innerText;
    const userAvatar = document.getElementById("profile-avatar").src;

    const postImageInput = document.getElementById("post-file-input");

    const postContent = document.getElementById("post-text").value;

    const timestamp = Date.now();

    // 1729049981844 > 2024-10-16T03:45:45.568Z 变成 2024-10-16 03:45:45
    const currentTime = new Date(timestamp)
      .toISOString()
      .replace("T", " ")
      .split(".")[0];

    // 处理图片
    const file = postImageInput.files[0];
    let image = postImage.src;
    if (file) {
      image = await convertToBase64(file);
    }

    const postData = {
      user: userName,
      avatar: userAvatar,
      image: image,
      content: postContent,
      timestamp: currentTime,
    };

    const postId = document
      .getElementById("post-modal-title")
      .getAttribute("data-post-id");

    // 更新数据
    if (postId) {
      await updatePostById(postId, postData);
    } else {
      await createPost(postData);
    }
    // 重新加载数据
    setTimeout(() => {
      location.reload();
    }, 500); // 延迟 0.5 秒
  });
};
