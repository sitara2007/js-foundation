Scope in JavaScript refers to the accessibility of variables based on where they are declared in your code. Global scope allows variables to be accessed from anywhere, though they should be used sparingly to avoid conflicts. Local scope is created within functions, meaning those variables are trapped inside and cannot be accessed from the outside. Block scope, introduced with let and const, limits a variable's existence strictly to the curly braces {} of statements like if or for loops, preventing them from leaking into the surrounding environment and helping developers write cleaner, more predictable code.

let globalVariable = "I am accessible everywhere!";
function showGlobal() {
    console.log("Inside function:", globalVariable);
}
showGlobal();
function showLocal() {
    let localVariable = "I am only accessible inside this function";
    console.log(localVariable);
}
showLocal();
if (true) {
    let blockVariable = "I am restricted to this block {}";
    const constantBlock = "Me too!";
    console.log(blockVariable); 
}
console.log("Code demonstration complete.");
