const { SIGUNUSED } = require('constants');
const Discord = require('discord.js');
const { url } = require('inspector');
const fs = require("fs")

const Client = new Discord.Client;

    // prefix du bot
let prefix = "%";
fs.readFile('prefix.txt', function(err, data) {
    prefix = data;
    });

Client.on("ready", () => {
    console.log("bot opérationnel");
});

//code du bot :
Client.on("message", message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    
    //commande help
    if (message.content == prefix + "help"){
        const embed = new Discord.MessageEmbed()
        .setColor(941919)
        .setTitle("Pour t'aider parce que t'es con")
        .setDescription("**__ - Le prefix __** =   "+ prefix + " \n- alaska | Montre la grosse tete d'alaska \n- picolo | montre ma tête de bg sah \n- la faciale | augustin se la prend fort  \n- italiano | mmmmmh la suus ! \n- reset prefix | reset le prefix de base (%) \n- prefix | <prefix à changer>  \n - info prefix | montre le prefix actuelle \n - reset namebot | reset le nom du bot (Picolo) \n - namebot | change le nom du bot")
        .setFooter("Cordialement le plus sadique des oiseaux");
        message.channel.send(embed);
    }

    //changer le prefix du bot 

    if(message.content.startsWith(prefix + "prefix")){
        let args = message.content.split(' ');
        if(args[1] != null ){
            fs.writeFile("prefix.txt",args[1],{flag: "w+"},function(err){});
            fs.readFile("prefix.txt", function(err, data) {
            prefix = data;
            message.reply("Le prefix a bien été changé mashalla et maintenant c'est sa = | **" + data + "** |")
            });
        }
    }

    // pour reset le prefix

    if(message.content == "reset prefix"){
        fs.writeFile("prefix.txt","%",{flag: "w+"},function(err){});
        fs.readFile("prefix.txt", function(err, data) {
        prefix = data;
        message.reply("Le prefix a bien été reset mageule, du coup c'est sa = | **" + prefix + "** |")
    });
    }

    // pour connaitre le prefix

    if(message.content == "info prefix"){
        message.channel.send("Le prefix est = | **" + prefix + "** |")
    }


    // commandes utiles
    
    // changer le nom du bot

    if(message.content.startsWith(prefix + "namebot")){
        let args = message.content.split(' ');
        if(args[1] != null ){
            let name = "";
            args[0] = "";
            name = args.join(' ');
            message.guild.members.cache.get(Client.user.id).setNickname(name);
            message.reply("Le nom du bot bot a bien été changé maintenant c'est sa = | **" + name + "** |")
        }
    }

    // pour reset le nom du bot

    if(message.content.startsWith(prefix + "reset namebot")){
        let name = "Picolo";
        message.guild.members.cache.get(Client.user.id).setNickname(name);
        message.reply("Le nom du bot bot a bien été reset maintenant c'est sa = | **" + name + "** |")
    }

    // pour deletes des messages

    if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(' ');
            if(args[1] != null ){
                message.channel.messages.fetch({ limit: args[1] }).then(messages => { // Fetches the messages
                    message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                )});
        }
    }
    
    //commande pour faire dire ce que tu veut 


    if(message.content.startsWith(prefix)){
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commande = args.shift().toLocaleLowerCase();
    
        if(commande === "say") {
        
            if(args.length <= 0) return message.reply('t con je peux pas rien dire boloss')
            message.channel.send(args.join(' '));
        
        }
    
    }


    // commandes troll 

    if(message.content == "suce"){
        message.channel.send("ma queue");
    }

    if(message.content == "je suis"){
        message.reply(" est gay :partying_face:");
    }

    if(message.content == "la mère d augustin est une"){
        message.channel.send("**" + "grosse salope" + "**" + " hier je l ai soulever mais d une force alala :joy:");
    }

    if(message.content == prefix + "augustin"){
        message.channel.send("est gay hier il s est branlé sur du yaoi :wink: ");
    }

    if(message.content == prefix + "la pasta"){
        message.channel.send("hummm la suus ! :pinched_fingers:");
    }
    
    if(message.content == prefix + "stat"){
        message.channel.send(message.author.username + " l'ID de la personne est : " + message.author.id + " a posté ");
    }

    if(message.content ==  prefix + "marius"){
        message.channel.send("veut sa choke (et augustin aussi) :wink:");
    }


    if(message.content == "italiano"){
        const embed = new Discord.MessageEmbed()
        .setColor(652782)
        .setTitle("Hummm la suus :pinched_fingers:")
        .setFooter("Hmmmmm sah quel plaisir")
        message.channel.send(embed)
    }

    if(message.content == prefix + "la faciale"){
        const embed = new Discord.MessageEmbed()
        .setColor(652782)
        .setTitle("La grosse éjac")
        .setFooter("hummmm le sperm")
        .setImage("https://media.discordapp.net/attachments/627541623441719348/859525754223853608/unknown.png?width=350&height=468");
        message.channel.send(embed)
    }

    if(message.content == prefix + "assassin"){
        const embed = new Discord.MessageEmbed()
        .setColor(652782)
        .setTitle("Maxime l'assasin")
        .setFooter("R.I.P Nox")
        .setImage("https://media.discordapp.net/attachments/627541623441719348/859802798496809000/IMG_20210630_162229.jpg?width=283&height=468");
        message.channel.send(embed)
    }

    if(message.content == prefix + "picolo"){
        const embed = new Discord.MessageEmbed()
        .setColor(652782)
        .setTitle("Picolo")
        .setFooter("tete d oiseau !!!!!!!")
        .setImage("https://media.discordapp.net/attachments/859473606038913025/860205620476772403/20210314_194750.jpg?width=351&height=468");
        message.channel.send(embed)
    }

    let photos = ["https://cdn.discordapp.com/attachments/859473606038913025/860206212927062026/20210501_101955.jpg", "https://media.discordapp.net/attachments/859473606038913025/860206203610333194/20210502_090327.jpg?width=351&height=468"];
    
    if(message.content == prefix + "alaska"){
        const embed = new Discord.MessageEmbed()
        .setColor(652782)
        .setTitle("Alaska et belle bite")
        .setFooter("il fais froid ahahaha je suis drole aller au goulag maintenant")
        .setImage(photos[Math.round(Math.random() * (photos.length  - 1))]);
        message.channel.send(embed)
    
        
    }
});


Client.login(process.env.TOKEN);