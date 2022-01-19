import api from "./api";
const getBlogs = () => api.get(api.url.blogs);
const blogService = {
  getBlogs,
};
export default blogService;
