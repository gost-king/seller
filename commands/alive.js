const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,sleep} = require('../lib')
const { TelegraPh } = require('../lib/scraper')   
const util = require('util')

        //---------------------------------------------------------------------------
cmd(
    {
      pattern: "alive",
      category: "general",
      react: "🧶",
      filename: __filename,
      desc: "is bot alive??"
    },
    async (Void, citel, text, isAdmins) => {
      let alivemessage = Config.ALIVE_MESSAGE || `.`;
      const mylink = `https://chat.whatsapp.com/`
      const alivtxt = `
  ━━━━━━━━━━━
  🕴⃟👨‍🎤 *ʜᴇʏ, ${citel.pushName},*
  
  🕴⃟👨‍🎤 *ᴜᴘᴛɪᴍᴇ:-* _${runtime(process.uptime())}_
  
  🕴⃟👨‍🎤 *ᴏᴡɴᴇʀ:-* _${Config.ownername}_
  
  ━━━━━━━━━━━
  
  👨‍🎤► ᴏɴʟɪɴᴇ ɴᴏᴡ...
  
  👨‍🎤► ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ...
  
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
              "https://github.com/gost-king/seller/raw/main/auth_info_baileys/audio/alive.mp3"
          },
          mimetype: "audio/mp4",
          ptt: true
        },
        { quoted: citel }
      );
    }
  );
  
