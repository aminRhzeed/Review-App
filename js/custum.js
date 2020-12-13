// Tab Swiper

    (function() {
        'use strict';
        $(activate);
        function activate() {
            $('.nav-tabs').scrollingTabs({
                enableRtlSupport: true,
                forceActiveTab: true,
                enableSwiping: true,
                reverseScroll: false,
                disableScrollArrowsOnFullyScrolled: true,
                scrollToTabEdge: true,
            })
                .on('ready.scrtabs', function() {
                    $('.tab-content').show();
                });

        }
    }());

// Palyer Options

    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");
    
    function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }


// Lazy Menu    
    
    $("a[href^='#section']").click(function(e) {
    
        e.preventDefault();
    
        var position = $($(this).attr("href")).offset().top-50;

        $("body, html").animate({
            scrollTop: position
        }, 1000 );
    });

// Sticky

    $(window).scroll(function() {
        if ($(this).scrollTop() > 80 ){
            $('.floating-header').addClass("sticky-header");
        }
        else{
            $('.floating-header').removeClass("sticky-header");
        }
    });

// Active Menu    

    // $(function(){
	// 	$('.navbar-nav li').click(function(){
	// 		$(this).addClass('active').siblings().removeClass('active')	
	// 	})
    // }) 
    
// Close Menu After Click

// setInterval(function() { menuClose(); }, 500);
// function menuClose (){
//     let cw = $(window).width();
//     if ( cw < 992 ) {
//         $('.navbar-nav li').on("click", function (e) {
//             $('.navbar-toggler').click();
//         });
//         $('.menu-overlay').on("click", function (e) {
//             $('.navbar-toggler').click();
//         });
//         window.onresize = resize;
//         function resize() {
//             let cw = $(window).width();
//             if ( cw < 992 ) {
//
//             };
//         }
//     };
// }
$('.navbar-nav li,.menu-overlay').on("click", function (e) {
    let cw = $(window).width();
    if ( cw < 992 ) {
        $('.navbar-toggler').click();
    }
});
// $('.menu-overlay').on("click", function (e) {
//     let cw = $(window).width();
//     if ( cw < 992 ) {
//         $('.navbar-toggler').click();
//     }
// });

// Active Menu While Scrolling 

    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#section"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+0
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-toggler ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
};



var Swipes = new Swiper('.tabs-swiper', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 0,
    grabCursor: true,
    loop: false
});

// heaing Swiper

    var Swipes = new Swiper('.healing-swiper', {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 30,
        grabCursor: true,
        loop: false
    });

// picture issue in safari

if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1)
{
    setInterval(function(){ serviceHeightResize(); }, 500);
    function serviceHeightResize () {
        let tripleX01 = $('.apple-suck-01').width();
        let tripleY01 = (tripleX01 / 1.916).toPrecision(4);
        $('.apple-suck-01').attr('style', 'height: ' + tripleY01 + 'px !important');

        let tripleX02 = $('.apple-suck-02').width();
        let tripleY02 = (tripleX02 / 1.916).toPrecision(4);
        $('.apple-suck-02').attr('style', 'height: ' + tripleY02 + 'px !important');

        let tripleX03 = $('.apple-suck-03').Width();
        let tripleY03 = (tripleX03 / 1.6176).toPrecision(4);
        $('.apple-suck-03').attr('style', 'height: ' + tripleY03 + 'px !important');
        
        let tripleX04 = $('.apple-suck-04').Width();
        let tripleY04 = (tripleX04 / 1.916).toPrecision(4);
        $('.apple-suck-04').attr('style', 'height: ' + tripleY04 + 'px !important');
    }

}


