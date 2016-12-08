(function() {

  var drawCircle = function( context, x, y, radius ) {

    context.beginPath();
    context.moveTo( x + radius, y );
    context.arc(x, y, radius, degToRad( 0 ), degToRad( 360 ) );
    context.fill();
  };

  var degToRad = function( degrees ) {
    return ( degrees * Math.PI ) / 180;
  };

  var app = function() {

    var drawing = false;
    var brushSize = 25;

    var canvas = document.querySelector( '#main-canvas' );
    console.log( "canvas:", canvas );
    var context = canvas.getContext( '2d' );
    console.log( "context:", context );
    var colorPicker = document.querySelector( '#color-picker' );
    var brushSizePicker = document.querySelector( '#brush-size');

    canvas.onmousedown = function( ev ) {
      console.log( "onmousedown" );
      drawing = true;
    };

    canvas.onmouseup = function( ev ) {
      console.log( "mouseup" );
      drawing = false;
    };

    canvas.onmousemove = function( ev ) {
      // console.log( "mousemove" );
      if ( drawing ) {
        drawCircle( context, ev.layerX, ev.layerY, brushSize );
      }
    };

    colorPicker.onchange = function( ev ){
      context.fillStyle = this.value;
    };

    brushSizePicker.value = 25;

    brushSizePicker.onchange = function( ev ){
      brushSize = parseFloat( this.value );
    };

  };


  window.onload = app;

})();
