// slide page to anchor
$('.navbar-nav-link').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 'slow');

});


// slide to top of the page

const $btnToTop = $('<button class="toTopBtn" title="To Top"></button>');
$btnToTop.css('display', 'none');
$(document.body).prepend($btnToTop);

$(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(this).innerHeight()) {
            $btnToTop.fadeIn(); // show the button
        } else {
            $btnToTop.fadeOut(); // hide the button
        }
    });
    $btnToTop.click(() => {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});


// slideToggle section

const $slideToggleBtn = $('<button class="show-hide" title="show/hide">show/hide</button>');
$('.posts').prepend($slideToggleBtn);

$slideToggleBtn.click(function () {
    $('.posts-container').slideToggle();
})
