const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDQ1MjM3Nzg5MDU2MDQwOTcw.DejfoA.HbsjoWvoqXilNooAFlW5bYTCoDA');

var prefix = "p!"

var cor = "#cc00cc"

bot.on("ready", () => {
    bot.user.setGame('Digite p!ajuda para comandos', 'https://twitch.tv/PandaBot')
})

bot.on('message', message =>{
let responseObject = {
    "p!criador" : "Meu Criador : É O Rei Dos Panda O DEV | SuperPanda <3",
    "PandaBot" : "Meu Prefixo é ``p!``",
    "pandabot" : "Meu Prefixo é ``p!``",
    "p!teste123321" : "\n \n**:desktop: - COMANDOS - :desktop: \n \n Os Meus Comandos São Esses :smile: : \n \n 1 - p!convidar ``ME CONVIDAR PRO SEU GRUPO``\n 2 - p!criador ``VER MEU CRIADOR``\n 3 - p!server ``ENTRAR NO MEU SERVIDOR``\n 4 - p!ajuda ``OLHE MEU COMANDOS``\n 5 - p!ping ``VER MEU PING`` \n 6 - p!servericon ``MOSTRA A FOTO DO GRUPO`` \n 7 - p!serverinfo ``MOSTRA INFORMAÇÕES DO GRUPO``\n 8 - p!parceiro ``VER O GRUPO PARCEIRO DO PANDABOT``\n 9 - p!limparchat ``LIMPAR 50 MENSAGENS DO CHAT``\n 10 - p!avatar ``MENCIONE UMA PESSOA PARA VER O AVATAR (Foto De Perfil) DELA``\n \n :desktop: - COMANDOS - :desktop: ** \n \n",    "p!server" : "Meu Grupo No Discord \n https://discord.gg/vdyjC4D",
    "p!convidar" : "Meu Link Pra Invite \n https://discordapp.com/oauth2/authorize?client_id=445237789056040970&scope=bot&permissions=1610087679",
    "p!parceiro" : "Grupo Parceiro Do PandaBot \n https://discord.gg/RxdbSpA"
}
    if (message.content.startsWith("p!servericon")){
        message.reply(message.guild.iconURL)
    }
    if (message.content.startsWith("p!convidar")){
        message.reply("Meu Link Pra Invite \n https://discordapp.com/oauth2/authorize?client_id=445237789056040970&scope=bot&permissions=1610087679")
    }
    if (message.content.startsWith("p!meugrupo")){
        message.reply("Meu Grupo Do Discord \n https://discord.gg/vdyjC4D")
    }
    if (message.content.startsWith("p!parceiro")){
        message.reply("Grupo Parceiro Do PandaBot \n https://discord.gg/RxdbSpA")
    }
    if (message.content.startsWith("p!criador")){ 
        message.reply("``Meu Criador : SuperPanda#7095 \n Pessoas Que Ajudarão : N€RÐ#0907 & WhiteehDEV !#5442 & _SpeedLight_#4293``")
    }
    if (message.content.startsWith("p!parceiro")){
        message.reply("Grupo Parceiro Do PandaBot \n https://discord.gg/RxdbSpA")
    }
    if (message.content.startsWith("p!amor")){
        message.reply("Minha Vida , Meu Amor , Meu Xuxu <3 (Manu#3153)")
    }
    if(message.content.startsWith(prefix + "avatar")){
        let user = message.mentions.users.first() || message.author;
        let uicon = user.avatarURL
    
        let embed = new Discord.RichEmbed()
        .setTitle(`Avatar De(a) ${user.tag}`)
        .setImage(uicon)
        .setColor(cor)
        message.channel.send(embed)
    }
    if(message.content.startsWith("p!serverinfo")){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Informções Do Servidor", "Veja As Informações Do Servidor !")
        .addField(":rocket: Nome do Server:", message.guild.name)
        .addField(":crown: Criador:", message.guild.owner)
        .addField(":date: Criado Em:", message.guild.createdAt)
        .addField(":star2: Você Entrou Em:", message.member.joinedAt)
        .addField(":earth_americas: Região Do Servidor:", message.guild.region)
        .addField(":bust_in_silhouette: Membros No Servidor:", message.guild.memberCount);
    
        return message.channel.send(serverembed);
      }
      if(message.content.startsWith("p!ajuda")){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()

        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField(":desktop: **COMANDOS** :desktop:", "Olhe Aqui Embaixo Meus Comandos!")
        .addField("**1 - p!serverinfo**", "MOSTRA AS INFORMAÇÕES DO SERVIDOR")
        .addField("**2 - p!criador**", "MOSTRA MEU CRIADOR")
        .addField("**3 - p!convidar**", "ME CONVIDAR PRA SEU GRUPO")
        .addField("**4 - p!limparchat**(MANUTENÇÃO) ", "LIMPA 100 MENSAGENS DO CHAT")
        .addField("**5 - p!meugrupo**", "ENTRAR NO MEU GRUPO DO DISCORD")
        .addField("**6 - p!cat**", "Imagens De Gatinhos Aleatorio!")
        .addField("**7 - p!servericon**", "VEJA A FOTO DO GRUPO QUE VOÇÊ TA")
        .addField("**8 - p!ping**", "OLHE MEU PING")
        .addField("**9 - p!avatar**", "MOSTRA O AVATAR DO USUARIO MENCIONADO")
        .addField("**10 - p!kick**", "Kickar Um Usuario")
        .addField("**11 - p!ban**", "Banir Um Usuario")
        .addField(":desktop: **COMANDOS** :desktop:", "Em Breve Mais!")
    
        return message.channel.send(serverembed);
      }
      if(message.content.startsWith("p!familia")){
        let sicon = message.guild.iconURL;
        const serverembed = new Discord.RichEmbed()

        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField(":point_right: **---> OLHE MINHA FAMILIA <---** :point_left:", "Familia Do Panda")
        .addField("**PAI**", "Squidar#1533")
        .addField("**MÃE**", "Anna#2186")
        .addField("**FILHO'S**", "PandaBot#9549 , Copa#9254")
        .addField("**Adotada**", "Morreu!")
        .addField("**Namorada Do Panda**", "Manu#3153")
        .addField("**Namorada Do Copa**", "IsaBot™#3214")
        .addField("**Namorado Da Adotada**", "Morreu Tbm!")
        .addField("**Primo**", "Perry#6302")
        .addField("**Primeiro A Nasçer**", "Copa E PandaBot (Gemeos)")
        .addField("Grupo Da Familia!",  "Familia Se Encontra Aqui \n https://discord.gg/ahM29vS")
        .addField(":point_right: **---> OLHE MINHA FAMILIA <---** :point_left:", "Criado Por : SuperPanda🐼#7095")

        return message.channel.send(serverembed);
      }
})