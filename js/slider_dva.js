const slidess = document.querySelectorAll('.slide_dva'); // все картинки в слайдере
const thumbs = document.querySelectorAll('.thumbnail'); // все миниатюры под слайдером
const prev = document.querySelector('.prevSlide'); // кнопка "назад"
const nexts = document.querySelector('.nextSlide'); // кнопка "вперёд"

let index = 1; // индекс активной картинки (которую видно)

// листание слайдов кнопками "назад"/"вперёд"
function moveSlides(n) {
	showSlides(index += n);
}

// листание/показ миниатюр
function currentSlide(n) {
	showSlides(index = n);
}

function showSlides(n) {
	if (n > slidess.length) { // если показана последняя картинка, при клике на кнопку "назад"
		index = 1; // следующая картинка - первая из списка
	}

	if (n < 1) { // если показана первая картинка, при клике на кнопку "вперёд"
		index = slidess.length; // следующая картинка - последняя из списка
	}

	// слайды
	for (let i = 0; i < slidess.length; i++) {
		slidess[i].style.display = 'none'; // спрятать предыдущую картинку
		slidess[index - 1].style.display = 'block'; // показать активную картинку
	}

	// миниатюры
	for (let i = 0; i < thumbs.length; i++) {
		thumbs[i].style.opacity = '0.1'; // спрятать предыдущую миниатюру
		thumbs[index - 1].style.opacity = '1'; // показать следующую миниатюру
	}
}