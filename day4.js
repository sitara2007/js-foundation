
const student = {
    name: "Alice",
    age: 21,
    courses: ["Math", "JavaScript", "Physics"],
    isEnrolled: true,
    
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(student.name);      
console.log(student.courses[1]); 
// Calling a method
console.log(student.greet());  
