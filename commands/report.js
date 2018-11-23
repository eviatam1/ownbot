const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("mention a user");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cant report this person");
    let reason = message.content.split(' ').slice(2).join(' ')

    message.delete().catch(O_o=>{});

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("RANDOM")
    .addField("User", `${member}`,true)
    .addField("Staff", `${message.author}`,true)
    .addField("Reason", reason,true)

    let reportschannel = message.guild.channels.find(`name`, "log")
    if(!reportschannel) return message.channel.send("Can't find channel called `log`");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.channel.send(`**${member.user.username}#${member.user.discriminator} has been reported**`);

  }

module.exports.help = {
  name:"report"
}