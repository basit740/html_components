const modal = document.querySelector('.modal');
const modalOuter = document.querySelector('.outer_modal');

const btnOpen = document.querySelector('.btn_open');
const btnClose = document.querySelector('.btn_close');

btnOpen.addEventListener('click', (event) => {
	modal.style.display = 'block';
});

modal.addEventListener('click', (e) => {
	modal.style.display = 'none';
});

modalOuter.addEventListener('click', (e) => {
	e.stopPropagation();
});
btnClose.addEventListener('click', (e) => {
	modal.style.display = 'none';
});
