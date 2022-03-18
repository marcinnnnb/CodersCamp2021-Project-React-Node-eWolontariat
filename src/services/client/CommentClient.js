import RestService from "../utils/RestService";

export default class CommentsClient {
    static baseUrl = '/comment';

    static getCommentId(id) {
        return RestService.get(`${this.baseUrl}/${id}`);
    };

    static updateCommentById(id, data) {
        return RestService.put(`${this.baseUrl}/${id}`, {id}, data);
    };
};