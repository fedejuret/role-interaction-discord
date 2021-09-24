const { Client, Intents } = require('discord.js');
import { Interaction } from "discord.js";

const generatedClient = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

const registerCommands = require('../commands/commands');

generatedClient.on('ready', async () => {
   console.log(`Logged in as ${generatedClient.user.tag}!`);
   await registerCommands(generatedClient);
});

generatedClient.on('interactionCreate', async (interaction: Interaction) => {
   if (!interaction.isCommand()) return;

   console.log(interaction);

   if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
   }
});

generatedClient.login(process.env.BOT_TOKEN);

export default generatedClient;