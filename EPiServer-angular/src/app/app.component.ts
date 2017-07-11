
import { Component } from '@angular/core';
import { AppService } from './services/app.service';
//this metadata of angular which template to used 
@Component({
    selector: 'vizob-app',
    template: `<h1>Hello {{name}}</h1>`,
    providers: [AppService]
})
export class AppComponent {
    name = 'Angular';
    constructor(private $appService: AppService) {
        this.getName();
    }

    getName() {
       this.name = this.$appService.getName();
    }
}
