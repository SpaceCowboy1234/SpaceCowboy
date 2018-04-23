const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
const move = args.splice(0, args.length).join(" ")

if(!move) return;

const api = "http://api.gamernationnetwork.xyz:81/private/nature/"
const token = "?token=testToken"

let apifull = api+move+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    const embed = new RichEmbed()
    .setTitle(`Nature: ${body.search}`)
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