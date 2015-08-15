import {inject, bindable} from 'aurelia-framework';
import {ContactsApi} from 'service';

@inject(ContactsApi)
export class ContactList{
    @bindable contacts;
    constructor(api){
        this.ContactsApi = api
    }

    delete(contact){
        var context = this;
        this.ContactsApi.deleteContact(contact)
            .then((response) => {
                //remove contact from the client-side data source (save from recalling the service)
                for(var i=0; i < context.contacts.length; i++){
                    if(context.contacts[i] === contact){
                        context.contacts.splice(i, 1);
                        return;
                    }
                }
            })
    }
}