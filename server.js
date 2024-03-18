// Importa las bibliotecas necesarias
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express();
const client = new Client();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Evento para generar el código QR cuando se inicia el cliente de WhatsApp
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Evento cuando el cliente está listo
client.on('ready', () => {
    console.log('¡Cliente listo!');
});

// Inicializar el cliente de WhatsApp
client.initialize();

// Ruta para recibir la solicitud de enviar orden
app.post('/wsp-ordenInfo', async (req, res) => {
    try {
        console.log('Entrando a la ruta del whatsapp');
        // Aquí puedes agregar la lógica para enviar un mensaje de WhatsApp
        // Por ejemplo, enviar un mensaje a un número específico cuando se recibe la orden
        await client.sendMessage("573192114380@c.us", "¡Se ha enviado una orden!");
        res.status(200).send('Mensaje de WhatsApp enviado correctamente');
    } catch (error) {
        console.error('Error al enviar mensaje de WhatsApp:', error);
        res.status(500).send('Error al enviar mensaje de WhatsApp');
    }
});

// Puerto en el que escucha el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend ejecutándose en el puerto ${PORT}`);
});
