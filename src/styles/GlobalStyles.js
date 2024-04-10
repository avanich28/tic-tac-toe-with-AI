import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
	&, &.light-mode {
		--color-light: #fefbf6;
		--color-dark: #4a403a;
		--color-white: #fff8d9;
		--color-red: #bb371a;
		--color-yellow: #eba83a;
		--color-green: #d5dbb3;
		--color-purple: #bb8493;
	}

	&.dark-mode {
		--color-light: #2d2424;
		--color-dark: #E79E4F;
		--color-white: #a05344;
		--color-red: #bb371a;
		--color-yellow: #519872;
		--color-green: #734046;
		--color-purple: #bb8493;
	}

}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: "Darumadrop One", sans-serif;
  color: var(--color-dark);
  background-color: var(--color-light);
	letter-spacing: 0.5px;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@keyframes expand {
	0% {transform: scale(0); opacity: 0;}
	100% {transform: scale(1); opacity: 1;}
}

@keyframes unhide {
	0% {opacity: 0}
	100% {opacity: 1}
}

@keyframes moveDown {
	0% {
		opacity: 0;
		transform: translateY(-5px);
	}
	100%{
		opacity: 1;
		transform: translateY(0);
	}
}


`;

export default GlobalStyles;
