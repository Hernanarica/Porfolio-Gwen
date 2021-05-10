const $menuBtn  = document.querySelector('.header__button');
const $iconMenu = document.querySelector('.header__button img');
const $menu     = document.querySelector('.header__menu');
const $links    = document.querySelectorAll('.header__link');

$links.forEach($link => {
	$link.addEventListener('click', () => {
		if (!$menuBtn.classList.toggle('close')) {
			changeStatusMenu('src/assets/icons/icon__menu-open.svg', 'flex', 'translateX(0)', true, 50);
		} else {
			changeStatusMenu('src/assets/icons/icon__menu-close.svg', 'none', 'translateX(-100%)', false, 350);
		}
	});
});

$menuBtn.addEventListener('click', e => {
	if (!e.target.classList.toggle('close')) {
		changeStatusMenu('src/assets/icons/icon__menu-open.svg', 'flex', 'translateX(0)', true, 50);
	} else {
		changeStatusMenu('src/assets/icons/icon__menu-close.svg', 'none', 'translateX(-100%)', false, 350);
	}
});

/**
 * función que aplica la animación
 *
 * @param {string} path
 * @param {string} display
 * @param {string} fx
 * @param {boolean} timeStatus
 * @param {number} time
 */
function changeStatusMenu(path, display, fx, timeStatus, time) {
	$iconMenu.src = path;

	if (timeStatus) {
		$menu.style.display = display;
		setTimeout(() => {
			$menu.style.transform = fx;
		}, time);
	} else {
		$menu.style.transform = fx;
		setTimeout(() => {
			$menu.style.display = display;
		}, time);
	}
}