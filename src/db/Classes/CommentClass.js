class Comment{
  CID: number;
  body: string;
  authorID: number;
  date: Date;
  subComment:Boolean;
  replyingTo: Number;


  constructor(body="",authorID=-1,replyingTo=-1){
    }

    this.CID= getCID();
    this.data=Date.now();
    this.authorID =authorID;
    this.replyingToPID=replyingToPID;
    this.replyingToCID=replyingToCID;
  }
}
