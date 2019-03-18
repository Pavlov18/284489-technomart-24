			var buttonwrite = document.querySelector(".button-write-me");
			var popupform = document.querySelector(".modal-message");
			var closeWrite = popupform.querySelector(".modal-write-close");

			var buttonsBuy = document.querySelectorAll(".button-buy");
			var popupcart = document.querySelector(".modal-cart-add");
			var closeAddCart = popupcart.querySelectorAll(".modal-add-close");

			var form = popupform.querySelector("[name=message-form]");
			var fullname = popupform.querySelector("[name=fullname]");
			var email = popupform.querySelector("[name=email]");
			var message = popupform.querySelector("[name=message]")
			var i;
			var isStorageSupport = true;
			var storageName = "";
			var storageEmail = "";

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

			for (i = 0; i < buttonsBuy.length; i++) {
				var buttonBuy = buttonsBuy[i];
				buttonBuy.addEventListener('click', function (evt) {
					evt.preventDefault();
					popupcart.classList.add("modal-show");
				});
			}

			for (i = 0; i < closeAddCart.length; i++) {
				var buttonClose = closeAddCart[i];
				buttonClose.addEventListener("click", function (evt) {
					evt.preventDefault();
					popupcart.classList.remove("modal-show");

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
					if (popupform.classList.contains("modal-show")) {
						popup.classList.remove("modal-show");
						popup.classList.remove("modal-error");
					}
				}
			});



			var slider = document.querySelector(".slider");
			var slides = slider.querySelectorAll(".slide");
			var slideRadio = document.getElementsByName('slide-radio');
			var btnBack = slider.querySelector(".slider-button-back");
			var btnNext = slider.querySelector(".slider-button-next");
			var sliderContent = slider.querySelector(".slider-content");

			btnBack.addEventListener("click", function (evt) {
				var currentSlide = sliderContent.querySelector(".current");
				var prevSlide = currentSlide.previousElementSibling;
				var firstSlide = sliderContent.firstElementChild;
				var finalSlide = sliderContent.lastElementChild;
				currentSlide.classList.remove("current");
				currentSlide.classList.add("visually-hidden");
				if (currentSlide != firstSlide) {
					prevSlide.classList.remove("visually-hidden");
					prevSlide.classList.add("current");
				}
				else {
					finalSlide.classList.remove("visually-hidden");
					finalSlide.classList.add("current");
				}
			});

			btnNext.addEventListener("click", function (evt) {

				var currentSlide = sliderContent.querySelector(".current");
				var nextSlide = currentSlide.nextElementSibling;
				var firstSlide = sliderContent.firstElementChild;
				var finalSlide = sliderContent.lastElementChild;

				currentSlide.classList.remove("current");
				currentSlide.classList.add("visually-hidden");
				if (currentSlide != finalSlide) {
					nextSlide.classList.remove("visually-hidden");
					nextSlide.classList.add("current");
				}
				else {
					firstSlide.classList.remove("visually-hidden");
					firstSlide.classList.add("current");
				}
			});




			btnsNetxPrev = slider.querySelector(".buttons-next-prev").querySelectorAll("button");
			for (i = 0; i < btnsNetxPrev.length; i++) {
				btnsNetxPrev[i].addEventListener("click", function (evt) {
				evt.preventDefault();

				for (var i=0; i!= slides.length; ++i) {
					if (slides[i].classList.contains("current")) {
						var nNum = i+1;
						console.log(nNum + " - Определили номер сайда")
						for (var i = 0; i < slideRadio.length; i++) {       
							if (slideRadio[i].checked) {
								slideRadio[i].checked = false;
							}
						}
						var parent = slider.querySelector(".slider-indicators");
						var elems = parent.querySelectorAll("li");
						for (var i = 0; i < elems.length; i++) {
							var NumLiButton = i+1;
							if (NumLiButton === nNum) {
									elems[NumLiButton - 1].querySelector("input").checked = true;
							}
						}
						return;		
					};
				}
				});
			}

			for (var i=0 ; i<slideRadio.length; i++) {
				slideRadio[i].addEventListener("click", function(){

					for (var i = 0; i < slideRadio.length; i++) {       
						if (slideRadio[i].checked) {
							numRadio = slideRadio[i].value;

		for (var i = 0; i < slides.length; i++) {           // visually-hidden всех слайдов и удаление .current
			slides[i].classList.add("visually-hidden");  
			slides[i].classList.remove("current");
		}

		var numSlide = slider.querySelector(".slide:nth-child(" + numRadio + ")");
		numSlide.classList.remove("visually-hidden");
		numSlide.classList.add("current");
	}
}

});
			}











