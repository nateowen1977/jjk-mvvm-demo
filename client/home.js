import {inject} from 'aurelia-framework';
import {ContactsApi} from 'service';

@inject(ContactsApi)
export class Home{
    //constructor, injectables will come in order they are declared on the @inject decorator
    constructor(api){
        this.ContactsApi = api;
        this.contacts = [];
    }

    //this is called when the class is instantiated
    bind(){
        //need to get a reference to 'this' context as 'this' will not be
        // the same when the promise returns
        var context = this;
        this.ContactsApi.getContacts()
            .then(response =>{
                context.contacts = JSON.parse(response);
            })
    }

}