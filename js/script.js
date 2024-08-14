// $(document).ready(function() {
var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1400,
});


$('.s-next').mouseenter(function () {
    $('.follow-cursor').html('<svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04883 1.14746L10.4915 10.5901L1.04883 20.0327" stroke="white"/></svg>')
});
$('.mySwiper .s-next').click(function () {
    $(this).closest('.mySwiper').find('.swiper-button-next').click()
});
$('.s-prev').mouseenter(function () {
    $('.follow-cursor').html('<svg transform="rotate(180)" width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04883 1.14746L10.4915 10.5901L1.04883 20.0327" stroke="white"/></svg>')
});
$('.mySwiper .s-prev').click(function () {
    $(this).closest('.mySwiper').find('.swiper-button-prev').trigger("click")
});
$('.breadcrumbs').mouseenter(function () {
    $('.follow-cursor').hide();
});
$('.breadcrumbs').mouseleave(function () {
    $('.follow-cursor').show();
})
var swiper = new Swiper(".newsSlider", {
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    // },
    navigation: {
        nextEl: ".s-next",
        prevEl: ".s-prev",
    },
    effect: "fade",
    speed: 900,
});

var building = new Swiper(".buildingSlide", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    speed: 900,
    // slidesPerView: 3,
    spaceBetween: 56,
    breakpoints: {
        300: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 40,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 56,
        },
    },
});

$('.building_step .arr-prev').on('click', function () {
    building.slidePrev();
})
$('.building_step .arr-next').on('click', function () {
    building.slideNext();
})
document.addEventListener('DOMContentLoaded', () => {
    const followCursor = () => {
        const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return
            if (target.closest('.mySwiper')) {
                el.classList.add('follow-cursor_active')
                el.classList.remove('size-95');
            } else if (target.closest('section.cottage .project_slide-container, .buildingSlide .swiper-slide, .cottageSlide .project_slide-container')) {
                el.classList.add('size-95', 'follow-cursor_active');
                $('.follow-cursor').html('Смотреть')
            } else if (target.closest('.newsSlider')) {
                el.classList.add('follow-cursor_active')
                el.classList.remove('size-95');
            }
            else { // иначе
                el.classList.remove('follow-cursor_active')
            }
            el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
            el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
        });
    };
    followCursor();
});

var likesSlide = new Swiper(".likes_item", {
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    speed: 1400,
    spaceBetween: 56,
    navigation: {
        nextEl: ".button-next-el",
        prevEl: ".button-prev-el",
    },
    breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1420: {
            slidesPerView: 4,
            spaceBetween: 56,
        },
    },
});

$('.selected_simile .button_prev').on('click', function() {
    likesSlide.slidePrev();
    console.log(!$('.likes_item .swiper-wrapper').children().eq(0).hasClass('swiper-slide-active'))
   if (!$('.likes_item .swiper-wrapper').children().eq(0).hasClass('swiper-slide-active')) {
    $(this).addClass('active');
   } else {
    $(this).removeClass('active');
   };
});

$('.selected_simile .button_next').on('click', function() {
    likesSlide.slideNext();
   if (($('.likes_item .swiper-wrapper').children().eq(-3).hasClass('swiper-slide-next')) && ($(window).width() >= '1420')) {
    $(this).removeClass('active');
   } else if (($('.likes_item .swiper-wrapper').children().eq(-2).hasClass('swiper-slide-next')) && ($(window).width() <= '1420') ) {
    $(this).removeClass('active');
   } else {
    $(this).addClass('active');
   };
});


var likesSlideMob = new Swiper(".likes_item_mobile", {
    speed: 1400,
    spaceBetween: 56,
    navigation: {
        nextEl: ".button-next-el",
        prevEl: ".button-prev-el",
    },
    breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1420: {
            slidesPerView: 4,
            spaceBetween: 56,
        },
    },
});


$(document).ready(function () {
    $("#price").ionRangeSlider({
        skin: "round",
        // type: "double",
        min: 100000,
        max: 80000000,
        from: 10000000,
        prettify_separator: ' ',
        input_values_separator: " - до ",
        onStart: function (data) { $("#price").val(data.from.toLocaleString());},
        onChange: function (data) { $("#price").val(data.from.toLocaleString());},
        onFinish: function (data) { $("#price").val(data.from.toLocaleString());}
    });
    $("#time").ionRangeSlider({
        skin: "round",
        min: 1,
        max: 30,
        keyboard: true,
        from: 5,
        prettify_separator: ' ',
        input_values_separator: " - до ",
        onStart: function (data) { $("#time").val(data.from + ' лет');},
        onChange: function (data) { $("#time").val(data.from + ' лет');},
        onFinish: function (data) { $("#time").val(data.from + ' лет');}
    });
    $("#first").ionRangeSlider({
        skin: "round",
        min: 100000,
        keyboard: true,
        max: 300000,
        from: 200000,
        onStart: function (data) { $("#first").val(data.from.toLocaleString());},
        onChange: function (data) { $("#first").val(data.from.toLocaleString());},
        onFinish: function (data) {$("#first").val(data.from.toLocaleString());},
    }).parent().find("span.irs-line").attr("tabindex", "1");
    if($("#first").length !==0 ) {$("#first").val($("#first").data().from.toLocaleString());}
    if($("#price").length !==0 ) { $("#price").val($("#price").data().from.toLocaleString());}
    if($("#time").length !==0 ) { $("#time").val($("#time").data().from + ' лет');}



    // $("#first").removeAttr('readonly');
    // var slider = $("#first").data("ionRangeSlider");
    // $("#first").on('keyup', function(event){
    //     event.preventDefault()
    //     $("#first").data().from = $(this).val();
    //     this.value = this.value.replace(/[^0-9\.]/g, '');
    //     slider.update({
    //         from: $(this).val().replace(' ', "")
    //     });
    //     $("#first").val($("#first").data().from.toLocaleString());
    //     console.log($("#first").data().from.toLocaleString())
    //     $(this).removeAttr('readonly');
    //     $(this).attr('tabindex', 2)
    // })


    var $range = $("#example_2");
    var $inputFrom = $("#example_2_input_from");
    var $inputTo = $("#example_2_input_to");
    var instance;
    var min = 100000;
    var max = 60000000;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 1000000,
        to: 50000000,
        input_values_separator: " - до ",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    console.log( $range.data())

    function updateInputs(data) {
        from = data.from.toLocaleString();
        to = data.to.toLocaleString();
        $range.val('от ' +from + ' - до ' +to)
    }

if($range.length !== 0 ) {updateInputs($range.data())}



    var $range3 = $("#example_3");
    var $inputFrom3 = $("#example_3_input_from");
    var $inputTo3 = $("#example_3_input_to");
    var instance3;
    var min3 = 300000;
    var max3 = 80000000;
    var from3 = 0;
    var to3 = 0;

    $range3.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min3,
        max: max3,
        from: 10000000,
        to: 50000000,
        prettify_separator: ' ',
        input_values_separator: " - до ",
        onStart: updateInputs2,
        onChange: updateInputs2,
        onFinish: updateInputs2
    });
    instance3 = $range3.data("ionRangeSlider");
    function updateInputs2(data) {
        from3 = data.from.toLocaleString();
        to3 = data.to.toLocaleString();
        $range3.val('от ' +from3 + ' - до ' +to3)
    }
    if($range3.length !== 0 ) {updateInputs2($range3.data())}
   
    var $range4 = $("#example_4");
    var $inputFrom4 = $("#example_4_input_from");
    var $inputTo4 = $("#example_4_input_to");
    var instance4;
    var min4 = 300000;
    var max4 = 80000000;
    var from4 = 0;
    var to4 = 0;

    $range4.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min4,
        max: max4,
        from: 10000000,
        to: 50000000,
        prettify_separator: ' ',
        input_values_separator: " - до ",
        onStart: updateInputs4,
        onChange: updateInputs4,
        onFinish: updateInputs4
    });
    instance4 = $range4.data("ionRangeSlider");
    function updateInputs4(data) {
        console.log($range4)
        from4 = data.from;
        to4 = data.to;
        $range4.val('от ' + $range4.val())
        $inputFrom4.prop("value", from4);
        $inputTo4.prop("value", to4);
    }
    $inputFrom4.on("change", function () {
        var val = $(this).prop("value");
        if (val < min4) {
            val = min4;
        } else if (val > to4) {
            val = to4;
        }

        instance4.update({
            from: val
        });

        $(this).prop("value", val);

    });
    $inputTo4.on("change", function () {
        var val = $(this).prop("value");

        if (val < from4) {
            val = from4;
        } else if (val > max4) {
            val = max4;
        }
        instance4.update({
            to: val
        });
        $(this).prop("value", val);
    });

        // $('.projectSwiper').each(function () {
        //     var slideLength = $(this).find('.swiper-slide').length;
        //     var slideWidth = 100 - 100 / (slideLength + 1)
        //     $('.swiper-pagination-hover-wrap .swiper-pagination').css('width', slideWidth + '%')
        // })



    if (($(window).width() <= '600') && ($('.count_card').length != 0)) {
        $('.count_card').each(function() {
            $(this).text($(this).closest('.swiper-slide').attr('aria-label'))
        })
    }
})

var swiper = new Swiper(".projectSwiper", {
    speed: 900,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});


var variantFloor = new Swiper(".variantFloor", {
    direction: "vertical",
      slidesPerView: 8,
        speed: 900,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
  });

$('.svg_slide .svgMap_prev').on('click', function () {
    variantFloor.slidePrev();
})
$('.svg_slide .svgMap_next').on('click', function () {
    variantFloor.slideNext();
})


$('.panel-cursor, .head.bottom_slide .more, .panel .button').hover(function (event) {
    event.preventDefault()
    var parent = $(this).closest('.project_slide');
    parent.find('.panel').removeClass('hidden');
    parent.find('.swiper-pagination').css('width', '100%');
    // parent.find('.panel-cursor').hide();
    parent.find('.panel-cursor').addClass('active');
    $(this).closest('.project_slide').find('.head.bottom_slide').addClass('active');
    parent.find('.head.bottom_slide .more').addClass('opacity')
})

$(' .panel-cursor').mouseleave(function (event) {
    event.preventDefault();

    var parent = $('.project_slide');
    var slideLength = $(this).closest('.project_slide').find('.swiper-slide').length;
    var slideWidth = 100 - 100 / (slideLength + 1);
    parent.find('.panel').addClass('hidden');
    // $('.swiper-pagination-hover-wrap .swiper-pagination').css('width', slideWidth + '%')
    $('.swiper-pagination-hover-wrap .swiper-pagination').css('width', 'calc(100% - 32px)')
    // parent.find('.panel-cursor').show(1000);
    parent.find('.panel-cursor').removeClass('active');
    $(this).closest('.project_slide').find('.head.bottom_slide').removeClass('active')
    parent.find('.head.bottom_slide .more').removeClass('opacity')
})


function windowSize() {
    if ($(window).width() <= '900') {
        $('.head.bottom_slide .more').text('Раскрыть');
    }
}
$('.panel .head .hide').on('click', function () {
    var parent = $(this).closest('.project_slide');
    parent.find('.panel').addClass('hidden');
    parent.find('.head.bottom_slide .more').removeClass('opacity');
    $(this).closest('.project_slide').find('.head.bottom_slide').removeClass('active')
})

$('.head.bottom_slide .more').on('click', function () {
    if ($(window).width() <= '900') {
        $(this).toggleClass('open');
    }
})
$(window).resize(windowSize);
$(window).on('load resize', windowSize);



document.querySelectorAll('.swiper-pagination-hover-wrap .swiper-pagination-bullet').forEach(el => el.addEventListener('mouseover', (event) => {
    el.click();
}));

/*===SELECT===*/
$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        duration = 450;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    selectList.slideUp(0);
    selectHead.on('click', function () {
        $('.new-select').not(this).each(function () {
            $(this).removeClass('on');
            $(this).next('.new-select__list').slideUp(duration);
        })
        $(this).toggleClass('on');
        $(this).hasClass('on') ? selectList.slideDown(duration) : selectList.slideUp(duration);
    });

    $('.new-select__item span').on('click', function (e) {
        let parent = $(this).closest(".new-select__list");
        console.log(parent)
        $(".new-select.on").text($(this).text());
        parent.slideUp(duration);
        $(".new-select.on").removeClass('on')
    })
});

$(document).on('click', function (e) {
    if (!$(e.target).closest(".select").length) {
        $('.new-select__list').each(function () {
            $(this).slideUp(450);
        });
        $('.new-select').each(function () {
            $(this).removeClass('on');
        });
    }
    e.stopPropagation();
});



function randomBackgroundImage() {
    let images = ['img/about_us-1.jpg', 'img/about_us-2.jpg', 'img/about_us.jpg'];
    let image = Math.floor(Math.random() * images.length);
    document.querySelector('.section__about-us_container-images').style.backgroundImage = 'url(' + images[image] + ')';
}

if($('.section__about-us_container-images').length !== 0 ){setInterval(randomBackgroundImage, 7000);}


$('.section__about-us .more').on('click', function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $('.section__about-us_text.hidden').addClass('open');
        $(this).text('Свернуть')
    } else { $('.section__about-us_text.hidden').removeClass('open'); $(this).text(' Подробнее') };
})

$(document).on('click', function (event) {
    if (event.target.id == 'mortgage') {
        $(event.target).addClass('active');
        $('.filter_item, .filter_button').show();
        $('.f-planirovka.d-none').hide();
        $('#parametric, #planirovk').removeClass('active');
        $('.filter_item.d-none').show();
        $('.filter_item.opacity').css('opacity', '1');
        $('.filter_container').addClass('mortgage');
    } else if (event.target.id == 'parametric') {
        $(event.target).addClass('active');
        $('#mortgage, #planirovk').removeClass('active');
        $('.filter_item, .filter_button').show();
        $('.filter_item.opacity').css('opacity', '0');
        $('.f-planirovka.d-none').hide();
        $('.filter_container').removeClass('mortgage');
    } else if (event.target.id == 'land') {
        $(event.target).addClass('active');
        $('#house').removeClass('active');
        $('.filter_item.d-none').hide();
        $('.filter_item.opacity').css('opacity', '0');
    } else if (event.target.id == 'house') {
        $(event.target).addClass('active');
        $('#land').removeClass('active');
        $('.filter_item.d-none').show();
        $('.filter_item.opacity').css('opacity', '1');
    } else if (event.target.id == 'planirovk') {
        $(event.target).addClass('active');
        $('.filter_item, .filter_button').hide();
        $('.f-planirovka.d-none').show();
        $('#mortgage, #parametric').removeClass('active');
    }
})

$('#openMobFilter, #filter_btn').on('click', function () {
    $('.slider_filter').show().addClass('mobile')
    $('html').css('overflow', 'hidden')
})
$('#closeMobFilter').on('click', function () {
    $('.slider_filter').hide()
    $('html').css('overflow', 'auto');
})


var $obj = $('header');
var $height = $obj.height();
var offset = $('main').offset();
var topOffset = offset.top;

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    // var resultHeight = $(window).width() <= '940' ? $height :  $height+40.6;
    // console.log(resultHeight, $height )


    if (scrollTop > topOffset) {
        $obj.addClass('fixed');
        $('body').css('padding-top', $height);
    }
    if (scrollTop < topOffset) {
        $obj.removeClass('fixed');
        $('body').css('padding-top', '0');
    }
});



if (document.documentElement.clientWidth > 600) {
    $('.filter__rez-cord').on('click', function (e) {
        e.preventDefault();

        $('.filter__rez-cord').removeClass('active');
        $('.filter-box_screen').removeClass('active');

        $(this).addClass('active');
        $($(this).attr('href')).addClass('active');

    });
}

if (document.documentElement.clientWidth < 600) {
    $('.filter__rez-cord').removeClass('active');

    $('.filter__rez-cord').on('click', function (e) {
        e.preventDefault();

        $(this).toggleClass('open');
        $($(this).attr('href')).toggleClass('open');

    });
}

if ($(window).width() > 601 && $(window).width() < 1300) {
    $('.filter__rez-box').addClass('swiper-container');
    $('.filter__rez-boxis').addClass('swiper-wrapper');
    $('.filter__rez-cord').addClass('swiper-slide');
    new Swiper(".filter__rez-box", {
        draggable: true,
        speed: 1400,
        slidesPerView: 6,
        breakpoints: {
            1196: {
                draggable: true,
                speed: 1400,
                slidesPerView: 5.5,
            },
            1050: {
                draggable: true,
                speed: 1400,
                slidesPerView: 5,
            },
            868: {
                draggable: true,
                speed: 1400,
                slidesPerView: 4.5,
            },
            700: {
                draggable: true,
                speed: 1400,
                slidesPerView: 4,
            }
        }
    });
}


$('.horizont a.free').hover(function(event){
    let _this = $(this);
    let parent = $('.appartament_infoblock');
    let price = _this.attr('data-price');
    let square = _this.attr('data-square');
    let num = _this.text();
    let floor = _this.closest('.horizont').find('.floor').text();
    let max_floor = $('.horizont').first().find('.floor').text();
    parent.find('.price').text('от '+ Number(price).toLocaleString() + ' ₽');
    parent.find('span').eq(0).text(num+'-комн.')
    parent.find('span').eq(1).text(square+'м²')
    parent.find('span').eq(2).text(floor+' этаж из '+max_floor)
    parent.stop().slideDown(400);
})
$('.horizont a.free').mouseleave(function() {
    $('.appartament_infoblock').stop().slideUp(400)
})



// $('.like').on('click', function (e) {
//     e.preventDefault();

//     $(this).toggleClass('likes');
// });


$('.page__filter-room-top-icon').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('active');
    $($(this).attr('href')).toggleClass('active');

});


$('.page__filter-room-top-icon').on('click', function (e) {
    e.preventDefault();

    $('.page__filter-room-top-icon').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');

    if ($(".tile").hasClass("active")) {
        $(".page__filter-room-content-grid").addClass('tile-layout');
        $(".page__filter-room-content-grid").removeClass('full-layout');
    } if ($(".full").hasClass("active")) {
        $(".page__filter-room-content-grid").addClass('full-layout');
        $(".page__filter-room-content-grid").removeClass('tile-layout');

    }
});


$('#modile-ras').on('click', function () {
    $('.svg_img').toggle();
});

$('#filter_btn-sort').on('click', function (e) {
    e.preventDefault();

    $('.sortirovca__poppup').addClass('open');
    $('body').addClass('lock');
});

$('#filter-back_btn').on('click', function (e) {
    e.preventDefault();

    $('.filter__poppup').removeClass('open');
    $('body').removeClass('lock');
});

$('#filter-back_btn-sort').on('click', function (e) {
    e.preventDefault();

    $('.sortirovca__poppup').removeClass('open');
    $('body').removeClass('lock');
});


$('.filter__btn_tab').on('click', function (e) {
    e.preventDefault();

    $('.filter__btn_tab').removeClass('active');
    $('.filter__body').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');

});


var swiperPoselok = new Swiper(".houseStyle__slider", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    speed: 900,
    effect: "fade",
});

$('.like, .link').click(function(e){
    if($(this).closest('header').length == 0) {
    e.preventDefault();}
})
$('.like').not('.likes').click(function(e){
    if($(this).closest('header').length == 0) {
    $(this).toggleClass('likes');
   if( $(this).hasClass('likes')) {
    var butWrap = $(this).closest('.appartament.liked').length ==0 ? $(this).parent() : $(this).closest('.appartament.liked');
    console.log($(this).closest('.appartament.liked'))
    butWrap.append('<div class="animtocart"></div>');
    $('.animtocart').css({
      'position' : 'absolute',
    'background-image': `url("data:image/svg+xml,%3Csvg width='21' height='18' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.7538 1.81269C17.8118 0.889906 16.5103 0.428711 14.8488 0.428711C14.389 0.428711 13.9197 0.508691 13.4414 0.668573C12.963 0.828572 12.5178 1.04443 12.1066 1.316C11.6948 1.58748 11.3409 1.84244 11.044 2.08046C10.7485 2.31763 10.4663 2.57098 10.1986 2.83937C9.93089 2.571 9.64863 2.31765 9.35311 2.08046C9.05634 1.84244 8.70229 1.58764 8.29057 1.316C7.87893 1.04432 7.43389 0.828612 6.95554 0.668573C6.47722 0.50873 6.00803 0.428711 5.54822 0.428711C3.88681 0.428711 2.58525 0.890023 1.64335 1.81269C0.701457 2.73527 0.230469 4.01496 0.230469 5.65185C0.230469 6.15038 0.317754 6.66388 0.491973 7.19196C0.666192 7.72023 0.864726 8.17044 1.08719 8.5424C1.30961 8.91431 1.56184 9.27715 1.84368 9.63057C2.12553 9.98403 2.3315 10.2275 2.46114 10.3615C2.5909 10.4953 2.69292 10.5921 2.76707 10.6515L9.70907 17.3704C9.8426 17.5044 10.0058 17.5714 10.1986 17.5714C10.3914 17.5714 10.5546 17.5044 10.6881 17.3706L17.6191 10.6741C19.3175 8.97036 20.1667 7.29621 20.1667 5.65185C20.1667 4.01496 19.6957 2.73527 18.7538 1.81269Z' fill='%23EC7300'/%3E%3C/svg%3E%0A")`,
      'width' :  '21px',
      'height' : '18px',
      'z-index' : '9999999999',
      'left' : e.pageX-21,
      'top' : e.pageY-18,
        
    });
      var cart = $('header .like').offset();
      $('.animtocart').animate({ top: cart.top + 'px', left: cart.left + 'px', width: 0, height: 0 }, 800, function(){
      $(this).remove();
    });}}
  });


  $('button.feedback').on('click', function(event) {
    event.preventDefault()
    let data = $( '.form__feedback').serialize() 
    $.ajax({
        url: './',
        method: 'post',
        dataType: 'json',
        data: data,
        success: function(data){
            $('#poppupCard').removeClass('d-none') 
        }
    });
    $('#poppupCard').removeClass('d-none')//REMOVE
  })

  $('#poppupCard').mouseup( function(e){
    if ( !$('#poppupCard .poppup').is(e.target) || $('#poppupCard .button').is(e.target)) { 
        $(this).addClass('d-none');
    } 
});


// 404
$(document).ready(function () {
    if($('.svg404').length !== 0 ) {
        let arr = [];
        $('.svg404 svg path').each(function(){
            arr.push($(this));
    })

    const intervalId = setInterval(function() { 
    if (arr.length > 1) {
    var rand = Math.floor(Math.random() * arr.length);
        arr[rand].css('fill', '#EC7300')
        arr.splice(rand, 1); 
    }
      }, 0)

    }


// BREADCRUMBS
if($('.breadcrumbs').length !== 0) {
    // 20
    if ( (($('.breadcrumbs span').text().length > 20) || ($('.breadcrumbs span').text().length < 27) ) && ($('.breadcrumbs span').text().length > 20) ) {
        console.log($('.breadcrumbs span').text().length );
        $('.breadcrumbs span').text($('.breadcrumbs span').text().substring(0, 20) + '...');
    };
};

//MORTGAGE COLOR
if ( $('.mortgage_slide__item').length !== 0 ) {
    let count = $('.mortgage_slide__item').length;
    let blind = setInterval(function() {
    $('.mortgage_slide__item').eq(5-count).addClass('active')
    count--;
    if (count <= 0) clearInterval(blind);
    }, 1000);

    let count2 = $('.mortgage_slide__item').length;
    var unblind = setTimeout(function() {
        let blind2 = setInterval(function() {
            $('.mortgage_slide__item').eq(5-count2).removeClass('active');
        count2--;
            if (count2 <= 0) clearInterval(blind2);
        }, 1000);

    }, 1000);

$('.mortgage_rare__accordion_item .head.plus ~ .descript').show();
};

});

$('.mortgage_rare__accordion_item .head').on('click', function() {
    if ($(this).hasClass('minus')) {
        $('.mortgage_rare__accordion_item .head.plus ~ .descript').slideUp(500);
        $('.mortgage_rare__accordion_item .head.plus').removeClass('plus').addClass('minus');
        $(this).removeClass('minus').addClass('plus');
        $(this).parent().find('.descript').slideDown(500);
    } else {
        $(this).removeClass('plus').addClass('minus');
        $(this).parent().find('.descript').slideUp(500);
    }
});



//   ПЛАВНЫЙ СКРОЛЛ
$(document).ready(function () {
    SmoothScroll({
        animationTime: 800,
        stepSize: 75,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        touchpadSupport: true,
    });

   var houseStyle = $('.houseStyle__slider').height();
   $('.houseStyle__slide').each(function(){
    $(this).height(houseStyle);
   })

})

// ФОТО ПРОЕКТОВ
Fancybox.bind('[data-fancybox="gallery"]', {
    tpl: {
        main: `<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
      <div class="fancybox__backdrop"></div>
      <div class="fancybox__cols">
        <div class="fancybox__col">
          <div class="fancybox__carousel"></div>
          <div class="fancybox__footer"></div>
        </div>
        <div class="fancybox__col">
          <div class="fancybox__data">
            <p class="font-semibold" id="fancybox_title"></p>
          </div>
        </div>
      </div>
    </div>`,
    },

    idle: false,
    compact: false,
    dragToClose: false,

    showClass: 'f-fadeIn',
    hideClass: 'f-fadeOut',

    Images: {
        zoom: false,
    },

    Thumbs: {
        type: 'classic',
    },

    Toolbar: {
        parentEl: (toolbar) => {
            return toolbar.instance.container.querySelector('.fancybox__col');
        },
        items: {
            sidebar: {
                tpl: `<button class="f-button"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,
                click: (toolbar) => {
                    toolbar.instance.container.classList.toggle('has-sidebar');
                },
            },
        },
        display: {
            left: ['infobar'],
            middle: [],
            right: ['sidebar', 'thumbs', 'close'],
        },
    },

    on: {
        'Carousel.ready Carousel.change': (fancybox) => {
            const titleVal = fancybox.getSlide().triggerEl.dataset.title;
            const titleEl = document.getElementById('fancybox_title');

            if (titleEl) {
                titleEl.innerHTML = titleVal;
            }
        },
    },
});

$('.likeRemove').on('click', function() {
    let parent = $(this).closest('.filter-room-card');
    parent.find('.blur.remove').css('display', 'flex');
})

$('.consult').on('click', function() {
    $('#poppupConsult').removeClass('d-none');
});

$('#poppupConsult').on('click', function(e) {
    if ( (!$('#poppupConsult .poppup').is(e.target) && $('#poppupConsult .poppup').has(e.target).length === 0  ) || $('#poppupConsult .close').is(e.target)) {
        $(this).addClass('d-none');
    } 
});
$('#poppupConsult .close').on('click', function(e) {
    $('#poppupConsult').addClass('d-none');
})


$('.project_slide-container, .project .project_slide .projectSwiper ').on('mousedown', function () {
    let href = $(this).find('a.swiper-slide').attr('href');
    window.location.href = href;
})

$('.mob_menu_item.droplist').on('click', function() {
    $('.menu_droplist.d-none').removeClass('d-none');
})
$('.menu_droplist .back').on('click', function() {
    $('.menu_droplist').addClass('d-none');
});

$('.d-none.mob_info').on('touchstart', function() {$(this).hide()})

$('.near_place__item p').on('click', function() {
    $(this).parent().find('label').click()
})

$('.chessContent .chess path').mouseenter(function () {
    $('.appartament_infoblock').show();
});
$('.chessContent .chess path').mouseleave(function () {
    $('.appartament_infoblock').hide();
});