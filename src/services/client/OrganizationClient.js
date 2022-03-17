import RestService from "../utils/RestService";

export default class OrganizationClient {
    static baseUrl = '/organization';

    static getOrganizations() {
        return RestService.get(this.baseUrl);
    };

    static getOrganizationById(id){
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static addNewOrganization(){
        return RestService.post(this.baseUrl, {})
    };

    static updateOrganization(id){
        return RestService.patch(`${this.baseUrl}/${id}`, {id}, {})
    };

    static getOrganizationsAllEvent(id){
        return RestService.get(`${this.baseUrl}/${id}/events`, {id});
    };
};