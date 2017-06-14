import { Component } from '@angular/core';

@Component({
    selector: 'vizob-app',
    template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
