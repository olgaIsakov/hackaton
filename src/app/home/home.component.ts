import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CardComponent } from './../card/card.component';
import {  Post } from "src/db/Classes/PostClass";
import {getAllPosts} from "src/db/Classes/Api"
import { rendererTypeName } from '@angular/compiler';
import { homedir } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  value: any;

  sortByDates(){
    this.counter ++;
    let idx:number = this.counter % 2;
    switch(idx){
      case 0:
        return;
      case 1:
        this.posts = this.sortNewFirst();
        break;
      case 2:
        this.posts = this.sortOldFirst();
        break;
    }


  }

  constructor() { }
  lorem_impsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu eros a lorem efficitur rhoncus at finibus erat. Quisque consectetur nisi sed mauris elementum condimentum. Praesent sodales facilisis facilisis. Donec a urna tempor, efficitur mi porta, accumsan augue. Praesent volutpat odio metus, a condimentum mi porttitor eu. Nunc facilisis pharetra purus non scelerisque. Vivamus mattis, tellus vel pellentesque efficitur, nibh erat bibendum ipsum, in tincidunt augue lorem sit amet urna. Etiam quis ex elit. Mauris lacus sem, luctus id iaculis in, imperdiet non nunc. Suspendisse eu egestas nibh. Duis tellus lacus, lobortis at erat at, dignissim sollicitudin erat."
  //sorter attributes
  counter = 0;


  public posts = Array<Post>();
  cards = Array<CardComponent>();
  ngOnInit(): void {
    //this.posts = getAllPosts();
    this.posts = [new Post( this.lorem_impsum), new Post( this.lorem_impsum.slice(20,50)), new Post( this.lorem_impsum.slice(1,50))];
 this.posts[0].date_created = "11/11/11";
  }

  sortNewFirst(){
    return this.posts.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());


  }

  sortOldFirst(){
    return this.posts.sort((b, a) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());

  }


}
