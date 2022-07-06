(function() {
	function dropDownInit() {
		const dropdownItem = document.querySelectorAll('.header-dropdown__title');
		const dropdownMenu = document.querySelectorAll('.header-dropdown__menu');
		const dropdownBtn = document.querySelectorAll('.header-dropdown__btn');
		const dropdownArrow = document.querySelectorAll('.header-dropdown__arrow');
		let prevDropPath;

		dropdownItem.forEach(el => {
			el.addEventListener('click', e => {
				const path = e.currentTarget.dataset.dropdown;
				
				dropdownArrow.forEach(el => {
					el.classList.remove('header-dropdown__arrow--active');
				});
				dropdownMenu.forEach(el => {
					el.classList.remove('header-dropdown__menu--active');
				});

				document.querySelector(`[data-arrow=${path}]`).classList.add('header-dropdown__arrow--active');
				document.querySelector(`[data-target-dropdown=${path}]`).classList.add('header-dropdown__menu--active');
				
				if (prevDropPath === path) {
					document.querySelector(`[data-arrow=${path}]`).classList.remove('header-dropdown__arrow--active');
					document.querySelector(`[data-target-dropdown=${path}]`).classList.remove('header-dropdown__menu--active');
				}

				if (!prevDropPath || prevDropPath !== path) {
					prevDropPath = path
				} else {
					prevDropPath = null
				}

				dropdownBtn.forEach(btn => {
					btn.addEventListener('click', () => {
						document.querySelector(`[data-arrow=${path}]`).classList.remove('header-dropdown__arrow--active');
						document.querySelector(`[data-target-dropdown=${path}]`).classList.remove('header-dropdown__menu--active');
						prevDropPath = null;
					})
				})
			})
		})
	}

	function catalogTabs() {
		document.querySelectorAll(".catalog-body__btn").forEach(tabsBtn => {
      tabsBtn.addEventListener("click", (e) => {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll(".catalog-info").forEach(tabsBtn => {
          tabsBtn.classList.remove("catalog-info--active");
        });

        document.querySelector(`[data-target="${path}"]`).classList.add("catalog-info--active");
      });
    });
	}

	document.addEventListener('DOMContentLoaded', () => {
		document.querySelectorAll(".header-dropdown__menu").forEach(dropdown => {
      new SimpleBar(dropdown, {
        autoHide: false,
        scrollbarMaxSize: 30,
      });
    });

		dropDownInit();

		new Swiper('.hero__swiper', {
			direction: 'horizontal',
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 9000,
			},
		});

		new Choices('.gallery__select', {
			searchEnabled: false,
			itemSelectText: '',
			allowHTML: false,
			shouldSort: false,
			position: 'bottom',
		});

		new Swiper('.gallery-swiper', {
			direction: 'horizontal',
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 50,
			enabled: true,
			pagination: {
				el: '.gallery-swiper__pagination',
				type: 'fraction',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		new Accordion('.accordion-list', {
			elementClass: 'accordion',
			triggerClass: 'accordion__control',
			panelClass: 'accordion__content',
			activeClass: 'accordion--active',
		});

		catalogTabs();

		new Swiper('.events-swiper', {
			direction: 'horizontal',
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 50,
			enabled: true,
			pagination: {
				el: '.events-swiper__pagination',
				type: 'bullets',
			},
			navigation: {
				nextEl: '.events-swiper-button__next',
				prevEl: '.events-swiper-button__prev',
			},
		});
	})
})();