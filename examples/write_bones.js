const fs = require('fs');
const { SlippiGame } = require("@slippi/slippi-js");

//const game = new SlippiGame("slp/CharID.slp");
const game = new SlippiGame("slp/split_msgv2.slp");

const rawData = game.getBones();


//     const boneCount = frames[0].frame[0].boneCount
//     let boneData = frames[0].frame.map(frame => {
//         return {
//             "frame": frame.frame,
//             "playerIndex": frame.playerIndex,
//             "charID": frame.charID,
//             "boneCount": frame.boneCount,
//             "bones": frame.bones.slice(0, boneCount),
//         }
//     });

    const boneCount = rawData[0].boneCount
    const boneData = rawData[0].bones
    const slicedData = rawData.slice(0, 5000);
    const dataJson = JSON.stringify(slicedData, null, 2);
    const filePath = 'data.json';
  
    fs.writeFileSync(filePath, dataJson);
  
    console.log(`Data saved to ${filePath}`);
// console.log(rawData[0]);