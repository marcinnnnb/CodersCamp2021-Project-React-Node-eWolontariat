import RestService from "../utils/RestService";

export default class PictureClient {
    static baseUrl = '/picture';

    static getPictureById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id});
    };

    static addNewPicture(image) {
        return RestService.post(this.baseUrl, image, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    };

    static deletePicture(id) {
        return RestService.delete(`${this.baseUrl}/${id}`, {id});
    };
};