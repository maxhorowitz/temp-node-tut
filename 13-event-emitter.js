const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// listens for the event
customEmitter.on('response', () => {
        console.log('data received')
    })
    // can have multiple event listeners for same method
    // in this case its called "respoonse"
customEmitter.on('response', () => {
        console.log('other logic')
    })
    // can pass arguments into the event listener's callback function
    // any other event listeners that have less required parameters will
    // proceed in absence of data as they would normally
customEmitter.on('response', (name, id) => {
    console.log(`My name is ${name} and my id is ${id}`)
})

// emit the event (that is being "listened for")
customEmitter.emit('response', 'john', 34)