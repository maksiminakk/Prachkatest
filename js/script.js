//стартовые шаблоны:

// проверка на touch screen or pc:

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
};



//авто скролл к секциям:
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach (menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick)
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
//             if(iconMenu.classList.contains('menu__icon-active', 'menu__body-active')) {
//                 document.body.classList.remove('_lock');
//                 iconMenu.classList.remove('menu__icon-active');
//                 menuBody.classList.remove('menu__body-active');
//             };
//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth",
//             });
//             e.preventDefault();
//         }
//     }
// }

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

// меню бургер:
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
const closeIconMenu = document.querySelector('.menu__close-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('menu__icon-active');
        menuBody.classList.toggle('menu__body-active')
    });
}

if (closeIconMenu) {
    const menuBody = document.querySelector('.menu__body');
    closeIconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('menu__icon-active');
        menuBody.classList.toggle('menu__body-active');
    });
}

let menuArrows = document.querySelectorAll('.point');
if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
            menuArrow.classList.toggle('point_active');
        });
    }
};

new Swiper('.slider', {
    pagination: {

        el: '.swiper-pagination',

        type: 'bullets',
    },
    //включение / отключение
    //перетаскивания на пк:
    sumulateTouch: true, //or false
    // чувствительность свайпа:
    touchRatio: 1,
    //угол срабатывания свайпа/перетаскивания:
    touchAngel: 45,
    //Курсор перетаскивания:
    grabCursor: true, //or false
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
    //авто высота:
    autoHeight: false,
    //кол-во слайдов для показа:

    slidesPerView: 1, //можно указать auto, для корректной работы в css указать для слайдов width: auto;, ,будет подстравиваться под контент слайдов.
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
    // initialSlide: 2,//,1,2 и тп,
    //мультирядность:
    slidesPerColumn: 1, // - для коректной работы не юзать авто высоту.
    //бесконечный слайдер:
    loop: true, // or false - не работает с мультирядностью
    //кол-во дублирующих слайдов:
    loopedSlides: 0, // работает с loop
    //свободный режим - крутая тема (слайдер будет останавливаться в свободном месте)
    freeMode: false,
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
    speed: 200,
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

// SPOLLERS: ========================================================================

// const spollersArray = document.querySelectorAll('[data-spollers]');
// if (spollersArray.length > 0) {
//     //получение обычных спойлеров
//     const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//         return !item.dataset.spollers.split(",")[0];
//     });
//     //инициализация спойлера
//     if (spollersRegular.length > 0) {
//         initSpollers(spollersRegular);
//     }
//     //получение спойлеров с медиа запросами
//     const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
//         return item.dataset.spollers.split(",")[0];
//     });

//     // инициализация спойлеров с медиа запросами
//     if (spollersMedia.length > 0) {
//         const breakpointsArray = [];
//         spollersMedia.forEach(item => {
//             const params = item.dataset.spollers;
//             const breakpoint = {};
//             const paramsArray = params.split(",");
//             breakpoint.value = paramsArray[0];
//             breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
//             breakpoint.item = item;
//             breakpointsArray.push(breakpoint);
//         });

//         //получение уникальных брейкпоинтов
//         let mediaQueries = breakpointsArray.map(function (item) {
//             return '(' + item.type + "-width:" + item.value + "px)," + item.value + ',' + item.type;
//         });
//         mediaQueries = mediaQueries.filter(function (item, index, self) {
//             return self.indexOf(item) === index;
//         });

//         //работа с каждым брейкпоинтом
//         mediaQueries.forEach(breakpoint => {
//             const paramsArray = breakpoint.split(",");
//             const mediaBreakpoint = paramsArray[1];
//             const mediaType = paramsArray[2];
//             const matchMedia = window.matchMedia(paramsArray[0]);

//             //обьекты с нужными значениями
//             const spollersArray = breakpointsArray.filter(function (item) {
//                 if (item.value === mediaBreakpoint && item.type === mediaType) {
//                     return true;
//                 }
//             });
//             //событие
//             matchMedia.addListener(function () {
//                 initSpollers(spollersArray, matchMedia);
//             });
//             initSpollers(spollersArray, matchMedia);
//         });
//     }
//     //инициализация
//     function initSpollers(spollersArray, matchMedia = false) {
//         spollersArray.forEach(spollersBlock => {
//             spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
//             if (matchMedia.matches || !matchMedia) {
//                 spollersBlock.classList.add('_init');
//                 initSpollerBody(spollersBlock);
//                 spollersBlock.addEventListener("click", setSpollerAction);
//             } else {
//                 spollersBlock.classList.remove('_init');
//                 initSpollerBody(spollersBlock, false);
//                 spollersBlock.removeEventListener("click", setSpollerAction);
//             }
//         });
//     }

//     function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//         const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
//         if (spollerTitles.length > 0) {
//             spollerTitles.forEach(spollerTitle => {
//                 if (hideSpollerBody) {
//                     spollerTitle.removeAttribute('tabindex');
//                     if (!spollerTitle.classList.contains('_active')) {
//                         spollerTitle.nextElementSibling.hidden = true;
//                     }
//                 } else {
//                     spollerTitle.setAttribute('tabindex', '-1');
//                     spollerTitle.nextElementSibling.hidden = false;
//                 }
//             });
//         }
//     }

//     function setSpollerAction(e) {
//         const el = e.target;
//         if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//             const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//             const spollersBlock = spollerTitle.closest('[data-spollers]');
//             const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
//             if (!spollersBlock.querySelectorAll('._slide').length) {
//                 if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//                     hideSpollersBody(spollersBlock);
//                 }
//                 spollerTitle.classList.toggle('_active');
//                 _slideToggle(spollerTitle.nextElementSibling, 500);
//             }
//             e.preventDefault();
//         }
//     }

//     function hideSpollersBody(spollersBlock) {
//         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//         if (spollerActiveTitle) {
//             spollerActiveTitle.classList.remove('_active');
//             _slideUp(spollerActiveTitle.nextElementSibling, 500);
//         }
//     }
// }

// //================================================================================================

// //SlideToggle 
// let _slideUp = (target, duration = 300) => {
//     if (!target.classList.contains('_slide')) {
//         target.classList.add('_slide');
//         target.style.transitionProperty = 'height, margin, padding';
//         target.style.transitionDuration = duration + 'ms';
//         target.style.height = target.offsetHeight + 'px';
//         target.offsetHeight;
//         target.style.overflow = 'hidden';
//         target.style.height = 0;
//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginBottom = 0;
//         window.setTimeout(() => {
//             target.hidden = true;
//             target.style.removeProperty('height');
//             target.style.removeProperty('padding-top');
//             target.style.removeProperty('padding-bottom');
//             target.style.removeProperty('mragin-top');
//             target.style.removeProperty('margin-bottom');
//             target.style.removeProperty('overflow');
//             target.style.removeProperty('transition-duration');
//             target.style.removeProperty('transition-property');
//             target.classList.remove('_slide');
//         }, duration);
//     }
// }

// let _slideDown = (target, duration = 300) => {
//     if (!target.classList.contains('_slide')) {
//         target.classList.add('_slide');
//         if (target.hidden) {
//             target.hidden = false;
//         }
//         let height = target.offsetHeight;
//         target.style.overflow = 'hidden';
//         target.style.height = 0;
//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginBottom = 0;
//         target.offsetHeight;
//         target.style.transitionProperty = "height, margin, padding";
//         target.style.transitionDuration = duration + 'ms';
//         target.style.height = height + 'px';
//         target.style.removeProperty('padding-top');
//         target.style.removeProperty('padding-bottom');
//         target.style.removeProperty('margin-top');
//         target.style.removeProperty('margin-bottom');
//         window.setTimeout(() => {
//             target.style.removeProperty('height');
//             target.style.removeProperty('overflow');
//             target.style.removeProperty('transition-duration');
//             target.style.removeProperty('transition-property');
//             target.classList.remove('_slide');
//         }, duration);
//     }
// }

// let _slideToggle = (target, duration = 300) => {
//     if (target.hidden) {
//         return _slideDown(target, duration);
//     } else {
//         return _slideUp(target, duration);
//     }
// };

//===================================================================================
//POPUP'S:

// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 500;

// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(curentPopup) {
//     if (curentPopup && unlock) {
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener("click", function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }

// function popupClose (popupActive, doUnlock = true) {
//     if(unlock) {
//         popupActive.classList.remove('open');
//         if(doUnlock) {
//             bodyUnLock();
//         }
//     }
// }
// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = lockPaddingValue;
//         }
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('_lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnLock() {
//     setTimeout(function() {
//         if (lockPadding.length > 0) {
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('_lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// document.addEventListener('keydown', function (e) {
//     if(e.which === 27) {
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// });