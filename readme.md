# Первая страница сайта ресторана

Посмотреть сайт можно тут:<br>
<https://valve01.github.io/Ancient-China-Restaurant/><br>
<br>
Исходный макет можно посмотреть тут:<br>
<https://goo.su/p0ept8><br>

## Использованные библиотеки:
- jquery
- slick-slider

## Стэк
- HTML 5
- CSS 3
- SCSS
- Vanilla JS
- БЭМ
- Gulp
- Webpack
- SVG
- Figma

## Реализовано
- полный адаптив от 320px до 1920px
- мобильное меню
- анимации кнопок
- анимации карточек
- работа перечня категорий блюд в виде слайдера
- работа счетчиков для добавления в корзину на карточках
- работа кнопки добавления товаров в корзину
- работа виджета количества товаров в корзине
- переключатель слайдеров "внутри"/"снаружи"
- слайдер для фотогалереи с миниатюрами помощью slick-slider
- слайдер для отзывов помощью slick-slider
- кнопка для карты "Построить маршрут"
- открытие в браузере PDF-документа с меню по клику на кнопку "Посмотреть всё меню"
- моментальный набор номера телефона по клику на него

### с помощью gulp:
- оптимизация изображений (gulp-imagemin)
- оптимизация шрифтов (gulp-ttf2woff2)
- оптимизация svg (gulp-svg-sprite)
- корректное отображение стилей в любых браузерах (gulp-autoprefixer)
- корректная работа javascript в любых браузерах (gulp-babel)

## Не реализованно
- вывод карточек товаров в соответствии с выбранной категорией


###### Для разработчиков
для "dev" билда:<br>
отключена корвертация шрифтов в gulp (очень долгая). Включить если нужно

собрать билд для деплоя:<br>
npx gulp docs

задеплоить на GitHub Pages:<br>
npx gulp deployGhP



