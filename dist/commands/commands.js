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
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    }
];
const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
const registerCommands = (client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield rest.put(Routes.applicationGuildCommands(client.application.id, client.guilds.cache.first().id), { body: commands });
    }
    catch (error) {
        console.error(error);
    }
});
module.exports = registerCommands;
