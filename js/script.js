$(function() {
    $(".menu").on("click", "a", function(event) {

        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href

        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;


        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({ scrollTop: top }, 1500);
    });


});

var menu = ['R 13-15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21-22']
var mySwiper = new Swiper('.swiper-container', {

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

const swiper = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});







// renderBullet: function (index, className) {

//     var arr = new Array('R 13-15', 'R 16', 'R 17', 'R 18', 'R 19', 'R 20', 'R 21-22');
//     return '' + (arr[index]) + '';