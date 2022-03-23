const ffmpeg = require('fluent-ffmpeg');
const inputVideo = require('../../../Downloads/LayLow.mp4');
console.log(inputVideo);
const video = './audio/laylow.mp4';
console.log(video)
/*
ffmpeg()
  .input(inputVideo + '.mp4')
  .output(inputVideo + '.wav')
  .run();
  */