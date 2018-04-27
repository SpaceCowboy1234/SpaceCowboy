const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Command List =\n\n[Use ${settings.prefix}help <commandname> for details]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= Command: ${command.help.name} = \n${command.help.description}\nUsage: ` + settings.prefix + `${command.help.usage}`, {code:'asciidoc'});
    } else {
      message.channel.send(`Command: ${args[0]} not found. Please double check spelling!`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'commands'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands and more info on single commands',
  usage: 'help [command]'
};