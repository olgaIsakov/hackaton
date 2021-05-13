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



@NgModule({
  declarations: [
    AppComponent,
    TmpComponent,
    SignInComponent,
    SignUpComponent,
    SubmitPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
