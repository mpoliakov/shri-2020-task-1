# Задание 1. Реализуйте дизайн-систему

Реализация БЭМ-компонентов находится в папке [src/blocks](src/blocks). Файловая структура плоская: отдельный файл стилей для блока, элемента и модификатора (значения модификатора внутри файла).

Используется препроцессор - `SCSS`. Сборка проекта автоматизирована с посощью `Gulp` ([gulpfile.js](gulpfile.js)). Для проверки стилей и сохранения единообразия используется `Stylelint` ([.stylelintrc](.stylelintrc)).

С помощью import блоки собираются в бандл (базовые блоки - [base.scss](src/blocks/base/base.scss), контентные - [content.scss](src/blocks/content/content.scss), все блоки - [style.scss](src/style.scss)).

Для параметров, которые задаются темой, используются `CSS custom properties`. Для удобства они обёрнуты в scss-переменные ([variables.scss](src/blocks/variables.scss)). Свойства инициализируются в зависимости от темы с помощью mixin'ов ([mixins.scss](src/blocks/base/mixins.scss)), например, в [theme_color.scss](src/blocks/base/theme/theme_color.scss).

Скрипты для интерактивных блоков (e-accordion, onoffswitch) находятся в соответствующих папках и собираются в [script.js](src/script.js).
