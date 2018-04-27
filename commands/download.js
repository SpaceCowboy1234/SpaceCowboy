const settings = require('../settings.json');
const discord = require("discord.js");
exports.run = (client, message, params) => {
  
    const embed = new discord.RichEmbed()
    .setTitle(`Download Links`)
    .setColor('RANDOM')
    .setDescription(`
📂 x86 [No Download]()
📂 x64 [Download](https://drive.google.com/open?id=1PKgU46_cssJTGY_xC4Kt0r9hjOZpMKXg)
📂 Mac: [No Download]()
📂 Linux: [No Download]()
📂 Android: [TBC]()
    `)

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
  description: 'Displays all the available download links for P1',
  usage: 'download'
};