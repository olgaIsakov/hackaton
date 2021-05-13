import Comment from "./CommentClass";


class Post{
  title : string;
  body: string;
  PID: number;
  date_created : Date;
  tags : Array<string>;
  comments: Array<Comment>;
  authorID : number;

  getComments(){}
  getPID(){}
  updatePost(){}
  uploadPost(){}

  constructor(title="", body="", tags=[], authorID=""){
    this.title = title;
    this.body = body;
    this.PID = this.getPID();
    this.date_created=Date.now();
    this.tags = tags;
    this.comments = this.getComments();
    this.authorID = authorID;
  }

}
