var Discord = require("discord.js");
var prefix = "~"
var client = new Discord.Client();
var token = "NjY4Mjg1OTcwNTcwODA1MjU5.Xm8tyw.Q8hsavM4-2Hk83jVL-RYQ3tCXeo"
var server = {};

client.on("ready", () => {
  console.log("Siap Menjadi Yang Terbaik")
  client.user.setActivity('OnionServer', {type: 'LISTENING'}).catch(console.error);
});

client.on('message', msg => {
 if(msg.content.startsWith(`${prefix}kick`)) {
     if(msg.member.hasPermission("KICK_MEMBERS")) {
  let member = msg.mentions.members.first();
  if(member) {
      member.kick('Telah MengKick User').then(() => {
          msg.channel.send(`Berhasil Kick ${member}`);
        }).catch(err => {
          msg.channel.send('Erorr Coba Lagi!');
          console.error(err);
        });
  } else {
      msg.channel.send("Mention User Dulu :')!")
  }
}
 }
});
client.on('message', msg => {
  if(msg.content.startsWith(`${prefix}ban`)) {
      if(msg.member.hasPermission("BAN_MEMBERS")) {
   let member = msg.mentions.members.first();
   if(member) {
       member.ban('Telah Memban User').then(() => {
           msg.channel.send(`Berhasil Ban ${member}`);
         }).catch(err => {
           msg.channel.send('Gagal Coba Ulang Command.');
           console.error(err);
         });
   } else {
       msg.channel.send("Mention User Dulu :')!")
   }
}
  }
});
client.on('message', msg => {
  if(msg.content.startsWith(`${prefix}clear`)) {
      if(msg.member.hasPermission("ADMINISTRATOR")) {
   let member = msg.mentions.members.first();
   if(member) {
       msg.delete('Menghapus Pesan Di Channel').then(() => {
           msg.channel.send(`Berhasil Ban ${member}`);
         }).catch(err => {
           msg.channel.send('Gagal Coba Ulang Command.');
           console.error(err);
         });
  
   }
}
  }
}); 

     client.on('message', msg => {
     let args = msg.content.substring(prefix.length).split("");
     switch (args[0]) {
      case 'help':
        const Embed = new RichEmbed()
        .setTitle("Onion Command List")
        .setColor(0xFF0000)
        .setDescription("~kick,~Ban Update Setiap Minggu Untuk Command :)");
        

       
     

      

        message.author.send(Embed);
        message.channel.send("Check Dm Kamu");
    break;
    }
     })
         
    
  





    

 


  



client.login(token);
