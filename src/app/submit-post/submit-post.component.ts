import { Component, OnInit } from '@angular/core';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CommentClass} from "src/db/Classes/CommentClass"
import {Post} from "src/db/Classes/PostClass"
import {User} from "src/db/Classes/User"
import {createComment, createPost, signup, login, getPostByPID} from "src/db/Classes/Api"
import { post } from 'jquery';

@Component({
  selector: 'app-submit-post',
  templateUrl: 'submit-post.component.html',
  styleUrls: ['submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {
  text="";
  isChecked =true;
  constructor() {

   }

   async submit(){
     // tests for createPost, createComment, signup
      var new_user = new User("HOLY","FUCK","its@works.com",false)
      var new_post = new Post('OH YEAH ITS WOEKING', 5, 23,5)
      var new_comment = new CommentClass(105,"I LOVE IT", 25,5,10)
      if(false){
        createPost(new_post)
        createComment(new_comment)
        signup(new_user.username,new_user.password)
        console.log("return value in submit func is: "+await login(new_user.username,new_user.password))
     }
     console.log(getPostByPID(0))
    this.text="this works!!"
  }

  ngOnInit(): void {
  }

  handleChange(e:any) {
    let isChecked = e.checked;
}
}
