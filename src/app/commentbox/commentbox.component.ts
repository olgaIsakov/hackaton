import { element } from 'protractor';
import { CommentsComponent } from './../comments/comments.component';
import { Component, OnInit } from '@angular/core';
import {
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css'],
})
export class CommentboxComponent implements OnInit {
  commentForm!: FormGroup;
  comments:Array<object> = [];
  count: any;
  postComment :Array<object> = [];
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;
  @Output() usercomment = new EventEmitter< Array<object>>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }



  receiveComment(event:any) {
    alert("rgr");
    this.comments = event;
    this.count = this.comments.length;
    console.log(this.comments);
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  onSubmit() {
    var elem = document.getElementsByClassName("form-group");
    alert(elem.toString());
    // @ViewChild('form-group') formgroup: ElementRef;
    // elem.toString
    let comment = [];
comment.push({commentId: this.id++,currentDate: new Date(),commentTxt: this.commentForm.controls['comment'].value,replyComment: [],})
    this.submitted = true;
      this.comments.push(this.commentInfo);

      // this.usercomment.emit(this.commentInfo);

    return true;
  }
}
