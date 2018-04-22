const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
const move = args.splice(0, args.length).join(" ")

if(!move) return;

const api = "http://104.236.56.178:80/pokemon/ability/"
const token = "_t=jRzV0vSIRXHbHp0qzY6N"

let apifull = api+move+token

snekfetch.get(apifull).then(r => {
    let body = r.body

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