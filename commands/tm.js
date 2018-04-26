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

        let number = 0;

        //changed to Gen 6 TM list as P1 uses Gen 6 not Gen 7
        for (let index = 0; index < 16; index++) {
            if (body.info.move_learnsets[index].games[0] == "Omega Ruby") {
                number = index;
                break;
            }
        }

        //very messy now, but splits into 2 columns
        var array = new Array();
        var tmCount = 0;
        var failCount = 0;
        for (let index = 0; index < body.info.move_learnsets[number].learnset.length; index++) {
            if (body.info.move_learnsets[number].learnset[index].tm != null) {
                array[index] = index;
                tmCount++;
            } else {
                failCount++;
            }
        }
        const tmListOne = new Array();
        const tmListTwo = new Array();

        if (array.length == 0) {
            var array = "This Pokemon cannot learn any TMs or HMs"
        } else {
            const countTwo = (tmCount - (tmCount % 2)) / 2;
            const countOne = tmCount - countTwo;

            for (let index = failCount; index < body.info.move_learnsets[number].learnset.length - countTwo; index++) {
                tmListOne[index - failCount] = body.info.move_learnsets[number].learnset[index].tm + " - " + body.info.move_learnsets[number].learnset[index].move;
            }
            for (let index = failCount + countOne; index < body.info.move_learnsets[number].learnset.length; index++) {
                tmListTwo[index - failCount - countOne] = body.info.move_learnsets[number].learnset[index].tm + " - " + body.info.move_learnsets[number].learnset[index].move;
            }
        }

        const embed = new discord.RichEmbed()
            .setTitle(`#${body.info.national_id} || ${body.info.names.en} || ${body.info.types.join('/')}`)
            .setColor(0x0000C8)
            .addField("TM/HM List", tmListOne, true)
            .addField("\u200b", tmListTwo, true)
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
    usage: 'tm'

};