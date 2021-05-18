import { Component, OnInit } from '@angular/core';
import Api, { signup } from "src/db/Classes/Api"
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
     console.log("submit!")
    // console.log(signup("second","test"))
    this.text=signup("second","test")
  }

  ngOnInit(): void {
  }

}
