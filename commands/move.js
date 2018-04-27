const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {

    if (!args[0]) {
        message.channel.send(`Please input a move - use **${settings.prefix}help move** for more info!`);
        return;
    }

    const search = args.splice(0, args.length).join(" ").toLowerCase()
    
    const api = settings.api.url
    const route = "/moves/"
    const token = settings.api.token

    let apifull = api + route + search + token

    snekfetch.get(apifull).then(r => {
        let body = r.body

        if (body.status == "404") {
            message.channel.send(`Move: ${args[0]} not found. Please double check spelling!`);
            return;
        }

        const embed = new RichEmbed()
            .setTitle(body.info.names.en)
            .setDescription(`${body.info.descriptions.en}`)
            .addField("Stats", `**PP:** ${body.info.pp} (MAX: ${body.info.max_pp})\n**Base Power:** ${body.info.power}\n**Accuracy:** ${body.info.accuracy}`, true)
            .addField("\u200b", "**Type: **" + body.info.type + "\n**Category:** " + body.info.category.charAt(0).toUpperCase() + body.info.category.slice(1) + "\n**Critical:** " + body.info.critical_hit, true)

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
    description: "Gives information on given move",
    usage: "move [move name]"
};