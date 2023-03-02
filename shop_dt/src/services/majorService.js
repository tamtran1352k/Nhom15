
import api from './api';

const list = () => api.get(api.url.majors).then(res => res.data);
const get = (id) => api.get(`${api.url.majors}/${id}`).then(res => res.data);
const add = (data) => api.post(api.url.majors ,data).then((res) => res.data);
const update = (id, data) => api.put(`${api.url.majors}/${id}`, data).then((res) => res.data);
const remove = (id) => api.delete(`${api.url.majors}/${id}`).then((res) => res.data);

const majorService = {
    list,
    get,
    add,
    update,
    delete : remove,
};

export default majorService;
