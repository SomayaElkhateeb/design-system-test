import axios from 'axios';
import PublicHandelingErrors from '../utils/AxiosUtils/PublicHandelingErrors';


//  get url from saved domain 
let custom_Basic_Url: string | null | undefined = "my.dookan.net"
if (typeof window !== "undefined") {
	custom_Basic_Url = localStorage.getItem("domain")
}
console.log(custom_Basic_Url)
export const baseUrl = custom_Basic_Url ? `https://${custom_Basic_Url}/api/v1/}`
	:
	"https://my.dookan.net/api/v1/"



const MainApi = axios.create({
	baseURL: baseUrl,
});

MainApi.interceptors.request.use(
	function (config) {
		let token = undefined;
		let language = undefined;

		if (typeof window !== 'undefined') {
			token = localStorage.getItem('token');
			language = localStorage.getItem('language');
		}

		if (token) config.headers.authorization = `Bearer ${token}`;
		// if (language) config.headers['Accept-Language'] = language;

		// config.headers["Content-Type"] = "application/x-www-form-urlencoded";

		config.headers['Content-Type'] = 'application/json';
		// application/json;charset=utf-8
		config.headers['Accept'] = 'application/json';
		// config.headers['Access-Control-Allow-Origin'] = '*';
		// config.headers['Access-Control-Allow-Methods'] = '*';
		// config.headers['Access-Control-Allow-Headers'] = '*';
		if (!config.params) {
			config.params = {};
		}
		config.params['locale'] = language;
		config.params['accept_token'] = true;
		return config;
	},
	function (error) {

		// Do something with request error
		return PublicHandelingErrors.onErrorResponse(error);
	},
);

export default MainApi;
