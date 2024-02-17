const fs = require('fs');
const { SlippiGame } = require("@slippi/slippi-js");

//const game = new SlippiGame("slp/CharID.slp");
const game = new SlippiGame("slp/bone_split_msg.slp");

// const frames = game.getFrames();


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

    //let boneData = frames[0].frame[0]
    //boneData.bones = boneData.bones.slice(0, boneCount)

    const boneData = game.getBones();

    const dataJson = JSON.stringify(boneData, null, 2);
    const filePath = 'data.json';
  
    fs.writeFileSync(filePath, dataJson);
  
    console.log(`Data saved to ${filePath}`);
//console.log(frames[0].frame[1]);