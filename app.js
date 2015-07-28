$(document).ready(function() {

  var text1 = "<article class=\"home \" data-price=\"30000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$300,000</h4></article>";

  var text2 = "<article class=\"home \" data-price=\"30000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$600,000</h4></article>";

  var text3 = "<article class=\"home \" data-price=\"30000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$700,000</h4></article>";

  $(".image-container").append(text1, text2, text3);

  $('.light').on('click', function(){
    $('body').css('background-image', 'url(\'img/tileable_wood_texture.png\')');
  });

 $('.dark').on('click', function(){
    $('body').css('background-image', 'url(\'img/dark_wood.png\')');
  });

  var newCircle = '<span class=\"forest\"></span>';

  $('.textures').append(newCircle);

  $('.forest').css('background-image', 'url(\'img/forest.jpg\')');

  $('.forest').on('click', function(){
    $('body').css({'background-image':'url(\'img/forest.jpg\')', 'background-size': 'cover' });
  });


});

