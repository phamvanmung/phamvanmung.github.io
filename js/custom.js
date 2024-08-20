// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


     //Menu opacity
    if ($(window).scrollTop() < 500) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() < 500) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        //once: true,
        //disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    // Khởi tạo animatedModal cho mỗi liên kết
    $("#demo01").animatedModal({
        modalTarget: 'animatedModal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        duration : 1,
    });

    $("#demo02").animatedModal({
        modalTarget: 'animatedModal-1',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        duration: 1,
    });
    $("#demo03").animatedModal({
        modalTarget: 'animatedModal-2',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        duration: 1,
    });
    $("#demo04").animatedModal({
        modalTarget: 'animatedModal-3',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        duration: 1,
    });

    //Phát hiện vuốt quay về (swipe right) để đóng modal
    $("#animatedModal").on("swiperight", function () {
        $("#animatedModal").animatedModal('close');
    });
    $("#animatedModal-1").on("swiperight", function () {
        $("#animatedModal1").animatedModal('close');
    });
    // Contact Form 	

     //validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Trường này là bắt buộc",
                    minlength: "Tên của bạn phải có ít nhất 2 ký tự"
                },
                email: {
                    required: "Trường này là bắt buộc"
                },
                message: {
                    required: "Trường này là bắt buộc"
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    url: $(form).attr('action'),
                    method: 'POST',
                    data: $(form).serialize(),
                    dataType: 'json',
                    success: function () {
                        $('#contact-form').fadeTo("slow", 1, function () {
                            $('#success').fadeIn();
                            $('#contact-form').trigger("reset"); // Reset form sau khi gửi thành công
                        });
                    },
                    error: function () {
                        $('#contact-form').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });
    });

});
window.addEventListener('load', function() {
    var loader = document.querySelector('.ui-loader.ui-corner-all.ui-body-a.ui-loader-default');
    if (loader) {
        loader.remove();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var aboutImage = document.getElementById('aboutImage');
    aboutImage.addEventListener('animationend', function () {
        var aboutBorder = document.querySelector('.about-border');
        aboutBorder.appendChild(aboutImage);
    });
});
