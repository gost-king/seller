const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "wamod", // Change the command pattern to something you prefer
        react: "✅",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file
            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_whatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_whatsapp.name,
                    caption: '𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾-𝙼𝙳'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_fmwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_fmwhatsapp.name,
                    caption: '𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾-𝙼𝙳'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_gbwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_gbwhatsapp.name,
                    caption: '𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾-𝙼𝙳'
                },
                { quoted: citel }
            );

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_yowhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_yowhatsapp.name,
                    caption: '𝙳𝙰𝚁𝙺-𝙽𝙴𝚁𝙾-𝙼𝙳'
                },
                { quoted: citel }
            );




        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);
