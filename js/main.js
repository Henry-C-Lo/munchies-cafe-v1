'use strict';


// HOME PAGE

(function () {
    document.addEventListener('DOMContentLoaded', function () {

        var index = document.getElementById('index');
        var menu = document.getElementById('menu');

        if (index || menu) {
            window.addEventListener('scroll', function () {

                var nav = document.querySelector('.main-nav');
                var y = (document.documentElement.scrollTop || document.body.scrollTop);

                if (y > 1000) {
                    nav.style.top = "0";
                } else {
                    nav.style.top = "-100%";
                }
            });
        }


// RESERVATION FORM

        var reservation = document.getElementById('reservation');

        if (reservation) {

            document.querySelector('.reservation-btn').addEventListener('click', function () {
                var fullName = document.getElementById('name').value;
                var phoneNumber = document.getElementById('phone').value;
                var date = document.getElementById('date').value;
                var select = document.getElementById('time-select').value;
                var guests = document.getElementById('guests').value;

                var nameRGEX = /^[a-z ,.'-]+$/i;
                var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                var dateRGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

                var nameResult = nameRGEX.test(fullName);
                var phoneResult = phoneRGEX.test(phoneNumber);
                var dateResult = dateRGEX.test(date);


                if (nameResult === '' || nameResult === false) {
                    alert('Please enter a valid name');
                    return false;
                }

                if (phoneResult === false) {
                    alert('Please enter a valid phone number');
                    return false;
                }

                if (dateResult === false) {
                    alert('Please select a valid date');
                    return false;
                }

                if (select === '') {
                    alert('Please select a time');
                    return false;
                }

                if (guests === '0' || guests === '') {
                    alert('Please select a number');
                    return false;
                } else if (guests > 10 || guests < 0) {
                    alert('at least 1 person and max out 10 people');
                    return false;
                }

                return true;
            });
        }


// MENU

        if (menu) {
            for (var i = 1; i < 5; i++) {
                setupModal(i);
            }
        }


        function setupModal(n) {
            var modal1 = document.querySelector(`.modal${n}`);
            var close1 = document.querySelector(`.close${n}`);
            var images1 = document.querySelectorAll(`.images${n}`);
            var slides1 = document.querySelectorAll(`.slides${n}`);
            var next1 = document.querySelector(`.next${n}`);
            var prev1 = document.querySelector(`.prev${n}`);


            console.log(close1);


            for (var i = 0; i < images1.length; i++) {
                var image = images1[i];
                image.addEventListener("click", function () {
                    modal1.style.display = "block";
                })
            }

            close1.addEventListener("click", function () {
                modal1.style.display = "none"
            });


            var currentSlide = 0;
            var totalSlides = 0;


            next1.addEventListener('click', function () {
                currentSlide++;
                if (currentSlide >= totalSlides) {
                    currentSlide = 0;
                }
                showSlide();
            });


            prev1.addEventListener('click', function () {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = slides1.length - 1;
                }
                showSlide();
            });


            function showSlide() {
                var i;
                totalSlides = slides1.length;
                for (i = 0; i < totalSlides; i++) {
                    slides1[i].style.display = "none";
                }
                slides1[currentSlide].style.display = "block";
            }
        }


// QUERIES


        var mobileNav = document.querySelector('.mobile-nav');
        var navBar = document.querySelector('.nav-bar');


        mobileNav.addEventListener('click', function () {
            mobileNav.classList.toggle('change');
            navBar.style.display = navBar.style.display === "block" ? '' : 'block';
        });

    });

})();