const Discord = require("discord.js");
const embed = require("./embed.js");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
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
      db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        targetChannel.send("Connected to the Item database.");
      });
      break;
    default:
      targetChannel.send(embed.errorMessage);
  }
}

module.exports.trySwitch = trySwitch;
