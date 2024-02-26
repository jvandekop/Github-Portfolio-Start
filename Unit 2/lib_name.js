class NameClass {
    constructor(name) {
      this.name = name;
    }
  
    logName() {
      console.log(this.name);
    }
  }
  
  // Example usage:
  const myObject = new NameClass ("John");
  myObject.logName(); // This will log "John" to the console
  