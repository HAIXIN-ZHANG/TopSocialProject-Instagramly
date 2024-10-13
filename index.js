import { refreshProfileSidebarData } from "./src/js/page-content/profile-sidebar.js";
import { bindEditProfile } from "./src/js/page-content/edit-profile.js";
import { bindEditPost } from "./src/js/page-content/update-post.js";

// profile-sidebar
refreshProfileSidebarData();

// edit-profile modal
bindEditProfile();
bindEditPost();
