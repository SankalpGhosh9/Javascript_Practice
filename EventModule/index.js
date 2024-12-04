const EventEmitter = require('events'); //creating a Class inspite of object or modules
const event = new EventEmitter();

//What we can do using Events-Module
// 1)Registering  the event to fired only one time
// 2)Create a event emitter instance and register a couple of callbacks
// 3)Registering  for the event  with callbacks parameters

//Note:-1)We have to define event first then only we can call the event

// Task - 1,2 
event.on('sayMyName',()=>{                  //event is defined and using callback to show the task asked to event
    console.log("Your Name is San");
})

event.on('sayMyName',()=>{                 
    console.log("Your Name is Sunil");
})

event.on('sayMyName',()=>{                 
    console.log("Your Name is Ghosh");
})
event.emit('sayMyName');  //event named sayMyName is emitted  //here we can say we are calling the event

// Task - 3 
event.on('checkPage',(sc ,msg)=>{                 
    console.log(`status code is ${sc} and Message is ${msg}`);
})
event.emit('checkPage', 200 ,'ok');
//Advantage of Event :-
// 1) we can call multiple functions using a single event 