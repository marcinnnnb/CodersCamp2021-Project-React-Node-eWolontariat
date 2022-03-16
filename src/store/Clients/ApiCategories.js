export default class Api {
    static baseUrl = 'https://whispering-oasis-16160.herokuapp.com/category/';
    
    static getCategoryById(id) {
        const uri = `${this.baseUrl}${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static getAllCategories() {
        const uri = this.baseUrl;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static addNewCategory() {
        const uri = this.baseUrl;
        return fetch(uri, {
            method: 'POST'
        });
    };
};