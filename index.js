const author = document.getElementById("name");
const authorEmail = document.getElementById("email");
const authorComment = document.getElementById("comment");
const submitCommentButton = document.getElementById("submit-button");
const commentBox = document.getElementById("comment-box");
const placeholderComment = document.querySelector(".no-comments-atm");
const commentLog = document.querySelector(".comment-log");

submitCommentButton.addEventListener("click", (e) => {
    e.preventDefault();
    processNewComment();
})

function processNewComment(){
    if (author.value === "" || authorComment.value === "") return; // Check if the user has entered a name and comment. 

    const newComment = document.createElement("div"); // Create a container for a new comment
    newComment.style.margin = "1rem 0";
    newComment.style.boxShadow = "0 0 5px 2px rgba(0, 0, 0, 0.2)";
    newComment.style.background = "rgb(255, 203, 119, 0.2)";
    newComment.style.padding = "0.25rem 0.5rem"

    const newCommentAuthor = document.createElement("div"); // Create a container to display the author's name;
    newCommentAuthor.textContent = author.value;
    newCommentAuthor.style.fontSize = "1.25rem";
    newCommentAuthor.style.color = "#227C9D"
    newCommentAuthor.style.marginBottom = "0.1rem"

    const newCommentText = document.createElement("div"); // Create a container to display the message;
    newCommentText.textContent = authorComment.value;
    newCommentText.style.color = "#303030";


    if (commentBox.contains(placeholderComment)) {
        placeholderComment.remove(); // remove the comment "There aren't any comments at the moment" after the first comment has been posted
    }
    newComment.append(newCommentAuthor,newCommentText); // Add both of these elements to the comment container;
    commentLog.prepend(newComment) // Add the new comment to the comment box;

    clearForm()

}
// use this pink for errors #FE2C54

function clearForm(){
    author.value = "";
    authorEmail.value =  "";
    authorComment.value= "";

}