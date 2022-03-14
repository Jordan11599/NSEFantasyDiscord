const Discord = require("discord.js");
const config = require("./config.json");
const embed = require("./embed.js");
const profiles = require("./profiles.js");
const commands = require("./commands.js");

const token = config.token;
const client = new Discord.Client();
const err = false;

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  //Setting activity: "Now listening to !help"
  client.user.setActivity("!help", { type: "LISTENING" });
});

client.on("message", (message) => {
  messageClean = message.content.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");
  let targetChannel = client.channels.cache.get(message.channel.id);
  let messageContent = messageClean.substring(1);

  if (config.prefix === messageClean.charAt(0)) {
    commands.trySwitch(messageContent, targetChannel, message, err);
  }
});

client.on("error", console.error);
client.login(token); //Login token

/*
prefix command switch statment - needs to read messages
needs to read SQL data then display to embed


*/
