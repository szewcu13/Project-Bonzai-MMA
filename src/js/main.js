const navMobile = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allNavLinks = document.querySelectorAll('.nav-animation');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer-year');

// const gallery = document.querySelectorAll('.gallery .gallery-box');
// const previewBox = document.querySelector('.preview-box');
// const previewImg = previewBox.querySelector('img');
// const closeBtn = document.querySelector('.icon');
// const currentImg = previewBox.querySelector('.current-img')
// const totalImg = previewBox.querySelector('.total-img')
// const galleryShadow = document.querySelector('.gallery-shadow')

// const panelOptionOne = document.querySelector('.panel__option-one')
// const newsBtn = document.querySelector('.news__option-btn')

// MOBILE NAV

const showMobileMenu = () => {
	navMobile.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	allNavLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav--active');
		});
	});

	handleNavLinksAnimation();
};

const handleNavLinksAnimation = () => {
	let delayTime = 0;

	allNavLinks.forEach((link) => {
		link.classList.toggle('nav-links-animation');
		link.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

// NAVBAR COLOR

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

// FOOTER YEAR

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

// const showNewsPanel = () => {
//     panelOptionOne.style.display = 'flex'
// }

// NAV DESKTOP STICK TO TOP

document.addEventListener('DOMContentLoaded', function () {
	const navDesktop = document.querySelector('.nav-desktop');
	const navLinks = document.querySelectorAll('.nav__link-desktop');
	// const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			navDesktop.classList.add('shadow-bg');
		} else {
			navDesktop.classList.remove('shadow-bg');
		}
	}

	window.addEventListener('scroll', addShadow);
});

// GALLERY

// window.onload = () => {
// 	for (let i = 0; i < gallery.length; i++) {
// 		totalImg.textContent = gallery.length;
// 		let newIndex = i;
// 		let clickImgIndex;
// 		gallery[i].onclick = () => {
// 			clickImgIndex = newIndex;
// 			function preview() {
// 				currentImg.textContent = newIndex + 1;
// 				let selectedImgUrl = gallery[newIndex].querySelector('img').src;
// 				previewImg.src = selectedImgUrl;
// 			}

// 			const prevBtn = document.querySelector('.prev')
// 			const nextBtn = document.querySelector('.next')
// 			if(newIndex == 0) {
// 				prevBtn.style.display = 'none';
// 			}

// 			if(newIndex >= gallery.length - 1) {
// 				nextBtn.style.display = 'none'
// 			}

// 			prevBtn.onclick = () => {
// 				newIndex--;
// 				if(newIndex == 0) {
// 					preview();
// 					prevBtn.style.display = 'none'
// 				} else {
// 					preview();
// 					nextBtn.style.display = 'block'
// 				}
// 			}
// 			nextBtn.onclick = () => {
// 				newIndex++;
// 				if(newIndex >= gallery.length - 1) {
// 					preview()
// 					nextBtn.style.display = 'none'
// 				} else {
// 					preview();
// 					prevBtn.style.display = 'block'
// 				}
// 			}



// 			preview();
// 			previewBox.classList.add('show');
// 			galleryShadow.style.display = 'block';

// 			closeBtn.onclick = () => {
// 				newIndex = clickImgIndex;
// 				prevBtn.style.display = 'block'
// 				nextBtn.style.display = 'block'
// 				previewBox.classList.remove('show');
// 				galleryShadow.style.display = 'none';
// 			};
// 		};
// 	}
// };

burgerBtn.addEventListener('click', showMobileMenu);
// newsBtn.addEventListener('click', showNewsPanel);
handleCurrentYear();
window.addEventListener('scroll', handleObserver);
