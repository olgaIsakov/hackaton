import {CommentClass} from "./CommentClass"
import {getComments, updatePost, createPost, getID} from "src/db/Classes/Api"

var last_ind=0;

export class Post{
  body: string;
  PID!: number;
  date_created: string;
  tags : Array<string>;
  comments: Array<CommentClass>;
  authorID : number;
  callerID!: number;
  visableToAll!: boolean;

 
  getComments(){
    //var comments = getComments(this.callerID, this.PID);
   // return comments;
   return []
  }

  updatePost(){
    updatePost(this);
  }
  async uploadPost(){
    this.PID= await getID("PID")
    createPost(this);
  }
  async delete(){
    console.log("in the func delete")
    let rt="initial rt";
    let getPostURL = 'https://5f52owjwyl.execute-api.eu-central-1.amazonaws.com/default/delete'+'?PDI='+this.PID
    await $.getJSON(getPostURL , function( json) {
        rt=json.rt;
        })   
    console.log("delete address:\n"+getPostURL)
    if(rt=="1") return true
    return false
  }

  constructor(body="", callerID=-1,tags=[], authorID=-1){
    this.body = body;
    this.date_created="20/5/21"; //CHANGE THIS TO DATE.NOW

    this.tags = tags;
    this.comments = this.getComments();
    this.authorID = authorID;
    this.visableToAll= true;
  }




}
