import { Component, OnInit } from '@angular/core';
import { CardComponent } from './../card/card.component';
import {  Post } from "src/db/Classes/PostClass";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  posts = Array<Post>();
  cards = Array<CardComponent>();
  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this.posts = [new Post("a", "hello"), new Post("b", "goodbye")]
  }
}
