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

  var homes = $('.home');

//function that appends the entire home article to the container based on order of arr
  function append(arr){
  $('.image-container').hide();
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if(parseInt(homes[j].dataset.price) === arr[i]){
        $('.image-container').append(homes[j]);
      }
    }
  } $('.image-container').show();
}

//sorts prices low to high and appends homes accordingly
  $('.low').on('click',function(event){
   event.preventDefault();
   dataPriceArray.sort(function(a,b){
    return a-b;
    });
     append(dataPriceArray);
  });

//sorts prices high to low and appends homes accordingly
  $('.high').on('click',function(event){
    event.preventDefault();
    dataPriceArray.sort(function(a,b){
      return b-a;
    });
    append(dataPriceArray);
  });



//showing one price range of houses
  $('input').on('click', function(event){
    if(this.checked){
      var notChecked = $('input:not(:checked)');
      var rangeArr = [];
      var amount = $('input:checkbox:checked').val();
      var checked = $('input:checkbox:checked');
      var numAmount = parseInt(amount);
      var lowPrice = 0;

      if(checked[0] === true){
        console.log('testing');
      }

      for (var i = 0; i < dataPriceArray.length; i++) {
        if (dataPriceArray[i] < numAmount){
          rangeArr.push(dataPriceArray[i]);
        }
      }
      var totalRangeArr = [];
      for (var k = 0; k < rangeArr.length; k++) {
        for (var j = 0; j < dataPriceArray.length; j++) {
          if(parseInt(homes[j].dataset.price) === rangeArr[k]){
            totalRangeArr.push(homes[j]);
          }
        }
      }
      $('.image-container').html('');
      for (var l = 0; l < totalRangeArr.length; l++) {
        $('.image-container').append(totalRangeArr[l]);
      }
    }
    else {
      $('.image-container').append(homes);
    }
  });

});


