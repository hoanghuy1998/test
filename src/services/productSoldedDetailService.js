import api from "./api";

const get = (search) => api.get(`${api.url.detailsQuery}?search=${search}`);

const detail = {
  get,
};
export default detail;
