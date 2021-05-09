import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TmpComponent } from './tmp/tmp.component';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
