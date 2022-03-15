export default class Api {
    static baseUrl = 'https://whispering-oasis-16160.herokuapp.com/comments/';
    
    static getCommentId(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static updateCommentById(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'PUT'
        });
    };
};