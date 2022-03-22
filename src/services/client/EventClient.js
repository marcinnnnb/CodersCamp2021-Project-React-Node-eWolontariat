import RestService from "../utils/RestService";

export default class EventClient {
    static baseUrl = '/event';

    static getEvents(params) {
        return RestService.get(this.baseUrl, { params });
    };

    static addNewEvent(data) {
        return RestService.post(this.baseUrl, data);
    };

    static getEventById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    }; 

    static updateEvent(id, data) {
        return RestService.put(`${this.baseUrl}/${id}`, {id}, data);
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

    static addNewEventComment(id, data) {
        return RestService.post(`${this.baseUrl}/${id}/comments`, data);
    };

    static deleteEventComment(id, commentId) {
        return RestService.delete(`${this.baseUrl}/${id}/comments/${commentId}`, {id, commentId});
    };
 };
 