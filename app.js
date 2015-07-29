$(document).ready(function() {

//creating new home variables to append
  var text1 = "<article class=\"home \" data-price=\"300000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$300,000</h4></article>";

  var text2 = "<article class=\"home \" data-price=\"600000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$600,000</h4></article>";

  var text3 = "<article class=\"home \" data-price=\"700000\"> <img src=\"img/one.jpg\" width=\"100%\"><h4>$700,000</h4></article>";

//appending new home variables
  $(".image-container").append(text1, text2, text3);

//adding functionality to light background button
  $('.light').on('click', function(){
    $('body').css('background-image', 'url(\'img/tileable_wood_texture.png\')');
  });

//adding functionality to dark background button
 $('.dark').on('click', function(){
    $('body').css('background-image', 'url(\'img/dark_wood.png\')');
  });

//creating a new circle button, forest
  var newCircle = '<span class=\"forest\"></span>';

//adds with to button box and appends new button
  $('.textures').css("width", "150px").append(newCircle);

//sets background image for forest button
  $('.forest').css('background-image', 'url(\'img/forest.jpg\')');

//adds functionality to new button
  $('.forest').on('click', function(){
    $('body').css({'background-image':'url(\'img/forest.jpg\')', 'background-size': 'cover' });
  });

//creates an array of prices of each home
  var dataPriceArray = [];
  for(i=0; i < $('.home').length; i++){
    var dataPrice = $('.home')[i].dataset.price;
    dataPriceArray.push(parseInt(dataPrice));
  }

//function that appends the entire home article to the container based on order of dataPriceArray
  function append(){
  for (var i = 0; i < $('.home').length; i++) {
    for (var j = 0; j < $('.home').length; j++) {
      if(parseInt($('.home')[j].dataset.price) === dataPriceArray[i]){
        $('.image-container').append($('.home')[j]);
      }
    }
  }
};

//sorts prices low to high and appends homes accordingly
  $('.low').on('click',function(event){
   event.preventDefault();
   dataPriceArray.sort(function(a,b){return a-b});
   append(dataPriceArray);
  });

//sorts prices high to low and appends homes accordingly
  $('.high').on('click',function(event){
    event.preventDefault();
    dataPriceArray.sort(function(a,b){return b-a});
    append(dataPriceArray);
    });

//showing one price range of houses

    // var $filters = $('label');
    // //array of labels
    // for (var i = 0; i < $('.home').length; i++) {

    // };




});


