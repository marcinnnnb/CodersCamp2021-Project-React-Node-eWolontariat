export default class Api {
   
    static getData() {
        const uri = 'https://api.npoint.io/8d11637b99831903048a';
        return fetch(uri, {
            method: 'GET'
        });
    }
 }