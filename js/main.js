(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    function performSearch() {
        var query = document.getElementById('searchInput').value;
        if (query) {
            // For simplicity, this example just logs the query to the console
            // You can adapt this to perform a real search or navigate to a search results page
            console.log('Searching for:', query);
            
            // Example: Navigate to a search results page with the query as a parameter
            window.location.href = 'search.html?q=' + encodeURIComponent(query);
        }
    }
    
    // Show the video modal when the document is ready ADS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // document.addEventListener('DOMContentLoaded', function () {
    //     var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    //     videoModal.show();
    // });
    //modal
    document.addEventListener('DOMContentLoaded', function () {
        var welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
        welcomeModal.show();
    });

    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    // document.addEventListener('DOMContentLoaded', function () {
    //     var videoModal = document.getElementById('videoModal');
    //     var videoIframe = document.getElementById('video');

    //     videoModal.addEventListener('show.bs.modal', function (event) {
    //         var button = event.relatedTarget;
    //         var videoUrl = button.getAttribute('data-bs-video-url');
    //         videoIframe.src = videoUrl;
    //     });

    //     videoModal.addEventListener('hide.bs.modal', function () {
    //         videoIframe.src = '';
    //     });
    // });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
    });
    
})(jQuery);

