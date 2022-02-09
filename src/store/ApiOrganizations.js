export default class Api {
   
    static getData() {
        const uri = 'https://api.npoint.io/0dd81319d981020bb21f';
        return fetch(uri, {
            method: 'GET'
        });
    }
 }
 