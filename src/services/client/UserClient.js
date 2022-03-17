import RestService from "../utils/RestService";

export default class UserClient {
    static baseUrl = '/user';

    static getUserById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static registerUser() {
        return RestService.post(`${this.baseUrl}/register`, {});
    };

    static loginUser() {
        return RestService.post(`${this.baseUrl}/login`, {});
    };

    static updateUserById(id) {
        return RestService.patch(`${this.baseUrl}/${id}`, {id}, {});
    };

    static getLoggedInUser(login){
        return RestService.get(`${this.baseUrl}/login/${login}`,{login});
    };
};
