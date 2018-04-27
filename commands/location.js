const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Please input a location - use **${settings.prefix}help location** for more info!`);
        return;
    }
    
    const search = args.splice(0, args.length).join(" ").toLowerCase()

    const embed = new RichEmbed()
        .setTitle(`{Region} || {Location}`)
        .addField(`Spawns`, `{spawnList}`, true)
        .addField(`berries`, `{berryList}`, true)
        .addField(`Items`, `{itemList}`)

    /*IF LOCATION NOT FOUND (404)
    if (body.status == "404") {
        message.channel.send(`Location: ${args[0]} not found. Please double check spelling!`);
        return;
    }*/

    message.channel.send("", {
        embed: embed
    }).catch(console.error)


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