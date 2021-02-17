const mcpadc = require('mcp-spi-adc');

const pulseSensor = mcpadc.openMcp3008(5, {busNumber: 0, deviceNumber: 0}, err => {
  console.log("Opened")
  if (err) throw err;

  setInterval(_ => {
    pulseSensor.read((err, reading) => {
      if (err) throw err;

      console.log(reading.value >= 0.53 ? 'BOOM' : 0);
    });
  }, 100);
});
