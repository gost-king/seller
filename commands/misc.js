const {tlang, getAdmin, prefix, Config, sck,sck1, fetchJson,getBuffer, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");
  //---------------------------------------------------------------------------
 cmd({
    pattern: "welcome",
   react: "💌",
    alias:["setwelcome"],
    desc: "sets welcome message in specific group.",
    category: "misc",
 filename: __filename
},
async(Void, citel, text,{ isCreator }) => {

        let grp =citel.chat;
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)	
        const isAdmins = groupAdmins.includes(citel.sender) 
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
 
      let Group = await sck.findOne({ id: citel.chat });
      if (!text)  {  return await citel.reply ("*Wellcome Message :* "+Group.welcome)  }
      await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
      let metadata = await Void.groupMetadata(citel.chat);
      var ppuser;
      let num = citel.sender;
  
      var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
      try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://i.ibb.co/yXRYwTg/Whats-App-DP-363.jpg' ; }
      return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: welcome_messages,} )


       /*if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('Welcome added for this group.\n *Wellcome Message :* '+text )
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('Welcome updated successfully.\n *New Wellcome Message Is :* '+text)
                
            }      */
  
}
)
 //---------------------------------------------------------------------------
cmd({
    pattern: "goodbye",
  react: "👋",
    alias: ["setgoodbye","setbye"],
    desc: "sets goodbye message in specific group.",
    category: "misc",
 filename: __filename
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)	
    const isAdmins = groupAdmins.includes(citel.sender) 
    if (!isAdmins && !isCreator) return citel.reply(tlang().admin);

    let Group = await sck.findOne({ id: citel.chat })
    if (!text)  {  return await citel.reply ("*_Goodbye Message Is:_* "+Group.goodbye)  }
    await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' }) 
 
    let metadata = await Void.groupMetadata(citel.chat);
    var ppuser;
    let num = citel.sender;
    var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
    try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://i.ibb.co/yXRYwTg/Whats-App-DP-363.jpg' ; }

        return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: goodbye_messages, })

         /*   if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('Goodbye added for this group.\n *New Googbye Message Is :* '+text)
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('Goodbye updated successfully.\n *New GoodBye Message Is :* '+text)    
            }      
           */
})
 //---------------------------------------------------------------------------
 cmd({
        pattern: "getpp",
        react: "🔨",
        desc: "Get Profile Pic For Given User",
        category: "user",
        filename: __filename
    },
    async(Void, citel, text) => {

        if (!citel.quoted) return citel.reply (`*Please Reply To A User*`)
        let pfp;
        try  { pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
        catch (e) {  return citel.reply("```Profile Pic Not Fetched```") } 
        return await Void.sendMessage(citel.chat, {image: { url: pfp },caption: '  *---Profile Pic Is Here---*\n'+Config.caption, },{quoted:citel}); 


         }
     )

//-----------------------------------------------------------------------------------

if(Config.WORKTYPE != 'private')
{
 
cmd({
  pattern: "bot",
  react: "💫",
  desc: "activates and deactivates bot.\nuse buttons to toggle.",
  category: "misc",
  filename: __filename
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return citel.reply(tlang().owner)
  switch (text.split(" ")[0]) {
            case 'on':{
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, botenable: "true" }).save()
                        return citel.reply(`Successfully Enabled *${tlang().title}*`)
                    } else {
                        if (checkgroup.botenable == "true") return citel.reply("*Bot* was already enabled")
                        await sck.updateOne({ id: citel.chat }, { botenable: "true" })
                        return citel.reply(`Successfully Enabled *${tlang().title}*`)
                    }
                }

            break
           case 'off':{
                       {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, botenable: "false" })
                                .save()
                            return citel.reply(`Successfully disabled *${tlang().title}*`)
                        } else {
                            if (checkgroup.botenable == "false") return citel.reply("*Bot* was already disabled")
                            await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                            return citel.reply(`Successfully disabled *${tlang().title}*`)
                        }
                    }
           }
           break
           default:
           {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   let buttons = [{
                             buttonId: `${prefix}bot on`,
                             buttonText: {
                                 displayText: "Turn On",
                             },
                             type: 1,
                         },
                         {
                             buttonId: `${prefix}bot off`,
                             buttonText: {
                                 displayText: "Turn Off",
                             },
                             type: 1,
                         },
                     ];
                     await Void.sendButtonText(citel.chat, buttons, `Bot Status in Group: ${checkgroup.botenable}`, Void.user.name, citel);
           }
       }
})   
} // if Statements
