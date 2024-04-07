const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6285729415703'] //ur owner number
global.ownernomer = "6285729415704" //ur owner number2
global.ownername = "ziuU HOSTING" //ur owner name
global.ytname = "BELUM ADA" //ur yt chanel name
global.socialm = "IG : jamaludinpekok" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "https://chat.whatsapp.com/BaoarrYcz5KI3RjJQ58oC2"
global.botname = "Created By ziuU"
global.ownerNumber = ["6285729415703@s.whatsapp.net"]
global.ownerweb = ""
global.themeemoji = '🪀'
global.wm = "kayzen.my.id"
global.packname = "Sticker By Hans"
global.author = "Hans4ziuU\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/26e0f1f23a416a4261b73.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})