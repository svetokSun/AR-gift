let button = document.querySelector('.button-next');
button.addEventListener('click', function () {
    $('.second-block').show()
    $('.float-block').fadeOut(20)
});

let button1 = document.querySelector('.button-medium');
button1.addEventListener('click', function () {
    $('.second-block').fadeOut(20)
    $('.third-block').show()
})
