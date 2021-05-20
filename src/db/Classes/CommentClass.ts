import {getComments} from "src/db/Classes/Api"
import {createComment, updateComment} from "src/db/Classes/Api"

var last_ind=0;
export class CommentClass{
 
  CID!: string
  body!: string
  authorID: string
  date!: Date
  subComment!:Boolean
  replyingTo!: Number
  visableToAll!: boolean
  visableTo!: Array<number>
  callerID: string
  postAutherID!: string


  constructor(CID="-1", body="",authorID="-1",replyingTo="-1", callerID ="-1", postAutherID="-1"){
    if(CID == "-1"){
      this.CID= getCID()
    }
    else{
      this.CID=CID
    }
    console.log("cid isnt -1")
    console.log(this.CID)
    this.body=body
    this.date=new Date()
    this.authorID =authorID
    this.visableToAll=true
    this.callerID = callerID
    this.postAutherID=postAutherID
    this.subComment=false
    this.visableTo=[]
  }

  upload(){
    return createComment(this);
  }
  
  update(){
    return updateComment(this);
  }

  delete(){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/delete_comment?'+this.CID;
    let res = $.getJSON(getPostURL);
    return res;
  }
 
 
}
function getCID(): string {
  var rt = last_ind.toString();
  last_ind++;
  console.log("the rt is")
  console.log(rt)
  return rt;
}
