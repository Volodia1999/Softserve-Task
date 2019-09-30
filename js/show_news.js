(async () => {
    let newNewsList = await news.getData();
    newNewsList.forEach((news) => {
        insertNews(formCommentHTML(news.title_news, news.text_news, news.imagePath))
    });
})();

let container = document.getElementById('new');

const formCommentHTML = (title, text_title, image) => {
    const newNews = `<div class='col-md-3 col-sm-6 text-center'>
            <img src='${image}' alt='' class='img-fluid pt-3'>
            <h3 class='text-center'>${title}</h3>
            <p class='text-break'>${text_title}</p>
        </div>`
    return newNews;
}

const insertNews = (newsHTML) => {
    container.insertAdjacentHTML('beforeend', newsHTML);
}

