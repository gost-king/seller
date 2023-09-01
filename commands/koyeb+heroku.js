/**

 **/
const axios = require('axios');
const { tlang,cmd } = require('../lib')
const Config = require('../config')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "updatenow",
    react: "🎇",
    desc: "update bot with main repo.",
    filename: __filename,
    category: "misc",
  },
  async (Void,citel,text,{isCreator}) => {
    async function updatedb() {	
      const simpleGit = require('simple-git')	
          const git = simpleGit();	
        const Heroku = require('heroku-client');	
        const heroku = new Heroku({ token: process.env.HEROKU_API_KEY })	
          await git.fetch();	
              var commits = await git.log(['main' + '..origin/' +'main']);	
              if (commits.total === 0) {	
                return 'ʏᴏᴜ..ʜᴀᴠᴇ...ᴀʟʀᴇᴅʏ..ᴜᴘᴅᴀᴛᴇᴅ...'	
              } else {	
                    var app = await heroku.get('/apps/' + process.env.HEROKU_APP_NAME)	
                   //   await Void.sendMessage(citel.chat,{text:'*ᴜᴘᴅᴀᴛɪɴɢ...*'})	
                  git.fetch('upstream', 'main');	
                  git.reset('hard', ['FETCH_HEAD']);	
      
                  var git_url = app.git_url.replace(	
                    "https://", "https://api:" + process.env.HEROKU_API_KEY + "@"	
                  )   	
                  try {	
                    await git.addRemote('heroku', git_url);	
                  } catch { console.log('heroku remote adding error'); }	
                  await git.push('heroku', 'main');	
      
                  return '*ʙᴏᴛ ᴜᴘᴅᴀᴛᴇᴅ...*\n_Restarting._'	
      
      
              }	
            }	
       if(!isCreator) return citel.reply(tlang().owner);
       if (Config.heroku=true){
        const DB = require('../lib')
        let commits = await DB.syncgit()
        if (commits.total === 0)  {
         citel.reply(`Hey ${citel.pushName}. You have latest version installed.`)
          } else { 
             citel.reply('Build Started...')
            let update = await DB.updatedb()
              citel.reply(update)
          }

       }
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await redeploy();
       return citel.reply(data)
  })
