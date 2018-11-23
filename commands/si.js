const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rainbow = ((1 << 24) * Math.random() | 0).toString(16); 

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Member Count`, `
    <:online:494501693073915914> Online: ${message.guild.members.filter(m=>m.presence.status == 'online').size}
    <:dnd:494501693757849610> DND: ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
    <:idle:494501693023584266> Idle: ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
    <:offline:494501692713336834> Offline: ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
    <:streamer:494501692956737536> Streaming: ${message.guild.members.filter(s => s.presence.status === 'streaming').size}
    👥 Users: ${message.guild.members.filter(member => !member.user.bot).size}
    🤖 Bots: ${message.guild.members.filter(member => member.user.bot).size}`)

    message.channel.send(serverembed)
  }
  
exports.help = {
    name: "members"
};