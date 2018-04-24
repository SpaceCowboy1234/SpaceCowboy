const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
const move = args.splice(0, args.length).join(" ").toLowerCase()

if(!move) return;

if (messahe.channel.id !== "418037084494888960") return;

//const api = "http://104.236.56.178:80/pokeone/location/"
//const token = "_t=jRzV0vSIRXHbHp0qzY6N"

//let apifull = api+move+token

//snekfetch.get(apifull).then(r => {
//    let body = r.body

    const embed = new RichEmbed()
    .setTitle(`{Region} || {Location}`)
    .addField(`Spawns`, `{spawnList}`, true)
    .addField(`berries`, `{berryList}`, true)
    .addField(`Items`, `{itemList}`)

    message.channel.send("", {
        embed: embed
    }).catch(console.error)

//});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "location",
    description: "Information on given location",
    usage: "location [location]"
};