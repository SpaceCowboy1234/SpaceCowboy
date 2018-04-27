const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json')

exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Please input a nature - use **${settings.prefix}help nature** for more info!`);
        return;
    }
    const search = args.splice(0, args.length).join(" ").toLowerCase()

    const api = settings.api.url
    const route = "/nature/"
    const token = settings.api.token
    
    let apifull = api+route+search+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    if (body.status == "404") {
        message.channel.send(`Nature: ${args[0]} not found. Please double check spelling!`);
        return;
    }

    const embed = new RichEmbed()
    .setTitle(`Nature: ${body.data.name}`)
    .setDescription(`**Increase:** ${body.data.increase}\n**Decrease:** ${body.data.decrease}`)

    message.channel.send("", {
        embed: embed
    }).catch(console.error)

});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["n"],
    permLevel: 0
};

exports.help = {
    name: "nature",
    description: "Gives information on given nature",
    usage: "nature [nature]"
};