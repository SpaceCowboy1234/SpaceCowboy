const { RichEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const settings = require('../settings.json');
exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send(`Please input a Pokemon - use **${settings.prefix}help pokemon** for more info!`);
        return;
    }
    const search = args.splice(0, args.length).join(" ").toLowerCase()

    const api = settings.api.url
    const route = "/pokemon/"
    const token = settings.api.token

    let apifull = api + route + search + token

    snekfetch.get(apifull).then(r => {
        let body = r.body

        if (body.status == "404") {
            message.channel.send(`Pokemon: ${args[0]} not found. Please double check spelling!`);
            return;
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


        const embed = new RichEmbed()
            .setTitle(`#${body.info.national_id} || ${body.info.names.en} || ${body.info.types.join('/')}`)
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