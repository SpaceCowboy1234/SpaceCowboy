const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
const move = args.splice(0, args.length).join(" ")

if(!move) return;

const api = "http://104.236.56.178:80/pokemon/nature/"
const token = "_t=jRzV0vSIRXHbHp0qzY6N"

let apifull = api+move+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    const embed = new RichEmbed()
    .setTitle(`Nature: ${body.info.name}`)
    .setDescription(`**Increase:** ${body.info.increase}\n**Decrease:** ${body.data.decrease}`)

    message.channel.send("", {
        embed: embed
    }).catch(console.error)

});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["moves", "m"],
    permLevel: 0
};

exports.help = {
    name: "nature",
    description: "Information on given nature",
    usage: "nature [nature]"
};