/**
 * Фільтр при кліку
 * - Зробити кнопки в якх будуть атрибути які будуть пов'язані до блоків через css class
 * 
 * - При кліку на кнопку фільтру має відбиратися активний атрибут 
 * -- Давати клас active
 *  
 */


// let filters = document.querySelectorAll('.cat_galery_filter input');
// let catItems = document.querySelectorAll('.cat_galery_item');


// var checkArr = function(el) {
// 	if(Array.isArray(el) && el.length > 0) {
// 		true;
// 	} else {
// 		false;
// 	}
// }

// if(checkArr(filters)) {
// 	filters.forEach(function(el) {
// 		console.log(el);
// 	});
// }


let filters = document.querySelectorAll('.cat_galery_filter input');
let catItems = document.querySelectorAll('.cat_galery_item');


for(i=0;i<filters.length;i++){
	filters[i].addEventListener('click',filter);
}

function filter() {
	let cat = this.getAttribute('data-atribut');
	for(i=0;i<catItems.length;i++){
		let catItemVal = catItems[i].getAttribute('data-atribut');
		// console.log(catItemVal);
		if(cat == 'all') {
			catItems[i].classList.add('visible');
		} 
		else if(cat != catItemVal){
			catItems[i].classList.remove('visible');
		} 
		else {
			catItems[i].classList.add('visible');
		}
	}
}


let burger = document.querySelector('.nav span');
burger.onclick = toggleActive;

function toggleActive() {
	this.parentElement.classList.toggle('active');
}