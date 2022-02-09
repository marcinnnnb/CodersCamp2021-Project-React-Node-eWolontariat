export default class Api {
   
    static getData() {
        const uri = 'https://api.npoint.io/8f474d7ed660f96cb791';
        return fetch(uri, {
            method: 'GET'
        });
    }
 }