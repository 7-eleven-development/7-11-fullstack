import { setGasValue, getGasValue as getLatestGasValue } from '../../models/gasSensorModel.js';

export const receiveGasValue = (req, res) => {
  const gasValue = req.body.gasValue; // specifies what data type, it expects to recieve

  if (gasValue !== undefined) {
    setGasValue(gasValue); 
    console.log(`Received Gas Value: ${gasValue}`);
    res.status(200).send({ message: 'Gas data received' });
  } else {
    res.status(400).send({ message: 'No gas data received' });
  }
};

export const getGasValue = (req, res) => {
  const latestGasValue = getLatestGasValue(); // imports it from model

  if (latestGasValue !== null) {
    res.send({ gasValue: latestGasValue });
  } else {
    res.status(404).send({ message: 'No gas data available' });
  }
};
