exports.run = (client, message, args) => {

  const commandNames = Array.from(client.commands.keys());
  message.channel.send(`Reloading all commands...`).then(m => {
    for (let index = 0; index < commandNames.length; index++) {
      client.reload(commandNames[index])
    }
    m.edit("Successfully reloaded all commands!");
  })




};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reloadall',
  description: 'Reloads all command files',
  usage: 'reloadall'
};