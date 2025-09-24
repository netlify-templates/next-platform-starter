```
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
  },
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (msg) => {
  if (msg.body === '.vv') {
    console.log('View once message received:', msg);
    msg.react('👍');
  } else if (msg.body === '.tagall') {
    if (msg.from.endsWith('@g.us')) {
      const chat = await msg.getChat();
      let text = '';
      let mentions = [];
      for (const participant of chat.participants) {
        mentions.push(`${participant.id.user}@c.us`);
        text += `@${participant.id.user} `;
      }
      client.sendMessage(msg.from, text, { mentions });
    } else {
      msg.reply('This command can only be used in a group.');
    }
  }
});

client.on('disconnected', () => {
  console.log('Client was disconnected, attempting to reconnect...');
  client.initialize();
});

client.initialize();
```
