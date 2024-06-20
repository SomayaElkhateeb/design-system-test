
import axios from "axios";
import PublicHandelingErrors from "../utils/AxiosUtils/PublicHandelingErrors";

export const baseUrl = "";

const MainApi = axios.create({
    baseURL: baseUrl,
});

MainApi.interceptors.request.use(
    function (config) {
        let token = undefined;
        let language = undefined;


        if (typeof window !== "undefined") {
            token = localStorage.getItem("token");
            language = localStorage.getItem("language");

        }

        if (token) config.headers.authorization = `Bearer ${token}`;
        if (language) config.headers["Accept-Language"] = language;

        config.headers["Content-Type"] = "application/x-www-form-urlencoded";
        // application/json;charset=utf-8
        config.headers["Accept"] = "application/json";
        config.headers["Access-Control-Allow-Origin"] = "*";
        config.headers["Access-Control-Allow-Methods"] = "*";
        config.headers["Access-Control-Allow-Headers"] = "*";
        return config;
    },
    function (error) {
        // Do something with request error
        return PublicHandelingErrors.onErrorResponse(error);
    },
);

export default MainApi;
