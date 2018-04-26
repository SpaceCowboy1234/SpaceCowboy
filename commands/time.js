const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');

exports.run = async (client, message, args) => {
    
    const api = settings.api.url
    const route = "/timeevents"
    const token = settings.api.token

    let apifull = api+route+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    const embed = new RichEmbed()
    .setTitle(`Timed Events`)
    .addField("Daily Reset", `${body.reset}`, true)
    .addField("Contests", `**Bug Contest:** ${body.bug}`, true)
    .addField("S.S. Anne", `**To Olivine:** ${body.toOlivine}\n**To Vermilion:** ${body.toVermilion}`, true)
    .addField("Maps", `**Lapras:** ${body.lapras}\n**Flooded Lake of Rage:** ${body.lakeRage} `, true)
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
    name: "time",
    description: "Gives information on when timed events begin and end",
    usage: "time"
};