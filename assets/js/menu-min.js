$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>100?$(".logo.front").removeClass("hidden"):$(".logo.front").addClass("hidden")}),$(".mobile-toggle").click(function(){$(".navigation").hasClass("open-nav")?$(".navigation").removeClass("open-nav"):$(".navigation").addClass("open-nav")})});