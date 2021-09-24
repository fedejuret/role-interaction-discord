"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Client, Intents } = require('discord.js');
const generatedClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const registerCommands = require('../commands/commands');
generatedClient.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Logged in as ${generatedClient.user.tag}!`);
    yield registerCommands(generatedClient);
}));
generatedClient.on('interactionCreate', (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isCommand())
        return;
    console.log(interaction);
    if (interaction.commandName === 'ping') {
        yield interaction.reply('Pong!');
    }
}));
generatedClient.login(process.env.BOT_TOKEN);
exports.default = generatedClient;
