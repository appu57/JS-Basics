/*Traditional sum method */

function sum(a, b) {
    let sum = 0;
    sum = a + b;
    console.log(sum);
}

sum(100, 100); // works because function sum wants two arguements
sum(100, 100, 100, 100); // prints 200 because the function cannot take 4 arguement it takes first two argument and then other two will be undefinedhence we start using arguement operator






/* Sum function using argumnent operator */

function sum() {
    let sum = 0;
    let n = arguments.length;
    for (let i = 0; i < n; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}
sum(100, 100);
sum(100, 100, 100, 100);


/* Developement uses */

function createList(type)  //type here takes first arguement
{
    let html = `<${type}l><li>`;
    let args = Array.prototype.slice.call(arguments, 1); //start splitting from index 1
    html += args.join(`</li><li>`);
    html += `</li></${type}l>`;
    console.log(html);
}

createList("u", "One", "two", "three", "four");



/* Using spread operator , Rest */

function findSum(...args) {  //also called as Variadic Function
    args[0]=10;
    for (let arg of args) {
        console.log(arg);
    }
    console.log(args); // 10,2,3,4,5,6,7,8,9,10
}

findSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
//rest method should always be last arguement

//1,2,3,4,5,6,7,8,9,10 because arguements are passed by value so within function they can change not outside since its not sent via reference



// The parameters, in a function call, are the function's arguments.

// JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

// If a function changes an argument's value, it does not change the parameter's original value.

// Changes to arguments are not visible (reflected) outside the function.


