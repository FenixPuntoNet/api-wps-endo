// const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

// client.on('qr', (qr) => {
//     qrcode.generate(qr, { small: true });
// });

// client.on('ready', () => {
//     console.log('Client is ready!');
// });

// client.on("message", async (message) => {
//     await client.sendMessage("573192114380@c.us", "mensaje recibido");
//   });
 

// client.initialize();

const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const puppeteer = require('puppeteer');

const client = new Client();

// Especifica la ruta al ejecutable de Chromium
const chromiumPath = '/bin/chromium-browser';

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on("message", async (message) => {
    await client.sendMessage("573192114380@c.us", "Text");
});

// Configura Puppeteer para utilizar la ruta especificada para Chromium
puppeteer.launch({ executablePath: chromiumPath }).then(() => {
    client.initialize();
});