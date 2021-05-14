import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[]=[];

  routes = new Map();




  constructor(private router: Router) { }



  ngOnInit() {

    // Initialize menu items:
    this.items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
    this.routes.set('Home','./hackaton/src/app/app.component.html');
    this.routes.set('2','Hello India');
    this.routes.set('3',"setting the values");

 }
 redirect(){
  this.router.navigateByUrl(this.routes.get('Home'));
}

}
