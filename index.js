const author = document.getElementById("name");
const authorEmail = document.getElementById("email");
const authorComment = document.getElementById("comment");
const submitCommentButton = document.getElementById("submit-button");
const commentBox = document.getElementById("comment-box");
const placeholderComment = document.querySelector(".no-comments-atm");
const commentLog = document.querySelector(".comment-log");
const characterCount = document.getElementById("character-counter");
const commentForm = document.getElementById("comment-form")

submitCommentButton.addEventListener("click", (e) => {
    e.preventDefault();
    processNewComment();
}) 

authorComment.addEventListener("keyup", updateCharacterCounter)

function processNewComment(){
    if (author.value === "" || authorComment.value === "" || authorComment.value.length > 140) {
        displayErrorMessage();
        return
    } // Check if the message has: (1) an author (2) a message between 1 and 140 characters. If no, show error message and do not post an empty comment

    const newComment = document.createElement("div"); // Construct the new comment and style it
    newComment.style.margin = "1rem 0";
    newComment.style.boxShadow = "0 0 5px 2px rgba(0, 0, 0, 0.2)";
    newComment.style.background = "rgb(255, 203, 119, 0.2)";
    newComment.style.padding = "0.25rem 0.5rem";
    newComment.style.width="100%"
    newComment.style.wordBreak= "break-word";

    const newCommentAuthor = document.createElement("div"); 
    newCommentAuthor.textContent = author.value;
    newCommentAuthor.style.fontSize = "1.25rem";
    newCommentAuthor.style.color = "#227C9D"
    newCommentAuthor.style.marginBottom = "0.1rem"

    const newCommentText = document.createElement("div");
    newCommentText.textContent = authorComment.value;
    newCommentText.style.color = "#303030";

    if (commentBox.contains(placeholderComment)) {
        placeholderComment.remove(); // remove the comment "There aren't any comments at the moment" after the first comment has been posted
    }
    newComment.append(newCommentAuthor,newCommentText); 
    commentLog.prepend(newComment)

    clearForm()

}

function clearForm(){
    author.value = "";
    authorEmail.value =  "";
    authorComment.value= "";
    characterCount.textContent = "0/140 characters";
    const error = document.getElementById("error-message");
    if (commentForm.contains(error)){
        error.remove() // remove the error message once a message has been posted
    }
}

function updateCharacterCounter(){
    const commentLength = authorComment.value.length
    characterCount.textContent = `${commentLength}/140 characters`;

    if (commentLength > 140) {
        authorComment.style.background = "rgb(254, 44, 84, 0.4)";
    } else {
        authorComment.style.background = "#F1F7ED"
    }
}

function displayErrorMessage(){
    const createErrorMessage = document.createElement("div");
    createErrorMessage.id = "error-message";
    createErrorMessage.style.color = "rgb(254, 44, 84)"
    createErrorMessage.textContent = "* Please make sure you have entered a name and a comment that is under 140 characters.";
    const errorMessage = document.getElementById("error-message");
    if (commentForm.contains(errorMessage)) return // if error message is already present, don't add another message.
    commentForm.appendChild(createErrorMessage);
}
