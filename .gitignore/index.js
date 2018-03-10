const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("WarsBot, *help");
    console.log("Le Bot a bien ete connecte");
});

bot.login("NDIyMTA3MjI1MTc2NDA4MDY0.DYW-XQ.nJfNfSMB573-D_ENKhjGTPOAi1M");
