const Discord = require("discord.js");
const embed = require("./embed.js");
const profiles = require("./profiles.js");
const path = "../NSEFantasyBot/src/NSEdatabase.db";

async function trySwitch(messageContent, targetChannel, message, err) {
  switch (messageContent) {
    case "help":
      await message.author.send(embed.helpEmbed).catch(() => {
        err = true;
        embed.errorMessage.setTitle("⛔ Error: Cannot Direct Message");
        message.react("❎");
        message.reply(embed.errorMessage);
      });
      if (!err) {
        message.react("✅");
      }
      err = false;
      break;
    case "player":
      profiles.read(path, targetChannel);
      break;
    default:
      targetChannel.send(embed.errorMessage);
  }
}

module.exports.trySwitch = trySwitch;
