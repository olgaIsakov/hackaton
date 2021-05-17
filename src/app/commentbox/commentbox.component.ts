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
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;
  @Output() usercomment = new EventEmitter< Array<object>>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
      this.commentInfo.push({
        commentId: this.id++,
        currentDate: new Date(),
        commentTxt: this.commentForm.controls['comment'].value,
        replyComment: [],
      });
      this.usercomment.emit(this.commentInfo);
    return true;
  }
}
