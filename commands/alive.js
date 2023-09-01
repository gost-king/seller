
const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,sleep} = require('../lib')
const { TelegraPh } = require('../lib/scraper')   
const util = require('util')

        //---------------------------------------------------------------------------
cmd(
    {
      pattern: "alive",
      category: "general",
      react: "🎋",
      filename: __filename,
      desc: "is bot alive??"
    },
    async (Void, citel, text, isAdmins) => {
      let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by KALINDU.*`;
      const mylink = `https://chat.whatsapp.com/K7i6DvdR8u34WCFuASM26a`
      const alivtxt = `
  🎋⃟🤴 *ʜᴇʏ, ${citel.pushName},*
  
  🎋⃟👨‍🚒 *ᴠᴇʀꜱɪᴏɴ:-* 0.0.9
  
  🎋⃟🧛 *ᴜᴘᴛɪᴍᴇ:-* _${runtime(process.uptime())}_
  
  🎋⃟🧙‍♂️ *ᴏᴡɴᴇʀ:-* _${Config.ownername}_
  
  ━━━━━━━━━━━
  
  🎋► ᴏɴʟɪɴᴇ ɴᴏᴡ...
  
  🎋► ɪ'ᴀᴍ ᴅᴀʀᴋ ɴᴇʀᴏ ᴠ9 ᴡᴀ ʙᴏᴛ...
  
  🎋► ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ...
  
  🎋► ᴛʏᴘᴇ .ʟɪꜱᴛ ᴛᴏ ɢᴇᴛ ᴍʏ ꜰᴜʟʟ ᴄᴏᴍᴍᴀᴅ ʟɪꜱᴛ... 
  
  ━━━━━━━━━━━━
  
  
  `;
      let aliveMessage = {
        image: {
          url: await botpic()
        },
        caption: alivtxt,
         
        
        footer: tlang().footer,
        headerType: 4,
    
        externalAdReply: {
          showAdAttribution: true
        }
      };
  
      await Void.sendMessage(citel.chat, aliveMessage, { quoted: citel });
  
      await Void.sendMessage(
        citel.chat,
        {
          audio: {
            url:
              "https://raw.githubusercontent.com/comming/main/src/alive.aac"
          },
          mimetype: "audio/mp4",
          ptt: true
        },
        { quoted: citel }
      );
    }
  );
  
