import RestService from "../utils/RestService";

export default class VolunteerClient {
    static baseUrl = '/volunteer';

    static getVolunteers(firstName, lastName) {
        return RestService.get(this.baseUrl, {firstName, lastName});
    };

    static getVolunteerById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static updateVolunteer(id, data) {
        return RestService.patch(`${this.baseUrl}/${id}`, {id}, data);
    };

    static addNewVolunteer(data) {
        return RestService.post(this.baseUrl, data);
    };

    static getVolunteerComments(id) {
        return RestService.get(`${this.baseUrl}/${id}/comments`, {id});
    };

    static getVolunteersCount() {
        return RestService.get(`${this.baseUrl}/all/count`);
    };

    static addNewVolunteerComment(id) {
        return RestService.get(`${this.baseUrl}/${id}/comments`, {id});
    };

    static deleteVolunteerComment(id, commentId) {
        return RestService.get(`${this.baseUrl}/${id}/comments/${commentId}`,{id, commentId});
    };

    static getVolunteerRate(id) {
        return RestService.get(`${this.baseUrl}/${id}/rate`, {id});
    };
}