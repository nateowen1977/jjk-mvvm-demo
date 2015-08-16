import {bindable} from 'aurelia-framework';

export class ContactEdit{
    title = "contact edit";

    save(){
        this.parent.addContact({
            first: "corey",
            last: "arts",
            age: 37
        });
    }

    bind(bindingContext){
        this.parent = bindingContext;
    }
}