// import event emitter class from events global object
const { EventEmitter } = require('events');

// create event handler
const birthdayEventListener = (name) => {
  console.log(`Happy Birthday ${name}!`);
}

// create instance from EventEmitter class
const myEventEmitter = new EventEmitter();

// Let's create the emitter
myEventEmitter.on('celebrate-birthday', birthdayEventListener);

// Let's call the emitter
myEventEmitter.emit('celebrate-birthday', 'ryumada');
