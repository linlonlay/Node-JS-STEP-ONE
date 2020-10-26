const qr = require('qr-image');
const fs = require('fs');
qr.image("I LOVE YOU" ,{type : 'png' , size: 20}).pipe(fs.createWriteStream('love.png'));
// const rawName = process.argv[2];
// const rawimg  = process.argv[3];
// qr.image(rawName ,{size:20, type:'png'}).pipe(fs.createWriteStream(rawimg));