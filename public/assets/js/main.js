(function ($) {

  'use strict';

  /* Dashboard Sidebar
  --------------------------------------------------------------*/
    $('#toggle-btn').on('click', function (e) {
    	e.preventDefault();
    	$(this).toggleClass('active');
    
    	$('.side-navbar').toggleClass('shrinked');
    	$('.content-inner').toggleClass('active');
    
    	if ($(window).outerWidth() > 1183) {
    		if ($('#toggle-btn').hasClass('active')) {
    			$('.navbar-header .brand-small').hide();
    			$('.navbar-header .brand-big').show();
    		} else {
    			$('.navbar-header .brand-small').show();
    			$('.navbar-header .brand-big').hide();
    		}
    	}
    
    	if ($(window).outerWidth() < 1183) {
    		$('.navbar-header .brand-small').show();
    	}
    });
	// Close dropdown after click
	$(function () {
	    $(".side-navbar li a").click(function(event) {
		    $(".collapse").collapse('hide');
	    });
	});
	
  /* Dynamic Height
  --------------------------------------------------------------*/
  $(window).resize(function(){
      var height = $(this).height() - $(".header").height() + $(".main-footer").height();
      $('.d-scroll').height(height);
  });

  $(window).resize();

  /* Auto Height Scrollbar
  --------------------------------------------------------------*/
  $(window).resize(function() {
    $('.auto-scroll').height($(window).height() - 130);
  });

  $(window).trigger('resize');

  /* Sidebar Scrollbar
  --------------------------------------------------------------*/
    $(".sidebar-scroll").niceScroll({
    	cursorcolor: "transparent",
    	cursorborder: "transparent",
    	cursoropacitymax: 0,
    	boxzoom: false,
    	autohidemode: "hidden",
    	cursorfixedheight: 80
    });

  /* Dark Mode
  --------------------------------------------------------------*/
  $(window).on('load', function() {
      var darkModePref = localStorage.getItem('sfit-aa-theme-pref');

      if (darkModePref === null) {
        localStorage.setItem('sfit-aa-theme-pref', "light");
        localStorage.setItem('sfit-aa-theme-loc', "/assets/css/style.css");
        $('#dark-mode i').addClass('la-moon');
      }
      else if (darkModePref == 'light') {
        $('#dark-mode i').removeClass('la-sun');
        $('#dark-mode i').addClass('la-moon');
      }
      else if (darkModePref == 'dark') {
        $('#dark-mode i').removeClass('la-moon');
        $('#dark-mode i').addClass('la-sun');
      }
  });

  $('#dark-mode').on('click', function (e) {
      e.preventDefault();
      //alert("Dark mode coming soon!");

      if ( $('#dark-mode i').hasClass('la-moon') ) {
        $('#csspref').attr('href','/assets/css/style-dark.css');
        $('#dark-mode i').removeClass('la-moon');
        $('#dark-mode i').addClass('la-sun');
        $('body').removeClass('lightTheme');
        $('body').addClass('darkTheme');
        localStorage.setItem('sfit-aa-theme-pref', "dark");
        localStorage.setItem('sfit-aa-theme-loc', "/assets/css/style-dark.css");

      } else {
        $('#csspref').attr('href','/assets/css/style.css');
        $('#dark-mode i').removeClass('la-sun');
        $('#dark-mode i').addClass('la-moon');
        $('body').removeClass('darkTheme');
        $('body').addClass('lightTheme');
        localStorage.setItem('sfit-aa-theme-pref', "light");
        localStorage.setItem('sfit-aa-theme-loc', "/assets/css/style.css");
      }  
  });

  /* Back To Top
  --------------------------------------------------------------*/
  $(function () {
      // Show or hide the sticky footer button
      $(window).scroll(function () {
          if ($(this).scrollTop() > 350) {
              $('.go-top').fadeIn(100);
          } else {
              $('.go-top').fadeOut(200);
          }
      });

      // Animate the scroll to top
      $('.go-top').click(function (event) {
          event.preventDefault();

          $('html, body').animate({
              scrollTop: 0
          }, 800);
      })
  }); 

  /* Custom Checkbox (check, heart, star)
  --------------------------------------------------------------*/
  $('.checkbox').click(function(){
      $(this).toggleClass('is-checked');
  });

  /* Check / Uncheck all checkboxes
  --------------------------------------------------------------*/
  $("#check-all").change(function () {
      $("input:checkbox").prop('checked', $(this).prop("checked"));
  });

  /* Card Close
  --------------------------------------------------------------*/
  $('a.remove').on('click', function (e) {
      e.preventDefault();
      $(this).parents('.col-remove').fadeOut(500);
  });

  /* Adding slide effect to dropdown
  --------------------------------------------------------------*/
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });

  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
  });

  /* Horizontal Menu
  --------------------------------------------------------------*/
  $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });

  return false;
  });  

  /* Sticky Menu
  --------------------------------------------------------------*/
  /*
  $("#menu").sticky({
  topSpacing: 0,
  zIndex: '999'
  });*/

  /* Event Filter
  --------------------------------------------------------------*/
  $(function () {
      if ($("#page-events").length > 0) {
        var eventsIsotope = $('.events-container').isotope({
          itemSelector: '.events-item',
          layoutMode: 'fitRows'
        });
        
        eventsIsotope.imagesLoaded().progress( function() {
            eventsIsotope.isotope('layout');
        });
    
        $('#events-sorter li').on('click', function() {
          $("#events-sorter li").removeClass('filter-active');
          $(this).addClass('filter-active');
    
          eventsIsotope.isotope({
            filter: $(this).data('filter')
          });
        });
        
        //$( "#events-sorter li.filter-active" ).trigger( "click" );
      }
  });

  /* Gallery Filter
  --------------------------------------------------------------*/
  $(function () {
      if ($("#page-gallery").length > 0) {
        var galleryIsotope = $('.gallery-container').isotope({
          itemSelector: '.gallery-item',
          layoutMode: 'fitRows'
        });
        
        galleryIsotope.imagesLoaded().progress( function() {
            galleryIsotope.isotope('layout');
        });
    
        $('#gallery-sorter li').on('click', function() {
          $("#gallery-sorter li").removeClass('filter-active');
          $(this).addClass('filter-active');
    
          galleryIsotope.isotope({
            filter: $(this).data('filter')
          });
        });
      }
  });
  
  /* Gallery Overide Styling
  --------------------------------------------------------------*/
  $(function () {
      if ($("#page-gallery").length > 0) {
        $("#sfitaa_nanogallery").nanogallery2({
        galleryTheme: {
            navigationBar :         { background: 'none', borderTop: '', borderBottom: '', borderRight: '', borderLeft: '' },
            navigationBreadcrumb :  { background: '#111', color: '#fff', colorHover: '#ccc', borderRadius: '4px' },
            navigationFilter :      { color: '#ddd', background: '#111', colorSelected: '#fff', backgroundSelected: '#111', borderRadius: '4px' },
            navigationPagination :  { background: '#111', color: '#FF7722', colorHover: '#ccc', borderRadius: '4px' },
            thumbnail :             { background: '#272727', backgroundImage: 'linear-gradient(315deg, #111 0%, #445 90%)', borderColor: '#000', borderRadius: '0px', labelOpacity : 1, labelBackground: 'rgba(34, 34, 34, 0)', titleColor: '#FF7722', titleBgColor: 'transparent', titleShadow: '', descriptionColor: '#ccc', descriptionBgColor: 'transparent', descriptionShadow: '', stackBackground: '#aaa' },
            thumbnailIcon :         { padding: '5px', color: '#fff', shadow:'' },
            pagination :            { background: '#181818', backgroundSelected: '#666', color: '#fff', borderRadius: '2px', shapeBorder: '3px solid #666', shapeColor: '#444', shapeSelectedColor: '#aaa'}
        },
        thumbnailWidth: '200',
        thumbnailHeight: '150',
        galleryDisplayMode: 'moreButton',
        galleryDisplayMoreStep: 3,
        galleryPaginationTopButtons: true,
        galleryNavigationOverlayButtons: true,
        thumbnailAlignment: 'center',
        thumbnailOpenImage: true,
        thumbnailGutterWidth: '15',
        thumbnailGutterHeight: '15',
        thumbnailBorderHorizontal: '0',
        thumbnailBorderVertical: '0',
        viewerTools: {
            topLeft:    'pageCounter',
            topRight:   'fullscreenButton, closeButton'
        }
    });
      }
  });

  /* Contact Map
  --------------------------------------------------------------*/
  $(function () {
      if ($("#page-contact").length > 0) {
        var mymap = L.map('map-marker', {
            maxZoom: 16,
            zoomControl: false
        }).setView([19.24353, 72.85558], 14);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        	id: 'mapbox.streets'
        }).addTo(mymap);
        
        L.control.zoom({position: 'bottomright'}).addTo(mymap);
        
        L.marker([19.24353, 72.85558]).addTo(mymap).bindPopup("<a href='https://goo.gl/maps/hLZcY5nLFDbLuV4Y9'><strong>SFIT Alumni Association</strong></a>").openPopup(); 
      }
  });
	
  /* Login/Register
  --------------------------------------------------------------*/
  $(function () {
    var b = "fadeInLeft";
    var c;
    var a;
    d($("#animate-tab a"), $("#animate-tab-content"));

    function d(e, f, g) {
      e.click(function (i) {
        i.preventDefault();
        $(this).tab("show");
        var h = $(this).data("easein");
        if (c) {
          c.removeClass(a);
        }
        if (h) {
          f.find("div.active").addClass("animated " + h);
          a = h;
        } else {
          if (g) {
            f.find("div.active").addClass("animated " + g);
            a = g;
          } else {
            f.find("div.active").addClass("animated " + b);
            a = b;
          }
        }
        c = f.find("div.active");
      });
    }
    
    $("a[rel=popover]").popover().click(function (f) {
      f.preventDefault();
      if ($(this).data("easein") !== undefined) {
        $(this).next().removeClass($(this).data("easein")).addClass("animated " + $(this).data("easein"));
      } else {
        $(this).next().addClass("animated " + b);
      }
    });
  });
  
  $('#signin-tab').on('click', function (e) {
      $('html, body').animate({
          scrollTop: $("#animate-tab-content-div").offset().top
      }, 1000);
  }); 
  
  $('#signup-tab').on('click', function (e) {
      $('html, body').animate({
          scrollTop: $("#animate-tab-content-div").offset().top
      }, 1000);
  });

})(jQuery);