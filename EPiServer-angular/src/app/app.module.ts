import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { StartPageComponent } from './components/startpage/index';
import { HeaderComponent } from './components/header/index';
import { FooterComponent } from './components/footer/index';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      StartPageComponent,
      HeaderComponent,
      FooterComponent

  ],
  bootstrap: [
      AppComponent
  ]
})

export class AppModule { }
