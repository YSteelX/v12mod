const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, m, args) => {
  if(!m.member.hasPermission("KICK_MEMBERS")) return m.channel.send('Yetkin Yok!!')
  if(!m.guild.me.hasPermission("KICK_MEMBERS")) return m.channel.send('Yetkim Yok!!')

  const member = m.mentions.members.first() || m.guild.members.cache.get(args[0]);

  if(!member) return m.channel.send('Kullanıcı Belirt!');
  if(!member.bannable) return m.channel.send('Bu Kullanıcıyı Kickleyemem...');

  if(member.id === m.author.id) return m.channel.send('Aptal Orospu Çocuğu Kendini Kickleyemezsin');

  let reason = args.slice(1).join(" ");

  member.kick().catch(err => { 
    m.channel.send('Yanlış Giden Bir Şey Var')
      console.log(err)
  })

  const basari = new Discord.MessageEmbed()
  .setTitle('Kullanıcı Başarıyla Kicklendi!')
  .setThumbnail(member.user.displayAvatarURL())
  .addField('Kicklenen:', member)
  .addField('Kickleyen:', m.author)
  .addField('Sebep:', reason)
  .setFooter(`Kick Sistemi!`)
  .setTimestamp()

  m.channel.send(basari);


}

exports.config = {
  name: "kick",
  guildOnly: true,
  aliases: [],
};