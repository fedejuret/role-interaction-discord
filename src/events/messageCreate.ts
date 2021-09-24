import { Message } from "discord.js";
import generatedClient from "../client/client";
// const { commandMessage } = require('../messages/messages');

generatedClient.on('messageCreate', async (message: Message) => {

   const author = message.author;
   console.log(author);

   if (message.content.startsWith('s!reaction')) {

      const channels = message.mentions.channels;

      channels.map(async (channel) => {
         console.log(channel);
         
         // const sendedMessage = await channel.send(commandMessage);

         // Promise.all([
         //    sendedMessage.react('1️⃣').then(elem => elem.role = 'react'),
         //    sendedMessage.react('2️⃣').then(elem => elem.role = 'angular'),
         //    sendedMessage.react('3️⃣').then(elem => elem.role = 'vue'),
         //    sendedMessage.react('4️⃣').then(elem => elem.role = 'nodejs'),
         //    sendedMessage.react('5️⃣').then(elem => elem.role = 'flutter'),
         //    sendedMessage.react('6️⃣').then(elem => elem.role = 'java'),
         //    sendedMessage.react('7️⃣').then(elem => elem.role = 'python'),
         //    sendedMessage.react('8️⃣').then(elem => elem.role = 'php'),
         //    sendedMessage.react('9️⃣').then(elem => elem.role = 'c_sharp'),

         // ]);

      });

   }
});

module.exports = generatedClient;