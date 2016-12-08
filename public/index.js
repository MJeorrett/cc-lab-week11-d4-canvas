(function() {

  var drawing = false;

  var app = function() {

    var degToRad = function( degrees ) {
      return ( degrees * Math.PI ) / 180;
    };

    var drawCircle = function( context, x, y, radius ) {
      console.log( "drawCircle called");
      context.beginPath();
      context.moveTo( x + radius, y );
      context.arc(x, y, radius, degToRad( 0 ), degToRad( 360 ) );
      context.fill();
    };

    var canvas = document.querySelector( '#main-canvas' );
    console.log( "canvas:", canvas );
    var context = canvas.getContext( '2d' );
    console.log( "context:", context );
    var colorPicker = document.querySelector( '#color-picker' );

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
        drawCircle( context, ev.layerX, ev.layerY, 100 );
      }
    };

    colorPicker.onchange = function( ev ){
      context.fillStyle = this.value;
    };

  };


  window.onload = app;

})();
