const Command = require('../../structures/Command');
const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')


exports.run = async (any, message, args) => {
let usuario = mes.mentions.users.first();
if(!usuario) usuario = message.author;
let items = db.get(`items_${message.guild.id}_${usuario.id}`)
let bank = db.fetch(`Bank_${message.guild.id}_${usuario.id}`)
let bal = db.fetch(`Coins_${message.guild.id}_${usuario.id}`)
if(bank === null) bank = "no hay nada en el banco =w="
if(bal === null) bal = "0";
if(items === null) items = "no hay nada, esta vacio ;-;"
let embed = new Discord.MessageEmbed()
.setTitle(`🎒Inventario de ${usuario.username} UwU🎒`)
.setThumbnail("https://cdn.discordapp.com/attachments/767151626749739058/787534109991108618/sketch-1607833141559.png")
.addField("💜objetos permanentes💜", items)
.setColor("RANDOM")

let mine = new Discord.MessageEmbed()
.setTitle("⛏objetos de mina⛏")
.setThumbnail("https://cdn.discordapp.com/attachments/767151626749739058/787534109991108618/sketch-1607833141559.png")
.addField("UwUmineral", "0", true)
.addField("TecnoMateria", "0", true)
.addField("MineralBruh", "0", true)
.setColor("RANDOM")

let cura = new Discord.MessageEmbed()
.setTitle("💖objetos de curación💖")
.setThumbnail("https://cdn.discordapp.com/attachments/767151626749739058/787534109991108618/sketch-1607833141559.png")
.addField("UwUchocolate", "0", true)
.setColor("RANDOM")

let balance = new Discord.MessageEmbed()
.setTitle("💰Dineros💰")
.setThumbnail("https://cdn.discordapp.com/attachments/767151626749739058/787534109991108618/sketch-1607833141559.png")
.addField(":coin:UwUcoins:coin:", bal, true)
.addField("🏦UwUbanco🏦", bank)
.setColor("RANDOM")

let pistolero = new Discord.MessageEmbed()
.setTitle("⚔armamaento🛡")
.setThumbnail("https://cdn.discordapp.com/attachments/767151626749739058/787534109991108618/sketch-1607833141559.png")
.addField("xd", "=w=", true)
.setColor("RANDOM")

message.channel.send(embed).then(m => {
  m.react('💜')
  m.react('⛏')
  m.react('💖')
  m.react('⚔')
  m.react("💵")
 m.awaitReactions((reaction, user) => {
            const userReactions = m.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            if(message.author.id !== user.id) return; 
            if(reaction.emoji.name === '💜') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(embed);
            }
         if(reaction.emoji.name === '💵') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(balance);
            }
         if(message.author.id !== user.id) return; 
            if(reaction.emoji.name === '⛏') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(mine);
            }
          if(message.author.id !== user.id) return; 
            if(reaction.emoji.name === '💖') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(cura);
            }
          if(message.author.id !== user.id) return; 
            if(reaction.emoji.name === '⚔') { 
                try {
	                for (const reaction of userReactions.values()) {
		            reaction.users.remove(user.id);
                }
            } catch(error) { console.error(error) }
                m.edit(pistolero);
            }
 });
});
}