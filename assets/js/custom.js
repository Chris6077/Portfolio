$(function(){"use strict";var wind=$(window);$.scrollIt({upKey:40,downKey:40,easing:'linear',scrollTime:1500,activeClass:'active',onPageChange:null,});wind.on("scroll",function(){var bodyScroll=wind.scrollTop(),navbar=$(".navbar-default");if(bodyScroll>300){navbar.addClass("nav-scroll");}else{navbar.removeClass("nav-scroll");}});$('.info h3 span').typed({strings:["a GUI/Ux designer","a photographer","a devoloper","a graphic Designer","Christian Winkler"],loop:true,startDelay:500,backDelay:3000});$('.half').matchHeight({property:'min-height'});wind.on("scroll",function(){var bodyScroll=wind.scrollTop();if(bodyScroll>500){$('#bar2').barfiller({barColor:'#2e353e',duration:2000});$('#bar3').barfiller({barColor:'#2e353e',duration:1600});$('#bar4').barfiller({barColor:'#2e353e',duration:1200});$('#bar5').barfiller({barColor:'#2e353e'});}});$('.testimonel .owl-carousel').owlCarousel({items:1,mouseDrag:true,autoplay:true,smartSpeed:500});$('.portfolio .link').magnificPopup({delegate:'a',type:'image'});wind.stellar();$('.parallax').sparallax();$('#iconified').on('keyup',function(){var input=$(this);if(input.val().length===0){input.addClass('empty');}else{input.removeClass('empty');}});$('#contact-form').validator();});var send=function(){try{var x=emailjs.send("gmail","temp",{"reply_to":$("#form_email")[0].value,"from_name":$("#form_name")[0].value,"subject":$("#form_subject")[0].value,"message_html":$("#form_message")[0].value});setTimeout(function(){var alertBox='<div class="alert '+'alert-success'+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+'Contact form successfully submitted. Thank you, I will get back to you soon!'+'</div>';$('#contact-form').find('.messages').html(alertBox);$("#form_email")[0].value="";$("#form_name")[0].value="";$("#form_subject")[0].value="";$("#form_message")[0].value="";return false;},10000);}catch(err){var alertBox='<div class="alert '+'alert-danger'+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+'There was an error while submitting the form. Please try again later'+'</div>';$('#contact-form').find('.messages').html(alertBox);return false;}};$(window).load(function(){var $gallery=$('.gallery').isotope({});$('.gallery').isotope({itemSelector:'.item-img',transitionDuration:'0.5s',});$('.filtering').on('click','button',function(){var filterValue=$(this).attr('data-filter');$gallery.isotope({filter:filterValue});});$('.filtering').on('click','button',function(){$(this).addClass('active').siblings().removeClass('active');});});
