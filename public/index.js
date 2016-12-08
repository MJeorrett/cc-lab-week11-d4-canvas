var drawCircle = function( context, x, y, radius ) {
  context.moveTo( x + radius, y );
  context.arc(x, y, radius, degToRad( 0 ), degToRad( 360 ) );
  context.stroke();
}

var degToRad = function( degrees ) {
  return ( degrees * Math.PI ) / 180;
}

var app = function() {
  var canvas = document.querySelector( '#main-canvas' );
  console.log( "canvas:", canvas );
  var context = canvas.getContext( '2d' );
  console.log( "context:", context );
}

window.onload = app;
