const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  
  message.channel.send("sending...").then(msg => {msg.delete(2000)});
   message.guild.members.map(x=>x.sendMessage(args.join(" ")))
   if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
}

module.exports.help = {
    name: "dm"
}

