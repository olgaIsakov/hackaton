import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EditorModule} from 'primeng/editor';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmpComponent } from './tmp/tmp.component';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { MainMenuComponent } from './main-menu/main-menu.component';

import {MegaMenuItem} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    TmpComponent,
    SignInComponent,
    SignUpComponent,
    SubmitPostComponent,
    MainMenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    TabMenuModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
