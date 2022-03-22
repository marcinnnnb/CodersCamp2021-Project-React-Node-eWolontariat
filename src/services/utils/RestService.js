import axios from 'axios';
import { toast } from 'react-toastify';
import { logout } from 'store/systemSlice';

const REQUEST_CONTENT_TYPE = "application/json";
const ACCEPT= "application/json, image/*";
const X_REQUESTED_WITH = "XMLHttpRequest";
const ACCESS_CONTROL_ALLOW_ORIGIN = "*";
const ACCESS_CONTROL_EXPOSE_HEADERS = "Auth-Token, Content-Type";

class RestService {
    constructor(){
        this.axiosInstance = RestService.InitAxiosInstance();
    };
    static InitAxiosInstance() {
        const axiosInstance = axios.create({
            headers: {
                "Content-Type": REQUEST_CONTENT_TYPE,
                "X-Requested-With": X_REQUESTED_WITH,
                "Access-Control-Allow-Origin": ACCESS_CONTROL_ALLOW_ORIGIN,
                "Accept": ACCEPT,
                "Access-Control-Expose-Headers": ACCESS_CONTROL_EXPOSE_HEADERS
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
                import("store/systemSlice").then((store) => store.dispatch(logout()));
              } 
              return Promise.reject(error);
            }
          );
          return axiosInstance;
    };

    get(url, params, config){
        return this.axiosInstance.get(url, params, config);
      }

    post(url, data, config){
        return this.axiosInstance.post(url, data, config);
    };

    put(url, params, data, config){
        return this.axiosInstance.put(url, data, {params}, config);
    };

    patch(url, data, config){
        return this.axiosInstance.patch(url, data, config);
    };

    delete(url,config){
        return this.axiosInstance.delete(url, config);
    };
    
};

export default new RestService();