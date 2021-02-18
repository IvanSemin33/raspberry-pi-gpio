import mcpadc from "mcp-spi-adc";

export const getPulseData = (data, setData) => {
  let time = 0;

  const pulseSensor = mcpadc.openMcp3008(
    5,
    { busNumber: 0, deviceNumber: 0 },
    (err) => {
      console.log("Start");
      if (err) {
        throw err
      };

      setInterval((_) => {
        pulseSensor.read((err, reading) => {
          if (err) {
            throw err
          };

          time+=1
          setData([...data, [reading.value, time]])
          // console.log(reading.value >= 0.53 ? "BOOM" : 0);
        });
      }, 100);
    }
  );
};
