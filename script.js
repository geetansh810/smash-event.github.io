// function myFunction() {
//   var x = document.getElementById("navbar-right");
//   if (x.className === "nav-item") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav-item";
//   }
// }
    


//Menu toggle-effect
$(document).ready(
  function(){
  $(".menu-icon").on("click",function(){
    $("nav ul").toggleClass("showing");
  });
});

if($(window).width() > 580){

  //Scrolling Effect
$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('nav').addClass('black');
    $('#top-register-float').css("font-size","1.5rem");
    // $('.logo').css("margin-top","10.5%");
  }
  else{
    $('nav').removeClass('black')
    $('#top-register-float').css("font-size","2rem")
    // $('.logo').css("margin-top","12.5%");
  }
})

}

if($(window).width() < 580){

  $(window).on('scroll', function(){
    if($(window).scrollTop()) {
      $('#top-register-float').css("font-size","1.5rem");
      $('.logo').css("margin-top","6.5%");
    }
    else{
      $('#top-register-float').css("font-size","2rem")
      $('.logo').css("margin-top","10.5%");
    }
  })
  



}

