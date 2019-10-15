$('.ftr-image01').contenthover({
	overlay_background: '#000',
	overlay_opacity: 0.8
});

$('.ftr-image02').contenthover({
	overlay_background: '#000',
	overlay_opacity: 0.8
});

// $('.featured-wrap').mouseover(function () {
// 	('.contents-hover').show();
// }).mouseout(function() {
// 	('.contents-hover').hide();
// });

function handleFirstTab(e) {
	if (e.keyCode === 9) {
		document.body.classList.add('user-is-tabbing');
		window.removeEventListener('keydown', handleFirstTab);
	}
}

window.addEventListener('keydown', handleFirstTab);