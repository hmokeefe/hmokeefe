/* put in document piece at the beginning */
console.log("hello");

$(".close, .hamburger").click(function(e){
  e.preventDefault();
  $(".main-nav").toggleClass('open-nav');
});
