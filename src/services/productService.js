import api from "./api";
const getProduct = () => api.get(`${api.url.products}/list`);
const getpaging = (p, pe) =>
  api.get(`${api.url.products}/get-paging?page=${p}&perpage=${pe}`);
const getSearch_getpaging = (s, p, pe) =>
  api.get(
    `${api.url.products}/searchAndGet-paging?search=${s}&page=${p}&perpage=${pe}`
  );
const description = (s) => api.get(`${api.url.description}?search=${s}`);
const update = (data, id) => api.put(`${api.url.products}/list/${id}`, data);
const remove = (id) => api.delete(`${api.url.products}/list/${id}`);
const add = (d) => {
  const formData = new FormData();
  for (const key in d) {
    if (key === "imgDescription") {
      for (let i = 0; i < d[key].length; i++) {
        formData.append(key, d[key][i]);
      }
    } else formData.append(key, d[key]);
  }
  return api.post(`${api.url.products}/list`, formData, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

const productService = {
  getProduct,
  getpaging,
  getSearch_getpaging,
  description,
  update,
  remove,
  add,
};
export default productService;
