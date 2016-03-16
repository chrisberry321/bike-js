(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
