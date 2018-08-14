const { spawn } = require('child_process');
const path = require("path");

var filePath = path.join(__dirname, "videos/sample1");
var output = path.join(__dirname, "videos");
var quality = 720;






const ffmpeg = spawn('ffmpeg', ['-i', `${filePath}.mp4`, '-vf', `select=-between(t,2,6)+between(t,15,24)`, '-vsync', '0', 'out.png']);

ffmpeg.stderr.on('data', (data) => {
    console.log(`${data}`);
});
ffmpeg.on('close', (code) => {
    resolve();
})