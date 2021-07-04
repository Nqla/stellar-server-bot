const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); 
const prefix = '!'
const token = 'token';

client.on('ready', () => {
    console.log('ready!')

});

var EventEmitter = require('events'); 
const emitter = new EventEmitter()
client.setMaxListeners(0)

client.login('token');
       

client.on('message', msg=> {
    if(msg.content.startsWith('!embed')) {
    let announceEmbed = new Discord.MessageEmbed()
	.setColor('000000')
    .setFooter('Founded by Nytino and Jordan')
    .setAuthor('Welcome To Stellar!')
	.setTitle('Server Rules')
    .setThumbnail('https://cdn.discordapp.com/attachments/800166259786383412/860376106522902548/a31b5f8584fc8294d01cb767c1fde837.png')
    .setDescription("<:blackheart:860018062303297536> Respect all members and be kind, a friendly environment is important for a community. \n \n <:blackheart:860018062303297536> Refrain from public shaming, if you believe someone is breaking the rules take it up with staff. \n \n <:blackheart:860018062303297536> Any kind of harrassment, abuse, or discrimination for any reason is not allowed.  \n \n <:blackheart:860018062303297536> Don't spam. This includes messages, reactions, swearing, and emojis. \n \n <:blackheart:860018062303297536> Avoid pinging members of the staff team without reason, instead create a support ticket. \n \n <:blackheart:860018062303297536> Make sure you are using channels for their intended purposes, (etc. pictures in media). \n \n <:blackheart:860018062303297536> Please remain appropriate if you are using our Discord, we want to provide a safe environment for everyone. \n \n <:blackheart:860018062303297536> Advertising any social media and other communities is not allowed, though there are execptions.  \n \n <:blackheart:860018062303297536> Do not publicly share personal information in any way, regardless of who's it is. \n \n <:blackheart:860018062303297536> The word of staff is final, though you can appeal any decision made.")
    client.channels.cache.get(`859970152699002902`).send(announceEmbed)
    }})


client.on('message', msg=> {
    if(msg.content.startsWith('!tos')) {
    let announceEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('TOS Warning')
    .setDescription("Due to Discord's Terms of Service and Community Guidelines, anyone stating they are under 13 years of age will be banned permanently. Jokes included, this is a no tolerance policy on the Discord. https://discord.com/terms")
    client.channels.cache.get(`859970152699002902`).send(announceEmbed)
    
    }});



    client.on('message', async message => {
        const channelID = `859970152699002902`
        const role = message.guild.roles.cache.find(role => role.id === "860024909206913064")
        const emoji = '<:blackcheck:860030354093113364>';
        if(message.content.startsWith('!verify')) {
        let embed = new Discord.MessageEmbed()
        .setColor('000000')
        .setTitle('Verification')
        .setDescription('React with the emoji below to gain access to the rest of the server! \n \n Note: It may take a while for you to receive the role after reacting. If you dont get the verified role immediately, the time of waiting will most likely only take up to a minute. \n \n Warning: Please DO NOT spam the reaction emoji.')
        client.channels.cache.get(`859970152699002902`).send(embed).then(message => {
            message.react(emoji)

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (!user.client) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === 'blackcheck') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role)
                    client.channels.cache.get(`860019323178188840`)
                }
                
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (!user.client) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === 'blackcheck') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role)
            } else {
                return;
            }
        }

    })}})})}});

    
// COLOR ROLES

    client.on('message', async message => {
        const channelID = `859970300971974686`

        const yellow = message.guild.roles.cache.find(role => role.id === "860664627598721055")
        const red = message.guild.roles.cache.find(role => role.id === "860668078467317780")
        const green = message.guild.roles.cache.find(role => role.id === "860667998516150304")
        const blue = message.guild.roles.cache.find(role => role.id === "860664627258851358")

        const emojired = '🔴';
        const emojiyellow = '🟡';
        const emojigreen = '🟢';
        const emojiblue = '🔵';

        if(message.content.startsWith('!srcolor')) {
        let colorEmbed = new Discord.MessageEmbed()
        .setColor('000000')
        .setTitle('Color Roles')
        .setDescription('🔴 - <@&860668078467317780> \n 🟡 - <@&860664627598721055> \n 🟢 - <@&860667998516150304> \n 🔵 - <@&860664627258851358>')
        client.channels.cache.get(`859970300971974686`).send(colorEmbed).then(message => {
            message.react(emojired)
            message.react(emojiyellow)
            message.react(emojigreen)
            message.react(emojiblue)

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
})}})})}});

// MINIGAME ROLES

client.on('message', async message => {
    const channelID = `859970300971974686`

    const bw = message.guild.roles.cache.find(role => role.id === "860663187812122634")
    const sw = message.guild.roles.cache.find(role => role.id === "860663189984247828")
    const sb = message.guild.roles.cache.find(role => role.id === "860663199413960714")
    const othergame = message.guild.roles.cache.find(role => role.id === "860663200148094976")
    const duel = message.guild.roles.cache.find(role => role.id === "860663198591483924")

    const emojibw = '<:s_bedwars:860432044480004097>';
    const emojisw = '<:s_skywars:860432202634362910>';
    const emojisb = '<:s_skyblock:860432234438983681>';
    const emojiother = '<:s_othergame:860432259130851338>';
    const emojiduel = '<:s_duels:860633590500294697>';

    if(message.content.startsWith('!srgame')) {
    let colorEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Minigame Roles')
    .setDescription('<:s_bedwars:860432044480004097> - <@&860663187812122634> \n <:s_skywars:860432202634362910> - <@&860663189984247828> \n <:s_skyblock:860432234438983681> - <@&860663199413960714> \n <:s_duels:860633590500294697> - <@&860663198591483924> \n <:s_othergame:860432259130851338> - <@&860663200148094976> ')
    client.channels.cache.get(`859970300971974686`).send(colorEmbed).then(message => {
        message.react(emojibw)
        message.react(emojisw)
        message.react(emojisb)
        message.react(emojiduel)
        message.react(emojiother)

        client.on('messageReactionAdd', async (reaction, user) => {
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
        client.on('messageReactionRemove', async (reaction, user) => {
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
            }
})}})})}});

// GENDER ROLES

    client.on('message', async message => {
        const channelID = `859970300971974686`

        const male = message.guild.roles.cache.find(role => role.id === "860663200843825162")
        const female = message.guild.roles.cache.find(role => role.id === "860664625535385610")
        const other = message.guild.roles.cache.find(role => role.id === "860664626223775795")

        const emojimale = '♂️';
        const emojifemale = '♀️';
        const emojiother = '❓';

        if(message.content.startsWith('!srgender')) {
        let colorEmbed = new Discord.MessageEmbed()
        .setColor('000000')
        .setTitle('Gender Roles')
        .setDescription('♂️ - <@&860663200843825162> \n ♀️ - <@&860664625535385610> \n ❓ - <@&860664626223775795>')
        client.channels.cache.get(`859970300971974686`).send(colorEmbed).then(message => {
            message.react(emojimale)
            message.react(emojifemale)
            message.react(emojiother)

            client.on('messageReactionAdd', async (reaction, user) => {
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
            client.on('messageReactionRemove', async (reaction, user) => {
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
})}})})}});


// PING ROLES

client.on('message', async message => {
    const channelID = `859970300971974686`

    const event = message.guild.roles.cache.find(role => role.id === "860696003727720448")
    const giveaway = message.guild.roles.cache.find(role => role.id === "860696094543577128")
    const tournament = message.guild.roles.cache.find(role => role.id === "860696150658646036")

    const emojievent = '🗓️';
    const emojigiveaway = '🏆';
    const emojitournament = '🎁';

    if(message.content.startsWith('!srping')) {
    let colorEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Ping Roles')
    .setDescription('🗓️ - <@&860696003727720448> \n 🏆 - <@&860696150658646036>  \n 🎁 - <@&860696094543577128>')
    client.channels.cache.get(`859970300971974686`).send(colorEmbed).then(message => {
        message.react(emojievent)
        message.react(emojigiveaway)
        message.react(emojitournament)

        client.on('messageReactionAdd', async (reaction, user) => {
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
        client.on('messageReactionRemove', async (reaction, user) => {
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
})}})})}});

// AGE ROLES

client.on('message', async message => {
    const channelID = `859970300971974686`

    const age1 = message.guild.roles.cache.find(role => role.id === "860394805162147871")
    const age2 = message.guild.roles.cache.find(role => role.id === "860394809511378956")
    const age3 = message.guild.roles.cache.find(role => role.id === "860663144128577576")
    const age4 = message.guild.roles.cache.find(role => role.id === "860663184876109835")

    const emojiage1 = '👶';
    const emojiage2 = '👦';
    const emojiage3 = '🧑';
    const emojiage4 = '🧓';

    if(message.content.startsWith('!srage')) {
    let colorEmbed = new Discord.MessageEmbed()
    .setColor('000000')
    .setTitle('Age Roles')
    .setDescription('👶 - <@&860394805162147871> \n 👦 - <@&860394809511378956> \n 🧑 - <@&860663144128577576> \n 🧓 - <@&860663184876109835>')
    client.channels.cache.get(`859970300971974686`).send(colorEmbed).then(message => {
        message.react(emojiage1)
        message.react(emojiage2)
        message.react(emojiage3)
        message.react(emojiage4)

        client.on('messageReactionAdd', async (reaction, user) => {
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
})}})})}});

