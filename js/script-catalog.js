document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
var buttonsBuy = document.querySelectorAll(".button-buy");
var popupcart = document.querySelector(".modal-cart-add");
var closeAddCart = popupcart.querySelectorAll(".modal-add-close");

var userBlock = document.querySelector(".user-navigation");
var login = userBlock.querySelector(".login");
var logout = userBlock.querySelector(".logout");

login.addEventListener("click", function (evt) {
	evt.preventDefault();
	userBlock.classList.add("auth");
});

logout.addEventListener("click", function (evt) {
	evt.preventDefault();
	userBlock.classList.remove("auth");
});

for (var i = 0; i < buttonsBuy.length; i++) {
	var buttonBuy = buttonsBuy[i];
	buttonBuy.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupcart.classList.add("modal-show");
	});
}

for (var i = 0; i < closeAddCart.length; i++) {
	var buttonClose = closeAddCart[i];
	buttonClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupcart.classList.remove("modal-show");
	});
}

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		var modShow = document.querySelectorAll(".modal-show");
		for (var i = 0; i < modShow.length; i++) {
			modShow[0].classList.remove("modal-show");
		}
	}
});