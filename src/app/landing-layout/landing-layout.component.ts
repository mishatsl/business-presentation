import {Component, Injectable, AfterViewInit} from '@angular/core';
import { AboutAreaComponent } from '../landing-sections/About-Area/about-area.component';
import { BlogAreaComponent } from '../landing-sections/blog-area/blog-area.component';
import { ContactAreaComponent } from '../landing-sections/contact-area/contact-area.component';
import { FooterAreaComponent } from '../landing-sections/footer-area/footer-area.component';
import { HeaderAreaComponent } from '../landing-sections/header-area/header-area.component';
import { MainmenuAreaComponent } from '../landing-sections/mainmenu-area/mainmenu-area.component';
import { PortfolioAreaComponent } from '../landing-sections/portfolio-area/portfolio-area.component';
import { PriceAreaComponent } from '../landing-sections/price-area/price-area.component';
import { SkillAreaComponent } from '../landing-sections/skill-area/skill-area.component';
import { TeamAreaComponent } from '../landing-sections/team-area/team-area.component';

declare var $: any;
declare var WOW: any;
@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'
//   '../../../landing-assets/css/bootstrap.min.css',
//   '../../../landing-assets/css/owl.carousel.min.css',
//   '../../../landing-assets/css/icofont.css',
// '../../../landing-assets/css/magnific-popup.css',
// '../../../landing-assets/css/animate.css',
// '../../../landing-assets/css/normalize.css',
// '../../../landing-assets/style.css',
// '../../../landing-assets/css/responsive.css'
]
})
export class LandingLayoutComponent implements AfterViewInit  {

  title: string = '';
   lat: number = 23.810332;
   lng: number = 90.41251809999994;
   zoom: number = 4;

  constructor() { }

   ngAfterViewInit(): void { 
    
      "use strict";
      $(".carousel-inner .itemfirst-child").addClass("active");
      /* Mobile menu click then remove
      ==========================*/
      $(".mainmenu-area #mainmenu li a").on("click", function () {
          $(".navbar-collapse").removeClass("in");
      });
  
  
      // Select all links with hashes
      $('.smoth a[href*="#"], .mainmenu-area .primary-menu a[href*="#"], #ContactNow')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function (event) {
              // On-page links
              if (
                  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                  location.hostname == this.hostname
              ) {
                  // Figure out element to scroll to
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                  // Does a scroll target exist?
                  if (target.length) {
                      // Only prevent default if animation is actually gonna happen
                      event.preventDefault();
                      $('html, body').animate({
                          scrollTop: target.offset().top
                      }, 1000, function () {
                          // Callback after animation
                          // Must change focus!
                          var $target = $(target);
                          $target.focus();
                          if ($target.is(":focus")) { // Checking if the target was focused
                              return false;
                          } else {
                              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                              $target.focus(); // Set focus again
                          };
                      });
                  }
              }
          });
  
          $('body').scrollspy({
                target: '.navbar',
                offset: 100
              });
  
  
      /* Scroll to top
      ===================*/
      $.scrollUp({
          scrollText: '<i class="fa fa-angle-up"></i>',
          easingType: 'linear',
          scrollSpeed: 900,
          animation: 'fade'
      });
  
      /* testimonials Slider Active
      =============================*/
      $('.testimonials').owlCarousel({
          loop: true,
          margin: 0,
          responsiveClass: true,
          nav: true,
          autoplay: true,
          autoplayTimeout: 4000,
          smartSpeed: 1000,
          navText: ['<i class="icofont icofont-rounded-left"></i>', '<i class="icofont icofont-rounded-right"></i>'],
          responsive: {
              0: {
                  items: 1,
              },
              600: {
                  items: 1
              },
              1000: {
                  items: 1
              }
          }
      });
  
      // start easy pie chart plugin when skills section appear // 
      $(".skills1").appear(function () {
          $(".chart1").easyPieChart({
              barColor: "#a4c8fd",
              trackColor: "#e1e1e1",
              scaleColor: false,
              lineWidth: 3,
              lineCap: "round",
              size: 60,
              animate: 1500
          });
          $('.counter').counterUp({
              delay: 10,
              time: 1000
          });
      }, {
          accX: 0,
          accY: -150
      });
  
      // start easy pie chart plugin when skills section appear // 
      $(".skills2").appear(function () {
          $(".chart2").easyPieChart({
              barColor: "#800080",
              trackColor: "#e1e1e1",
              scaleColor: false,
              lineWidth: 3,
              lineCap: "round",
              size: 60,
              animate: 1500
          });
          $('.counter').counterUp({
              delay: 10,
              time: 1000
          });
      }, {
          accX: 0,
          accY: -150
      });
  
  
      $('.count').counterUp({
          delay: 10,
          time: 1000
      });
  
      // start mixitup plugin in portfolio section //
      $("#filtering").mixItUp();
  
  
      /*--------------------
       MAGNIFIC POPUP JS
       ----------------------*/
      $('.video-bttn').magnificPopup({
          type: 'iframe',
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
              beforeOpen: function () {
                  // just a hack that adds mfp-anim class to markup 
                  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                  this.st.mainClass = this.st.el.attr('data-effect');
              }
          },
          iframe: {
              markup: '<div class="mfp-iframe-scaler">' +
                  '<div class="mfp-close"></div>' +
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                  '<div class="mfp-title">Some caption</div>' +
                  '</div>'
          },
          gallery: {
              enabled: true
          },
          closeOnContentClick: true,
          midClick: true
      });
  
      /*------------------------------
      Filter-PopUp
    -------------------------------*/
      $('.filter-popup').magnificPopup({
          type: 'image',
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
              beforeOpen: function () {
                  // just a hack that adds mfp-anim class to markup 
                  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                  this.st.mainClass = this.st.el.attr('data-effect');
              }
          },
          gallery: {
              enabled: true
          },
          closeOnContentClick: true,
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });
  
      /* Preloader Js
      ===================*/
      $(window).on("load", function () {
          $('.preloader').fadeOut(500);
          /*WoW js Active
          =================*/
          new WOW().init({
              mobile: false,
          });
      });
  
   }
  //   // jQuery for page scrolling feature - requires jQuery Easing plugin
  //   $('a.page-scroll').on('click', function (event) {
  //     var $anchor = $(this);
  //     $('html, body').stop().animate({
  //       scrollTop: ($($anchor.attr('href')).offset().top - 50)
  //     }, 1250, 'easeInOutExpo');
  //     event.preventDefault();
  //   });


  //   // Highlight the top nav as scrolling occurs
  //   $('body').scrollspy({
  //     target: '.navbar-fixed-top',
  //     offset: 100
  //   });

  //   // Closes the Responsive Menu on Menu Item Click
  //   $('.navbar-collapse ul li a').click(function () {
  //     $('.navbar-toggle:visible').click();
  //   });


  //   // Offset for Main Navigation

  //   $('#mainNav').affix({
  //     offset: {
  //       top: 50
  //     }
  //   });


  // }

}
