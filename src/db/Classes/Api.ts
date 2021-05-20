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
// works
export async function login(username: string, password: string): Promise<boolean> {
    console.log("in the func login")
    let rt="initial rt";
    let getPostURL = 'https://5f52owjwyl.execute-api.eu-central-1.amazonaws.com/default/signin'+'?username='+username+"&password="+password;
    await $.getJSON(getPostURL , function( json) {
        rt=json.rt;
        })   
    console.log("login address:\n"+getPostURL)
    if(rt=="1") return true
    return false
}

export async function getID(type: string){
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/getNewID?type='+type;
    let rt="-1";
    await $.getJSON(getPostURL , function(json) {
        rt=json.body;
        })  
    return Number(rt);
  }

async function checkExistUsernameURL(username:string) :Promise<Boolean>{
    var rt="initial rt";
    let checkExistUsernameURL= '/////////////////////////'+'?username='+username
    await $.getJSON(checkExistUsernameURL , function( json) {
        rt=json.rt;
        }) 
        if(rt=="1") return true
    return false
}

//works
export async function signup(username: string, password: string): Promise<boolean>{
    console.log("in the func signup")
    let getPostURL = 'https://5268gn05lh.execute-api.eu-central-1.amazonaws.com/default/signup'+'?username='+username+"&password="+password
    if(await checkExistUsernameURL(username)){
        console.log("Exists username!")
        return false
    }
    var rt="initial rt";
    console.log("signup address:\n"+getPostURL)
    await $.getJSON(getPostURL , function( json) {
        rt=json.rt;
        })   
    if(rt=="1") return true
    return false
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
export async function getAllPosts(callerID=-1, without_tags=[], search_key="", userID=-1){
    console.log("in the func getAllPosts")
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
    console.log("getAllPosts address:\n"+getPostURL)

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

// not implement 
export async function getComments(callerID:number, PID: number): Promise <CommentClass[]>{
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/getComments?'
                    +callerID.toString() +"&PID="+PID.toString();
    let res = $.getJSON(getPostURL);
    //let rt = (res : {[index: string]:any}) => {return ConvertJsonToComments(res);};
    return ConvertJsonToComments(res);
    
}

// works, add date
export async function  createPost(post: Post){
    console.log("in the func create Post")
    let rt = "initial rt"
    if(post.PID==-1){return;}
    let getPostURL = 'https://h94t6569ug.execute-api.eu-central-1.amazonaws.com/default/create_post?PID='+post.PID;
    if(post.body!=""){
        console.log("before replace "+ post.body)
        getPostURL+=("&body="+post.body.split(" ").join("_"))
    }
    else{ return}
    if(post.authorID!=-1)
    getPostURL+=("&authorID="+post.authorID)
    else{ return}
    getPostURL+=("&visableToAll="+`${post.visableToAll}`)
    console.log("crate post address:\n"+getPostURL)
    await $.getJSON(getPostURL , function( json) {
        rt=json.rt;
        })   
    if(rt=="1") return true
    return false
  }
  
// visableTo, subComments
export async function  createComment (comment: CommentClass): Promise<Boolean>{
    console.log("in the func create comment for CID: "+comment.CID)
    let rt = "inital rt"

    if(comment.CID==-1){return false;}
    let getURL = 'https://2cuaravds1.execute-api.eu-central-1.amazonaws.com/default/create_comment?CID='+comment.CID;
    if(comment.body!="")
        getURL+=("&body="+comment.body.split(" ").join("_"))
    else{ return false}
    if(comment.authorID!=-1)
        getURL+=("&authorID="+comment.authorID)
    else{ return false}
    
    getURL+=("&visableToAll="+`${comment.visableToAll}`)
    getURL+=("&postAutherID="+`${comment.postAutherID}`)
    getURL+=("&visableToAll="+`${comment.visableToAll}`)

    if(comment.callerID!=-1)
        getURL+=("&callerID="+`${comment.callerID}`)
    if(comment.replyingTo!=-1)
        getURL+=("&replyingTo="+`${comment.replyingTo}`)
    console.log("crate comment address:\n"+getURL)
    console.log("createComment address:\n"+getURL)

    await $.getJSON(getURL , function( json) {
        rt=json.rt;
        })   
    if(rt=="1") return true
    return false

  }

  //not implemented
export async function updatePost(post:Post){
    console.log("in the func update post")
    let getURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/update_post?'+post.PID;
    getURL+=("&body="+post.body)
    let res = $.getJSON(getURL);
    console.log("update post address:\n"+getURL)

    return res["statusCode"];
}

  //not implemented
export async function updateComment(comment:CommentClass):Promise<Boolean>{
    console.log("in the func update comment")
    let rt="inital rt"
    let getURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/update_comment?'+comment.CID;
    getURL+=("&body="+comment.body);
    let res = $.getJSON(getURL);
    console.log("update post comment:\n"+getURL)

    await $.getJSON(getURL , function( json) {
        rt=json.rt;
        })   
    if(rt=="1") return true
    return false
}
