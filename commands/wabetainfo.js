const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib');
const apikey = ' vihangayt api key ' ;
cmd({
    pattern: "wabeta",
    alias: ["wabetaino",".wabe"],
    react: "🧾",
    desc: "",
    category: "download",
    use: '.wabetainfo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, darkneo, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const wanews = await fetchJson(`https://vihangayt.me/details/wabetainfo?apikey=VihangaYT`);


            const txt2 = await Void.sendMessage(citel.chat, {image: {url: res.COVER}, caption: `\n*_|:̵🤹‍♂️⃟⃪♥️̟⎝⃝࿐ᴇꜱᴀɴᴀ ɴᴇᴡꜱ_* \n\n📃⃕⃕⃟⃫🥷 ᴛɪᴛᴇʟ :  ${res.TITLE}\n\n📃⃫⃕⃟🥷 ᴅᴀᴛᴇ & ᴛɪᴍᴇ :  ${res.PUBLISHED}\n\n📃⃫⃕⃟🥷 ᴜʀʟ : ${res.URL}\n\n📃⃫⃕⃟🥷 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${res.DESCRIPTION}\n\n*┗━━━━━━━━━━━━━━◆*\n\n ©ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ`}, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: {
        text: "📰",
        key: txt2.key,
            } } );

    } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
})
