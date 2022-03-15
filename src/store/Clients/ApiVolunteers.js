export default class Api {
    static baseUrl = 'https://whispering-oasis-16160.herokuapp.com/';
   
    static getVolunteers() {
        const uri = `${this.baseUrl}volunteer`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static getVolunteerById(id) {
        const uri = `${this.baseUrl}volunteer/${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static updateVolunteer(id) {
        const uri = `${this.baseUrl}volunteer/${id}`;
        return fetch(uri, {
            method: 'PATCH'
        });
    };

    static addNewVolunteer() {
        const uri = `${this.baseUrl}volunteer`;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static getVolunteerComments(id) {
        const uri = `${this.baseUrl}volunteer/${id}/comments`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static getVolunteersCount() {
        const uri = `${this.baseUrl}volunteer/all/count`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static addNewVolunteerComment(id) {
        const uri = `${this.baseUrl}volunteer/${id}/comments`;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static deleteVolunteerComment(id, commentId) {
        const uri = `${this.baseUrl}volunteer/${id}/comments/${commentId}`;
        return fetch(uri, {
            method: 'DELETE'
        });
    };
 }
