const { Client, Intents, Guild } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const registerCommands = require('../commands/commands');

client.on('ready', async () => {
   console.log(`Logged in as ${client.user.tag}!`);
   await registerCommands(client);
});

client.on('interactionCreate', async interaction => {
   if (!interaction.isCommand()) return;

   if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
   }
});

client.login(process.env.BOT_TOKEN);

module.exports = client;