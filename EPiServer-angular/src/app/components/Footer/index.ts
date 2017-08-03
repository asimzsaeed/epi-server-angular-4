import { Component } from '@angular/core';

@Component({
    selector: 'vizob-footer',
    template: `
            <div>This is {{name}}</div>
`
})
export class FooterComponent {
    name = 'Angular';
    constructor() {
        this.getName();
    }

    getName() {
        this.name = 'Footer';
    }
}
