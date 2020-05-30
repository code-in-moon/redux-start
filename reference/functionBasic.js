function sayhello() {
  return "hello welcom";
}

//you can treate function like variable
//sayhello() means call the function and return the string
//sayhello
let fn = sayhello;
console.log(fn());

//you can give a function as a argument to another function

function greet(fnmessage) {
  console.log("greet" + fnmessage());
}
greet(fn);

//you can return a function in a function

function sayHello2() {
  return function () {
    return "hello world 2222";
  };
}

let fn2 = sayHello2();
let message = fn2();
console.log(message);
