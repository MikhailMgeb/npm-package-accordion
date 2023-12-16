const newsBlockList = document.querySelector('.news-block__list');

newsBlockList.addEventListener('click', function (event) {
    const target = event.target;

    if(target.closest('.news-block__title') === null){
        return;
    }

    const currentElement = target.closest('.news-block__title').nextElementSibling;

    if (currentElement.style.maxHeight) {
        document.querySelectorAll('.news-block__text').forEach((element) => element.style.maxHeight = null);
    } else {
        document.querySelectorAll('.news-block__text').forEach((element) => element.style.maxHeight = null);
        currentElement.style.maxHeight = '100%';
    }
})