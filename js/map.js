ymaps = window.ymaps;
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [52.969069, 36.062247],
            controls: ['zoomControl'],
            zoom: 15
        }, {
            yandexMapDisablePoiInteractivity: true,
          }),
        cafe, metro;
    
    function findClosestObjects () {
        // Найдем в выборке кафе, ближайшее к найденной станции метро,
        // и откроем его балун.
        cafe.getClosestTo(metro.get(0)).balloon.open();
        
        // Будем открывать балун кафе, который ближе всего к месту клика
        myMap.events.add('click', function (event) {
            cafe.getClosestTo(event.get('coords')).balloon.open();
        });
    }

    function checkState () {
        var shownObjects,
            byColor = new ymaps.GeoQueryResult(),
            byShape = new ymaps.GeoQueryResult();


        if ($('#pharmacy').prop('checked')) {
            // Будем искать по двум параметрам:
            // - для точечных объектов по полю preset;
            // - для контурных объектов по цвету заливки.
            byColor = myObjects.search('geometry.type = "Point"')
                .add(myObjects.search('options.iconImageHref = "img/icon/pharmacy.svg"'));
        }
        
        // // Отберем объекты по цвету. 
        // if ($('#red').prop('checked')) {
        //     // Будем искать по двум параметрам:
        //     // - для точечных объектов по полю preset;
        //     // - для контурных объектов по цвету заливки.
        //     byColor = myObjects.search('options.fillColor = "#ff1000"')
        //         .add(myObjects.search('options.preset = "islands#redIcon"'));
        // }
        // if ($('#green').prop('checked')) {
        //     byColor = myObjects.search('options.fillColor = "#00ff00"')
        //         .add(myObjects.search('options.preset = "islands#greenIcon"'))
        //         // После того, как мы нашли все зеленые объекты, добавим к ним
        //         // объекты, найденные на предыдущей итерации.
        //         .add(byColor);
        // }
        // if ($('#yellow').prop('checked')) {
        //     byColor = myObjects.search('options.fillColor = "#ffcc00"')
        //         .add(myObjects.search('options.preset = "islands#yellowIcon"'))
        //         .add(byColor);
        // }
        // // Отберем объекты по форме.
        // if ($('#point').prop('checked')) {
        //     byShape = myObjects.search('geometry.type = "Point"');
        // }
        // if ($('#polygon').prop('checked')) {
        //     byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
        // }
        // if ($('#circle').prop('checked')) {
        //     byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
        // }
        
        // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
        // которые совмещают нужные признаки.
        shownObjects = byColor.intersect(byShape).addToMap(myMap);
        // Объекты, которые не попали в выборку, нужно убрать с карты.
        myObjects.remove(shownObjects).removeFromMap(myMap);
    }
    
    $('#shop').click(checkState);
    $('#all').click(checkState);
    $('#stay').click(checkState);
    $('#park').click(checkState);
    $('#school').click(checkState);
    $('#pharmacy').click(checkState);
    $('#cinema').click(checkState);
    $('#hospitals').click(checkState);
    
    // Описания кафе можно хранить в формате JSON, а потом генерировать
    // из описания геообъекты с помощью ymaps.geoQuery.
    window.myObjects = ymaps.geoQuery({
        type: "FeatureCollection",
        name: 'pharmacy',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [52.968934, 36.060334]
                },
                options: {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/pharmacy.svg',
                iconImageSize: [40, 51],
                iconImageOffset: [-5, -38]
                }, 
                
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [52.970333, 36.062508]
                },
                options: {
                    iconLayout: 'default#image',
                iconImageHref: 'img/icon/school.svg',
                iconImageSize: [40, 51],
                iconImageOffset: [-5, -38]
                }
            },
            {
                type: 'Feature',
                name: 'pharmacy',
                geometry: {
                    type: 'Point',
                    coordinates: [52.969134, 36.058627],
                },
                options: {
                    iconLayout: 'default#image',
                iconImageHref: 'img/icon/pharmacy.svg',
                iconImageSize: [40, 51],
                iconImageOffset: [-5, -38]
                }
            }
        ]
    }).addToMap(myMap);
    cafe = ymaps.geoQuery({
        type: 'FeatureCollection',
        features: [{
                type: 'Feature',





                properties: {
                    balloonContent: 'ДОМИК'
                },
                geometry: {
                    type: 'Point',
                    coordinates: [52.969069, 36.062247]
                },
                options: {
                    // presetStorage: 'islands#darkOrangeClusterIcons',
                    iconLayout: 'default#image',
                    iconImageHref: 'img/icon/logoContact.svg',
                    iconImageSize: [30, 42],
                    iconImageOffset: [-5, -38]
                }
            }, 
            {
                type: 'Feature',
                geometry: {
                    type: 'Circle',
                    coordinates: [52.969069, 36.062247],
                    radius: 400
                },
                options: {
                    fillColor: "#EC7300",
                    fillOpacity: 0.1,
                    strokeColor: "#EC7300"
                }
            }
        ]
    // Сразу добавим точки на карту.
    }).addToMap(myMap);
myMap.behaviors.disable('scrollZoom');
    // С помощью обратного геокодирования найдем метро "Кропоткинская".
    metro = ymaps.geoQuery(ymaps.geocode([55.744828, 37.603423], {kind: 'metro'}))
    // Нужно дождаться ответа от сервера и только потом обрабатывать полученные результаты.
        .then(findClosestObjects);
}



// COTTAGE



ymaps.ready(init2);

function init2() {
    var myMap = new ymaps.Map("cottageMap", {
            center: [54.061699, 36.510406],
            zoom: 13
        });

    // Добавим на карту схему проезда
    // от улицы Крылатские холмы до станции метро "Кунцевская"
    // через станцию "Молодежная" и затем до станции "Пионерская".
    // Точки маршрута можно задавать 3 способами:
    // как строка, как объект или как массив геокоординат.
    // ymaps.route([
    //     'Москва, улица Крылатские холмы',
    //     {
    //         point: 'Москва, метро Молодежная',
    //         // метро "Молодежная" - транзитная точка
    //         // (проезжать через эту точку, но не останавливаться в ней).
    //         type: 'viaPoint'
    //     },
    //     [55.731272, 37.447198], // метро "Кунцевская".
    //     'Москва, метро Пионерская'
    // ]).then(function (route) {
    //     myMap.geoObjects.add(route);
    //     // Зададим содержание иконок начальной и конечной точкам маршрута.
    //     // С помощью метода getWayPoints() получаем массив точек маршрута.
    //     // Массив транзитных точек маршрута можно получить с помощью метода getViaPoints.
    //     var points = route.getWayPoints(),
    //         lastPoint = points.getLength() - 1;
    //     // Задаем стиль метки - иконки будут красного цвета, и
    //     // их изображения будут растягиваться под контент.
    //     points.options.set('preset', 'twirl#redStretchyIcon');
    //     // Задаем контент меток в начальной и конечной точках.
    //     points.get(0).properties.set('iconContent', 'Точка отправления');
    //     points.get(lastPoint).properties.set('iconContent', 'Точка прибытия');

    //     // Проанализируем маршрут по сегментам.
    //     // Сегмент - участок маршрута, который нужно проехать до следующего
    //     // изменения направления движения.
    //     // Для того, чтобы получить сегменты маршрута, сначала необходимо получить
    //     // отдельно каждый путь маршрута.
    //     // Весь маршрут делится на два пути:
    //     // 1) от улицы Крылатские холмы до станции "Кунцевская";
    //     // 2) от станции "Кунцевская" до "Пионерская".

    //     // var moveList = 'Трогаемся,</br>',
    //     //     way,
    //     //     segments;
    //     // // Получаем массив путей.
    //     // for (var i = 0; i < route.getPaths().getLength(); i++) {
    //     //     way = route.getPaths().get(i);
    //     //     segments = way.getSegments();
    //     //     for (var j = 0; j < segments.length; j++) {
    //     //         var street = segments[j].getStreet();
    //     //         moveList += ('Едем ' + segments[j].getHumanAction() + (street ? ' на ' + street : '') + ', проезжаем ' + segments[j].getLength() + ' м.,');
    //     //         moveList += '</br>'
    //     //     }
    //     // }
    //     // moveList += 'Останавливаемся.';
    //     // // Выводим маршрутный лист.
    //     // $('#list').append(moveList);
    // }, function (error) {
    //     alert('Возникла ошибка: ' + error.message);
    // });




    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: `<p style="font-weight: 600;font-size: 14px;">Поселок «Рябцево»</p>
        <p class="geo" style="margin-bottom: 10px; font-size: 14px;"><svg style="margin-right: 5px" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.98308 0.333305C5.27982 0.31736 4.58063 0.444413 3.92773 0.706794C3.27484 0.969174 2.68178 1.36144 2.18437 1.8599C1.68696 2.35836 1.29553 2.95267 1.0337 3.60695C0.771874 4.26122 0.645088 4.96189 0.661 5.66664C0.661 9.44997 5.56729 13.4266 5.77685 13.5933C5.83517 13.6407 5.90798 13.6666 5.98308 13.6666C6.05818 13.6666 6.131 13.6407 6.18931 13.5933C6.39887 13.4266 11.3052 9.44997 11.3052 5.66664C11.3211 4.96189 11.1943 4.26122 10.9325 3.60695C10.6706 2.95267 10.2792 2.35836 9.78179 1.8599C9.28438 1.36144 8.69133 0.969174 8.03843 0.706794C7.38553 0.444413 6.68634 0.31736 5.98308 0.333305ZM3.48836 5.15664C3.48836 4.66219 3.63467 4.17884 3.90879 3.76771C4.18292 3.35659 4.57254 3.03616 5.02839 2.84694C5.48424 2.65772 5.98585 2.60821 6.46978 2.70468C6.95371 2.80114 7.39823 3.03924 7.74712 3.38887C8.09601 3.7385 8.33361 4.18396 8.42987 4.66891C8.52613 5.15387 8.47673 5.65653 8.28791 6.11335C8.09909 6.57016 7.77933 6.96061 7.36908 7.23531C6.95882 7.51002 6.47649 7.65664 5.98308 7.65664C5.32171 7.65576 4.68768 7.39208 4.22002 6.92343C3.75235 6.45478 3.48924 5.81941 3.48836 5.15664Z" fill="#EC7300"/>
            </svg>деревня Большая Рябцева</p>
        <p style="margin-bottom: 14px;font-size: 14px;" class="grey">В продаже <span style="color:#EC7300">20 участков</span></p>
        <a href="" class="more" style="color:#EC7300; font-size: 14px; text-decoration:underline">Подробнее</a>`
    },)
    myMap.geoObjects
    .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}



// CONTACT

ymaps.ready(function () {
    var myMap = new ymaps.Map('contactMap', {
            center: [52.968071, 36.086106],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([52.968131, 36.086229], {
            hintContent: 'Орёл, улица Пушкина, 54',
            balloonContent: 'Орёл, улица Пушкина, 54'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon/logoContact.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(myPlacemark)
});




