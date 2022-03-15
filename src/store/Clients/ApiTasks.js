export default class Api {
    static baseUrl = 'https://whispering-oasis-16160.herokuapp.com/';
   
    static getEvents() {
        const uri = `${this.baseUrl}event`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static getEventsByCategory(category,search) {
        const uri = `${this.baseUrl}event?category=${category}&search=${search}`;
        return fetch(uri, {
            method: 'GET'
        });
    }

    static addNewEvent() {
        const uri = `${this.baseUrl}event`;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static getEventById(id) {
        const uri = `${this.baseUrl}event/${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static getEventPictureById(id) {
        const uri = `${this.baseUrl}picture/${id}`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static updateEvent(id) {
        const uri = `${this.baseUrl}event/${id}`;
        return fetch(uri, {
            method: 'PUT'
        });
    };

    static getEventsSucceeded() {
        const uri = `${this.baseUrl}count/true`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static getAssignedVolunteers(id) {
        const uri = `${this.baseUrl}event/${id}/volunteers`;
        return fetch(uri, {
            method: 'GET'
        });
    };
    
    static getEventComments(id) {
        const uri = `${this.baseUrl}event/${id}/comments`;
        return fetch(uri, {
            method: 'GET'
        });
    };

    static addNewEventComment(id) {
        const uri = `${this.baseUrl}event/${id}/comments`;
        return fetch(uri, {
            method: 'POST'
        });
    };

    static deleteEventComment(id, commentId) {
        const uri = `${this.baseUrl}event/${id}/comments/${commentId}`;
        return fetch(uri, {
            method: 'DELETE'
        });
    };
    
 }
 