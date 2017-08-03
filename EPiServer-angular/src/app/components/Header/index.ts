
import { Component } from '@angular/core';


@Component({
    selector: 'vizob-header',
    template: `
        <div>This is {{name}}</div>
    `
})
export class HeaderComponent {
    name = 'Angular';
    constructor() {
        this.getName();
    }

    getName() {
        this.name = 'Header';
    }
}
