$(document).ready(function(){
  $('.question').click(function(){
    $(this).next().slideToggle();
  });
});