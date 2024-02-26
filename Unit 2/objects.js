// Importing the ExampleClass from the library file
import { ExampleClass } from './lib_example.js';

// Creating instances with different names
const obj1 = new ExampleClass("Alice");
const obj2 = new ExampleClass("Bob");

// Calling the method to log names
obj1.logName(); // Logs "Alice"
obj2.logName(); // Logs "Bob"