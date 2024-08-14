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
    speed: 2400,
});

$('.mySwiper .s-next').mouseenter(function () {
    $('.follow-cursor_active').html('<svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04883 1.14746L10.4915 10.5901L1.04883 20.0327" stroke="white"/></svg>')
});
$('.mySwiper .s-next').click(function () {
    $(this).closest('.mySwiper').find('.swiper-button-next').click()
});
$('.mySwiper .s-prev').mouseenter(function () {
    $('.follow-cursor_active').html('<svg transform="rotate(180)" width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04883 1.14746L10.4915 10.5901L1.04883 20.0327" stroke="white"/></svg>')
});
$('.mySwiper .s-prev').click(function () {
    $(this).closest('.mySwiper').find('.swiper-button-prev').trigger("click")
});
// })
document.addEventListener('DOMContentLoaded', () => {
    const followCursor = () => { // объявляем функцию followCursor
        const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором
        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return
            if (target.closest('.mySwiper')) { // если курсор наведён на ссылку
                el.classList.add('follow-cursor_active') // элементу добавляем активный класс
            } else { // иначе
                el.classList.remove('follow-cursor_active') // удаляем активный класс
            }
            el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
            el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
        })
    }
    followCursor() // вызываем функцию followCursor

})


$(document).ready(function () {
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
        from: 10000000,
        to: 50000000,
        prettify_separator: ' ',
        input_values_separator: " - до ",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $range.val('от ' + $range.val())

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });

        $(this).prop("value", val);

    });
    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });


        $(this).prop("value", val);
    });
})

/*===SELECT===*/
$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
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

    const selectItem = selectList.find('.new-select__item');
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
    // массив картинок
    let images = ['img/about_us-1.jpg', 'img/about_us-2.jpg', 'img/about_us.jpg'];

    // контейнер у которого будем менять фоновое изображение
    let imageBox = document.querySelector('.section__about-us_container-images').style.backgroundImage;

    // выбираем случайную картинку
    let image = Math.floor(Math.random() * images.length);

    // меняем фон на эту картинку
    document.querySelector('.section__about-us_container-images').style.backgroundImage = 'url(' + images[image] + ')';
}
setInterval(randomBackgroundImage, 7000);