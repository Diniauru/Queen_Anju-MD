/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                                                                                         //
//________/\\\________/\\\________/\\\__/\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\__/\\\\\_____/\\\_______________/\\\\\\\\\_____/\\\\\_____/\\\______/\\\\\\\\\\\__/\\\________/\\\____________/\\\\____________/\\\\__/\\\\\\\\\\\\____          //
// _____/\\\\/\\\\____\/\\\_______\/\\\_\/\\\///////////__\/\\\///////////__\/\\\\\\___\/\\\_____________/\\\\\\\\\\\\\__\/\\\\\\___\/\\\_____\/////\\\///__\/\\\_______\/\\\___________\/\\\\\\________/\\\\\\_\/\\\////////\\\__         //
//  ___/\\\//\////\\\__\/\\\_______\/\\\_\/\\\_____________\/\\\_____________\/\\\/\\\__\/\\\____________/\\\/////////\\\_\/\\\/\\\__\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\//\\\____/\\\//\\\_\/\\\______\//\\\_        //
//   __/\\\______\//\\\_\/\\\_______\/\\\_\/\\\\\\\\\\\_____\/\\\\\\\\\\\_____\/\\\//\\\_\/\\\___________\/\\\_______\/\\\_\/\\\//\\\_\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\\///\\\/\\\/_\/\\\_\/\\\_______\/\\\_       //
//    _\//\\\______/\\\__\/\\\_______\/\\\_\/\\\///////______\/\\\///////______\/\\\\//\\\\/\\\___________\/\\\\\\\\\\\\\\\_\/\\\\//\\\\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\__\///\\\/___\/\\\_\/\\\_______\/\\\_      //
//     __\///\\\\/\\\\/___\/\\\_______\/\\\_\/\\\_____________\/\\\_____________\/\\\_\//\\\/\\\___________\/\\\/////////\\\_\/\\\_\//\\\/\\\_________\/\\\_____\/\\\_______\/\\\___________\/\\\____\///_____\/\\\_\/\\\_______\/\\\_     //
//      ____\////\\\//_____\//\\\______/\\\__\/\\\_____________\/\\\_____________\/\\\__\//\\\\\\___________\/\\\_______\/\\\_\/\\\__\//\\\\\\__/\\\___\/\\\_____\//\\\______/\\\____________\/\\\_____________\/\\\_\/\\\_______/\\\__    //
//       _______\///\\\\\\___\///\\\\\\\\\/___\/\\\\\\\\\\\\\\\_\/\\\\\\\\\\\\\\\_\/\\\___\//\\\\\___________\/\\\_______\/\\\_\/\\\___\//\\\\\_\//\\\\\\\\\_______\///\\\\\\\\\/_____________\/\\\_____________\/\\\_\/\\\\\\\\\\\\/___   //
//        _________\//////______\/////////_____\///////////////__\///////////////__\///_____\/////____________\///________\///__\///_____\/////___\/////////__________\/////////_______________\///______________\///__\////////////_____  //
//                                                                                                                                                                                                                                         //
//                                           ===========================================================*CREATED BY GAMING RASH*=====================================================                                                      //
//                                                                                                                                                                                                                                         //       
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ac0DBDgK#jQCqJYJidUvWDFCsK8UbN5cOfQfhkZ0Ds5ydQBAduP0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/adc46970456c26cad0c15.jpg",
PREFIX: process.env.PREFIX || ".",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, QUEEN ANJU IS ALIVE...\n\nOWNER: JANITH RASHMIKA\n\nTHANKS FOR USING QUEEN ANJU MD\n\n> *© Qᴜᴇᴇɴ ᴀɴᴊᴜ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*/n/n*> ɢɪᴛʜᴜʙ :* github.com/Mrrashmika/Queen_Anju-MD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94717775628",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
WC_GB: process.env.WC_GB || "true",  //To turn on or off welcome msg and goodbye msg
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
BAD_WORDS: process.env.BAD_WORDS || ["wtf", "mia", "xxx","fuck","sex"],
ANTI_LINK: process.env.ANTI_LINK || "true",
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
};

