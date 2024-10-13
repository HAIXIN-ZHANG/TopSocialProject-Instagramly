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
  save.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // 点击取消按钮时隐藏弹窗
  cancel.addEventListener("click", function () {
    modal.style.display = "none";
  });
};
