"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("./services/app.service");
//this metadata of angular which template to used 
var AppComponent = (function () {
    function AppComponent($appService) {
        this.$appService = $appService;
        this.name = 'Angular';
        this.getName();
    }
    AppComponent.prototype.getName = function () {
        this.name = this.$appService.getName();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'vizob-app',
        template: "<h1>Hello {{name}}</h1>",
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map