export default class Api {
   
    static getData() {
        const uri = 'https://api.npoint.io/44dbc66d5c17c97ade26';
        return fetch(uri, {
            method: 'GET'
        });
    }
 }