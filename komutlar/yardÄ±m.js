const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
    
             .setColor('#fff000')
             .addField(`Η Y Đ Я Λ`, `
             <a:hydratac:789369824249643009> ${prefix}antiraid aç
             <a:hydrastarrr:802176913757831198> ${prefix}capsengel aç
             <a:hydratac:789369824249643009> ${prefix}emojikoruma aç
             <a:hydrastarrr:802176913757831198> ${prefix}everengel aç
             <a:hydratac:789369824249643009> ${prefix}kanalkoruma aç
             <a:hydrastarrr:802176913757831198> ${prefix}küfürengel aç
             <a:hydratac:789369824249643009> ${prefix}modlog #kanal
             <a:hydrastarrr:802176913757831198> ${prefix}reklamengel aç
             <a:hydratac:789369824249643009> ${prefix}rolkoruma aç
             <a:hydrastarrr:802176913757831198> ${prefix}sohbet-aç
             <a:hydratac:789369824249643009> ${prefix}sohbet-kapat
             <a:hydrastarrr:802176913757831198> ${prefix}sil-üye @üye miktar
             <a:hydratac:789369824249643009> ${prefix}sil miktar
             <a:hydrastarrr:802176913757831198> ${prefix}yavaşmod süre
             <a:hydratac:789369824249643009> ${prefix}ban @üye sebep
             <a:hydrastarrr:802176913757831198> ${prefix}kick @üye sebep             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'g!yardım'
}
//DÜZENLENECEK