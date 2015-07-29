$(document).ready(function() {

  var text1 = "<article class=\"home \" data-price=\"300000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$300,000</h4></article>";

  var text2 = "<article class=\"home \" data-price=\"600000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$600,000</h4></article>";

  var text3 = "<article class=\"home \" data-price=\"700000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$700,000</h4></article>";

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

  $('.low').on('click',function(){
    var tempArray = [];
    for(i=0; i < $('.home').length; i++){
      var dataPrice = $('.home')[i].dataset.price;
      tempArray.push(parseInt(dataPrice));
    }
    console.log(tempArray.sort(function(a,b){return a-b}));

    for (var i = 0; i < $('.home').length; i++) {
      for (var j = 0; j < $('.home').length; j++) {
        if(parseInt($('.home')[j].dataset.price) === tempArray[i]){
          $('.image-container').append($('.home')[j]);
        }
      }
    }
  });

  $('.high').on('click',function(){
    var tempArray = [];
    for(i=0; i < $('.home').length; i++){
      var dataPrice = $('.home')[i].dataset.price;
      tempArray.push(parseInt(dataPrice));
    }
    console.log(tempArray.sort(function(a,b){return b-a}));

    for (var i = 0; i < $('.home').length; i++) {
      for (var j = 0; j < $('.home').length; j++) {
        if(parseInt($('.home')[j].dataset.price) === tempArray[i]){
          $('.image-container').append($('.home')[j]);
        }
      }
    }

  });

  //append function that appends item to start of container
  //picks it out by its data price


});

