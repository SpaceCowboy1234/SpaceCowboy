const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    const search = args.splice(0, args.length).join(" ").toLowerCase()
    
    if(!search) return;

    const api = settings.api.url
    const route = "/ability/"
    const token = settings.api.token

    let apifull = api+route+search+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    if (body.status == "404") {
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
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "ability",
    description: "Information on given ability",
    usage: "ability [ability]"
};