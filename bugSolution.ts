function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Jane Doe", "John Smith"];
let user2 = "Jane Doe";

console.log(greeter(user)); // Correct Output
console.log(greeter(user2)); // Correct Output