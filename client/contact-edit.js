import {bindable} from 'aurelia-framework';

export class ContactEdit{
    title = "contact edit";
    contact = {
        first: null,
        last: null,
        age: null
    };

    save(){
        this.contact.age = 38;
        if(this.contact.first && this.contact.last && this.contact.first.length > 0 && this.contact.last.length > 0 && this.contact.age){
            this.parent.addContact(this.contact);
        }
    }

    clear(){
        this.contact = null;
    }

    bind(bindingContext){
        this.parent = bindingContext;
    }
}