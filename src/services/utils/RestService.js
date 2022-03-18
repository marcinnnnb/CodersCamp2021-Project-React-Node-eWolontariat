import axios from 'axios';
import { logout } from '../../store/systemSlice';

const REQUEST_CONTENT_TYPE = "application/json";
const X_REQUESTED_WITH = "XMLHttpRequest";
const ACCESS_CONTROL_ALLOW_ORIGIN = "*"
class RestService {
    constructor(){
        this.axiosInstance = RestService.InitAxiosInstance();
    };
    static InitAxiosInstance() {
        const axiosInstance = axios.create({
            headers: {
                "Content-Type": REQUEST_CONTENT_TYPE,
                "X-Requested-With": X_REQUESTED_WITH,
                "Access-Control-Allow-Origin": ACCESS_CONTROL_ALLOW_ORIGIN
              },
            baseURL: 'https://whispering-oasis-16160.herokuapp.com',
        });

        axiosInstance.interceptors.request.use(request => {
          const token = localStorage.getItem('auth-token');
          request.headers["Auth-Token"] = token;
          return request;
      });

        axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => {
              if (error.response?.status === 401) {
                import("../../store/systemSlice").then((store) => store.dispatch(logout()));
              }
              return Promise.reject(error);
            }
          );
          return axiosInstance;
    };

    get(url, params, config){
        return this.axiosInstance.get(url);
      }

    post(url, data, config){
        return this.axiosInstance.post(url, data, config);
    };

    put(url, params, data, config){
        return this.axiosInstance.put(url, data, {params});
    };

    patch(url, data, config){
        return this.axiosInstance.patch(url, data);
    };

    delete(url,params, config){
        return this.axiosInstance.delete(url, {params});
    };
    
};

export default new RestService();