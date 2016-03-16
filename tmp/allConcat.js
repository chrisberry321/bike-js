$(document).ready(function() {
  $('#bikeinfo').submit(function(event) {
    event.preventDefault();
    var color = $('#color').val();
    var manufacturer = $('#manufacturer').val();
    $('color').val("");
    $('manufacturer').val("");
    $.get('http://bikeindex.org/api/v2/bikes_search?colors=' + color + '&manufacturer=' + manufacturer).then(function(response) {


      for (var i =0; i<25; i++){
        var current = response.bikes[i];
        if(current.year){
        $('.results').append('<li>' + current.year + '</li>');

      }
    }


    });
  });
});
