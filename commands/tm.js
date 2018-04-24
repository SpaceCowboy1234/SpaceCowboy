const settings = require('../settings.json');
const discord = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = (client, message, args) => {

    const search = args.splice(0, args.length).join(" ").toLowerCase()

    if (!search) return;

    const api = settings.api.url
    const route = "/pokemon/"
    const token = settings.api.token

    let apifull = api + route + search + token

    snekfetch.get(apifull).then(r => {
        let body = r.body

        if (body.status == "404") {
            return;
        }

        const number = 0;

        for (let index = 0; index < 16; index++) {
            if(body.info.move_learnsets[index].games[0] == "Ultra Sun"){
                const number = index;
                break;
            }
        }

        const array = new Array();
        for (let index = 0; index < body.info.move_learnsets[number].learnset.length; index++) {
            if(body.info.move_learnsets[number].learnset[index].tm != null){
                array[index] = body.info.move_learnsets[number].learnset[index].tm + " - " + body.info.move_learnsets[number].learnset[index].move;
            }
        }

        const embed = new discord.RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("TM/HM List", `\u200b${array}`, true)
            .setThumbnail(`http://api.gamernationnetwork.xyz/pokemon/poke/${body.info.national_id}.png`)

        message.channel.send("", {
            embed: embed
        }).catch(console.error)

    });
}
exports.conf =
    {
        enabled: true,
        guildOnly: false,
        aliases: ['hm'],
        permLevel: 0
    };

exports.help = {
    name: 'tm',
    description: `List the available TMs and Hms that can be learnt by said Pokemon`,
    usage: 'tm [pokemon]'

};