import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']

})
export class MainMenuComponent implements OnInit {
  items: MenuItem[]=[];


  constructor(private router: Router) { }
  searchBarHTML = '<span class="p-input-icon-right"><i class="pi pi-search"></i><input type="text" pInputText [(ngModel)]="searchValue" /></span>'
  searchValue = '';

  ngOnInit() {

    // Initialize menu items:
    this.items =[
        {label: 'Home' ,id: 'home', icon: 'pi pi-fw pi-home', routerLink :['/Home']},
        {label: 'Sign In',id: 'signIn', icon: 'pi pi-sign-in', routerLink :['/SignIn']},
        {label: 'Sign Up', id: 'signUp',icon: 'pi pi-user-plus', routerLink :['/SignUp']},
        {label: 'Add Post', id: 'addPost',icon: 'my-margin-right pi pi-plus-circle', routerLink :['/AddPost']},
        {label:'<span class="p-input-icon-right"><i class="pi pi-search"></i><input type="text" pInputText [(ngModel)]="searchValue" /></span>', escape: false
      }

    ];
 }

}
