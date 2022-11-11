class Carousel {
	constructor() {
		this.carousel = document.querySelector('.carousel');
		this.slides = this.carousel.querySelectorAll('.carousel__slide');
		this.prevSlideBtn = this.carousel.querySelector('#prev-button');
		this.nextSlideBtn = this.carousel.querySelector('#next-button');
		this.currentSlideIdx = 0;

		this.init = this.init.bind(this);
		this.showNextSlide = this.showNextSlide.bind(this);
		this.showPreviousSlide = this.showPreviousSlide.bind(this);
		this.increaseCurrentSlideIndex = this.increaseCurrentSlideIndex.bind(this);
		this.decreaseCurrentSlideIndex = this.decreaseCurrentSlideIndex.bind(this);
	}

	init() {
		this.slides[this.currentSlideIdx].classList.add('active');
		this.prevSlideBtn.addEventListener('click', this.showPreviousSlide);
		this.nextSlideBtn.addEventListener('click', this.showNextSlide);
	}

	showNextSlide() {
		this.slides[this.currentSlideIdx].classList.remove('active');
		this.increaseCurrentSlideIndex();
		this.slides[this.currentSlideIdx].classList.add('active');
	}

	showPreviousSlide() {
		this.slides[this.currentSlideIdx].classList.remove('active');
		this.decreaseCurrentSlideIndex();
		this.slides[this.currentSlideIdx].classList.add('active');
	}

	increaseCurrentSlideIndex() {
		this.currentSlideIdx = (this.currentSlideIdx + 1) % this.slides.length;
	}

	decreaseCurrentSlideIndex() {
		this.currentSlideIdx = (this.slides.length + this.currentSlideIdx - 1) % this.slides.length;
	}
}

const carousel = new Carousel();
carousel.init();
