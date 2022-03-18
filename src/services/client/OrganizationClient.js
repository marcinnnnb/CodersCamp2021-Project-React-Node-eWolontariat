import RestService from "../utils/RestService";

export default class OrganizationClient {
    static baseUrl = '/organization';

    static getOrganizations() {
        return RestService.get(this.baseUrl);
    };

    static getOrganizationById(id){
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static addNewOrganization(data){
        return RestService.post(this.baseUrl, data)
    };

    static updateOrganization(id, data){
        return RestService.patch(`${this.baseUrl}/${id}`, {id}, data)
    };

    static getOrganizationsAllEvent(id){
        return RestService.get(`${this.baseUrl}/${id}/events`, {id});
    };
};