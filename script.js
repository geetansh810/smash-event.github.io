// function myFunction() {
//   var x = document.getElementById("navbar-right");
//   if (x.className === "nav-item") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-item";
//   }
// }
    


//Menu toggle-effect
$(document).ready(function(){
  $(".menu-icon").on("click",function(){
    $("nav ul").toggleClass("showing");
  });
});

//Scrolling Effect
$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('nav').addClass('black');
    $('#logo-black').addClass('d-none');
    $('#logo-white').removeClass('d-none');
    $('#top-register-float').css("font-size","1.5rem");
    // $('.logo').css("margin-top","10.5%");
  }
  else{
    $('nav').removeClass('black')
    $('#logo-black').removeClass('d-none');
    $('#logo-white').addClass('d-none');
    $('#top-register-float').css("font-size","2rem")
    // $('.logo').css("margin-top","12.5%");
  }
})