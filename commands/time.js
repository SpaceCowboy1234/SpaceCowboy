const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {


const api = "http://104.236.56.178:81/private/timeevents"
//const api = "localhost:81/private/timeevents"
const token = "?token=testToken"


let apifull = api+token

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
    description: "Time events happen",
    usage: "time"
};