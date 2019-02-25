$(document).ready(function(){
  // btn control
  $('.btn--calculator--control').click(function(){
    var control = $(this).attr('value');
    var output = $('.calculator__table--output').attr('value');

    // filter last 
    var lastValue = $('.calculator__table--output').attr('value').slice(-1);
    if(lastValue == '/' || lastValue == '*' || lastValue == '+' || lastValue == '-'){
      output = output.slice(0,-1);
    }
    // output
    $('.calculator__table--output').attr('value',output + control);
  });

  // btn number
  $('.btn--calculator--number').click(function(){
    var number = $(this).attr('value');
    var outputStatus = $('.calculator__table--output').attr('data-status');

    // filter last 
    var value = $('.calculator__table--output').attr('value');
    if(value == 0 || outputStatus == 'output'){
      $('.calculator__table--output').attr('value','');
      $('.calculator__table--output').attr('data-status','');
    }
    // output
    var output = $('.calculator__table--output').attr('value');
    $('.calculator__table--output').attr('value',output + number);
  });

  // btn comma
  $('.btn--calculator--comma').click(function(){
    var number = $(this).attr('value');

    // output
    var output = $('.calculator__table--output').attr('value');
    $('.calculator__table--output').attr('value',output + number);
  });
  
  // btn delete
  $('.btn--calculator--delete').click(function(){
    var output = $('.calculator__table--output').attr('value');
    output = output.slice(0,-1);
    
    var outputStatus = $('.calculator__table--output').attr('data-status');

    $('.calculator__table--output').attr('value', output);
    if(output == ''|| outputStatus == 'output'){
      $('.calculator__table--output').attr('value',0);
    }
  });

  // btn clear
  $('.btn--calculator--clear').click(function(){
    $('.calculator__table--output').attr('value',0);
    $('.calculator__table--output').attr('data-status','');

  });

  // btn equal
  $('.btn--calculator--equal').click(function(){
    var output = $('.calculator__table--output').attr('value');
    output = eval(output);
    $('.calculator__table--output').attr('value', output);
    $('.calculator__table--output').attr('data-status','output');
  });

  $('body').bind("keydown",function(event){
    var value = event.keyCode;
    console.log(value);
    
    $('.btn--calculator[keycode='+value+']').click();
  });
});