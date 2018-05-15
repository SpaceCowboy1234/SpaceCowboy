const {RichEmbed} = require("discord.js");
const settings = require('../settings.json');
exports.run = (client, message, args) => {
    /*if (!args[0]) {
       return message.channel.send(`Please input a player's name - use **${settings.prefix}help player** for more info!`);
        
    }*/

    //const search = args.splice(0, args.length).join(" ").toLowerCase()

//Badges
    let kbadge = "0"
    let jbadge = "8"
    let ubadge = "0"

//levels
    let klvl = "5"
    let jlvl = "52"
    let ulvl = "0"

//Current Region
    let playTime = "1 day, 6 hrs, 48mins"

//Pokedex
    let encount = "297"
    let seen = "104"
    let caught = "19"
    let pbthrow = "10"

    const embed = new RichEmbed()
    .setTitle(`AussieJohto94 || ${playTime}`)
    .addField(`Badges`, `**Kanto:** ${kbadge}\n**Johto:** ${jbadge}\n**Unova:** ${ubadge}`, true)
    .addField(`Player Levels`, `**Kanto:** ${klvl}\n**Johto:** ${jlvl}\n**Unova:** ${ulvl}`, true)
    .addField(`Pokedex`, `**Ecounters:** ${encount}\n**Seen:** ${seen}\n**Caught:** ${caught}\n**Balls Thrown:** ${pbthrow}`)

    /*IF PLAYER NOT FOUND (404)
    if (body.status == "404") {
        return message.channel.send(`Player: ${search} not found. Please double check spelling!`);
       
    }*/

    message.channel.send("this is a Placeholder!", {
        embed: embed
    }).catch(console.error)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'player',
  description: `Displays a player's information`,
  usage: `player [player's name]`
};