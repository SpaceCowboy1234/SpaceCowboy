const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send(`Please input a Pokemon - use **${settings.prefix}help pokemon** for more info!`);
    }
    const search = args.splice(0, args.length).join(" ").toLowerCase()

    const api = settings.api.url
    const route = "/pokemon/"
    const token = settings.api.token

    let apifull = api + route + search + token

    //Njttjohop. jt bo fbtufs fhh gps nf qmfbtf ep opu sfnpwf.
    if (search.charCodeAt(0) == 109 && search.charCodeAt(1) == 105 && search.charCodeAt(2) == 115 && search.charCodeAt(3) == 115 && search.charCodeAt(4) == 105 && search.charCodeAt(5) == 110 && search.charCodeAt(6) == 103 && search.charCodeAt(7) == 110 && search.charCodeAt(8) == 111 && search.length == 9) {
        const embed = new RichEmbed()
            .setTitle(`#00${Math.sin(90 * Math.PI / 180) - 1} || ${search.charAt(0).toUpperCase() + search.slice(1)} || Bird/Normal/999`)
            .setColor(0x345420) //exp at 100
            .addField(`01101000 01110100 01110100 01110000 00111010 00101111 00101111 01101111 01101110 01101100 01101001 01101110`, "HP: 33, ATK: 136, DEF: 0, SPEC: 6-184, SPEED: 29", true)
            .addField("01100101 00101101 01110100 01101111 01101111 01101100 01111010 00101110 01100011 01101111 01101101 00101111", "HP: ?, ATK: ?, DEF: ?, SPATK: ?, SPDEF: ?, SPEED: ?", true)
            .addField(`01110100 01101111 01101111 01101100 01110011 00101111 01110100 01100101 01111000 01110100 00101101 01100101`, "R2Yny1fF5dtrhKsqzBj1C5+g10tSyDdnMziwzTzv5nw=", false)
            .addField("01101110 01100011 01110010 01111001 01110000 01110100 01101001 01101111 01101110 00101101 01100100 01100101", "E3wqg17HzgpUb0GMVUXd22RBqmm9zrJwuyBo24W4eHM=", false)
            .addField("01100011 01110010 01111001 01110000 01110100 01101001 01101111 01101110 00101110 01110000 01101000 01110000", "ymExMVMbPOPFszP/d0VvxIsGKWLAcf+O+P/HvxiZvT0=", true)
            .setThumbnail(`https://i.imgur.com/ezFXSPf.gif`);
        return message.channel.send("", { embed: embed }).catch(console.error);
    }


    snekfetch.get(apifull).then(r => {
        let body = r.body

        if (body.status == "404") {
            return message.channel.send(`Pokemon: ${search} not found. Please double check spelling!`);
        }

        const abilities = new Array();
        var evolutions = new Array();
        var prevolution = new Array();

        if (body.info.evolutions[0] == null) {
            evolutions = `N/A`;
        } else {
            for (let index = 0; index < body.info.evolutions.length; index++) {

                //Temporary holder for the evolution and method
                var evo = "";

                //Who is it evolving to?
                const name = body.info.evolutions[index].to;
                evo = evo + name;

                //Does it require trading?
                const trading = body.info.evolutions[index].trade;
                if (trading != null) {
                    evo = evo + " by trading";
                }

                //Does it need an item to be used on it?
                const item = body.info.evolutions[index].item;
                if (item != null) {
                    if (/[aeiouAEIOU]/.test(item.charAt(0))) {
                        evo = evo + " using an " + item;
                    } else {
                        evo = evo + " using a " + item;
                    }
                }

                //Does it need to hold an item?
                const holdItem = body.info.evolutions[index].hold_item;
                if (holdItem != null) {
                    if (/[aeiouAEIOU]/.test(holdItem.charAt(0))) {
                        evo = evo + " whilst holding an " + holdItem;
                    } else {
                        evo = evo + " whilst holding a " + holdItem;
                    }
                }

                //What minimum level does it need?
                const level = body.info.evolutions[index].level;
                if (level != null) {
                    evo = evo + " at level " + level;
                }

                //Does it require a level up to trigger?
                const levelUp = body.info.evolutions[index].level_up;
                if (levelUp != null) {
                    evo = evo + " after a level up";
                }

                //Does it need max happiness?
                const happy = body.info.evolutions[index].happiness;
                if (happy != null) {
                    evo = evo + " with max happiness";
                }

                //Does it need to satisfy certain conditions?
                const conditions = new Array();
                if (body.info.evolutions[index].conditions != null) {
                    for (let i = 0; i < body.info.evolutions[index].conditions.length; i++) {
                        conditions[i] = body.info.evolutions[index].conditions[i];
                    }

                    if (conditions != null) {
                        if (conditions.length > 1) {
                            evo = evo + " " + conditions.join(', ');
                        } else {
                            evo = evo + " " + conditions;
                        }
                    }
                }

                //After writing, add to list of evolutions
                evolutions[index] = evo;

            }
        }

        if (body.info.evolution_from == null) {
            prevolution = `N/A`;
        } else {
            prevolution = body.info.evolution_from;
        }

        for (let index = 0; index < body.info.abilities.length; index++) {
            if (body.info.abilities[index].hidden == true) {
                abilities[index] = body.info.abilities[index].name + " [Hidden]";
            } else {
                abilities[index] = body.info.abilities[index].name;
            }

        }

        const stats = new Array();

        stats[0] = `HP: ` + body.info.base_stats.hp;
        stats[1] = `ATK: ` + body.info.base_stats.atk;
        stats[2] = `DEF: ` + body.info.base_stats.def;
        stats[3] = `SPATK: ` + body.info.base_stats.sp_atk;
        stats[4] = `SPDEF: ` + body.info.base_stats.sp_def;
        stats[5] = `SPEED: ` + body.info.base_stats.speed;

        const evTemp = new Array();
        evTemp[0] = `HP: ` + body.info.ev_yield.hp;
        evTemp[1] = `ATK: ` + body.info.ev_yield.atk;
        evTemp[2] = `DEF: ` + body.info.ev_yield.def;
        evTemp[3] = `SPATK: ` + body.info.ev_yield.sp_atk;
        evTemp[4] = `SPDEF: ` + body.info.ev_yield.sp_def;
        evTemp[5] = `SPEED: ` + body.info.ev_yield.speed;

        var id = "" + body.info.national_id;

        for (let index = id.length; index < 3; index++) {
            id = "0" + id;
        }

        const embed = new RichEmbed()
            .setTitle(`#${id} || ${body.info.names.en} || ${body.info.types.join('/')}`)
            .setColor(0x0000C8)
            .addField(`__Base Stats:__`, stats, true)
            .addField("__EV Yield:__", evTemp, true)
            .addField(`__Ability:__`, abilities, false)
            .addField("__Evolves From:__", prevolution, false)
            .addField("__Evolves Into:__", evolutions, true)
            .setThumbnail(`http://api.gamernationnetwork.xyz/pokemon/poke/${body.info.national_id}.png`)

        message.channel.send("", {
            embed: embed
        }).catch(console.error)
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["poke", "p"],
    permLevel: 0
};

exports.help = {
    name: "pokemon",
    description: "Gives information on given pokemon",
    usage: "pokemon [pokemon name]"
};
