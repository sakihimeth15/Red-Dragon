//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is ☬SAKI༒BOT࿐
My Creator is Sakidu Ganegoda` //Costomize Alive Message (type your message in `` )

global.owner = ['+94705000112'] //Owner number in aive msg
global.premium = ['+94705000112'] //Owner Number info
global.ownernomer = '+94705000112' //Owner Number <<<

global.ownername = 'SAKI' //Owner Name
global.botname = '☬SAKI༒BOT࿐' //Bot Name

global.button = '🤭Youtube📍' //Costomize A Button Name In Alive Message
global.btnurl = 'https://www.youtube.com/channel/UCbhQRTS80KKrvin1QgXh45Q' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬SAKI༒BOT࿐' //Bot Pacage Name
global.author = 'SAKI❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = '☬SAKI༒BOT࿐' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '☬SAKI༒BOT࿐' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://www.youtube.com/channel/UCbhQRTS80KKrvin1QgXh45Q' //Youtube Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉රැදී සිටින්න👈',
    error: 'Error🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
