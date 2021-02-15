const color = "red";

const options = {};

const timeline = ["1", "2", "3", "1", "2", "3", "1", "2", "3"];

const data = [1, 2, 3, 1, 7];

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

// window.chart.update();
