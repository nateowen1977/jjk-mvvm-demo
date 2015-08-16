import {bindable} from 'aurelia-framework';

export class AgeSelector {
    @bindable age;
    constructor() {
        var ages = [];
        for (var age = 18; age <= 65; age++) {
            ages.push(age);
        }
        this.ages = ages;
    }
}