
const embed = require('discord.js');



const Discord = require('discord.js');



const client = new Discord.Client();



var prefix = 'ee!'







client.on("ready", () => {client.user.setGame(' ee!yardım | COME BACK! | Sunucu Sayısı: ' + client.guilds.size , 'https://twitch.tv/TheGodFather')



});

  client.on('message', msg => {



    if (msg.content === prefix + 'yardım') {



  let embed = new Discord.RichEmbed()



  .setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



  .addField("KOMUTLAR",



  "tüm komutlar burada ->")



  .addField("Ana Komutlar",



  "ee!evlen = Seçilen kullanıcıya evlenme teklifi eder. \n ee!çayiç = Seçilen kullanıcı ile çay içersiniz. \n ee!bilgi = Botun bilgilerini gösterir. \n ee!istatistik = Botun istatistiklerini gösterir. \n ee!ekip = Mafya ekibini gösterir. \n f!ekle = Botun ekleme linkini gösterir. \n ee!sunucular = Haraca bağlanan sunucular. \n ee!tavsiye = Tavsiyenizi iletir. ")



  .addField(":cry: Mod Komutları :hammer: ",



  " ***Şu anda çalışmıyorlar!*** \n ee!temizçek = Kanalı tamamen temizler. \n ee!temizle <sayı> = Belirtilen sayı kadar mesaj siler.")



  .addField(":joy: Eğlence Komutları :stuck_out_tongue: ",



  "***Bakımda...***\n ee!konuştur = Bot dediğinizi söyler \n ee!yazıtura = Yazı tura atar şansına ne gelirse.\n ee!havalıyürü = Havalı yürür. \n ee!havalıyumruk = Havalı bir şekilde yumruk atar.\n ee!selamla = Politakacı gibi selamlar. \n ee!tokatla = Birini tokatlar. \n f!topuğunasık = Birinin topuğuna sıkar. \n ee!avatar = Profil fotoğrafını gösterir.")



  .setFooter(`Bot yapımcısı: Emir | AgentSLayer#5218'dir`)



msg.member.send({embed: embed})



    


  }
 



//if (msg.content === prefix + 'istatistik') {



//let embed = new Discord.RichEmbed()



//.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



//.addField("İSTATİSTİKLER",



//`Bulunduğum sunucu sayısı :file_folder:: ${client.guilds.size} \n Bulunnduğum kanal sayısı :clapper:: ${client.channel.size} \n Beni kullanan kişi sayısı :family_mwgb:: ${client.users.size}`)



//msg.channel.send({embed: embed})



//}




 


client.on('message', msg => { 



if(msg.content === prefix + 'yardım') { 



let embed = new Discord.RichEmbed()  



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))  



.addField("Özel mesaj olarak gönderdim", 



"Özel mesajlarını kontrol et! :postbox:") 



msg.channel.send({embed: embed})  



} 



});


 if (msg.content === prefix + "avatar") {



    let embed = new Discord.RichEmbed()



    .setAuthor(msg.author.username, msg.author.avatarURL)



    .setColor(3447003)



    .setImage(msg.author.avatarURL)



return msg.channel.send({embed})}



  



 



if (msg.content === prefix + 'ekip') {



let embed = new Discord.RichEmbed()



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



.addField("MAFYA EKİBİM",



"https://fliegeryapim.weebly.com/")



msg.channel.send({embed: embed})



}



if(msg.content === prefix + 'sunucular'){



    msg.channel.send(client.guilds.map(g => g.name))



 }



  if(msg.content === prefix + 'bilgi'){



    if(msg.author.id != 414353271474487298){



     let embed = new Discord.RichEmbed()



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



    .addField('**Sunucu Sayım:**',



	'\n'+ client.guilds.size); 



msg.channel.send({embed: embed})	



   }}







  if (msg.content === prefix + 'havalıyürü') {



   var cevaplar = ['http://3.bp.blogspot.com/-MYS6Lif816s/VdCqGSEUXqI/AAAAAAAAEsM/S1Ci5YHLEmc/s1600/KEMAL_SUNAL_KABADAYI.Gif','http://3.bp.blogspot.com/-MYS6Lif816s/VdCqGSEUXqI/AAAAAAAAEsM/S1Ci5YHLEmc/s1600/KEMAL_SUNAL_KABADAYI.Gif' ];



   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];



   msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM"))



  }



  if (msg.content === prefix + 'havalıyumruk') {



   var cevaplar = ['http://1.bp.blogspot.com/-WBjck4B7dAY/VdCr6HctTlI/AAAAAAAAEuk/9RU1S4L_Ah0/s1600/KEMAL_SUNAL_YUMRUGA_CARPAN_ADAM.gif','http://1.bp.blogspot.com/-WBjck4B7dAY/VdCr6HctTlI/AAAAAAAAEuk/9RU1S4L_Ah0/s1600/KEMAL_SUNAL_YUMRUGA_CARPAN_ADAM.gif' ];



   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];



   msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM"))



  }



  if (msg.content === prefix + 'selamla') {



   var cevaplar = ['http://1.bp.blogspot.com/-vSMTAD2stxw/VdCrgr7N5XI/AAAAAAAAEt8/-tP1VMqC1UA/s1600/KEMAL_SUNAL_POLITIKACI.Gif','http://1.bp.blogspot.com/-vSMTAD2stxw/VdCrgr7N5XI/AAAAAAAAEt8/-tP1VMqC1UA/s1600/KEMAL_SUNAL_POLITIKACI.Gif' ];



   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];



   msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM"))



  }



   if (msg.content === prefix + 'tokatla') {



   var cevaplar = ['http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif','http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif' ];



   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];



   msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM"))



  }



  if (msg.content === prefix + 'topuğunasık') {



   var cevaplar = ['https://i.hizliresim.com/6Jy1k3.jpg','https://i.hizliresim.com/8YNr1r.jpg' ];



   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];



   msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM"))



  }



  if (msg.content === prefix + 'replik') {



   var cevaplar = ['http://llcdn.listelist.com/listeliststatic/2016/06/06172011/the-godfather-marlon-brando.jpg','http://filoji.com/wp-content/uploads/2017/02/godfather-sozleri-758x426.jpg','http://4.bp.blogspot.com/-wivUMG37WaA/VCU-4ynFIkI/AAAAAAAAFwE/mO2bt2dtNYU/s1600/563388_220663651391863_911448412_n.jpg','https://d.neoldu.com/news/24199.jpg','https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s750x750/sh0.08/e35/12960183_1590590497926818_404018648_n.jpg?ig_cache_key=MTIyNTQzODUxMDEwMDM3MTk4Ng%3D%3D.2','https://scontent-sea1-1.cdninstagram.com/vp/146461f2f61627da9f82420ce58267c7/5B0C6CE7/t51.2885-15/s480x480/e35/15802138_244699849288807_1320414246919471104_n.jpg?ig_cache_key=MTQyMDIzODgxOTYzNDQzODM3Mw%3D%3D.2','https://pbs.twimg.com/media/CnHH22UWYAAZcZg.jpg','https://galeri14.uludagsozluk.com/833/unutulmaz-film-replikleri_1568077.jpg','https://cdn-images-1.medium.com/max/1200/1*Vc8qXTjuZCii4gBMaQtCdg.jpeg','http://www.scrolldroll.com/wp-content/uploads/2017/08/godfather-quotes-2.jpg?x80640','https://d.neoldu.com/news/18332.jpg','https://www.neoldu.com/d/other/resiml~1-008.jpg','https://www.neoldu.com/d/other/aldatm~1.jpg'];



   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];



   msg.channel.sendEmbed(new Discord.RichEmbed().setImage(`${cevap}`).setColor("RANDOM"))



  }



  



if (msg.content === prefix + 'ekle') {



let embed = new Discord.RichEmbed()



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



.addField("Beni Eklemek İçin Tıkla",



"https://goo.gl/rMgA7B")



.addField("Mafya Evime Gelmek İçin Tıkla",



"https://discord.gg/XeRb7AG")



msg.channel.send({embed: embed})



}



if (msg.content === prefix + 'fragman') {



let embed = new Discord.RichEmbed()



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



.addField('Fragmanı izlemek için tıkla:',



 'The Godfater Orjinal Fragmanı: https://goo.gl/gNbRL1')



msg.channel.send({embed: embed})



}



//örnek



//if (msg.content === prefix + "özet 1") {



//let embed = new Discord.RichEmbed()



//.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



//.addField("Star Wars: Bölüm I - Gizli Tehlike",



//"Naboo gezegenindeki problemi çözmek için iki Jedi Şövalyesi, Qui Gon Jinn ve Obi-Wan Kenobi Naboo'ya doğru yola çıkarlar. Yolda, köle bir çocuk olan Anakin Skywalker ile karşılaşırlar. Çocuğun içindeki güç'ün çok yüksek olduğunu fark eden şövalyeler Anakin'i de yanlarına alarak yola devam ederler.")



//msg.channel.send({embed: embed})



//}







   if (msg.content.toLowerCase() === prefix + `yazıtura`) {



    var sans = ["YAZI", "TURA"];



    var sonuc = sans[Math.floor((Math.random() * sans.length))];



    msg.channel.send(`**Sonuç: ${sonuc}**`);



  }



   if(msg.content.startsWith(prefix + 'tavsiye')){



	   if(msg.author.id != 413346140768043018){



      client.users.get('368450660036771850').send(msg.author.username + ' adlı kişinin tavsiyesi: ' + msg.content);



	   let embed = new Discord.RichEmbed()



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



	  .addField('**BOT SAHİBİNE şunu tavsiye ettiniz: **' + msg.content + '\n**Tavsiyeniz BOT SAHİBİNE iletildi.**',



'***En yakın zamanda dönüş alacaksınız.***');



     client.channels.get("401633988726226956").send(msg.author.username + '** şunu tavsiye etti: **' + msg.content );  



	 msg.channel.send({embed: embed})



	 



}}



  



  if (msg.content.toLowerCase() === prefix + `replikyazı`) {



  var sans = ['Adalet için, Don Corleone ye gitmeliyiz',' Neden önce polise gittin? Neden önce bana gelmedin?','Para silahtır ama siyaset, tetiği ne zaman çekeceğini bilmektir ','Dostluk ve para zeytinyağı ve su gibidir','Sakın bana masum olduğunu söyleme çünkü bu benim zekama hakarettir','Ailesiyle vakit geçirmeyen bir adam asla gerçek bir adam olamaz ','En zengin insan, en güçlü arkadaşlara sahip olan insandır ',' Eli çantalı bir hırsız (avukatlar) eli silahlı bir hırsızdan daha çok çalar ','Düşmanlarından nefret etme, bu senin yargılama yetini etkiler','Kimsenin gözünün içine bakma, baktıklarında da gözünü kaçırma','Kızımın düğününün olduğu gün bana gelip para karşılığı cinayet işlememi istiyorsun \n -Senden adalet istiyorum','Bu dünyada herhangi bir şey kesinse, tarih bize bir şey öğretebildiyse, o da istediğin herkesi öldürebileceğindir','İntikam, soğuk yenilen bir yemektir','Sicilya’da kadınlar tabancadan bile tehlikelidir','Dostlarını kendine yakın tut, düşmanlarını daha da yakın','Don Corleone, kızının düğününe beni de çağırman benim için büyük bir şeref. Umarım ilk çocukları erkek gibi erkek olur ','Ona reddedemeyeceği bir teklif sunacağım','Clemenza: Tamam, diyelim ki ikisini de vurdun. Sonra ne yapacaksın? \n Micheal: Oturup yemeğimi bitireceğim'];



    var sonuc = sans[Math.floor((Math.random() * sans.length))];



	let embed = new Discord.RichEmbed()



.setColor(Math.floor(Math.random() * (0xFFFFFF + 5)))



    .addField(`**${sonuc}**`,



	'En sevdiğim repliklerden');



	msg.channel.send({embed: embed})



  }







});



//if(msg.content === prefix + 'aga-relax-zamanı'){



    //let embed = new Discord.RichEmbed()



    //.setAuthor(msg.author.username, msg.author.avatarURL)



    //.setTitle("Aga Relax Zamanı!")



    //.setDescription("Teşekkürler: relax#6813")



    //.setColor(3447003)



    //.setImage("https://cdn.discordapp.com/attachments/364486332216639490/414773970215370762/aga_relax_zaman.png")



//return msg.channel.send({embed})}



  

client.login(process.env.BOT_TOKEN);
