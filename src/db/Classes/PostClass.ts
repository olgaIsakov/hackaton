import {CommentClass} from "./CommentClass"
import {getComments, updatePost, createPost} from "src/db/Classes/Api"

var last_ind=0;

export class Post{
  body: string;
  PID: string;
  date_created: string;
  tags : Array<string>;
  comments: Array<CommentClass>;
  authorID : string;
  callerID: string;
  visableToAll!: boolean;


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

  constructor(callerID="-1", body="", tags=[], authorID="-1"){
    this.body = body;
    this.PID = getPID();
    this.date_created="20/5/21"; //CHANGE THIS TO DATE.NOW
    
    this.tags = tags;
    this.comments = this.getComments();
    this.authorID = authorID;
    this.callerID = callerID;
    this.visableToAll= true;
  }



}
function getPID(): string {
  var rt = last_ind.toString();
  last_ind++;
  return rt;
}