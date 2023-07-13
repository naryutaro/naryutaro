function FixedAnime() {
  var elemTop = $('#nav-in').offset().top;
  var scroll = $(window).scrollTop();
  if(scroll <= 20){
    $('#header').addClass('DownMove');
  } else if (scroll >= elemTop){
      $('#header').removeClass('UpMove');
      $('#header').addClass('DownMove');

    }else{
      if($('#header').hasClass('DownMove')){
        $('#header').removeClass('DownMove');
        $('#header').addClass('UpMove');
      }
    }
}
$('#main-navi a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = Math.round($(elmHash).offset().top-70);
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});
$(window).scroll(function () {
  FixedAnime();
});
$(window).on('load', function () {
  FixedAnime();
});

function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav-sp').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );

