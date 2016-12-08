var myDrawCircle = function( context, x, y, radius ) {
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

  // context.translate( 0.5, 0.5 );

  // context.imageSmoothingQuality = 'high';
  // context.fillStyle = "dodgerblue";
  // context.fillRect( 10, 10, 50, 50 );

  // context.beginPath();
  // context.moveTo( 100, 100 );
  // context.lineTo( 100, 200 );
  // context.stroke();

  context.strokeStyle = 'dodgerblue';
  // context.beginPath();
  // context.moveTo( 200, 200 );
  // context.lineTo( 200, 300 );
  // context.lineTo( 100, 300 );
  // context.closePath();
  // context.stroke();

  context.lineWidth = 20;

  myDrawCircle( context, 300, 300, 100 );

  // for ( var x = 0; x < 100; x += 3 ) {
  //   myDrawCircle( context, 300 + x, 300 + x, 100 - x );
  // }

  var drawCircle = function( x , y ) {
    context.beginPath();
    context.arc( x, y, 50, 0, Math.PI * 2, true );
    context.stroke();
  }

  canvas.ondrag = function( ev ) {
    console.log("on drag called");
    drawCircle( ev.layerX, ev.layerY );
  };

  var img = document.createElement( 'img' );
  img.src = "http://www.codebearsoftware.com/BearCoding.jpg";

  var drawBear = function( x, y ) {
    context.drawImage( img, x - 50, y - 50, 100, 100 );
  }

  var handleColorPicked = function() {
    // console.log( this.value );
    context.strokeStyle = this.value;
  }

  var colorPicker = document.querySelector( '#color-picker' );
  colorPicker.onchange = handleColorPicked;
}

window.onload = app;
