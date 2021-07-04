const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); 
const prefix = '!'
const token = 'token';

const channelID = `859970300971974686`
const { content } = message;

const emojired = '🔴';
const emojiyellow = '🟡';
const emojigreen = '🟢';
const emojiblue = '🔵';

const emojibw = '<:s_bedwars:860432044480004097>';
const emojisw = '<:s_skywars:860432202634362910>';
const emojisb = '<:s_skyblock:860432234438983681>';
const emojiother = '<:s_othergame:860432259130851338>';
const emojiduel = '<:s_duels:860633590500294697>';

const emojimale = '♂️';
const emojifemale = '♀️';
const emojiother = '❓';

const emojievent = '🗓️';
const emojigiveaway = '🏆';
const emojitournament = '🎁';

const emojiage1 = '👶';
const emojiage2 = '👦';
const emojiage3 = '🧑';
const emojiage4 = '🧓';

client.on('ready', () => {
    console.log('ready!')

});    

client.on('message', async message => {

const yellow = message.guild.roles.cache.find(role => role.id === "860664627598721055")
const red = message.guild.roles.cache.find(role => role.id === "860668078467317780")
const green = message.guild.roles.cache.find(role => role.id === "860667998516150304")
const blue = message.guild.roles.cache.find(role => role.id === "860664627258851358")

const bw = message.guild.roles.cache.find(role => role.id === "860663187812122634")
const sw = message.guild.roles.cache.find(role => role.id === "860663189984247828")
const sb = message.guild.roles.cache.find(role => role.id === "860663199413960714")
const othergame = message.guild.roles.cache.find(role => role.id === "860663200148094976")
const duel = message.guild.roles.cache.find(role => role.id === "860663198591483924")

const male = message.guild.roles.cache.find(role => role.id === "860663200843825162")
const female = message.guild.roles.cache.find(role => role.id === "860664625535385610")
const other = message.guild.roles.cache.find(role => role.id === "860664626223775795")

const event = message.guild.roles.cache.find(role => role.id === "860696003727720448")
const giveaway = message.guild.roles.cache.find(role => role.id === "860696094543577128")
const tournament = message.guild.roles.cache.find(role => role.id === "860696150658646036")

const age1 = message.guild.roles.cache.find(role => role.id === "860394805162147871")
const age2 = message.guild.roles.cache.find(role => role.id === "860394809511378956")
const age3 = message.guild.roles.cache.find(role => role.id === "860663144128577576")
const age4 = message.guild.roles.cache.find(role => role.id === "860663184876109835")

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '🟡') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(yellow)
            }
            if (reaction.emoji.name === '🔴') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(red)
            }
            if (reaction.emoji.name === '🟢') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(green)
            }
            if (reaction.emoji.name === '🔵') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(blue)  
            }
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === 's_bedwars') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(bw)
            }
            if (reaction.emoji.name === 's_skywars') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(sw)
            }
            if (reaction.emoji.name === 's_skyblock') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(sb)
            }
            if (reaction.emoji.name === 's_othergame') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(othergame)
            }
            if (reaction.emoji.name === 's_duels') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(duel)
            }
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '♂️') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(male)
            }
            if (reaction.emoji.name === '♀️') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(female)
            }
            if (reaction.emoji.name === '❓') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(other)
            }
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '🗓️') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(event)
            }
            if (reaction.emoji.name === '🏆') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(giveaway)
            }
            if (reaction.emoji.name === '🎁') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(tournament)
            }
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '👶') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(age1)
            }
            if (reaction.emoji.name === '👦') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(age2)
            }
            if (reaction.emoji.name === '🧑') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(age3)
            }
            if (reaction.emoji.name === '🧓') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(age4)
            }
    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '🟡') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(yellow)
            }
            if (reaction.emoji.name === '🔴') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(red)
            }
            if (reaction.emoji.name === '🟢') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(green)
            }
            if (reaction.emoji.name === '🔵') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(blue)  
            } 
        } else {
            return;
        };
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === 's_bedwars') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(bw)
            }
            if (reaction.emoji.name === 's_skywars') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(sw)
            }
            if (reaction.emoji.name === 's_skyblock') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(sb)
            }
            if (reaction.emoji.name === 's_othergame') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(othergame)
            }
            if (reaction.emoji.name === 's_duels') {
                await reaction.message.guild.members.cache.get(user.id).roles.add(duel)
            }
        } else {
            return;
        };
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '♂️') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(male)
            }
            if (reaction.emoji.name === '♀️') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(female)
            }
            if (reaction.emoji.name === '❓') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(other)
            }
        } else {
            return;
        };
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '🗓️') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(event)
            }
            if (reaction.emoji.name === '🏆') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(giveaway)
            }
            if (reaction.emoji.name === '🎁') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(tournament)
            }
        } else {
            return;
        };
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (!user.client) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channelID) {
            if (reaction.emoji.name === '👶') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age1)
            }
            if (reaction.emoji.name === '👦') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age2)
            }
            if (reaction.emoji.name === '🧑') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age3)
            }
            if (reaction.emoji.name === '🧓') {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age4)
            }
        } else {
            return;
        };

    if (content === '!srcolor')     {
    let colorEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Color Roles')
    .setDescription('🔴 - <@&860668078467317780> \n 🟡 - <@&860664627598721055> \n 🟢 - <@&860667998516150304> \n 🔵 - <@&860664627258851358>')
    client.channels.cache.get(`859970300971974686`).send(colorEmbed)
        message.react(emojired)
        message.react(emojiyellow)
        message.react(emojigreen)
        message.react(emojiblue)

    } else if (content === '!srgame') {
    let gameEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Minigame Roles')
    .setDescription('<:s_bedwars:860432044480004097> - <@&860663187812122634> \n <:s_skywars:860432202634362910> - <@&860663189984247828> \n <:s_skyblock:860432234438983681> - <@&860663199413960714> \n <:s_duels:860633590500294697> - <@&860663198591483924> \n <:s_othergame:860432259130851338> - <@&860663200148094976> ')
    client.channels.cache.get(`859970300971974686`).send(gameEmbed)
        message.react(emojibw)
        message.react(emojisw)
        message.react(emojisb)
        message.react(emojiduel)
        message.react(emojiother)

    } else if (content === '!srgender') {
    let genderEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Gender Roles')
    .setDescription('♂️ - <@&860663200843825162> \n ♀️ - <@&860664625535385610> \n ❓ - <@&860664626223775795>')
    client.channels.cache.get(`859970300971974686`).send(genderEmbed)
        message.react(emojimale)
        message.react(emojifemale)
        message.react(emojiother)

    } else if (content === '!srping') {
    let pingEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Ping Roles')
    .setDescription('🗓️ - <@&860696003727720448> \n 🏆 - <@&860696150658646036>  \n 🎁 - <@&860696094543577128>')
    client.channels.cache.get(`859970300971974686`).send(pingEmbed)
        message.react(emojievent)
        message.react(emojigiveaway)
        message.react(emojitournament)   

    } else if (content === '!srage') {
    let colorEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Age Roles')
    .setDescription('👶 - <@&860394805162147871> \n 👦 - <@&860394809511378956> \n 🧑 - <@&860663144128577576> \n 🧓 - <@&860663184876109835>')
    client.channels.cache.get(`859970300971974686`).send(colorEmbed)
        message.react(emojiage1)
        message.react(emojiage2)
        message.react(emojiage3)
        message.react(emojiage4)
        
    }})}}}}}})}); 

client.login('token');
