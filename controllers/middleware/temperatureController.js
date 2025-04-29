// temperatureController.js
import { setTemperature, getTemperature as getLatestTemperature } from '../../models/temperatureModel.js';

export const receiveTemperature = (req, res) => {
  const temperature = req.body.temperature; // specifies what data type, it expects to recieve

  if (temperature !== undefined) {
    setTemperature(temperature);  // Set the temperature using the model
    console.log(`Received temperature: ${temperature}°C`);
    res.status(200).send({ message: 'Temperature data received' });
  } else {
    res.status(400).send({ message: 'No temperature data received' });
  }
};

export const getTemperature = (req, res) => {
  const latestTemperature = getLatestTemperature(); // imports it from model

  if (latestTemperature !== null) {
    res.send({ temperature: latestTemperature });
  } else {
    res.status(404).send({ message: 'No temperature data available' });
  }
};
