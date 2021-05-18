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


  constructor(private router: Router) { }
  // searchBarHTML = '<span class="p-input-icon-right"><i class="pi pi-search"></i><input type="text" pInputText [(ngModel)]="searchValue" /></span>'
  searchValue = '';

  ngOnInit() {

    // Initialize menu items:
    this.items =[
        {label: 'Home' ,id: 'home', icon: 'pi pi-fw pi-home', routerLink :['/Home']},
        {label: 'Sign In',id: 'signIn', icon: 'pi pi-sign-in', routerLink :['/SignIn']},
        {label: 'Sign Up', id: 'signUp',icon: 'pi pi-user-plus', routerLink :['/SignUp']},
        {label: 'Add Post',items:[{label: 'Home' ,id: 'home', icon: 'pi pi-fw pi-home', routerLink :['/Home']}], id: 'addPost',icon: 'pi pi-plus-circle', routerLink :['/AddPost']},
        {label:'<span class="p-input-icon-right" width="200"><i class="pi pi-search" ></i><input type="text" pInputText [(ngModel)]="searchValue"/></span>', escape: false
      }
    ];
    // alert(location.pathname);
    // let index = this.items.findIndex(x => x.label === location.pathname);
    let index = 0;
    for (let item of this.items){
      let name = location.pathname;
      console.log(name+ "   " + item.routerLink);
      if (item.routerLink == name){
        break;
      }
      index++;
    }
    console.log("index is: "+index)
    let curr = location.pathname;
    // var index = this.items.findIndex(item => item.label == curr);

      // let search = (this.items, curr) => { return this.items.indexOf(curr); }
    // alert(index);

    this.activeItem = this.items[index];

 }

}
