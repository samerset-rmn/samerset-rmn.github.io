// Слайдер

$(document).ready(function(){

      $('.feedback__slider').slick({
      	slidesToShow: 1,
  		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
      });

});

// Модальное окно

// Открытие по ссылке
$(".js-button").click(function() {
	$(".js-popup").fadeIn();
});

// Закрытие на крестик
$(".js-popup__close-button").click(function() {
	$(".js-popup").fadeOut();
});

// Закрытие по клику вне окна
$(document).mouseup(function (e) {
	var modal = $(".js-popup__container");
	if (e.target!=modal[0]&&modal.has(e.target).length === 0) {
		$(".popup").fadeOut();
	}
});


