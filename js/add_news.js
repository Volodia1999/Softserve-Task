const getBase64Image = (img) =>{
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let dataURL = canvas.toDataURL("image/jpg");

    return dataURL;
}

let openFile = function (event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function () {
        let dataURL = reader.result;
        let output = document.getElementById('photo');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};

let btn = document.getElementById('button');

function Add_news(event) {
    event.preventDefault();
    let title_news = document.getElementById("title").value;
    let text_news = document.getElementById("news").value;
    let output = document.getElementById('photo');
    let imagePath = getBase64Image(output);

    if (title_news.trim() === "") {
        document.getElementById('text_title').style.display = "block";
    } else if (text_news.trim() === "") {
        document.getElementById('text_news').style.display = "block";
    } else if(isOnline()) {
        news.add({title_news, text_news, imagePath});
        document.getElementById("title").value = "";
        document.getElementById("news").value = "";
        document.getElementById('photo').src = "";
    }
}

btn.addEventListener('click', Add_news);

const clearLC = () => (localStorage.removeItem('news'));
document.getElementById('button_local').addEventListener('click', clearLC);

function onChangeInput() {
    let title_news = document.getElementById("title").value;

    if (title_news === "") {
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

