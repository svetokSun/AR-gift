let button = document.querySelector('.button-next');
button.addEventListener('click', function () {
    $('.second-block').show()
});

let background = document.querySelector('.button-finish');
background.addEventListener('click', function () {
    $('.second-block').fadeOut(20)
})
