const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
const move = args.splice(0, args.length).join(" ")

if(!move) return;

 var fullMove = move.replace(" ", "_")
// const api = "http://104.236.56.178:80/pokemon/moves2/"
// const token = "_t=jRzV0vSIRXHbHp0qzY6N"

const api = "http://api.gamernationnetwork.xyz:81/private/moves/"
const token = "?token=testToken"

let apifull = api+fullMove+token

snekfetch.get(apifull).then(r => {
    let body = r.body

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
    aliases: ["moves", "m"],
    permLevel: 0
};

exports.help = {
    name: "move",
    description: "Information on given move",
    usage: "move [move]"
};