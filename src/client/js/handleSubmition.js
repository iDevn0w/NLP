// import module
import { postUrlToServer } from "./post/post";
import { updateUI } from "./post/updateUI";

// handleSubmit based on url vaildation
function handleSubmit(event) {
  event.preventDefault();
  const theUrl = document.getElementById("url").value;
  Client.checkUrl(theUrl) === true
    ? postUrlToServer(theUrl).then((data) => updateUI(data))
    : alert("invaild Url scheme");
}
export { handleSubmit };
