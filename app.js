const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const preferencias = require('./preferences.json');
const ownerID = preferencias.ownerID;
const prefix = `l!` ;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login('NDc0NzU4NzI4NzYwMDMzMzAx.DkVJXg.hX4pRmsmfSiK3i7T-BTat3WW7p4');

client.on('ready', () => {


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo é ${prefix}`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', '💌entrada');
    if (!channel) return;
    channel.send(`:wave: | Seja muito bem-vindo ${member}! Caso não saiba os comandos, dê __l!ajuda__.`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', '💌entrada');
  if (!channel) return;
  channel.send(`<:blobs_sad:421801402554384391> | Infelizmente o membro saiu do servidor... Adeus ${member}.`);
});

client.on('message', message => {
    if(message.content.toLowerCase() === 'lophus')
    message.channel.send('digite ``l!ajuda`` para comandos');

});

client.on('message', message => {
    if(message.content.toLowerCase() === 'bom dia lophus')
    message.channel.send('bom dia');

});


client.on('message', message => {

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
    message.delete();

});
