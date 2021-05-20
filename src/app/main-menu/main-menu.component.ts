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
  activeItem!: MenuItem;

  display: boolean = false;
  constructor(private router: Router) { }

  openBars(){
    this.display = !this.display;
  }


  ngOnInit() {

    // Initialize menu items:
    this.items =[
      {icon:'pi pi-bars', command: ()=>{this.display = true}},
        {label: 'Home' ,id: 'home', icon: 'pi pi-fw pi-home', routerLink :['/Home']},
        {label: 'Sign In',id: 'signIn', icon: 'pi pi-sign-in', routerLink :['/SignIn']},
        {label: 'Sign Up', id: 'signUp',icon: 'pi pi-user-plus', routerLink :['/SignUp']},
        {label: 'Add Post', id: 'addPost',icon: 'pi pi-plus-circle', routerLink :['/AddPost']},
        {label:'<span class="p-input-icon-right" width="200"><i class="pi pi-search" ></i><input type="text" pInputText [(ngModel)]="searchValue"/></span>', escape: false
      }
    ];

    // Find the current page and highlight it on the menu when refreshing:
    let index = 0;
    for (let item of this.items){
      let name = location.pathname;
      if (item.routerLink == name){
        break;
      }
      index++;
    }


    this.activeItem = this.items[index];

 }
}
