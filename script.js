----- script.js -----
// ============================================
// SIAM WEB DEVELOPER - CUSTOM JAVASCRIPT
// Created by: SP Siam Ahmed
// ============================================

$(document).ready(function() {
    
    // Smooth Scrolling for Navigation Links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 800);
        }
    });

    // Navbar Background Change on Scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Mobile Menu Close on Link Click
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Contact Form Handling
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // Basic validation
        if (name === '' || email === '' || subject === '' || message === '') {
            displayMessage('Please fill in all required fields.', 'danger');
            return;
        }

        // Email validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            displayMessage('Please enter a valid email address.', 'danger');
            return;
        }

        // Simulate form submission (replace with actual backend logic)
        displayMessage('Thank you for contacting Siam Web Developer! Your message has been sent successfully.