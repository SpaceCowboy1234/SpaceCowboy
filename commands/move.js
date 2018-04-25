const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    const search = args.splice(0, args.length).join(" ").toLowerCase()

    if(!search) return;


    const api = settings.api.url
    const route = "/move/"
    const token = settings.api.token

    let apifull = api+route+search+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    if (body.status == "404") {
        return;
    }

    const embed = new RichEmbed()
    .setTitle(`Move: ${body.info.names.en}`)
    .setDescription(`${body.info.descriptions.en}`)
    .addField("Stats", `**PP:** ${body.info.pp}/${body.info.max_pp}\n**Power:** ${body.info.power}\n**Accuracy:** ${body.info.accuracy}`)

    message.channel.send("", {
        embed: embed
    }).catch(console.error)

});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["m"],
    permLevel: 0
};

exports.help = {
    name: "move",
    description: "Information on given move",
    usage: "move [move]"
};