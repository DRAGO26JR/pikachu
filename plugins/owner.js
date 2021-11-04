const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid ==='919645566258@s.whatsapp.net') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'zhora Bot created by *prajwal*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '919645566258@s.whatsapp.net') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'zhora Bot created by *Prajwal*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '*HE IS MY BOSS*', MessageType.text);
        }
    }));
}
