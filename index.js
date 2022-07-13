import {Client} from 'discord-rpc'
import('colors');
const client = new Client({transport: 'ipc'});
client.on('ready', () => {
    console.log('Logged'.green);
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: 'Hello, world!',
            state: 'Maneki Neko, the best RP Discord bot!',
            assets: {
                large_image: 'maneki_neko',
                large_text: 'O melhor bot de RP para o Discord!'
            },
            buttons: [
                {
                    label: 'Add to Server',
                    url: 'https://discord.com/oauth2/authorize?client_id=789196560415064085&scope=bot&permissions=277025770568'
                },
                {
                    label: 'Support',
                    url: 'https://discord.gg/7UeV8jFz6m'
                }
            ]
        }
    });
});
client.login({clientId: '837826840004395048'});