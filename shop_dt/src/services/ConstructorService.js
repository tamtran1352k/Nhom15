
import api1 from './api1';

const list = () => api1.get(api1.url.login).then(res => res.data);
const get = (id) => api1.get(`${api1.url.login}/${id}`).then(res => res.data);
const add = (data) => api1.post(api1.url.login ,data).then((res) => res.data);
const update = (id, data) => api1.put(`${api1.url.login}/${id}`, data).then((res) => res.data);
const remove = (id) => api1.delete(`${api1.url.login}/${id}`).then((res) => res.data);

const ConstructorService = {
    list,
    get,
    add,
    update,
    delete : remove,
};

export default ConstructorService;
