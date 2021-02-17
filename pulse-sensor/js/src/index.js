import mcpadc from "mcp-spi-adc";

const currentTime = 0;

const timeline = [];

const data = [];

const pulseSensor = openMcp3008(5, {speedHz: 1350000, busNumber: 0, deviceNumber: 0}, (err) => {
  if (err) throw err;

  setInterval((_) => {
    pulseSensor.read((err, reading) => {
      if (err) {
        throw err;
      }

      console.log(reading.rawValue, reading.value);
      console.log((reading.value * 3.3 - 0.5) * 100, "F");

      timeline.push(currentTime + 1);
      data.push(reading.value);

      window.chart.update();
    });
  }, 1000);
});

const color = "red";

const options = {};

const config = {
  type: "line",
  data: {
    labels: timeline,
    datasets: [
      {
        label: "Pulse",
        data,
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  },
  options,
};

window.onload = function () {
  const ctx = document.getElementById("chart").getContext("2d");
  window.chart = new Chart(ctx, config);
};
