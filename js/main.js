//navClick
	$("#nav-about").click(function(){
		$("html,body").animate({scrollTop: $(".section-about").offset().top}, 1000);
	});

	$("#nav-benefits").click(function(){
		$("html,body").animate({scrollTop: $(".section-features").offset().top}, 1000);
	});

	$("#nav-tours").click(function(){
		$("html,body").animate({scrollTop: $(".section-tours").offset().top}, 1000);
	});

	$("#nav-stories").click(function(){
		$("html,body").animate({scrollTop: $(".section-stories").offset().top}, 1000);
	});

	$("#nav-book").click(function(){
		$("html,body").animate({scrollTop: $(".book").offset().top}, 1000);
	});

//nav hide
	var navLink1 = document.querySelector("#nav-about");
	var navLink2 = document.querySelector("#nav-benefits");
	var navLink3 = document.querySelector("#nav-tours");
	var navLink4 = document.querySelector("#nav-stories");
	var navLink5 = document.querySelector("#nav-book");

	var navCheck = document.querySelector(".navigation__checkbox");

	navLink1.addEventListener("click", function(){
		navCheck.checked = false;
	});

	navLink2.addEventListener("click", function(){
		navCheck.checked = false;
	});

	navLink3.addEventListener("click", function(){
		navCheck.checked = false;
	});

	navLink4.addEventListener("click", function(){
		navCheck.checked = false;
	});

	navLink5.addEventListener("click", function(){
		navCheck.checked = false;
	});

//btns
	$("#btn-dir-tours").click(function(){
		$("html,body").animate({scrollTop: $(".section-tours").offset().top}, 1000);
	});