
/* 
Node js has built in module called events->
Here,we can create, fire and listen for our own events...
e.g.1-> Registering for the event to be fired only one time
e.g.2-> Create an event emitter instance and register a couple of callbacks
e.g.3-> Registering for the event with callback parameters
*/

// Instead of variable , EventEmitter is class now not variable
const EventEmitter=require('events');
const event= new EventEmitter();

// Way 2->
/*
const event=require('events');
const EventEmitter=new event.EventEmitter();
*/

// e.g. 1-> 
// Below code will put call event on sayMyName
event.on("sayMyName",()=>{
    console.log("Your name is P.T.");
})

// Below code will fire or emit the event once 
event.emit("sayMyName");

// Emitter objects emits named events that cause previously registered listeners to be called
// So emitter objects emit named events and register/unregister listener functions

// e.g.2->
//Creating event and calling it multiple times

event.on("sayMyName2",()=>{
    console.log("Your name is P.T.2");
})
event.on("sayMyName2",()=>{
    console.log("Your name is P.T.3");
})
event.on("sayMyName2",()=>{
    console.log("Your name is P.T.4");
})

event.emit("sayMyName2");

// e.g.3->
//Calling event with parameters

event.on("sayMyName2",(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}.`);
})

event.emit("sayMyName2",200,"ok");