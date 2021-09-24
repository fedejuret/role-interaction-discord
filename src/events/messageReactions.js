const client = require('../client/client');

client.on('messageReactionAdd', async (reaction, user) => {

   console.log(reaction);
});

module.exports = client;