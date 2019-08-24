let btn = document.getElementById('button');


function Add_news(event) {
    event.preventDefault();
    let title_news = document.getElementById("title").value;
    let text_news = document.getElementById("news").value;

    if (title_news === "") {
        document.getElementById('text_title').style.display = "block";
    } else if (text_news === "") {
        document.getElementById('text_news').style.display = "block";
    } else {
        alert("Adding news is successful");
        document.getElementById("title").value = "";
        document.getElementById("news").value = "";
        document.getElementById('text_title').style.display = "none";
        document.getElementById('text_news').style.display = "none";
        let output = document.getElementById('photo');
        output.src = "image/barca.jpg";
    }
}

btn.addEventListener('click', Add_news);

function onChangeInput() {
    let title_news = document.getElementById("title").value;

    if(title_news === "") {
        document.getElementById('text_title').style.display = "block";
    } else {
        document.getElementById('text_title').style.display = "none";
    }
}

function onChangeTextarea() {
    let text_news = document.getElementById("news").value;

    if (text_news === "") {
        document.getElementById('text_news').style.display = "block";
    } else {
        document.getElementById('text_news').style.display = "none";
        }
}

let openFile = function(event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
        let dataURL = reader.result;
        let output = document.getElementById('photo');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};
