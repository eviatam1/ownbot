const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.channel.send("");
  message.channel.send("test"), message.react('👎'), message.react('👍')
}

module.exports.help = {
    name: "Q"
  }