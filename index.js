import { refreshProfileSidebarData } from "./src/js/page-content/profile-sidebar.js";
import {
  bindEditProfile,
  bindUploadAvatar,
} from "./src/js/page-content/edit-profile.js";
import { bindEditPost } from "./src/js/page-content/update-post.js";
import {
  refreshPostData,
  bindContentCardButtons,
} from "./src/js/page-content/post-content.js";

async function initialize() {
  // profile-sidebar
  refreshProfileSidebarData();

  // edit-profile modal
  bindEditProfile();
  bindEditPost();
  bindUploadAvatar();

  // main-content posts

  await refreshPostData();

  bindContentCardButtons();
}

// Call the async function to execute the code
initialize();
