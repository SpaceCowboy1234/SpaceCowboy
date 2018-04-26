const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
const search = args.splice(0, args.length).join(" ").toLowerCase()

if(!search) return;

    const embed = new RichEmbed()
    .setTitle(`{Region} || {Location}`)
    .addField(`Spawns`, `{spawnList}`, true)
    .addField(`berries`, `{berryList}`, true)
    .addField(`Items`, `{itemList}`)

    message.channel.send("", {
        embed: embed
    }).catch(console.error)

//});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["loc"],
    permLevel: 0
};

exports.help = {
    name: "location",
    description: "Give information on given location",
    usage: "location [location name]"
};