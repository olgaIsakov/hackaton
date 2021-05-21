import {getComments} from "src/db/Classes/Api"
import {createComment, updateComment, getID} from "src/db/Classes/Api"

var last_ind=0;
export class CommentClass{

  CID!: number
  body!: string
  authorID: number
  date!: Date
  subComment!:Boolean
  replyingTo!: Number
  visableToAll!: boolean
  visableTo!: Array<number>
  callerID: number
  postAutherID!: number


  constructor(body="",authorID=-1,replyingTo=-1, postAutherID=-1,  callerID =-1){
    this.CID=-1
    //console.log(this.CID)
    this.body=body
    this.date=new Date()
    this.replyingTo=replyingTo
    this.authorID =authorID
    this.visableToAll=true
    this.callerID = callerID
    this.postAutherID=postAutherID
    this.subComment=false
    this.visableTo=[]
  }



  async upload(){
    this.CID= await getID("CID")
    await createComment(this);
    console.log("End of comment upload")
    return this;
  }

  async update(): Promise<Boolean>{
    return updateComment(this);
  }

  async delete(): Promise<Boolean>{
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/delete_comment?'+this.CID;
    let res = $.getJSON(getPostURL);
    return res;
  }

}
