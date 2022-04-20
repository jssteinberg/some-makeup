---
set: ["typography", "code"]
---

# makeup-style in-depth

*At the time of writing this, normalize.css has not been updated since 2018 and CSS Remedy not since April 2021.*

Coding CSS a decade ago, a CSS-reset was normally used, and an utter annoyance. Especially for those new to web development. (CSS-resets resets all/most styles for all/most elements). Then [normalize.css][nc] became popular, thank god, and elements would more or less keep their intended default styles, just be somewhat styled to be more similar across browsers. Visually HTML elements made semantic sense again.

An HTML element's default style does actually show the semantic meaning of that element. Yes that style is simple by default, but a link displays as a link, a list displays as a list, and so on. And I would think most agrees on that being a good thing, so many that there are quite a lot of projects in same spirit as normalize.css: [modern-normalize][mn], [CSS Remedy][cr], [sanitize.css][sc], and others.

[amcr]: https://piccalil.li/blog/a-modern-css-reset/
[cc]: https://cube.fyi/
[cr]: https://github.com/jensimmons/cssremedy
[mn]: https://github.com/sindresorhus/modern-normalize
[ms]: https://some.makeup/style
[nc]: https://github.com/necolas/normalize.css/
[op]: https://open-props.style/
[sc]: https://github.com/csstools/sanitize.css
