const settings = require('../settings.json');
const discord = require("discord.js");
exports.run = (client, message, params) => {
  
    const embed = new discord.RichEmbed()
    .setTitle(`Download Links`)
    .addField(`x86`, `No Download Yet`)
    .addField(`x64`, `[Download](https://drive.google.com/open?id=1PKgU46_cssJTGY_xC4Kt0r9hjOZpMKXg)`)
    .addField(`Mac`, `No Download Yet`)
    .addField(`Linux`, `No Download Yet`)
    .addField(`Android`, `TBC`)

    message.channel.send("", {
        embed: embed
    }).catch(console.error)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dl'],
  permLevel: 0
};

exports.help = {
  name: 'download',
  description: 'Displays all the available download links',
  usage: 'download'
};