import {bindable} from 'aurelia-framework';

export class ContactEdit{
    contact = {
        first: null,
        last: null,
        age: null
    };

    save(){
        if(this.contact.first && this.contact.last && this.contact.first.length > 0 && this.contact.last.length > 0 && this.contact.age){
            this.parent.addContact(this.contact);
            this.contact = {
                first: null,
                last: null,
                age: null
            };
        } else{
            alert('you must enter a first and last name and select an age.');
        }
    }

    clear(){
        this.contact = {
            first: null,
            last: null,
            age: null
        };
    }

    bind(bindingContext){
        this.parent = bindingContext;
    }
}