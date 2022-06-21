new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //пагинация, кнопки для перехода на слайд
    pagination: {

        //класс пагинации:

        el: '.swiper-pagination',

        //тип по умолчанию:

        // type: 'bullets',

        //тип фракция

        type: 'fraction',

        //тип прогрессбар:

        // type: 'progressbar',

        //можно ли кликать по элементам пагинации:

        // clickable: true,

        //динамичные буллеты:

        // dynamicBullets: true,

        //кастомные буллеты, в шаблоне выводятся цифры слайдов:

        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // }

        //кастомный вывод фракций:

        renderFraction: function(currentClass, totalClass) {
            return 'фото <span class="' + currentClass + '"></span>' +
                ' из ' + 
                '<span class="' + totalClass + '"></span>';
        } 
    },
    scrollBar: {
        //класс скролл бара:
        el: '.swiper-scrollbar',
        //возможность перетаскивать скролл:
        draggable: true,
    },
    //включение / отключение
    //перетаскивания на пк:
    sumulateTouch: false, //or false
    // чувствительность свайпа:
    touchRatio: 1,
    //угол срабатывания свайпа/перетаскивания:
    touchAngel: 45,
    //Курсор перетаскивания:
    grabCursor: false, //or false
    //переключение при клике на слайд:
    slideToClickedSlide: false, //or false
    //навигация по хешу, у каждого слайда будет свой адрес:
    hashNavigation: {
        //отслеживать состояние
        watchState: false, // or false
    },
    //управление клавой:
    keyboard: {
        //вкл / выкл:
        enabled: true,
        //вкл / выкл, только когда слайдер
        //в пределах вьюпорта
        onlyInViewport: true,
        //вкл / выкл, управление клавишами
        // pageUp, pageDown:
        pageUpDown: true,
    },
    //управление колесом мыши:
    mousewheel: {
        //чувствительность колеа мыши:
        sensitivity: 1,
        //класс обьекта на котором
        //будет срабатывать прокрутка мышью
        eventsTarget: ".image-slider",
    },
    //авто высота:
    autoHeight: true,
    //кол-во слайдов для показа:

    slidesPerView: 3, //можно указать auto, для корректной работы в css указать для слайдов width: auto;, ,будет подстравиваться под контент слайдов.

    //отключение функционала 
    //если слайдов меньше чем нужно
    watchoverflow: false,
    //отступы между слайдами:
    spaceBetween: 30,
    //кол-во пролистываемых слайдов:
    slidesPerGroup: 1,
    //активный слайд по центру:
    centeredSlides: false,
    //стартовый слайд:
    initialSlide: 0,//,1,2 и тп,
    //мультирядность:
    slidesPerColumn: 1, // - для коректной работы не юзать авто высоту.
    //бесконечный слайдер:
    loop: false, // or false - не работает с мультирядностью
    //кол-во дублирующих слайдов:
    loopedSlides: 0, // работает с loop
    //свободный режим - крутая тема (слайдер будет останавливаться в свободном месте)
    freeMode: true,
    //авто прокрутка :
    autoplay: {
        //пауза между прокруткой
        delay: 2000,
        //закончить на последнем слайде
        stopOnLastSlide: true,
        //отключить после ручного переключения
        disableOnInteraction: false,
    },
    //скорость переключения слайдов:
    speed: 300,
    //вертикальный сладер
     //для корректной работы нужно установить высоту всего слайдера
    // direction: 'vertical',
    direction: 'horizontal',
    //Эффекты переключения слайдов
    //листание
    effect: 'slide',

    //Эффекты переключения слайдов
    //смена прозрачности
    // effect: 'fade',

    //дополнение к fade:
    // fadeEffect: {
    //     //параллельная смена прозрачности:
    //     crossFade: true
    // },

    //Эффекты переключения слайдов
    //переворот
    // effect: 'flip',

    //дополнение к flip
    // flipEffect: {
    //     //тень
    //     slideShadows: true,
    //     //показ только активного слайда:
    //     limitRotation: true,
    // }

    //Эффекты переключения слайдов
    //куб
    // effect: 'cube',

    // //дополнение к cube
    // cudeEffects: {
    //     ///настройка тени
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    //     //для использования в css стоит ограничить ширину слайдера
    // },

    //Эффекты переключения слайдов
    //эффект потока
    // effect: 'coverflow',

    //дополнение к coverflow:
    // coverflowEffect: {
    //     //угол
    //     rotate: 20,
    //     //наложение
    //     strecth: 50,
    //     //тень
    //     slideShadows: true,
    // }

    //АДАПТИВ СЛАЙДЕРА:

    //брейк поинты (адаптив)
    //ширина экрана
    breakpoints: {
        320: {
            //slidesPerView: 1,
        },
        480: {
            //slidesPerView: 2,
        },
        992: {
            //slidesPerView: 3,
        }
    },

    //LAZY LOADING:
    //для картинок в html добавить 1x1 пиксельное изображение в атрибут src,
    //а в атрибут data-src="путь к картинке" и добавить картинке класс swiper-lazy
    //также после картинки добавить div с классом swiper-lazy-preloader - который вывидет анимационную иконку подгрузки

    //отключить предзагрузку картинок
    preloadImages: false,
    // настройки подгрузки картинок:
    lazy: {
        //подгружать на старте
        //перекл слайда
        loadOntransitionStart: false,
        //подгрузить предидущую и слдеующую картинку
        loadPrevNext: false,
    },
    //слежка за видимыми слайдами
    watchSlidesProgress: true,
    //добавление класса видимым слайдам
    watchSlidesVisibility: true,  
    //возможность увеличивания картинок: для этого в html оболочке картинки добавить класс (swiper-zoom-container)

    //зум картнки при двойном клике:
    zoom: {
        //макс увел:
        maxRatio: 1,
        //мин увел
        minRatio: 1,
    },

    //превью, миниатюры для главного слайдера - для этого в html нужно создать еще один слайдер с тем же кол-вом слайдов и настроить стили для него:
    // thumbs: {
    //     //настройки миниатюрного слайдера:
    //     swiper: {
    //         el: '.image-mini-slider',
    //         slidesPerView: 5,
    //     }
    // }

    //исправление багов слайдера:

    //обновление слайдера при его изменении:
    observer: true,

    //обновить при изменении родительских элементов слайдера:
    observeParents: true,

    //обновить при изменении дочерних эл-тов слайда:
    observeSlideChildren: true,

    //паралакс эффект:
    //parallax: true,
});

//создание слайдера в слайдере для этого создать новый слайдер с настройками и добавить параметр nested: true, например:

// new Swiper(.'image-in-slider', {
//     grabCursor: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     //корректная работа для дочернего слайдера:
//     nested: true,
// })

//два одинаковых слайдера, но с каким то разделяюшим обьектом. Для этого слайдерам присваивается переменные например:

// let meTextSlider = new Swiper(.'text-slider', {
//     grabCursor: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     //корректная работа для дочернего слайдера:
//     nested: true,
// })

// let meImageSlider = new Swiper(.'image-slider', {
//     grabCursor: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     //корректная работа для дочернего слайдера:
//     nested: true,
// })

            // присвоение управления двум слайдерам с помощью одного ----------------->
// meImageSlider.controller.control = myTextSlider;
// myTextSlider.controller.control = meImageSlider;




