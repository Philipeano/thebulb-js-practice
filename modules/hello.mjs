// Display a greeting on the screen
function sayHello() {
    console.log('Hello world');
}

// Display greeting with specified name
function sayHelloWithName(name) {
    if (name === null || name === '')
    {
        console.log('Name was not entered. Please try again');
    }
    else {
        console.log('Hello ' + name);
    }
}

// Display greeting for Alice or Bob only
function sayHelloToSpecificUser(name) {
    if (name === null || name === '' || name === undefined)
    {
        console.log('Name was not entered. Please try again');
    }
    else if (typeof name === "number")
    {
        console.log('Invalid input. Please enter a string');
    }
    else if (name.toLowerCase() === 'alice' || name.toLowerCase() === 'bob') { 
        console.log('Hello ' + name);
    }
    else {
        console.log('Hello user');
    }
}


export { sayHello, sayHelloWithName, sayHelloToSpecificUser };