const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("c");
var
bot.on("ready", () => {
  bot.user.setPresence({ game: { name: '[chelp] Cloud v.1.0.0' , type: 0}})  
    console.log("Bot Ready !");
});

bot.login("NTc0MzI5NDcyMjA4MjA3OTA0.XM34dg.ylgqe5tgDHppsQD_Mvsn0NZoAJs");

bot.on('message' , message => {
    if(message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#40A497')
            .addField(":satellite_orbital: Commandes du Bot" , "      chelp : Affiche les commandes du bot ! / Displays the bot commands !")
            .addField(":musical_note: Musique" ,"     cmusic <name> : Te permet d'écouter la musique grâce à Youtube ! / Allows you to listen to music through Youtube !")
            .setFooter("Cloud , Developped by McKenzie , 2019-2040")
        message.channel.sendEmbed(help_embed);
        //message.channelsendMessage('Voici les commandes du bot : \n -chelp pour afficher les commandes');
        console.log("Commande Help demandé !");
    }

});
