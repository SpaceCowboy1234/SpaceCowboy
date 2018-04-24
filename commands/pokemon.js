const {RichEmbed} = require("discord.js");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
    const search = args.splice(0, args.length).join(" ")

    if(!search) return;

    const api = settings.api.url
    const route = "/pokemon/"
    const token = settings.api.token

    let apifull = api+route+search+token

snekfetch.get(apifull).then(r => {
    let body = r.body

    if (body.status == "404") {
        return;
    }

    if(!body.info.abilities[1]) {

        if(!body.info.evolutions[0]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b**None**`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[1]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[2]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[3]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[4]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[5]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[6]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[7]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}, ${body.info.evolutions[6].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[8]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}, ${body.info.evolutions[6].to}, ${body.info.evolutions[7].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        }

    }
    if (!body.info.abilities[2]) {

        if(!body.info.evolutions[0]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b**None**`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[1]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[2]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[3]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[4]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[5]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[6]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[7]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}, ${body.info.evolutions[6].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[8]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}, ${body.info.evolutions[6].to}, ${body.info.evolutions[7].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        }

    }
    if(body.info.abilities[2]) {
        if(!body.info.evolutions[0]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b**None**`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[1]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[2]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[3]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[4]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[5]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[6]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[7]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}, ${body.info.evolutions[6].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        } else
        if (!body.info.evolutions[8]) {
            const embed = new RichEmbed()
            .setTitle(`Poke: ${body.info.names.en} || #${body.info.national_id}`)
            .setColor(0x0000C8)
            .addField("General", `**Types:** ${body.info.types.join(', ')}\n**Abilities:** ${body.info.abilities[0].name}, ${body.info.abilities[1].name}, ${body.info.abilities[2].name} [H]`, true)
            .addField("Evolutions", `\u200b${body.info.evolutions[0].to}, ${body.info.evolutions[1].to}, ${body.info.evolutions[2].to}, ${body.info.evolutions[3].to}, ${body.info.evolutions[4].to}, ${body.info.evolutions[5].to}, ${body.info.evolutions[6].to}, ${body.info.evolutions[7].to}`, true)
            .addField("Stats", `HP: ${body.info.base_stats.hp}, ATK: ${body.info.base_stats.atk}, DEF: ${body.info.base_stats.def}, SPA: ${body.info.base_stats.sp_atk}, SPD: ${body.info.base_stats.sp_def}, SPE: ${body.info.base_stats.speed}`,true)
            .setThumbnail(`http://api.gamernationnetwork.xyz:80/pics/pokemon/poke/${body.info.national_id}.png`)
        
            message.channel.send("", {
                embed: embed
            }).catch(console.error)
        }

    }
});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["poke", "p"],
    permLevel: 0
};

exports.help = {
    name: "pokemon",
    description: "Information on given pokemon",
    usage: "pokemon [Pokemon]"
};