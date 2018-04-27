const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Please input an ability - use **${settings.prefix}help ability** for more info!`);
        return;
    }

    const search = args.splice(0, args.length).join(" ").toLowerCase()

    const api = settings.api.url
    const route = "/ability/"
    const token = settings.api.token

    let apifull = api + route + search + token
    
    snekfetch.get(apifull).then(r => {
        let body = r.body

        if (body.status == "404") {
            message.channel.send(`Ability: ${args[0]} not found. Please double check spelling!`);
            return;
        }

        const embed = new RichEmbed()
            .setTitle(`Ability: ${body.info.name}`)
            .setDescription(`${body.info.description}`)

        message.channel.send("", {
            embed: embed
        }).catch(console.error)

    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["a"],
    permLevel: 0
};

exports.help = {
    name: "ability",
    description: "Gives information on given ability",
    usage: "ability [ability name]"
};