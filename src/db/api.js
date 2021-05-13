import Comment from "src/db/Classes/CommentClass"
import Post from "src/db/Classes/PostClass"

function getPostByPID(PID){
  let getPostURL = 'https://08ynm4z546.execute-api.eu-central-1.amazonaws.com/dynamodb-readonly'+'?index='+PID;
  return $.getJSON(getPostURL, res=> {
    document.getElementById('pid').innerHTML="PID: "+res['PID'];
    document.getElementById('title').innerHTML="Title: "+res['title'];
    document.getElementById('body').innerHTML="Body: "+res['body'];
    return res;
  });
}



