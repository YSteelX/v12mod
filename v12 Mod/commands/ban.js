const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, m, args) => {
  if(!m.member.hasPermission("BAN_MEMBERS")) return m.channel.send('Yetkin Yok!!')
  if(!m.guild.me.hasPermission("BAN_MEMBERS")) return m.channel.send('Yetkim Yok!!')

  const member = m.mentions.members.first() || m.guild.members.cache.get(args[0]);

  if(!member) return m.channel.send('Kullanıcı Belirt!');
  if(!member.bannable) return m.channel.send('Bu Kullanıcıyı Banlayamam...');

  if(member.id === m.author.id) return m.channel.send('Aptal Orospu Çocuğu Kendini Banlayamazsın');

  let reason = args.slice(1).join(" ");

  if(!reason) reason = 'Belirtilmemiş - YSteelX';

  member.ban({ reason: `${reason}` }).catch(err => { 
    m.channel.send('Yanlış Giden Bir Şey Var')
      console.log(err)
  })

  const basari = new Discord.MessageEmbed()
  .setTitle('Kullanıcı Başarıyla Banlandı!')
  .setThumbnail(member.user.displayAvatarURL())
  .addField('Banlanan:', member)
  .addField('Banlayan:', m.author)
  .addField('Sebep:', reason)
  .setFooter(`Ban Sistemi!`)
  .setTimestamp()

  m.channel.send(basari);


}

exports.config = {
  name: "ban",
  guildOnly: true,
  aliases: ["sie"],
};