const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------
cmd({
            pattern: "menu",
	    alias: ["මෙනු", "help", "cmd"],
            react: "👨‍🎤",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `_*A bot developed by CYBER-THUSHN*_`
            const alivtxt = `
  *ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ*
┏━━━━━━━━━━━━━━━┓
    *ʜᴇʟʟᴏ*
━━━━━━━━━━━━━━━━
|:̵̟⎝⃝࿐ᴜᴘᴛɪᴍᴇ⇨ ${runtime(process.uptime())}
|:̵⎝⃝࿐ᴍᴏᴅᴇ⇨ ${Config.WORKTYPE}
┏━━━━━━━━━━━━━━━┓
|🕴⃟⃪⃭⃐👨‍🎤 ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ
|━━━━━━━━━━━━━━━━
|🕴⃟⃪⃭⃐👨‍🎤 ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ
|━━━━━━━━━━━━━━━━
|🕴⃟⃪⃭⃐👨‍🎤 ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ
|━━━━━━━━━━━━━━━━
©​🇩​​🇮​​🇱​​🇸​​🇭​​🇦​​🇳​ ​🇲​​🇩​
|━━━━━━━━━━━━━━━━
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
            Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });
            
            await Void.sendMessage(citel.chat, { audio: {url: "https://raw.githubusercontent.com/gost-king/sellergost-king/seller/main/auth_info_baileys/audio/menu.mp3" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
        }
    )

