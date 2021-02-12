const mcpadc = require('mcp-spi-adc');

const pulseSensor = mcpadc.openMcp3008(5, {speedHz: 1350000, busNumber: 0, deviceNumber: 0}, err => {
  console.log("Opened")
  if (err) throw err;

  setInterval(_ => {
    pulseSensor.read((err, reading) => {
      if (err) throw err;

      console.log(reading)
      console.log(reading.value);
    });
  }, 500);
});
