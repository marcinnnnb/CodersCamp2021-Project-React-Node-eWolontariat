import RestService from "../utils/RestService";

export default class UserClient {
    static baseUrl = '/user';

    static getUserById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static registerUser(data) {
        return RestService.post(`${this.baseUrl}/register`, data);
    };

    static loginUser(data) {
        return RestService.post(`${this.baseUrl}/login`, data);
    };

    static updateUserById(id, data) {
        return RestService.patch(`${this.baseUrl}/${id}`, {id}, data);
    };

    static getLoggedInUser(login){
        return RestService.get(`${this.baseUrl}/login/${login}`,login);
    };
};
