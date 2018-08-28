const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ownerID = `350772260031954944`;
const prefix = `t!` ;
var comandos = new Discord.Collection();

client.login('NDgxMjM0NjQ4NjI2NjI2NTgw.Dl2m9A.oTuPbnmS0MUURSWJxG8sHHuaI8s');

client.on("ready", () => {
    client.user.setGame(`| The Toxic |`, 'https://twitch.tv/ZiraMC')
})sq


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo é ${prefix}`);



    client.on('guildMemberAdd', member => {
        const bemvindo = member.guild.channels.find('name', 'entrada') //créditos PrimoDoBiscoito#0700
        var canalentradaesaida = new Discord.RichEmbed()
       
          .setAuthor(member.user.tag + '', member.user.displayAvatarURL) //créditos PrimoDoBiscoito#0700
          .setDescription(`Bem-vindo **${member.user.tag}** ao servidor!`) //créditos PrimoDoBiscoito#0700
          .setFooter(`Entrou no servidor.`) //créditos PrimoDoBiscoito#0700
          .setThumbnail(member.user.displayAvatarURL) //créditos PrimoDoBiscoito#0700
          .setTimestamp() //créditos PrimoDoBiscoito#0700
          return bemvindo.send(canalentradaesaida); //créditos PrimoDoBiscoito#0700
      });
      client.on('guildMemberRemove', member => {
        const canalsaiu = member.guild.channels.find('name', 'saida') //créditos PrimoDoBiscoito#0700
      //créditos PrimoDoBiscoito#0700
        var canalentradaesaida = new Discord.RichEmbed() //créditos PrimoDoBiscoito#0700
    
          .setAuthor(member.user.tag + '', member.user.displayAvatarURL) //créditos PrimoDoBiscoito#0700
          .setDescription(`**${member.user.tag}** saiu do servidor!`) //créditos PrimoDoBiscoito#0700
          .setFooter(`Saiu do servidor.`) //créditos PrimoDoBiscoito#0700
          .setThumbnail(member.user.displayAvatarURL) //créditos PrimoDoBiscoito#0700
          .setTimestamp() //créditos PrimoDoBiscoito#0700
          return canalsaiu.send(canalentradaesaida); //créditos PrimoDoBiscoito#0700
      });

client.on('message', message => {
    if(message.content.toLowerCase() === 'z!invite')
    message.channel.send('Meu Convite: https://discordapp.com/oauth2/authorize?client_id=481234648626626580&scope=bot&permissions=2146958847');

});
client.on('message', message => {
    if(message.content.toLowerCase() === 'z!convidar')
    message.channel.send('Meu Convite: https://discordapp.com/oauth2/authorize?client_id=481234648626626580&scope=bot&permissions=2146958847');

});
client.on('message', message => {
    if(message.content.startsWith("z!serverinfo")){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField(":wave: Informções Do Servidor", "Veja As Informações Do Servidor !") // By Super
        .addField(":rocket: Nome do Server:", message.guild.name) // By Super
        .addField(":crown: Criador:", message.guild.owner) // By Super
        .addField(":date: Criado Em:", message.guild.createdAt) // By Super
        .addField(":star2: Você Entrou Em:", message.member.joinedAt) // By Super
        .addField(":earth_americas: Região Do Servidor:", message.guild.region) // By Super
        .addField(":bust_in_silhouette: Membros No Servidor:", message.guild.memberCount); // By Super
    
        return message.channel.send(serverembed);
      }
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


