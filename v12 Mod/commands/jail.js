const Discord = require("discord.js"),
client = new Discord.Client();


module.exports.run = async (client, m, args) => {    
    if(!m.member.hasPermission('ADMINISTRATOR')) return m.reply('Yetersiz Yetki!')
    const jail_rol_id = "Jail Rol İD"
    const ayp = m.mentions.members.first()
    if(!ayp) return m.reply('Üye Belirt!')
    ayp.roles.set([jail_rol_id])
}

exports.config = {
  name: "jail",
  guildOnly: true,
  aliases: ["cezalı"],
};