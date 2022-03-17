const Discord = require("discord.js");

exports.helpEmbed = new Discord.MessageEmbed()
  .setColor("#0099ff")
  .setTitle("Help commands or something")
  .setFooter("BOT made by @WishyWashy#5280", "https://i.imgur.com/ktJBGZo.jpg");

exports.errorMessage = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setTitle("⛔ Error: Unknown Command")
  .setFooter("For more information view !help");

exports.profileTemplate = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setColor("#0099ff")
  .setTitle("Some title")
  .setAuthor(
    "Some name",
    "https://i.imgur.com/AfFp7pu.png",
    "https://discord.js.org"
  )
  .setDescription("Some description here")
  .setThumbnail("https://i.imgur.com/AfFp7pu.png")
  .addFields(
    { name: "Regular field title", value: "Some value here" },
    { name: "\u200B", value: "\u200B" },
    { name: "Inline field title", value: "Some value here", inline: true },
    { name: "Inline field title", value: "Some value here", inline: true }
  )
  .addField("Inline field title", "Some value here", true)
  .setImage("https://i.imgur.com/AfFp7pu.png")
  .setTimestamp()
  .setFooter({
    text: "Some footer text here",
    iconURL: "https://i.imgur.com/AfFp7pu.png",
  });
