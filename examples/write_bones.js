const fs = require('fs');
const { SlippiGame } = require("@slippi/slippi-js");

//const game = new SlippiGame("slp/CharID.slp");
const game = new SlippiGame("slp/cam.slp");

const rawData = game.getBones();

const slicedData = rawData.map(data => {
    const boneCount = data.boneCount;
    const trimmedBones = data.bones.slice(0, boneCount);
    return {
        ...data,
        bones: trimmedBones
    };
})//.slice(0, 500);

const dataJson = JSON.stringify(slicedData, null, 2);
const filePath = 'data.json';

fs.writeFileSync(filePath, dataJson);
console.log(`Data saved to ${filePath}`);
