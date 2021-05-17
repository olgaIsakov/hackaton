import {CommentClass} from "src/db/Classes/CommentClass"
import {Post} from "src/db/Classes/PostClass"
import * as $ from 'jquery';

export default class Api{
  
    getPostByPID(PID: string){
      let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/dynamodb-readonly'+'?index='+PID;
      return $.getJSON(getPostURL, (res:any )=> {ConvertJsonToSinglePostBody(res);}) ;
    }
    
    login(username: string, password: string){
        let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/login'+'?username='+username+"&"+password;
        $.getJSON(getPostURL, res=> {return res}) ;
    }
    signup(username: string, password: string){
        let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/signup'+'?username='+username+"&"+password;
        $.getJSON(getPostURL, res=> {return res}) ;
    }
}

export function ConvertJsonToPosts(res: {[index: string]:any}){
    var posts_list:Post[] =[]
    var i = 0;
    while(i.toString() in res ){
        let j=i.toString();
        
        var body=res[j]["body"];
        var PID = res[j]["PID"];
        posts_list.push(new Post(PID, body));
  }
  return posts_list;
}

export function ConvertJsonToSinglePostBody(res: {[index: string]:any}){
        return res["body"];
}

export function getAllPosts(callerID=-1, without_tags=[], search_key="", userID=-1){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/getAllpost?'+callerID.toString();
    if(search_key!=""){
       getPostURL+=("&"+search_key);
    }
    if(userID!=-1){
       getPostURL+=("&"+userID.toString());
    }
    if(callerID!=-1){
     getPostURL+=("&"+userID.toString());
    }
    return $.getJSON(getPostURL, (res : {[index: string]:any}) => {return ConvertJsonToPosts(res);}) ;
}


export function ConvertJsonToComments(res: {[index: string]:any}) : CommentClass[]{
    var comments_list:CommentClass[] = []
    var i = 0;
    while(i.toString() in res ){
      var j=i.toString();
      var body=res[j]["body"];
      var CID = res[j]["CID"];
      comments_list.push(new CommentClass(CID, body));
    }
    return comments_list;
}

export function getComments(callerID:string, PID: string): CommentClass[]{
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/getComments?'
                    +callerID +"&"+PID;
    let res = $.getJSON(getPostURL)
    //let rt = (res : {[index: string]:any}) => {return ConvertJsonToComments(res);};
    return ConvertJsonToComments(res);
    
}

export function  createPost (post: Post){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/create_post?'+post.PID;
    getPostURL+=("&body="+post.body)
    let res = $.getJSON(getPostURL)

    //getPostURL+=("&body="+post.body)
  }
  
  
export function  createComment (comment: CommentClass){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/create_comment?'+comment.CID;
    getPostURL+=("&body="+comment.body)
    let res = $.getJSON(getPostURL)

    //getPostURL+=("&body="+post.body)
  }

export function updatePost(post:Post){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/update_post?'+post.PID;
    getPostURL+=("&body="+post.body)
    let res = $.getJSON(getPostURL)
}

export function updateComment(comment:CommentClass){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/update_comment?'+comment.CID;
    getPostURL+=("&body="+comment.body)
    let res = $.getJSON(getPostURL)
}
  