require('dotenv').config()

require('./client/client');
require('./events/messageCreate');
require('./events/messageReactions');

console.clear();