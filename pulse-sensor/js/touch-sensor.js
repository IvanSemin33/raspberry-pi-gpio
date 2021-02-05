var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var ADC = new Gpio(9, 'in', 'both'); //use GPIO pin 4 as output

//setInterval(_ => ADC.read((err,value) => console.log(err,value)),1000)

ADC.watch((err,value) => console.log(err,value))

function unexportOnClose() { //function to run when exiting program
  //LED.writeSync(0); // Turn LED off
  //LED.unexport(); // Unexport LED GPIO to free resources
  ADC.unexport(); // Unexport Button GPIO to free resources
};

console.log("GO")
process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
