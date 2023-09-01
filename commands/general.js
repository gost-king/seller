const { tlang, botpic, cmd, prefix, runtime, Config , sleep } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------
cmd({
        pattern: "owner",
	alias: ["owne "],
        desc: "To find owner number",
        category: "general",
        react: "🥷",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: '🥷ᴅᴀʀᴋ ɴᴇʀᴏ ᴠ9🥷.',
                    renderLargerThumbnail: false,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

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
            
            await Void.sendMessage(citel.chat, { audio: {url: "https://raw.githubusercontent.com/Kaveeshasithum/Dark-Nero-Bot-MD/main/src/menu.aac" }, mimetype: 'audio/mp4', ptt: true, }, { quoted: citel })
        }
    )

