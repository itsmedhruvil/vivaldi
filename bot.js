import {Client, Events, GatewayIntentBits} from 'discord.js';
import dotenv from 'dotenv';
import * as commands from './commands/play.js';
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on(Events.ClientReady, () => {
    console.log(client.user.tag + ' is ready!');
});

client.login(process.env.token);
