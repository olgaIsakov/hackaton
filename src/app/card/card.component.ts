import { Component, Input, OnInit } from '@angular/core';
import {  Post } from "src/db/Classes/PostClass";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post?:Post

  constructor(){
  }
  

  ngOnInit(): void {
  }

}
