window.onload = function () {
	let count = 0;
	let width;
	const swiper = document.querySelector(".swiper");
	const sliderTrack = document.querySelector(".swiper-wrapper");
	const sliderSlide = document.querySelectorAll(".courses__slide");
	const slidePrev = document.querySelector(".swiper-button-prev");
	const slideNext = document.querySelector(".swiper-button-next");

	function init() {
		width = swiper.offsetWidth;
		sliderTrack.style.width = width * sliderSlide.length + "px";
		sliderSlide.forEach((item) => {
			item.style.width = width + "px";
			item.style.height = "auto";
		});
		rollSlider();
	}
	window.addEventListener("resize", init);
	init();

	slideNext.addEventListener("click", () => {
		count++;

		if (count >= sliderSlide.length) {
			count = 0;
		}
		rollSlider();
	});

	slidePrev.addEventListener("click", () => {
		count--;

		if (count < 0) {
			count = sliderSlide.length - 1;
		}
		rollSlider();
	});

	function rollSlider() {
		sliderTrack.style.transform = "translate(-" + count * width + "px";
	}

	const headerBurger = document.querySelector(".header__burger");
	const menuBurger = document.querySelector(".menu");
	const iconClose = document.querySelector(".icon-menu");
	const menuLink = document.querySelectorAll(".menu__link");

	function closeMenu() {
		menuBurger.style.right = "-100%";
	}

	headerBurger.addEventListener("click", () => {
		menuBurger.style.right = "0px";
	});

	iconClose.addEventListener("click", closeMenu);

	menuLink.forEach((el) => {
		el.addEventListener("click", closeMenu);
	});
};
