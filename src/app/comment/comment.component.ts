import {Component, Input, OnInit} from '@angular/core';
import { CommentClass } from 'src/db/Classes/CommentClass'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment?: CommentClass;
  constructor() { }

  ngOnInit(): void {
  }

}
