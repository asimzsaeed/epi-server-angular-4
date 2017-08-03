
import { Component } from '@angular/core';


@Component({
    selector: 'start-page',
    template: `
        <div>Start Page {{name}}</div>
    `
})
export class StartPageComponent {
    name = 'Angular';
    constructor() {
        this.getName();
    }

    getName() {
        this.name = 'Start page component';
    }
}
