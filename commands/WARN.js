const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("You need specific user");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have Permissions");
    if(member.hasPermission("ADMINISTRATOR")) return message.channel.send("You cant warn this user");
    let reason = message.content.split(' ').slice(2).join(' ')
    if(!reason) return message.channel.send("You need write a reason")

    message.delete().catch(O_o=>{});

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setColor("RANDOM")
    .addField("User",  `${member}`)
    .addField("Staff", `${message.author}`)
    .addField("Reason", reason)

    let log = message.guild.channels.find(`name`, "warns")
    if(!log) return message.channel.send("I cant find channel called `mod-log`");

    message.delete().catch(O_o=>{});
    log.send(warnEmbed);
    message.channel.send(`**${member.user.tag}** has been Warned`);

                         }

module.exports.help = {
  name:"warn"
}