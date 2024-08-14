
  ymaps = window.ymaps;















      // карта коттеджные поселки
  function init6() {
    if (document.getElementById('new_cottage_map')) {
      var myMap = new ymaps.Map("new_cottage_map", {
        center: [52.958009, 36.167833],
        controls: ['zoomControl'],
        zoom: 12
      }, {
        yandexMapDisablePoiInteractivity: true,
      });


    myMap.behaviors.disable('scrollZoom');


   /*myMap.geoObjects.events.add('click', function (e) {
        
        // Получение ссылки на дочерний объект, на котором произошло событие.
        //var object = e.get('target');
        if (!myMap.balloon.isOpen()) {
            console.log(e);
              var coords = e.get('coords');

              myMap.balloon.open(coords, {
                contentHeader:'Событие!',
                
                
              });
             
          }
          else {
              myMap.balloon.close();
          }
    });*/
    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps
      .geoQuery({
        type: "FeatureCollection",
        features: [   
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.925512, 36.181286],
            },
            properties: {
                balloonContentHeader: 'Ясная поляна',
                balloonContentBody: 'Поселок',
                balloonContentFooter: 'В продаже',
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: 'https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg',
              iconImageSize: [20, 26],
              iconImageOffset: [-5, -38],
             
            
            },
          },

          {
            type: 'Feature',
            geometry: {
                type: 'Circle',
                coordinates: [52.927134, 36.182005],
                radius: 800
            },
            properties: {
                balloonContentHeader: 'Ясная поляна',
                balloonContentBody: 'Поселок',
                balloonContentFooter: 'В продаже',
            },
            options: {
                fillColor: "#EC7300",
                fillOpacity: 0.1,
                strokeColor: "#EC7300"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.997749, 36.204492],
            },
            properties: {
                balloonContentHeader: 'Рябцево',
                balloonContentBody: 'Поселок',
                balloonContentFooter: 'В продаже',
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: 'https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg',
              iconImageSize: [20, 26],
              iconImageOffset: [-5, -38],
              
            },
          },

          {
            type: 'Feature',
            geometry: {
                type: 'Circle',
                coordinates: [52.999569, 36.205494],
                radius: 800
            },
            properties: {
                balloonContentHeader: 'Рябцево',
                balloonContentBody: 'Поселок',
                balloonContentFooter: 'В продаже',
            },
            options: {
                fillColor: "#EC7300",
                fillOpacity: 0.1,
                strokeColor: "#EC7300"
            }
          }
          
          
        ],
      }).addToMap(myMap);

      var myClusterer = new ymaps.Clusterer(
        {clusterDisableClickZoom: true}
      );
      myClusterer.add(window.myObjects);
      myMap.geoObjects.add(myClusterer);

    }
  }





      // карта ЖК дом-самолет
  function init() {
    if (document.getElementById('map')) {
    var myMap = new ymaps.Map("map", {
      center: [53.007731, 36.154792],
      controls: ['zoomControl'],
      zoom: 16
  }, {
      yandexMapDisablePoiInteractivity: true,
    });

  //Менеджер поведений карты https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/map.behavior.Manager.html
  myMap.behaviors.disable('scrollZoom');
    // Функция, которая по состоянию чекбоксов в меню
    // показывает или скрывает геообъекты из выборки.
    function checkState() {
      var shownObjects,
        byColor = new ymaps.GeoQueryResult(),
        byShape = new ymaps.GeoQueryResult();

      // Отберем объекты по цвету.
      if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      
      if ($("#stay").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg"'))
          .add(byColor);
      }
      
      if ($("#hospitals").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg"'))
          .add(byColor);
      }
      
       if ($("#market").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg"'))
          .add(byColor);
      }
      
       if ($("#cinema").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg"'))
          .add(byColor);
      }
      
       if ($("#park").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg"'))
          .add(byColor);
      }
      
       if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      

      if ($("#school").prop("checked")) {
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg"'))
          // После того, как мы нашли все зеленые объекты, добавим к ним
          // объекты, найденные на предыдущей итерации.
          .add(byColor);
      }

      if ($("#polygon").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg"'))
          .add(byColor);
      }

      if ($("#circle").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Circle"')
          .add(myObjects.search('options.fillColor = "#EC7300"'))
          .add(byColor);
      }
      
      // Отберем объекты по форме.
      // Отберем объекты по форме.
      /*if ($('#all').prop('checked')) {
        
    }*/

      byShape = myObjects.search('geometry.type = "Point"');
    if ($('#polygon').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
    }
    if ($('#circle').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
    }

      // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
      // которые совмещают нужные признаки.
      shownObjects = byColor.intersect(byShape).addToMap(myMap);
      
      // Объекты, которые не попали в выборку, нужно убрать с карты.
      myObjects.remove(shownObjects).removeFromMap(myMap);
    }


    $("#market").click(checkState);
    $("#stay").click(checkState);
    $("#cinema").click(checkState);
    $("#park").click(checkState);
    $("#hospitals").click(checkState);
   
    $("#pharmacy").click(checkState);
    $("#school").click(checkState);
    $("#yellow").click(checkState);
    //$("#all").click(checkState);
    $("#polygon").click(checkState);
    

    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps
      .geoQuery({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.007731, 36.154792],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: 'https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg',
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.006506, 36.155169],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.005394, 36.153660],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.008162, 36.149539],
            },
           
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.009502, 36.152009],
            },
            
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          /*{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.929215, 36.027947],
            },
            
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },*/
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.008336, 36.150707],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.008521, 36.155321],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.007975, 36.151109],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
           /*{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.930691, 36.029615],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },*/
          
          /*{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.921809, 36.009877],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },*/
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.009394, 36.156561],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          /*{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.929894, 36.028183],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },*/
          /*{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.929282, 36.030564],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg",
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38]
            },
          },*/
          {
            type: 'Feature',
            geometry: {
                type: 'Circle',
                coordinates: [53.007731, 36.154792],
                radius: 400
            },
            options: {
                fillColor: "#EC7300",
                fillOpacity: 0.1,
                strokeColor: "#EC7300"
            }
        }
          
          
        ],
      })
      .addToMap(myMap);

    }
  }

  // --------------------------------------------

     // карта ЖК Разградский
  function init3() {
    if (document.getElementById('map2')) {
    var myMap = new ymaps.Map("map2", {
      center: [52.954744, 36.081139],
      controls: ['zoomControl'],
      zoom: 16
    }, {
      yandexMapDisablePoiInteractivity: true,
    });

  //Менеджер поведений карты https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/map.behavior.Manager.html
    myMap.behaviors.disable('scrollZoom');
    // Функция, которая по состоянию чекбоксов в меню
    // показывает или скрывает геообъекты из выборки.
    function checkState() {
      var shownObjects,
        byColor = new ymaps.GeoQueryResult(),
        byShape = new ymaps.GeoQueryResult();

      // Отберем объекты по цвету.
      if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      
      if ($("#stay").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg"'))
          .add(byColor);
      }
      
      if ($("#hospitals").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg"'))
          .add(byColor);
      }
      
       if ($("#market").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg"'))
          .add(byColor);
      }
      
       if ($("#cinema").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg"'))
          .add(byColor);
      }
      
       if ($("#park").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg"'))
          .add(byColor);
      }
      
       if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      

      if ($("#school").prop("checked")) {
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg"'))
          // После того, как мы нашли все зеленые объекты, добавим к ним
          // объекты, найденные на предыдущей итерации.
          .add(byColor);
      }

      if ($("#polygon").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg"'))
          .add(byColor);
      }

      if ($("#circle").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Circle"')
          .add(myObjects.search('options.fillColor = "#EC7300"'))
          .add(byColor);
      }
      
      // Отберем объекты по форме.
      // Отберем объекты по форме.
      /*if ($('#all').prop('checked')) {
        
    }*/
      byShape = myObjects.search('geometry.type = "Point"');
    if ($('#polygon').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
    }
    if ($('#circle').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
    }

      // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
      // которые совмещают нужные признаки.
      shownObjects = byColor.intersect(byShape).addToMap(myMap);
      
      // Объекты, которые не попали в выборку, нужно убрать с карты.
      myObjects.remove(shownObjects).removeFromMap(myMap);
    }


    $("#market").click(checkState);
    $("#stay").click(checkState);
    $("#cinema").click(checkState);
    $("#park").click(checkState);
    $("#hospitals").click(checkState);
   
    $("#pharmacy").click(checkState);
    $("#school").click(checkState);
    $("#yellow").click(checkState);
    //$("#all").click(checkState);
    $("#polygon").click(checkState);
    

    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps
      .geoQuery({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.929282, 36.030564],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: 'M24-28.3c-.2-13.3-7.9-18.5-8.3-18.7l-1.2-.8-1.2.8c-2 1.4-4.1 2-6.1 2-3.4 0-5.8-1.9-5.9-1.9l-1.3-1.1-1.3 1.1c-.1.1-2.5 1.9-5.9 1.9-2.1 0-4.1-.7-6.1-2l-1.2-.8-1.2.8c-.8.6-8 5.9-8.2 18.7-.2 1.1 2.9 22.2 23.9 28.3 22.9-6.7 24.1-26.9 24-28.3z',
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.954290, 36.078784],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.956807, 36.080498],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.951541, 36.075597],
            },
           
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.951541, 36.075597],
            },
            
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.951541, 36.075597],
            },
            
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.951541, 36.075597],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
           {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.955425, 36.074349],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.954614, 36.077379],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.967649, 36.074426],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.961888, 36.086753],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.954636, 36.075743],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.954744, 36.081139],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg",
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38]
            },
          },
          {
            type: 'Feature',
            geometry: {
                type: 'Circle',
                coordinates: [52.954744, 36.081139],
                radius: 400
            },
            options: {
                fillColor: "#EC7300",
                fillOpacity: 0.1,
                strokeColor: "#EC7300"
            }
        }
          
          
        ],
      })
      .addToMap(myMap);

    }
  }

  // ---------------------------------------------

  // карта м-к Первый
  function init4() {
    if (document.getElementById('map3')) {
    var myMap = new ymaps.Map("map3", {
      center: [52.963363, 36.007733],
      controls: ['zoomControl'],
      zoom: 14
    }, {
      yandexMapDisablePoiInteractivity: true,
    });

    //Менеджер поведений карты https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/map.behavior.Manager.html
    myMap.behaviors.disable('scrollZoom');
    // Функция, которая по состоянию чекбоксов в меню
    // показывает или скрывает геообъекты из выборки.
    function checkState() {
      var shownObjects,
        byColor = new ymaps.GeoQueryResult(),
        byShape = new ymaps.GeoQueryResult();

      // Отберем объекты по цвету.
      if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      
      if ($("#stay").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg"'))
          .add(byColor);
      }
      
      if ($("#hospitals").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg"'))
          .add(byColor);
      }
      
       if ($("#market").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg"'))
          .add(byColor);
      }
      
       if ($("#cinema").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg"'))
          .add(byColor);
      }
      
       if ($("#park").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg"'))
          .add(byColor);
      }
      
       if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      

      if ($("#school").prop("checked")) {
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg"'))
          // После того, как мы нашли все зеленые объекты, добавим к ним
          // объекты, найденные на предыдущей итерации.
          .add(byColor);
      }

      if ($("#polygon").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg"'))
          .add(byColor);
      }

      if ($("#circle").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Circle"')
          .add(myObjects.search('options.fillColor = "#EC7300"'))
          .add(byColor);
      }
      
      // Отберем объекты по форме.
      // Отберем объекты по форме.
      /*if ($('#all').prop('checked')) {
        
    }*/
      byShape = myObjects.search('geometry.type = "Point"');
    if ($('#polygon').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
    }
    if ($('#circle').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
    }

      // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
      // которые совмещают нужные признаки.
      shownObjects = byColor.intersect(byShape).addToMap(myMap);
      
      // Объекты, которые не попали в выборку, нужно убрать с карты.
      myObjects.remove(shownObjects).removeFromMap(myMap);
    }


    $("#market").click(checkState);
    $("#stay").click(checkState);
    $("#cinema").click(checkState);
    $("#park").click(checkState);
    $("#hospitals").click(checkState);
   
    $("#pharmacy").click(checkState);
    $("#school").click(checkState);
    $("#yellow").click(checkState);
    //$("#all").click(checkState);
    $("#polygon").click(checkState);
    

    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps
      .geoQuery({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.929282, 36.030564],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: 'M24-28.3c-.2-13.3-7.9-18.5-8.3-18.7l-1.2-.8-1.2.8c-2 1.4-4.1 2-6.1 2-3.4 0-5.8-1.9-5.9-1.9l-1.3-1.1-1.3 1.1c-.1.1-2.5 1.9-5.9 1.9-2.1 0-4.1-.7-6.1-2l-1.2-.8-1.2.8c-.8.6-8 5.9-8.2 18.7-.2 1.1 2.9 22.2 23.9 28.3 22.9-6.7 24.1-26.9 24-28.3z',
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.955840, 36.020368],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.963480, 36.008355],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.965859, 36.014808],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
           {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.965782, 36.014762],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.966424, 36.013738],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.967588, 36.074446],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.950634, 36.025952],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.952555, 36.018036],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [52.963363, 36.007733],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg",
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38]
            },
          },
          {
            type: 'Feature',
            geometry: {
                type: 'Circle',
                coordinates: [52.963363, 36.007733],
                radius: 400
            },
            options: {
                fillColor: "#EC7300",
                fillOpacity: 0.1,
                strokeColor: "#EC7300"
            }
        }
          
          
        ],
      })
      .addToMap(myMap);
    }
  }

  // ----------------------------------------------

  // карта ЖК Лидер
  function init5() {
    if (document.getElementById('map4')) {
    var myMap = new ymaps.Map("map4", {
      center: [53.007534, 36.155386],
      controls: ['zoomControl'],
      zoom: 15
    }, {
      yandexMapDisablePoiInteractivity: true,
    });

  //Менеджер поведений карты https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/map.behavior.Manager.html
    myMap.behaviors.disable('scrollZoom');
    // Функция, которая по состоянию чекбоксов в меню
    // показывает или скрывает геообъекты из выборки.
    function checkState() {
      var shownObjects,
        byColor = new ymaps.GeoQueryResult(),
        byShape = new ymaps.GeoQueryResult();

      // Отберем объекты по цвету.
      if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      
      if ($("#stay").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Polygon"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg"'))
          .add(byColor);
      }
      
      if ($("#hospitals").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg"'))
          .add(byColor);
      }
      
       if ($("#market").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg"'))
          .add(byColor);
      }
      
       if ($("#cinema").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg"'))
          .add(byColor);
      }
      
       if ($("#park").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg"'))
          .add(byColor);
      }
      
       if ($("#pharmacy").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg"'))
          .add(byColor);
      }
      

      if ($("#school").prop("checked")) {
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg"'))
          // После того, как мы нашли все зеленые объекты, добавим к ним
          // объекты, найденные на предыдущей итерации.
          .add(byColor);
      }

      if ($("#polygon").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Point"')
          .add(myObjects.search('options.iconImageHref = "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg"'))
          .add(byColor);
      }

      if ($("#circle").prop("checked")) {
        // Будем искать по двум параметрам:
        // - для точечных объектов по полю preset;
        // - для контурных объектов по цвету заливки.
        byColor = myObjects
          .search('options.geometry = "Circle"')
          .add(myObjects.search('options.fillColor = "#EC7300"'))
          .add(byColor);
      }
      
      // Отберем объекты по форме.
      // Отберем объекты по форме.
      /*if ($('#all').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Point"');
    }*/
      byShape = myObjects.search('geometry.type = "Point"');

    if ($('#polygon').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Polygon"').add(byShape);
    }
    if ($('#circle').prop('checked')) {
        byShape = myObjects.search('geometry.type = "Circle"').add(byShape);
    }

      // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
      // которые совмещают нужные признаки.
      shownObjects = byColor.intersect(byShape).addToMap(myMap);
      
      // Объекты, которые не попали в выборку, нужно убрать с карты.
      myObjects.remove(shownObjects).removeFromMap(myMap);
    }


    $("#market").click(checkState);
    $("#stay").click(checkState);
    $("#cinema").click(checkState);
    $("#park").click(checkState);
    $("#hospitals").click(checkState);
   
    $("#pharmacy").click(checkState);
    $("#school").click(checkState);
    $("#yellow").click(checkState);
    //$("#all").click(checkState);
    $("#polygon").click(checkState);
    

    // Создадим объекты из их JSON-описания и добавим их на карту.
    window.myObjects = ymaps
      .geoQuery({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.007744, 36.154831],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: 'M24-28.3c-.2-13.3-7.9-18.5-8.3-18.7l-1.2-.8-1.2.8c-2 1.4-4.1 2-6.1 2-3.4 0-5.8-1.9-5.9-1.9l-1.3-1.1-1.3 1.1c-.1.1-2.5 1.9-5.9 1.9-2.1 0-4.1-.7-6.1-2l-1.2-.8-1.2.8c-.8.6-8 5.9-8.2 18.7-.2 1.1 2.9 22.2 23.9 28.3 22.9-6.7 24.1-26.9 24-28.3z',
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.009374, 36.171891],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/school.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.007325, 36.153452],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/park.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.009496, 36.151981],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.008185, 36.149553],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/stay.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
           {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.008570, 36.155413],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.007963, 36.151090],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/market.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.016261, 36.158966],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/cinema.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.018186, 36.135844],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/hospitals.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          
          
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.009860, 36.147484],
            },
            options: {
              iconLayout: "default#image",
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/pharmacy.svg",
              iconImageSize: [40, 51],
              iconImageOffset: [-5, -38],
              
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [53.007744, 36.154831],
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: "https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg",
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38]
            },
          },
          {
            type: 'Feature',
            geometry: {
                type: 'Circle',
                coordinates: [53.007534, 36.155386],
                radius: 400
            },
            options: {
                fillColor: "#EC7300",
                fillOpacity: 0.1,
                strokeColor: "#EC7300"
            }
        }
          
          
        ],
      })
      .addToMap(myMap);

    }
  }

  // ----------------------------------------------

  function init2() {
    if (document.getElementById('cottageMap')) {
    var myMap = new ymaps.Map("cottageMap", {
      center: [54.061699, 36.510406],
      zoom: 13,
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
      hintContent: "Собственный значок метки",
      balloonContent: `<p style="font-weight: 600;font-size: 14px;">Поселок «Рябцево»</p>
          <p class="geo" style="margin-bottom: 10px; font-size: 14px;"><svg style="margin-right: 5px" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.98308 0.333305C5.27982 0.31736 4.58063 0.444413 3.92773 0.706794C3.27484 0.969174 2.68178 1.36144 2.18437 1.8599C1.68696 2.35836 1.29553 2.95267 1.0337 3.60695C0.771874 4.26122 0.645088 4.96189 0.661 5.66664C0.661 9.44997 5.56729 13.4266 5.77685 13.5933C5.83517 13.6407 5.90798 13.6666 5.98308 13.6666C6.05818 13.6666 6.131 13.6407 6.18931 13.5933C6.39887 13.4266 11.3052 9.44997 11.3052 5.66664C11.3211 4.96189 11.1943 4.26122 10.9325 3.60695C10.6706 2.95267 10.2792 2.35836 9.78179 1.8599C9.28438 1.36144 8.69133 0.969174 8.03843 0.706794C7.38553 0.444413 6.68634 0.31736 5.98308 0.333305ZM3.48836 5.15664C3.48836 4.66219 3.63467 4.17884 3.90879 3.76771C4.18292 3.35659 4.57254 3.03616 5.02839 2.84694C5.48424 2.65772 5.98585 2.60821 6.46978 2.70468C6.95371 2.80114 7.39823 3.03924 7.74712 3.38887C8.09601 3.7385 8.33361 4.18396 8.42987 4.66891C8.52613 5.15387 8.47673 5.65653 8.28791 6.11335C8.09909 6.57016 7.77933 6.96061 7.36908 7.23531C6.95882 7.51002 6.47649 7.65664 5.98308 7.65664C5.32171 7.65576 4.68768 7.39208 4.22002 6.92343C3.75235 6.45478 3.48924 5.81941 3.48836 5.15664Z" fill="#EC7300"/>
              </svg>деревня Большая Рябцева</p>
          <p style="margin-bottom: 14px;font-size: 14px;" class="grey">В продаже <span style="color:#EC7300">20 участков</span></p>
          <a href="" class="more" style="color:#EC7300; font-size: 14px; text-decoration:underline">Подробнее</a>`,
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable("scrollZoom");

    }
  }



  // // CONTACT
  // CONTACT

  ymaps.ready(function () {
    if (document.getElementById('contactMap')) {
      var myMap = new ymaps.Map('contactMap', {
              center: [52.968322, 36.086494],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter([52.968131, 36.086229]), {
              hintContent: 'Орёл, улица Пушкина, 54',
              balloonContent: 'Орёл, улица Пушкина, 54'
          }, {
              iconLayout: 'default#image',
              iconImageHref: 'https://omega.dorohovdesign.ru/wp-content/themes/sts-group/img/icon/logoContact.svg',
              iconImageSize: [30, 42],
              iconImageOffset: [-5, -38]
          })

      myMap.geoObjects
          .add(myPlacemark)
    }
  });



  ymaps.ready(function () {
    if (document.getElementById('map-google')) {
      var myMap = new ymaps.Map('map-google', {
              center: [52.952442, 36.065074],
              zoom: 17,
              controls: []
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          )

      myMap.geoObjects
          .add(new ymaps.Placemark([52.95209, 36.065025], {
              balloonContent: 'ЦНК'
          }, {
              preset: 'islands#icon',
              iconColor: '#0095b6'
          }))
    }
  });









  ymaps.ready(init);
  ymaps.ready(init2);
  ymaps.ready(init3);
  ymaps.ready(init4);
  ymaps.ready(init5);
  ymaps.ready(init6);



