import {bindable} from 'aurelia-framework';

export class ContactList{
    @bindable contacts;

    activate(){
        alert(contacts.length);
    }
}