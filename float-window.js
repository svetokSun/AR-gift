let button1 = document.querySelector('.button-next');
button1.addEventListener('click', function () {
    $('.second-block').show()
    $('.float-block').fadeOut(20)
});

let button2 = document.querySelector('.button-medium');
button2.addEventListener('click', function () {
    $('.second-block').fadeOut(20)
    $('.third-block').show()
})
