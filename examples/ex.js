const { SlippiGame } = require("@slippi/slippi-js");

const game = new SlippiGame("slp/full_test.slp");

const bones = game.getBones();

// function uint8ArrayToBytesString(uint8Array) {
//     let bytesString = '';
//     for (let i = 0; i < uint8Array.length; i++) {
//         bytesString += uint8Array[i].toString(16).padStart(2, '0') + ' '; // Convert to hexadecimal representation
//     }
//     return bytesString.trim(); // Trim any trailing space
// }
// const bytesString = uint8ArrayToBytesString(bones[250].rawdata[4]);


// console.log(bytesString);
console.log(bones[74].frame);
console.log(bones[74].bones[0]);
// console.log(bones[476].rawdata[0]);