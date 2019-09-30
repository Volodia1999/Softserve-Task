window.onload = async function () {
    let newCommentsList;

    if (isOnline()) {
        newCommentsList = await fans.getData();

        newCommentsList.forEach((comment) => {
            insertNewComment(formCommentHTML(comment.text, comment.name, comment.current_date))
        })
    }
};

let btn = document.getElementById('button_appeal');
let feedback = document.querySelector('.feedback');

const formCommentHTML = (userComment, userName, date) => {
    const newComment = `<div class = 'feedback'>
            <p class='text-justify pt-1'>
            ${userComment}
            </p>
            <div class='time_and_author'>
            <span class='pl-4'>${date}</span>
            <span class='pr-4'>${userName}</span>
            </div>
            <hr class='col-md-12 col-11'>`
    return newComment;
}

const insertNewComment = (commentHTML) => {
    feedback.insertAdjacentHTML('beforeend', commentHTML);
}

function Click() {
    let current_date = new Date().toLocaleString();
    let name = document.getElementById("author_name").value;
    let text = document.getElementById("fan_appeal").value;

    if (name.trim() === "") {
        alert("Name is empty");
    } else if (text.trim() === "") {
        alert("Appeal is empty");
    } else if(isOnline()) {
        fans.add({name, text, current_date});
        document.getElementById("author_name").value = "";
        document.getElementById("fan_appeal").value = "";
    }
}

btn.addEventListener('click', Click)


