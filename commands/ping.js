/**

 **/

//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "ping",
        react: "⚡",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '``` ⚡ᴾᴸᴱᴬˢᴱ ᵂᴬᴵᵀᴵᴺᴳ...⚡```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*|:̵ ᴘᴏɴɢ*\n *' + (final - inital) + 'ᴍꜱ* ', edit: key});
    }
);
