import axios from 'axios';
import { logout } from '../../store/systemSlice';
const REQUEST_CONTENT_TYPE = "application/json";
const X_REQUESTED_WITH = "XMLHttpRequest";

export default class RestService {

    constructor(){
        this.axiosInstance = RestService.InitAxiosInstance();
    };

    static InitAxiosInstance() {
        const axiosInstance = axios.create({
            headers: {
                "Content-Type": REQUEST_CONTENT_TYPE,
                "X-Requested-With": X_REQUESTED_WITH,
              },
            baseURL: 'https://whispering-oasis-16160.herokuapp.com',
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

    get(url, params, config) {
        return this.axiosInstance.get(url);
      }

    post(url, data, config){
        return this.axiosInstance.post(url, data, config);
    };

    put(url, params, data){
        return this.axiosInstance.put(url, data, {params});
    };

    patch(url, data){
        return this.axiosInstance.patch(url, data);
    };

    delete(url,params){
        return this.axiosInstance.delete(url, {params});
    };
    
};