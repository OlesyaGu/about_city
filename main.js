$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
$("body,html").animate({
scrollTop:$("#" + $(this).data('value')).offset().top
},1000)

})
let min=document.querySelector('input[name="min"]');
let max=document.querySelector('input[name="max"]');
