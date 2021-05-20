import {CommentClass} from "src/db/Classes/CommentClass"
import {Post} from "src/db/Classes/PostClass"
import * as $ from 'jquery'

export default class Api{


    // if i delete it get stuck..
}

function parserPost(json:any){
    console.log("the json is: "+json)
    console.log("the jason.body: "+json.body)

    return new Post(json.body, json.authorID, json.PID)
}


export async function getPostByPID(PID: number){
    console.log("in the getPostByPID func")
    let rt
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/dynamodb-readonly'+'?index='+PID.toString();
    console.log("getPostByPID:\n"+getPostURL)

    await $.getJSON(getPostURL , function(json) {
        rt=parserPost(json);
        })
    //console.log(rt.PID)
    return rt;
  }
// before tests
export function login(username: string, password: string){
    let getPostURL = 'https://5f52owjwyl.execute-api.eu-central-1.amazonaws.com/default/signin'+'?username='+username+"&"+password;
    $.getJSON(getPostURL, res=> {return ConvertJsonToRespon(res)}) ;
}

//works
export function signup(username: string, password: string): string{
    let getPostURL = 'https://5268gn05lh.execute-api.eu-central-1.amazonaws.com/default/signup'+'?username='+username+"&password="+password;
    var rt="error";
    var res=$.getJSON(getPostURL , function( json) {
        console.log( "JSON Data: " + json.rt);
    rt = json.rt;})
    return rt
}

function ConvertJsonToRespon(res: {[index: string]:any}): string{
    return res["message"];
}

export function ConvertJsonToPosts(res: {[index: string]:any}){
    var posts_list:Post[] =[];
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
// not working - need to prase json
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
    var comments_list:CommentClass[] = [];
    var i = 0;
    while(i.toString() in res ){
      var j=i.toString();
      var body=res[j]["body"];
      var CID = res[j]["CID"];
      comments_list.push(new CommentClass(CID, body));
    }
    return comments_list;
}

// need to prase json
export function getComments(callerID:number, PID: number): CommentClass[]{
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/getComments?'
                    +callerID +"&"+PID.toString();
    let res = $.getJSON(getPostURL);
    //let rt = (res : {[index: string]:any}) => {return ConvertJsonToComments(res);};
    return ConvertJsonToComments(res);

}

// works, add date
export function  createPost (post: Post){
    if(post.PID==-1){return;}
    let getPostURL = 'https://h94t6569ug.execute-api.eu-central-1.amazonaws.com/default/create_post?'+post.PID;
    if(post.body!="")
        getPostURL+=("&body="+post.body.replace(" ","_"))
    else{ return}
    if(post.authorID!="")
    getPostURL+=("&authorID="+post.authorID)
    else{ return}
    getPostURL+=("&visableToAll="+`${post.visableToAll}`)
    let res = $.getJSON(getPostURL);
  }

// visableTo, subComment
export function  createComment (comment: CommentClass){
    console.log("in the func")
    console.log(comment.CID)
    if(comment.CID=="-1"){return;}
    let getURL = 'https://2cuaravds1.execute-api.eu-central-1.amazonaws.com/default/create_comment?CID='+comment.CID;
    if(comment.body!="")
        getURL+=("&body="+comment.body)
    else{ return}
    if(comment.authorID!="")
        getURL+=("&authorID="+comment.authorID)
    else{ return}

    getURL+=("&visableToAll="+`${comment.visableToAll}`)
    getURL+=("&postAutherID="+`${comment.postAutherID}`)
    getURL+=("&visableToAll="+`${comment.visableToAll}`)

    if(comment.callerID!="-1")
        getURL+=("&callerID="+`${comment.callerID}`)
    if(comment.replyingTo!=-1)
        getURL+=("&replyingTo="+`${comment.replyingTo}`)
    console.log(getURL)

    let res = $.getJSON(getURL);

  }

  //not implemented
export function updatePost(post:Post){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/update_post?'+post.PID;
    getPostURL+=("&body="+post.body)
    let res = $.getJSON(getPostURL);
    return res["statusCode"];
}

  //not implemented
export function updateComment(comment:CommentClass){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/update_comment?'+comment.CID;
    getPostURL+=("&body="+comment.body);
    let res = $.getJSON(getPostURL);
    return res["statusCode"];
}
