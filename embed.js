const Discord = require("discord.js");

exports.helpEmbed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Help commands or something")
  .setFooter("BOT made by @WishyWashy#5280", "https://i.imgur.com/ktJBGZo.jpg");

exports.errorMessage = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setTitle("⛔ Error: Unknown Command")
  .setFooter("For more information view !help");
