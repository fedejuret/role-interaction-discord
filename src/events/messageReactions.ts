import { MessageReaction, User } from 'discord.js';
import generatedClient from '../client/client';

generatedClient.on('messageReactionAdd', async (reaction: MessageReaction, user: User) => {

   console.log(reaction);
   console.log(user);

});

module.exports = generatedClient;