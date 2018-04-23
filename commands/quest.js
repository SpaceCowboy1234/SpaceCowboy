const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
const move = args.splice(0, args.length).join(" ")

if(!move) return;
//if (message.channel.id !== "418037084494888960") return;

const api = "http://api.gamernationnetwork.xyz:81/private/quests/"
const token = "?token=testToken"

let apifull = api+move+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    if(body.data.type == "quest") {
        const locSearch = new RichEmbed()
        .setTitle(`Quest: ${body.data.name} || Part ${body.data.part}`)
        .setColor("RANDOM")
        .setDescription(`${body.data.description}\nStart: ${body.data.startloc}`)
        .addField("Rewards", `${body.data.rewards.join(", ")}`)
        .setFooter(`Information by: ${client.users.get('115408700625256454').username}`, client.users.get('115408700625256454').avatarURL)

        
      
          message.channel.send("", {
              embed: locSearch
        }).catch(console.error);

    } else
    if (body.data.type == "region") {
        const loc2Search = new RichEmbed()
        .setTitle(`Quest: ${body.data.region}`)
        .setColor("RANDOM")
        .addField("Quests Page 1", `${body.data.quests1.join("\n")}`, true)
        .addField("Quests Page 2", `${body.data.quests2.join("\n")}`, true)
        .setFooter(`Information by: ${client.users.get('115408700625256454').username}`, client.users.get('115408700625256454').avatarURL)

        
      
          message.channel.send("", {
              embed: loc2Search
        }).catch(console.error);
    }

});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "quest",
    description: "Information on given quest/region",
    usage: "quest [quest/region]"
};