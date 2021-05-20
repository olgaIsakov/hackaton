import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TmpComponent } from './tmp/tmp.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SubmitPostComponent } from './submit-post/submit-post.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CardModule} from 'primeng/card';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { CommentsComponent } from './comments/comments.component';
import { ChildboxComponent } from './childbox/childbox.component';
import { CardComponent } from './card/card.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
@NgModule({
  declarations: [
    AppComponent,
    TmpComponent,
    SignInComponent,
    SignUpComponent,
    SubmitPostComponent,
    MainMenuComponent,
    CommentboxComponent,
    CommentsComponent,
    ChildboxComponent,
    CardComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    TabMenuModule,
    TableModule,
    BrowserAnimationsModule,
    ClarityModule,
    FontAwesomeModule,
    InputSwitchModule,
    ToggleButtonModule,
    CardModule,
    SidebarModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
