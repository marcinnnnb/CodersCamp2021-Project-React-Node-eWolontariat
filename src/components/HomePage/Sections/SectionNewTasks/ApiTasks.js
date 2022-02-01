export default class Api {
   
    static getData() {
        const uri = 'https://api.npoint.io/8407c4b849944036bc26';
        return fetch(uri, {
            method: 'GET'
        });
    }
 }
 