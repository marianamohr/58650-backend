const express = require('express');
const bodyParser = require('body-parser');
const ProducerService = require('../internal/producer/index')

const app = express();

// Configuração do Kafka
const producerService = new ProducerService(["localhost:9092"], "my-app");

const runProducerService = async () => {
  try {
    await producerService.initialize();
    console.log('Kafka Producer connected');
  } catch (error) {
    console.error('Failed to connect Kafka Producer:', error);
  }
};

runProducerService().catch(console.error);

app.use(bodyParser.json());

app.post('/order', async (req, res) => {
  // recebe
  const { customerId, amount, items } = req.body;

  try {
    // processa
    const order = producerService.createOrder(customerId, amount, items);
    // produz
    await producerService.sendOrder(order);
    console.log('Order sent successfully:', order);
    res.status(200).send(order);
  } catch (error) {
    console.error('Error processing order:', error.message);
    res.status(400).send(`Error processing order: ${error.message}`);
  }
});

module.exports = app
