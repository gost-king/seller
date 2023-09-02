const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------
cmd({
            pattern: "menu",
	alias: ["මෙනු", "help", "cmd"],
            react: "🥷",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `_*A bot developed by CYBER-THUSHN*_`
            const alivtxt = `
🔥 *ᴅᴀʀᴋ ɴᴇʀᴏ ᴠ9 ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ*🔥
┏━━━━━━━━━━━━━━━┓
 ❀ *ʜᴇʟʟᴏ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴅᴀʀᴋ ɴᴇʀᴏ ʙᴏᴛ ᴜꜱᴇʀꜱ*❀
┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉
|:̵🤹‍♂️⃟⃪♥️̟⎝⃝࿐ᴜᴘᴛɪᴍᴇ⇨ ${runtime(process.uptime())}
|:̵🤹‍♂️⃟⃪♥️̟⎝⃝࿐ᴍᴏᴅᴇ⇨ ${Config.WORKTYPE}
┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉
|🤺⃟⃪⃭⃐🥷 ${prefix}1 ♤ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ♤
|🤺⃟⃪⃭⃐🥷 ${prefix}2 ♤ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ♤
|🤺⃟⃪⃭⃐🥷 ${prefix}3 ♤ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ♤
|🤺⃟⃪⃭⃐🥷 ${prefix}4 ♤ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅꜱ♤ 
|🤺⃟⃪⃭⃐🥷 ${prefix}5 ♤ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ♤
|🤺⃟⃪⃭⃐🥷 ${prefix}6 ♤ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ♤ 
|🤺⃟⃪⃭⃐🥷 ${prefix}7 ♤ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ♤
┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉
©ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ
━━━━━━━━━━━━━━━━
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
            
            await Void.sendMessage(citel.chat, { audio: {url: "https://github.com/gost-king/seller/raw/main/auth_info_baileys/audio/menu.mp3" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
        }
    )

