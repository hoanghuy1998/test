import api from "./api";
const get = () => api.get(api.url.productSoled);
const getById = (id) => api.get(`${api.url.productSoled}/${id}`);
const add = (data) => api.post(api.url.productSoled, data);
const update = (data, id) => api.put(`${api.url.productSoled}/${id}`, data);

const productSolded = {
  get,
  getById,
  add,
  update,
};
export default productSolded;
