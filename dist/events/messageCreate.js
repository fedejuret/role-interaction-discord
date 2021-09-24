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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client/client"));
// const { commandMessage } = require('../messages/messages');
client_1.default.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
    const author = message.author;
    console.log(author);
    if (message.content.startsWith('s!reaction')) {
        const channels = message.mentions.channels;
        channels.map((channel) => __awaiter(void 0, void 0, void 0, function* () {
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
        }));
    }
}));
module.exports = client_1.default;
