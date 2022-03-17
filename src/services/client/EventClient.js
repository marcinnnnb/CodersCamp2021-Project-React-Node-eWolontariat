import RestService from "../utils/RestService";

export default class EventClient {
    static baseUrl = '/event';

    static getEvents() {
        //return RestService.get(`${this.baseUrl}?category=${category}&search=${search}`, {category, search});
        return RestService.get(this.baseUrl);
    };

    static addNewEvent() {
        return RestService.post(this.baseUrl, {});
    };

    static getEventById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    }; 

    static updateEvent(id) {
        return RestService.put(`${this.baseUrl}/${id}`, {id}, {});
    };

    static getEventsSucceeded() {
        return RestService.get(`${this.baseUrl}/count/true`);
    };

    static getAssignedVolunteers(id) {
        return RestService.get(`${this.baseUrl}/${id}/volunteers`, {id});
    };
    
    static getEventComments(id) {
        return RestService.get(`${this.baseUrl}/${id}/comments`, {id});
    };

    static addNewEventComment(id) {
        return RestService.post(`${this.baseUrl}/${id}/comments`, {});
    };

    static deleteEventComment(id, commentId) {
        return RestService.delete(`${this.baseUrl}/${id}/comments/${commentId}`, {id, commentId});
    };
 };
 