$(document).ready(function() {
	new WOW().init();
	$.slidebars();
	$("li.level0 a").each(function(item){
		if(window.location.pathname === $(this).attr("href")){
			$(this).closest('li.level0').addClass("active");
			$(this).closest('ul.submenu').addClass("active");
			$(this).closest('li.level1').addClass("active");
		}
	});
	$("#owl-demo").owlCarousel({ 
		autoplay : 5000,
		stopOnHover : true,
		navigation:true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true
	});
	$("#owl-demo-pc").owlCarousel({ 
		autoPlay : 5000,
		stopOnHover : true,
		navigation:true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		singleItem : true
	});
	$("#owl-box_index").owlCarousel({
		autoPlay : 4000,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [768,3], //2 items between 600 and 0
		itemsMobile : [540,2], // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad : true,
		navigation : true,
		pagination : false
	}); 
	$("#owl-box_index_2").owlCarousel({
		autoPlay : 4000,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [768,3], //2 items between 600 and 0
		itemsMobile : [540,2], // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad : true,
		navigation : true,
		pagination : false
	}); 
	$("#owl-box_index_3").owlCarousel({
		autoPlay : 4000,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [768,3], //2 items between 600 and 0
		itemsMobile : [540,2], // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad : true,
		navigation : true,
		pagination : false
	});
	$("#owl-box_index_4").owlCarousel({
		autoPlay : 4000,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [768,3], //2 items between 600 and 0
		itemsMobile : [540,2], // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad : true,
		navigation : true,
		pagination : false
	});
	$("#owl-box_index_5").owlCarousel({
		autoPlay : 4000,
		items : 4, //10 items above 1000px browser width
		itemsDesktop : [1000,3], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,3], // betweem 900px and 601px
		itemsTablet: [768,3], //2 items between 600 and 0
		itemsMobile : [540,2], // itemsMobile disabled - inherit from itemsTablet option
		lazyLoad : true,
		navigation : true,
		pagination : false
	});
	$("#owl-box_pr_hot_1").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : true,
		pagination : false
	});
	$("#owl-box_pr_hot_2").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : true,
		pagination : false
	}); 
	$("#owl-box_brand").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : true,
		pagination : false
	});
	$("#owl-box_brand_pc").owlCarousel({
		items : 3,
		lazyLoad : true,
		navigation : true,
		pagination : false
	});
	$('.btn_menu_cate,.menu_cate_hide').hover(function(){
		$('.menu_cate_hide').fadeIn(1);
		$('.btn_menu_cate span i').addClass('fa-bars');
		$('.btn_menu_cate span i').removeClass('fa-times');
	}, function(){
		$('.menu_cate_hide').fadeOut(1);	
	});
	$( ".sub_menu" )
		.mouseleave(function() {
		$( this ).hide();
	});
	$('.__MB_NEWS_TAB3 li a').click(function(){
		var getTabId		=		$(this).attr('id'); 							
		$('.__MB_CONTAINER_READ3').hide();							
		$('.__MB_NEWS_TAB3 li a,.__MB_NEWS_TAB3 li').removeClass('active');							
		$(this).addClass('active');	
		$(this).parent().addClass('active');								
		$('.__MB_CONTAINER_READ3_'+getTabId).show();							
	});

	var sync1 = $("#sync1");
	var sync2 = $("#sync2");

	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: true,
		pagination:false,
		autoHeight : true,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
	});

	sync2.owlCarousel({
		items : 4,
		itemsDesktop      : [1199,4],
		itemsDesktopSmall     : [979,4],
		itemsTablet       : [768,4],
		itemsMobile       : [479,4],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});

	function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
			center(current)
		}
	}

	$("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});

	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
			if(num === sync2visible[i]){
				var found = true;
			}
		}

		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}

	}
});