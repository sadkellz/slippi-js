const { SlippiGame } = require("@slippi/slippi-js");

const game = new SlippiGame("slp/cam.slp");

const bones = game.getBones();

// function uint8ArrayToBytesString(uint8Array) {
//     let bytesString = '';
//     for (let i = 0; i < uint8Array.length; i++) {
//         bytesString += uint8Array[i].toString(16).padStart(2, '0') + ' '; // Convert to hexadecimal representation
//     }
//     return bytesString.trim(); // Trim any trailing space
// }
// const bytesString = uint8ArrayToBytesString(bones[0].rawdata[0]);


// console.log(bytesString);
console.log(bones[50].camData);
