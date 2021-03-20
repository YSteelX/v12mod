const Discord = require("discord.js"),
client = new Discord.Client();


module.exports.run = async (client, m, args) => {    
    const üye = m.mentions.members.first()
    const kanal = m.member.voiceChannel.id
    if(!üye) return m.reply('Üye Belirtmelisin!')
    if(!m.member.voiceChannel) return m.reply('Bu Komudu Kullanmak İçin Seslide Olmak Zorundasın!')
    if(!üye.voiceChannel) return m.reply('Belirttiğin Üye Seslide Değil!')
    üye.setVoiceChannel(kanal)
    const becermek = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setColor('RANDOM')
    .setDescription(`<@${üye.id}> Adlı Üye <@${m.author.id}> Adlı Üyenin Yanına Çekildi`)
    .setTimestamp()
    m.channel.send(becermek)
    //YSteelX
}

exports.config = {
  name: "çek",
  guildOnly: true,
  aliases: ["ç"],
};