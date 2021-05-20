import {CommentClass} from "./CommentClass"
import {getComments, updatePost, createPost, getID} from "src/db/Classes/Api"

var last_ind=0;

export class Post{
  body: string;
  PID!: number;
  date_created!: Date;
  tags : Array<string>;
  comments: Array<CommentClass>;
  authorID : number;
  callerID: number;
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

  constructor (body="", authorID=-1,PID=-1, callerID=-1){
    this.body = body;
    this.PID=PID
    console.log(this.PID)
    //this.date_created=Date.now();
    this.tags = [];
    this.callerID = callerID;
    this.comments = this.getComments();
    this.authorID = authorID;
    this.visableToAll= true;
  }




}
