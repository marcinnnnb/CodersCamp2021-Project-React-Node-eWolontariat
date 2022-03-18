import RestService from "../utils/RestService";

export default class CategoryClient {
    static baseUrl = '/category';

    static getCategoryById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static getAllCategories() {
        return RestService.get(this.baseUrl);
    };

    static addNewCategory(data) {
        return RestService.post(this.baseUrl, data);
    };
};