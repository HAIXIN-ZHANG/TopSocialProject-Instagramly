import { getPosts, deletePost, getPostById } from "../database/database.js";

// 获取容器
const postsContainer = document.getElementById("posts-container");

export const refreshPostData = async () => {
  const posts = await getPosts();
  console.log("posts", posts);
  if (posts.length > 0) {
    // 遍历数据并生成HTML
    posts.forEach((post) => {
      const postHTML = `
                <div class="post">
                    <div class="post-header">
                        <!-- 用户头像 -->
                        <div class="post-profile">
                            <img src=${post.avatar} alt="Avatar" class="post-avatar">
                            <span class="post-user">${post.user}</span>
                        </div>
                        <div class="post-buttons">
                            <img class="post-edit-btn" src="public/image/icon/icon-edit.png" alt="edit post button"  data-post-id=${post.id}>
                            <img class="post-remove-btn" src="public/image/icon/icon-close.png" alt="remove post button" data-post-id=${post.id}>
                        </div>
                    </div>
                    <div class="post-content">
                        <img src="${post.image}" alt="Post Image" class="post-image">
                        <p>${post.content}</p>
                    </div>
                    <div class="post-footer">
                        <p class="post-timestamp">${post.timestamp}</p>
                    </div>
                </div>
            `;
      postsContainer.innerHTML += postHTML;
    });
  }
};

export const bindContentCardButtons = async () => {
  const editPostButton = document.querySelectorAll(".post-edit-btn");
  const removePostButton = document.querySelectorAll(".post-remove-btn");
  const deletePostModal = document.getElementById("delete-post-modal");

  const modal = document.getElementById("edit-post-modal");

  const postText = document.getElementById("post-text");
  const postImage = document.getElementById("post-file-image");

  const postModalTitle = document.getElementById("post-modal-title");

  // 绑定编辑按钮
  editPostButton.forEach((button) => {
    button.addEventListener("click", async () => {
      const postId = button.attributes["data-post-id"].value;
      console.log("Edit post", postId);

      const postData = await getPostById(postId);
      modal.style.display = "flex";
      // inset value
      postText.value = postData.content;
      postImage.src = postData.image;
      postImage.style.display = "block";

      // update title
      postModalTitle.innerText = "Edit Post";
      postModalTitle.setAttribute("data-post-id", postId);
    });
  });

  // 绑定删除按钮
  removePostButton.forEach((button) => {
    button.addEventListener("click", async () => {
      const postId = button.attributes["data-post-id"].value;

      deletePostModal.style.display = "flex";
      const close = document.getElementById("delete-post-close");
      const cancel = document.getElementById("delete-post-cancel");
      const confirm = document.getElementById("delete-post-delete");

      close.addEventListener("click", function () {
        deletePostModal.style.display = "none";
      });

      cancel.addEventListener("click", function () {
        deletePostModal.style.display = "none";
      });

      confirm.addEventListener("click", async () => {
        await deletePost(postId);
        deletePostModal.style.display = "none";

        // 重新加载数据
        setTimeout(() => {
          location.reload();
        }, 500); // 延迟 0.5 秒
      });
    });
  });
};
