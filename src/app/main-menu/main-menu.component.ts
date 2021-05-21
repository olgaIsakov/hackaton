import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router} from '@angular/router';
import { id } from '@cds/core/internal';

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

  sendEmail(e:string){
    window.open("mailto:"+ e)
  }

  signOut(){
    //todo: clear cookies
  }

  collapseSearch(){
    let elem = document.getElementById('collapseExample');
    console.log(elem?.hidden)
    if (elem != null){
      if (elem.hidden === true){
        elem.hidden=false

      }
      else {
        elem.hidden = true
      }
    }
  }


  ngOnInit() {

    // Initialize menu items:
    this.items =[
        // {icon:'<img src="../../assets/Logo.png" width="70" height="70">',escape:false},
        {icon:'pi pi-bars', command: ()=>{this.display = true}},
        {label: 'Home' ,id: 'home', icon: 'pi pi-fw pi-home', routerLink :['/Home']},
        {label: 'Sign In',id: 'signIn', icon: 'pi pi-sign-in', routerLink :['/SignIn']},
        {label: 'Sign Up', id: 'signUp',icon: 'pi pi-user-plus', routerLink :['/SignUp']},
        // {label: 'Add Post', id: 'addPost',icon: 'pi pi-plus-circle', routerLink :['/AddPost']},
        {label:'Sign Out' ,icon:'pi pi-sign-out', command: this.signOut, style:{'position':'absolute',  'right': '0px','background-color':'transparent'}},
        {icon:'pi pi-search' ,command: this.collapseSearch, style:{'position':'absolute',  'right': '160px'}},
        {label: 'FAQ', id: 'signUp',icon: 'pi pi-question-circle', routerLink :['/FAQ']}

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
