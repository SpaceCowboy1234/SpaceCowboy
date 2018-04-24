const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json')

exports.run = async (client, message, args) => {
    const search = args.splice(0, args.length).join(" ").toLowerCase()

    if(!search) return;
    

    const api = settings.api.url
    const route = "/nature/"
    const token = settings.api.token
    
    let apifull = api+route+search+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    if (body.status == "404") {
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
    aliases: ["nature", "n"],
    permLevel: 0
};

exports.help = {
    name: "nature",
    description: "Information on given nature",
    usage: "nature [nature]"
};