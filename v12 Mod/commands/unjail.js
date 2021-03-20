const Discord = require("discord.js"),
client = new Discord.Client();


module.exports.run = async (client, m, args) => {    
    if(!m.member.hasPermission('ADMINISTRATOR')) return m.reply('Yetersiz Yetki!')
    const jail_rol_id = "Jail Rol İD"
    const ayp = m.mentions.members.first()
    ayp.roles.remove(jail_rol_id)    
}

exports.config = {
  name: "unjail",
  guildOnly: true,
  aliases: ["affet"],
};