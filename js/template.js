"use strict";
(function() {
    //========================TEMPLATE || ЗАПОЛНЕНИЕ ШАБЛОНА ДАННЫМИ
    function renderTemplate() {  
        let portfolioTemplate = document.querySelector("#template_portfolio_container").content.querySelector(".portfolio_item");
        let fragment = document.createDocumentFragment();

        arrData.forEach(function(item) {   
            let portfolioItem = portfolioTemplate.cloneNode(true);

	    	portfolioItem.querySelector("h3").textContent = item.title;
	    	portfolioItem.querySelector("p").textContent = item.info;
	    	portfolioItem.querySelector("img").src = item.img;
            portfolioItem.setAttribute("data-filter-type", item.type);
	    	  	    
	    	fragment.appendChild(portfolioItem);
	   })

       document.querySelector(".portfolio_container").appendChild(fragment); 
	}
    //========================JSONP || ПОДКЛЮЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ JSONP
    let arrData = [];
    window.jsonpCallback = function(items) {
    	for (let i = 0; i < items.length; i++) {			
    		arrData.push(items[i]);
    	}
        if (arrData.length == 0) {
            document.querySelector(".foodMenuContainer").textContent = "No products were found on a server";
        } else {
            renderTemplate();
        } 
    }
    let loader = document.createElement("script");
    loader.type = "text/javascript";
    loader.src = "js/data-min.js?=jsonpCallback";
    document.body.append(loader); 
})();