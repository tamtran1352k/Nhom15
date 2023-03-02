import axios from "axios";

const url = {
    baseUrl: "http://localhost:3000",
    login: "/login",
    majors: "/majors",
};
const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

const api1 = {
    url,
    instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch,
};

export default api1;