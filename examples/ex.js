const { SlippiGame } = require("@slippi/slippi-js");

const game = new SlippiGame("slp/use_quat.slp");

const frames = game.getFrames();

frames[0].frame.forEach((frame)=>{
    const bone4 = frame.bones[4];
    console.log(bone4)
})

//console.log(frames[0].frame[84].bones[4]);