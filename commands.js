const Discord = require("discord.js");
const embed = require("./embed.js");
const profiles = require("./profiles.js");
const path = "../NSEFantasyBot/src/NSEdatabase.db";

async function trySwitch(messageClean, targetChannel, message, err) {
  let commandIdentifier = messageClean.substring(1).split(" ")[0];
  let primaryCommand = messageClean.split(" ")[1];

  switch (commandIdentifier) {
    case "help":
      await message.author.send(embed.helpEmbed).catch(() => {
        err = true;
        embed.errorMessage.setTitle("⛔ Error: Cannot Direct Message");
        embed.errorMessage.setFooter(
          "Server Privacy Settings -> Allow direct messages"
        );
        message.react("❎");
        message.reply(embed.errorMessage);
      });
      if (!err) {
        message.react("✅");
      }
      err = false;
      break;
    case "player":
      if (primaryCommand != undefined) {
        let primaryCommandInt = parseInt(primaryCommand);
        if (primaryCommandInt > 0) {
          let data = profiles.getProfile(path, targetChannel, primaryCommand);
          console.log(`DATA: ${data}`);
          // I need to print an embed
        } else {
          embed.errorMessage.setTitle("⛔ Error: Unknown Player ID");
          message.reply(embed.errorMessage);
        }
      } else {
        embed.errorMessage.setTitle("⛔ Error: Unknown Player ID");
        message.reply(embed.errorMessage);
      }
      break;
    default:
      targetChannel.send(embed.errorMessage);
  }
}

module.exports.trySwitch = trySwitch;
