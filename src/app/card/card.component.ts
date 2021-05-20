import { Component, Input, OnInit } from '@angular/core';
import {  Post } from 'src/db/Classes/PostClass';
import {CommentClass} from '../../db/Classes/CommentClass';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post?: Post;
  commentText: string;
  constructor(){
    this.commentText = '';
  }


  ngOnInit(): void {
  }

  addComment(){
    // @ts-ignore
    this.post?.comments.push(new CommentClass(this.commentText,0,0))
  }

}
