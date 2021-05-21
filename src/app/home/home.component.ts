import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CardComponent } from './../card/card.component';
import {  Post } from 'src/db/Classes/PostClass';
import { CommentClass } from 'src/db/Classes/CommentClass';
import {PanelModule} from 'primeng/panel';
import {getAllPosts} from 'src/db/Classes/Api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  value: any;
  counter=0;

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

  // display: boolean = false;

  constructor() {
    // this.posts = getAllPosts();
    this.posts = [new Post(this.lorem_impsum,1,["Suicide"]), new Post( this.lorem_impsum.slice(20, 50)), new Post( this.lorem_impsum.slice(1, 50),2,["Rape"])];
    this.posts[0].PID = 0;
    this.posts[1].PID = 1;
    this.posts[2].PID = 2;
    this.curPostPID = 3;
    // @ts-ignore
    this.comments = [new CommentClass(this.lorem_impsum.slice(0, 50),0,0), new CommentClass(this.lorem_impsum.slice(0, 100))];
    (this.posts)[0].comments = this.comments;
    this.submitPostText = '';
  }
  lorem_impsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu eros a lorem efficitur rhoncus at finibus erat. Quisque consectetur nisi sed mauris elementum condimentum. Praesent sodales facilisis facilisis. Donec a urna tempor, efficitur mi porta, accumsan augue. Praesent volutpat odio metus, a condimentum mi porttitor eu. Nunc facilisis pharetra purus non scelerisque. Vivamus mattis, tellus vel pellentesque efficitur, nibh erat bibendum ipsum, in tincidunt augue lorem sit amet urna. Etiam quis ex elit. Mauris lacus sem, luctus id iaculis in, imperdiet non nunc. Suspendisse eu egestas nibh. Duis tellus lacus, lobortis at erat at, dignissim sollicitudin erat.';
  submitPostText: string;
  curPostPID: number;
  posts = Array<Post>();
  cards = Array<CardComponent>();
  comments: CommentClass[] | undefined;

  sortNewFirst(){
    return this.posts.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
  }

  ngOnInit(): void {
  }
  async addPost(){
    let np = new Post(this.submitPostText, -1,[],-1);
    await np.upload();
    this.posts.unshift(np)
  }
  sortOldFirst(){
    return this.posts.sort((b,a) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());

}
}
