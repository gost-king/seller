const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,sleep} = require('../lib')
const { TelegraPh } = require('../lib/scraper')   
const util = require('util')
//--------------------------




cmd({
    pattern: "eval",
    category: "owner",
    filename: __filename,
    desc: "Runs js code on node server."
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return
    try {
        let resultTest = await eval(`${match.replace(">", "")}`);
        if (typeof resultTest === "object")
            citel.reply(JSON.stringify(resultTest));
        else citel.reply(resultTest.toString());
    } catch (err) {
        return  citel.reply(err.toString());
    }
        })
