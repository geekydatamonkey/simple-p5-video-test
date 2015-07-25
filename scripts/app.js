'use strict';

var video;

function setup() {
  createCanvas(640, 480);

  // when video is created it's added
  // to the DOM by default as a <video>
  // element
  video = createVideo(['assets/rubiks.ogg']);

  // we hide the <video> element
  // since we want to only see our modifications
  // in the <canvas>
  video.hide();

  // loop it so that there's always data to grab
  // in draw()
  video.loop();


}

function draw() {

  video.loadPixels();

  for (var i = 0, l = video.pixels.length; i + 4 < l; i += 4) {

    // change the red pixel
    video.pixels[i] = (video.pixels[i] + 100) % 255;
  }

  // save our changed pixels
  video.updatePixels();

  // render the video's pixels to canvas  
  image(video, 0, 0);
}