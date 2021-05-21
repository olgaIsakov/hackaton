import {CommentClass} from "src/db/Classes/CommentClass"
import {Post} from "src/db/Classes/PostClass"
import * as $ from 'jquery'

export default class Api{


    // if i delete it get stuck..
}
export async function getUserName(UID: string | undefined){
    console.log("in the getUserName func")
    let rt
    let getPostURL = 'https://r47rlfvgrd.execute-api.eu-central-1.amazonaws.com/default/getUsenameByUID'+'?UID='+UID
    console.log("getUserName url is : "+getPostURL)

    await $.getJSON(getPostURL , function( json) {
        rt=json.username
        })

    return rt
}


async function  parserPost(callerID:number, json:any){
    // console.log("the json is: "+json)
    // console.log("the jason.body: "+json.body)
    let p : Post = new Post(json.body,callerID,[], json.authorID)
    p.PID=json.PID
    p.callerID=callerID
    console.log("in func parserPost caller ID is "+p.callerID)

    p.comments = await p.getComments()
    console.log("the post object is ")
    console.log(p)
    return p
}

async function parserPosts(callerID:number, json:any){
    console.log("inside get postSS "+json)
    //console.log("the json.0: "+json.0)
    var posts_list:Post[] = []
    let i=0
    let i_str= i.toString()
    // console.log("i str is "+ i_str)
    // console.log(json.i_str)
    while(json[i_str] != undefined){
        //console.log("i_str is "+ i)
        posts_list.push( await parserPost(callerID,json[i_str]))
        i++
        i_str= i.toString()
    }
    console.log(posts_list)
    return posts_list
}

function parserComment(callerID:number, json:any){
    // console.log("the json is: "+json)
    // console.log("the jason.body: "+json.body)
    let comment : CommentClass = new CommentClass(json.CID,json.body,-1,json.PDI,json.replyingTo)
    return comment
}

function parserComments(callerID:number, json:any){
    console.log("inside get postSS "+json)
    var comments_list:CommentClass[] = []
    let i=0
    let i_str= i.toString()
    // console.log("i str is "+ i_str)
    // console.log(json.i_str)
    while(json[i_str] != undefined){
        // console.log("i_str is "+ i)
        comments_list.push( parserComment(callerID,json[i_str]))
        i++
        i_str= i.toString()
    }
    console.log(comments_list)
    return comments_list
}


export async function getPostByPID (callerID:number, PID: number) :Promise<Post>{
    console.log("in the getPostByPID func")
    let rt
    let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/dynamodb-readonly'+'?index='+PID.toString();
    console.log("getPostByPID url is : "+getPostURL)

    await $.getJSON(getPostURL , function( json) {
        rt=parserPost(callerID, json);
        })
    if(rt==undefined){
        return new Post("none");
    }
    else{
    console.log("in the getPostByPID func - rt is "+rt)
    }
    return rt
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
    console.log("in the func getID")
    let getPostURL = 'https://2n20ndgn54.execute-api.eu-central-1.amazonaws.com/default/getNewID?type='+type;
    console.log(getPostURL)
    let rt="-1";
    await $.getJSON(getPostURL , function(json) {
        rt=json;
        })
    console.log(getPostURL)
    console.log("new ID is - "+rt)
    return Number(rt);
  }

async function checkExistUsernameURL(username:string) :Promise<Boolean>{
    return false
    // need implementation
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
    let getPostURL = 'https://5268gn05lh.execute-api.eu-central-1.amazonaws.com/default/signup'+
                     '?username='+username+"&password="+password+"&UID="+await getID("UID")
    console.log(getPostURL)
    if(await checkExistUsernameURL(username)){
        console.log("Exists username!")
        return false
    }
    console.log("gonna add user!")
    var rt="initial rt";
    console.log("signup address:\n"+getPostURL)
    await $.getJSON(getPostURL , function( json) {
        rt=json.rt;
        })
    if(rt=="1") return true
    return false
}



// not working - need to prase json
export async function getAllPosts(callerID=-1, without_tags=[], search_key="", userID=-1){
    console.log("in the func getAllPosts")
    let getPostURL = 'https://ae1f8bklkk.execute-api.eu-central-1.amazonaws.com/default/getAllPost?callerID='+callerID.toString();
    let rt
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
    await $.getJSON(getPostURL , async function( json) {
        rt=await parserPosts(callerID, json);
        })
    console.log(rt)
    return rt
}


// need to prase json
export async function getComments(callerID:number, PID: number): Promise<Array<CommentClass>>{
    console.log("in the func getComments")
    let rt=[new CommentClass()]
    let getPostURL = 'https://7ycxmc4k53.execute-api.eu-central-1.amazonaws.com/default/getPostComments?callerID='+callerID
    if (PID != undefined){
        getPostURL += '&PID='+PID.toString()
        }
    console.log("crate post address:\n"+getPostURL)
    await $.getJSON(getPostURL , function( json) {
        rt=parserComments(callerID, json);
        })
    return rt


}

// works, add date
export async function  createPost(post: Post){
    console.log("in the func create Post")
    let rt = "initial rt"
    if(post.PID==-1){return;}
    let getPostURL = 'https://h94t6569ug.execute-api.eu-central-1.amazonaws.com/default/create_post?PID='
                        +post.PID+"&callerID="+post.callerID;
    if(post.body!=""){
        console.log("before replace "+ post.body)
        getPostURL+=("&body="+post.body.split(" ").join("_"))
    }
    else{ return}

    getPostURL+=("&authorID="+post.authorID)
    getPostURL+=("&visableToAll="+`${post.visableToAll}`)
    console.log("create post address:\n"+getPostURL)
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
    if(comment.authorID==undefined)
        comment.authorID = -1

    getURL+=("&authorID="+comment.authorID)

    console.log("replayingTo in the create func = " + comment.replyingTo)
    getURL+=("&replyingTo="+`${comment.replyingTo}`)
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
    console.log("end of createComment")
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
