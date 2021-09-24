
import generatedClient from '../client/client';
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
   {
      name: 'ping',
      description: 'Replies with Pong!',
   }
];

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

const registerCommands = async (client: typeof generatedClient) => {
   try {

      await rest.put(
         Routes.applicationGuildCommands(client.application.id, client.guilds.cache.first().id),
         { body: commands },
      );

   } catch (error) {
      console.error(error);
   }
};

module.exports = registerCommands;