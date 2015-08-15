import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ContactsApi{
    constructor(http){
        this.http = http;
    }

    getContacts(){
        //get reference to http to be used w/n the promise below
        // this when we get there will be the 'window'
        var http = this.http;
        var promise = new Promise((resolve, reject) =>{
            http.get('/api/Contacts')
                .then(httpResponse => {
                    resolve(httpResponse.response);
                })
        });

        return promise;
    }
}