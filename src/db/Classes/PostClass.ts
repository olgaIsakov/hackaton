import {CommentClass} from "./CommentClass"
import {getComments, updatePost, createPost, getID} from "src/db/Classes/Api"
import { post } from "jquery";


export class Post {
  body: string;
  PID!: number;
  date_created: string;
  tags : Array<string>;
  comments!: Array<CommentClass>;
  authorID : number;
  callerID!: number;
  visableToAll!: boolean;

 
  async getComments():Promise<Array<CommentClass>>{
    let comments
    console.log("method getComments, callerID is "+this.callerID)
    console.log("get comments for PID  "+this.PID)
    comments = await getComments(this.callerID, this.PID);
    return comments;
  }

  updatePost() {
    updatePost(this);
  }
  async upload(){
    this.PID= await getID("PID")
    createPost(this);
  }

  async delete() {
    console.log('in the func delete');
    let rt = 'initial rt';
    let getPostURL = 'https://5f52owjwyl.execute-api.eu-central-1.amazonaws.com/default/delete' + '?PDI=' + this.PID;
    await $.getJSON(getPostURL, function(json) {
      rt = json.rt;
    });
    console.log('delete address:\n' + getPostURL);
    if (rt === '1') {
      return true;
    }
    return false;
  }

  constructor(body="",callerID=-1,tags=[], authorID=-1){
    this.body = body
    this.date_created="20/5/21"; //CHANGE THIS TO DATE.NOW
    this.tags = tags
    //this.comments = this.getComments()
    this.authorID = authorID
    this.visableToAll= true
  }

}
