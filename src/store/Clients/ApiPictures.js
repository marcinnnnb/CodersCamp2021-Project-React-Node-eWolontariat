export default class Api {
    static baseUrl = 'https://whispering-oasis-16160.herokuapp.com/picture/';
    
    static getPictureById(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static addNewPicture() {
        const uri = this.baseUrl;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static deletePicture(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'DELETE'
        });
    };
};