import { Component } from '@angular/core';
import { Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Comment box:
  comments: string = '';
  count!: number;

  // Submit post:
  text = '';

  // Search box:
  searchValue = '';


  constructor(private router: Router) {
  }
  ngOnInit() {

    // Stay on same page when refreshing:
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.count = 0;
  }

  recieveCount($event: any) {
    this.comments = $event;
    this.count = this.comments.length;
  }

  sumbit() {
    this.text = 'this works!!';
  }

}
