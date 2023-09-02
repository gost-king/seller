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


         

          const images = `${wanews.result.image}`
           const title = `${wanews.result.title}`
           const news = `${wanews.result.fulldesc}`
           const date = `${wanews.result.date}`

await conn.sendMessage(from,  { image: { url: images }, caption: `\n\n*${ title }*\n\n\n ${ news }\n\n\n ${date}`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
