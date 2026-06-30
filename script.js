// ===============================
// Story Hub JavaScript
// ===============================

// Like Button
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {
    button.addEventListener("click", () => {

        let likes = Number(button.dataset.likes || 0);

        likes++;

        button.dataset.likes = likes;

        button.innerHTML = `❤️ ${likes}`;
    });
});

// Bookmark Button
const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

bookmarkButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("saved");

        if(button.classList.contains("saved")){
            button.innerHTML = "🔖 Saved";
        }else{
            button.innerHTML = "🔖 Bookmark";
        }

    });

});

// Comment System
const commentForm = document.querySelector(".comment-form");

if(commentForm){

    commentForm.addEventListener("submit", function(e){

        e.preventDefault();

        const textarea = this.querySelector("textarea");

        if(textarea.value.trim() === "") return;

        const comments = document.querySelector(".comments");

        const div = document.createElement("div");

        div.className = "comment";

        div.innerHTML = `
            <h4>You</h4>
            <p>${textarea.value}</p>
        `;

        comments.insertBefore(div, commentForm);

        textarea.value = "";

    });

}
function shareStory(){

    if(navigator.share){

        navigator.share({
            title:"Story Hub",
            text:"Check out this amazing story!",
            url:window.location.href
        });

    }else{

        navigator.clipboard.writeText(window.location.href);

        alert("Story link copied!");

    }

}
