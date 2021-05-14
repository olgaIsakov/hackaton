import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-post',
  templateUrl: 'submit-post.component.html',
  styleUrls: ['submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {

  text="";

  constructor() {

   }

   submit(){
    this.text="this works!!"
  }

  ngOnInit(): void {
  }

}
