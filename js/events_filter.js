"use strict";
(function() {		
	//=============SMOOTH SCROLL OF BUTTONS || ПЛАВНОЕ ПРОКРУЧИВАНИЕ КНОПОК
	document.querySelector(".btn-down").addEventListener("click", function() {
		document.querySelector(".aboutus").scrollIntoView({behavior: 'smooth', block: "start"});
	});

	document.querySelector(".aboutus button").addEventListener("click", function() {
		document.querySelector(".portfolio").scrollIntoView({behavior: 'smooth', block: "start"});
	});      
    //=============SHOW/HIDE MOBILE MENU || СПРЯТАТЬ/ПОКАЗАТЬ МОБИЛЬНОЕ МЕНЮ
    document.querySelector(".btn-menuopen").addEventListener("click", function() { 
		document.querySelector(".menu").classList.toggle("menu_open");
	});
    //=============SMOOTH SCROLL OF MENU LINKS || ПЛАВНОЕ ПРОКРУЧИВАНИЕ ССЫЛОК МЕНЮ
    Array.from(document.querySelectorAll(".menu a")).forEach(function(item) {
        item.addEventListener("click", function(evt) {
            let href = item.getAttribute("href");

            evt.preventDefault();
            document.querySelector("." + href).scrollIntoView({behavior: 'smooth', block: "start"});
        })
    });
    //=============FILTER || ФИЛЬТР
    let filterButtons = document.querySelectorAll(".filter_btn");

    Array.from(filterButtons).forEach(function(button) {
        button.addEventListener("click", function() {
            let activeButton = document.querySelector(".active_filter_btn");
            let buttonType = button.getAttribute("data-filter-type");
            let portfolioItems = document.querySelectorAll(".portfolio_item");
            let filteredItems = document.querySelectorAll(".portfolio_item[data-filter-type=" + buttonType + "]");

            activeButton.classList.remove("active_filter_btn");
            button.classList.add("active_filter_btn");

            Array.from(portfolioItems).forEach(function(item) {
                (buttonType == "All") ? item.style.display = "block" : item.style.display = "none";
            });

            Array.from(filteredItems).forEach(function(item) {
                item.style.display = "block";
            });
        });
    });
})();