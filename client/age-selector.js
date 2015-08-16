import {bindable} from 'aurelia-framework';

export class AgeSelector {
    constructor() {
        var ages = [];
        for (var a = 18; a <= 65; a++) {
            ages.push(a);
        }
        this.ages = ages;
    }

    bind(bindingContext){
        this.parent = bindingContext;
    }
}