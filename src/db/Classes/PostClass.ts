import {CommentClass} from "./CommentClass"
import Api from "./Api"
import {getComments, updatePost, createPost} from "src/db/Classes/Api"

var last_ind=0;

export class Post{
  title : string;
  body: string;
  PID: string;
  date_created!: Date;
  tags : Array<string>;
  comments: Array<CommentClass>;
  authorID : number;
  callerID: string;


  getComments(){
    var comments = getComments(this.callerID, this.PID);
    return comments;
  }

  updatePost(){
    updatePost(this);
  }
  uploadPost(){
    createPost(this);
  }
  delete(){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/delete_post?'+this.PID;
    let res = $.getJSON(getPostURL)
    return res;
  }

  constructor(callerID: string, title="", body="", tags=[], authorID=-1){
    this.title = title;
    this.body = body;
    this.PID = getPID();
    //this.date_created=Date.now();
    this.tags = tags;
    this.comments = this.getComments();
    this.authorID = authorID;
    this.callerID = callerID;
  }



}
function getPID(): string {
  var rt = last_ind.toString();
  last_ind++;
  return rt;
}