export default class Api {
    static baseUrl = 'https://whispering-oasis-16160.herokuapp.com/user/';
    
    static getUserById(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static registerUser() {
        const uri = `${this.baseUrl}register`;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static loginUser() {
        const uri = `${this.baseUrl}login`;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static updateUserById(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'PATCH'
        });
    };
};