export const bindEditPost = async () => {
  // 获取 HTML 元素
  const modal = document.getElementById("edit-post-modal");
  const btn = document.getElementById("edit-post-btn");
  const cancel = document.getElementById("edit-post-cancel");
  const post = document.getElementById("edit-post-post");
  const close = document.getElementById("edit-post-close");
  const postTextInput = document.getElementById("post-text");
  const postImageInput = document.getElementById("post-image");

  // 点击按钮时显示弹窗并填充数据
  btn.addEventListener("click", function () {
    // 显示弹窗
    modal.style.display = "flex";
  });

  // 点击关闭按钮时隐藏弹窗
  close.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 点击保存按钮时隐藏弹窗（可以在这里添加保存逻辑）
  // const saveButton = document.getElementById("post-save"); // 假设你有一个保存按钮
  // saveButton.addEventListener("click", function () {
  //   // 这里可以添加保存逻辑
  //   modal.style.display = "none";
  // });

  // 点击取消按钮时隐藏弹窗
  cancel.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 点击编辑按钮时显示弹窗并填充数据
  post.addEventListener("click", function () {
    modal.style.display = "none";
  });
};
