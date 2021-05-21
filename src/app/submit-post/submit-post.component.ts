import { Component, OnInit } from '@angular/core';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CommentClass} from "src/db/Classes/CommentClass"
import {Post} from "src/db/Classes/PostClass"
import {User} from "src/db/Classes/User"
import {createComment, createPost, signup, login, getPostByPID, getAllPosts, getID, getComments, getUserName} from "src/db/Classes/Api"
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
      var new_post = new Post('Another generic post', -1,[],6)
      var new_comment = new CommentClass("I LOVE IT", 25,5,10)
      //new_post.upload()
      if(false){
        createPost(new_post)
        signup(new_user.username,new_user.password)
        console.log("return value in submit func is: "+await login(new_user.username,new_user.password))
     }
   
    getAllPosts(-1)

    this.text="this works!!"
  }

  ngOnInit(): void {
  }

  handleChange(e:any) {
    let isChecked = e.checked;
}
}
