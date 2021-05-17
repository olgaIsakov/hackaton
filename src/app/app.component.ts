import { Component } from '@angular/core';
import {Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Comment box:
  comments: string="";
  count!: number;


// Submit post:
  text="";

  // Search box:
  searchValue = "";

  constructor() { }
  ngOnInit() {
    this.count = 0;
  }


  receiveComment($event:any) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }


  recieveCount($event:any) {
    this.comments = $event;
    this.count = this.comments.length;
  }


  sumbit(){
    this.text="this works!!"
  }
}
