const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [{
   name: 'ping',
   description: 'Replies with Pong!'

}];

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

module.exports = registerCommands = async (client) => {
   try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
         Routes.applicationGuildCommands(client.application.id, client.guilds.cache.first().id),
         { body: commands },
      );

      console.log('Successfully reloaded application (/) commands.');
   } catch (error) {
      console.error(error);
   }
};