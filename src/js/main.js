const navMobile = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allNavLinks = document.querySelectorAll('.nav-animation');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer-year')


// const panelOptionOne = document.querySelector('.panel__option-one')
// const newsBtn = document.querySelector('.news__option-btn')

const showMobileMenu = () => {
	navMobile.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color')

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

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if(section.classList.contains('white-section') && section.offsetTop <= currentSection) {
			navBtnBars.classList.add('black-bars-color')
		} else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
};

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
};

// const showNewsPanel = () => {
//     panelOptionOne.style.display = 'flex'
// }

burgerBtn.addEventListener('click', showMobileMenu);
// newsBtn.addEventListener('click', showNewsPanel);
handleCurrentYear();
window.addEventListener('scroll', handleObserver);


document.addEventListener('DOMContentLoaded', function(){
    const navDesktop = document.querySelector('.nav-desktop')
    const navLinks = document.querySelectorAll('.nav__link-desktop')
    // const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            navDesktop.classList.add('shadow-bg')
        } else {
            navDesktop.classList.remove('shadow-bg')
        }
    }

      window.addEventListener('scroll', addShadow)


});