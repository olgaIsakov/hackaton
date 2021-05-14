import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterLink, Routes } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']

})
export class MainMenuComponent implements OnInit {
  items: MenuItem[]=[];


  constructor(private router: Router) { }


  ngOnInit() {

    // Initialize menu items:
    this.items =[
        {label: 'Home',id: 'home', icon: 'pi pi-fw pi-home', routerLink :['/Home']},
        {label: 'Sign In',id: 'signIn', icon: 'pi pi-sign-in', routerLink :['/SignIn']},
        {label: 'Sign Up', id: 'signUp',icon: 'pi pi-user-plus', routerLink :['/SignUp']},
        {label: 'Add Post', id: 'addPost',icon: 'pi pi-plus-circle', routerLink :['/AddPost']}
    ];
 }

 redirect(event:MouseEvent){

  // Get the clicked element's id:
  var target =(event.target as Element).id;

   if (target == 'home'){
        // alert(target);
  this.router.navigate(['/Home']);

   }

}

}
