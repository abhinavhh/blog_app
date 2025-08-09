// define the base api constant

export const API_BASE_URL: string = "http://localhost:5000";

export const API_ENDPOINTS = {
  // ---------- AUTH ----------
  register: `${API_BASE_URL}/api/auth/register`,
  login: `${API_BASE_URL}/api/auth/login`,
  sendOtp: `${API_BASE_URL}/api/auth/send-otp`,
  verifyOtp: `${API_BASE_URL}/api/auth/verify-otp`,
  validateToken: `${API_BASE_URL}/api/auth/validate-token`,
  refreshToken: `${API_BASE_URL}/api/auth/refresh-token`,
  logout: `${API_BASE_URL}/api/auth/logout`,

  // ---------- USER ----------
  getUserProfile: (id: string) => `${API_BASE_URL}/api/users/${id}`,
  updateUserProfile: (id: string) => `${API_BASE_URL}/api/users/${id}`,
  changePassword: `${API_BASE_URL}/api/users/change-password`,

  // ---------- POSTS ----------
  getAllPosts: `${API_BASE_URL}/api/posts`,
  getPostById: (id: string) => `${API_BASE_URL}/api/posts/${id}`,
  createPost: `${API_BASE_URL}/api/posts`,
  updatePost: (id: string) => `${API_BASE_URL}/api/posts/${id}`,
  deletePost: (id: string) => `${API_BASE_URL}/api/posts/${id}`,

  // ---------- COMMENTS ----------
  getComments: (postId: string) => `${API_BASE_URL}/api/posts/${postId}/comments`,
  addComment: (postId: string) => `${API_BASE_URL}/api/posts/${postId}/comments`,
  deleteComment: (postId: string, commentId: string) =>
    `${API_BASE_URL}/api/posts/${postId}/comments/${commentId}`,

  // ---------- LIKES ----------
  likePost: (postId: string) => `${API_BASE_URL}/api/posts/${postId}/like`,
  unlikePost: (postId: string) => `${API_BASE_URL}/api/posts/${postId}/unlike`,

  // ---------- ADMIN ----------
  getAllUsers: `${API_BASE_URL}/api/admin/users`,
  deleteUser: (id: string) => `${API_BASE_URL}/api/admin/users/${id}`,
} as const;
