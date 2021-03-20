const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, m, args) => {    
    const üye = m.mentions.members.first()
    if(!üye) return m.reply('Üye Belirtmelisin!')
    const rol = m.mentions.roles.first()
    if(!rol) return m.reply('Rol Belirtmelisin!')
    üye.roles.add(rol).catch(err=>{
        return m.reply('Rolüm Verilecek Rolün Üstünde Olması Lazım!')
    })
}

exports.config = {
  name: "rol-ver",
  guildOnly: true,
  aliases: ["rolver","r-v"],
};