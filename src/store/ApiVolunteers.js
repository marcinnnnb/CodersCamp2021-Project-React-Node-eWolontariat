export default class Api {
   
    static getData() {
        const uri = 'https://api.npoint.io/3f0f98a4cd7eca33c3e9';
        return fetch(uri, {
            method: 'GET'
        });
    }
 }