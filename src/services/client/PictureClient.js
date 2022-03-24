import RestService from "../utils/RestService";

export default class PictureClient {
    static baseUrl = '/picture';
    

    static getPictureById(id) {
        return RestService.get(`${this.baseUrl}/${id}`, {id}, {
            filename: `image-${id}`,
          },
          {
            headers: {
                "Content-Type": "image/jpeg",
            },
          },
          {
            responseType: "blob",
          });
    };

    static addNewPicture(image) {
        return RestService.post(this.baseUrl, image, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    };

    static getUsersPictures(userId) {
      return RestService.get(`${this.baseUrl}/user/${userId}/pictures`, {userId}, {
          headers: {
              "Content-Type": "image/jpeg",
          },
        },
        {
          responseType: "blob",
        });
    };

    static deletePicture(id) {
        return RestService.delete(`${this.baseUrl}/${id}`, {id});
    };
};