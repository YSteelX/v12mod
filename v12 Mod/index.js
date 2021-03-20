const Discord = require("discord.js")     
const client = new Discord.Client();       
const db = require("wio.db");
const ayarlar = require("./ayarlar.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     
const chalk = require('chalk')
const {durum} = require('./ayarlar.js')
client.on('ready',()=>{
  client.user.setActivity(durum)
});
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  var basari = chalk.red(`${files.length} Komut Yüklenecek.`)
  console.log(basari);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    var upload = chalk.yellow(`${props.config.name} Komutu Yüklendi.`)
    console.log(upload);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})
/*client.on('guildMemberAdd', (member)=>{
  const otorol = ""
  member.roles.add(otorol)
})
OTOROL 
*/
client.login(ayarlar.token)
