import api from "./api";
const list = () => api.get(api.url.users);
const get = (id) => api.get(`${api.url.users}/${id}`);
const add = (data) => api.post(api.url.users, data);
const update = (id, data) =>
  api.put(`${api.url.users}/${id}`, data);
const remove = (id) =>
  api.delete(`${api.url.users}/${id}`);
const userService = {
    list,
  get,
  add,
  update,
  remove,
};
export default userService;
