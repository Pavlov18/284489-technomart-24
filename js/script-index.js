document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');

var buttonwrite = document.querySelector(".button-write-me");
var popupform = document.querySelector(".modal-message");
var closeWrite = document.querySelector(".modal-write-close");

var buttonsBuy = document.querySelectorAll(".button-buy");
var popupcart = document.querySelector(".modal-cart-add");
var closePopup = document.querySelectorAll(".modal-add-close");

var form = popupform.querySelector("[name=message-form]");
var fullname = popupform.querySelector("[name=fullname]");
var email = popupform.querySelector("[name=email]");
var message = popupform.querySelector("[name=message]") 
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

var userBlock = document.querySelector(".user-navigation");
var login = userBlock.querySelector(".login");
var logout = userBlock.querySelector(".logout");

var buttonMap = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");

buttonMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
 });

login.addEventListener("click", function (evt) {
	evt.preventDefault();
	userBlock.classList.add("auth");
});

logout.addEventListener("click", function (evt) {
	evt.preventDefault();
	userBlock.classList.remove("auth");
});

try {
	storageName = localStorage.getItem("fullname");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

buttonwrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupform.classList.add("modal-show");
	if (storageName) {
		fullname.value = storageName;
		if (storageEmail) {
			email.value = storageEmail;
			message.focus();
		}
		else {
			email.fucus();
		}
	} else {
		fullname.focus();
	}
});

	closeWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupform.classList.remove("modal-show");
	popupform.classList.remove("modal-error");
});

for (var i = 0; i < buttonsBuy.length; i++) {
	var buttonBuy = buttonsBuy[i];
	buttonBuy.addEventListener('click', function (evt) {
		evt.preventDefault();
		popupcart.classList.add("modal-show");
	});
}

for (var i = 0; i < closePopup.length; i++) {
	var buttonClose = closePopup[i];
	buttonClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupcart.classList.remove("modal-show");
		mapPopup.classList.remove("modal-show");
	});
}

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	if (!fullname.value || !email.value || !message.value) {
		evt.preventDefault();
		popupform.classList.remove("modal-error");
		popupform.offsetWidth = popupform.offsetWidth;
		popupform.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem ("fullname", fullname.value);
			localStorage.setItem ("email", email.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		var modShow = document.querySelectorAll(".modal-show");
		for (var i = 0; i < modShow.length; i++) {
			modShow[0].classList.remove("modal-show");
		}
	}
});

var slider = document.querySelector(".slider");
var slides = slider.querySelectorAll(".slide");
var slideRadio = document.getElementsByName("slide-radio");
var btnBack = slider.querySelector(".slider-button-back");
var btnNext = slider.querySelector(".slider-button-next");
var sliderContent = slider.querySelector(".slider-content");
var firstSlide = sliderContent.firstElementChild;
var finalSlide = sliderContent.lastElementChild;

btnNext.addEventListener("click", function (evt) {
	for (var i = 0; i < slideRadio.length; i++) {
		if (slideRadio[i].checked) {
			var currentCheck = slideRadio[i];
			var nextRadio = slideRadio[i+1];
		}
		if (i === slideRadio.length - 1) {
			var finalRadio = slideRadio[i];
		}
		if (i === 0) {
			var firstRadio = slideRadio[i];
		}
	}
	currentCheck.checked=false;	
	if (currentCheck != finalRadio) {
		nextRadio.checked=true;
	}
	else {
		firstRadio.checked=true;
	}
	});

btnBack.addEventListener("click", function (evt) {
	for (var i = 0; i < slideRadio.length; i++) {
		if (slideRadio[i].checked) {
			var currentCheck = slideRadio[i];
			var prevRadio = slideRadio[i-1];
		}
		if (i === slideRadio.length - 1) {
			var finalRadio = slideRadio[i];
		}
		if (i === 0) {
			var firstRadio = slideRadio[i];
		}
	}
	currentCheck.checked=false;	
	if (currentCheck != firstRadio) {
		prevRadio.checked=true;
	}
	else {
		finalRadio.checked=true;
	}
});	