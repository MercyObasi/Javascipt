/* Mutiple lines comment
// git commands
git pull 
git push 

 // once you declare a variable, you don't need to declare it again
let count = 0
count = 6
console.log(typeof count)

// declaring a constant variable
const pi = 3.14

// camelCase
let userName = "Navin"
// snake_case
let user_name = "Goretti"

///PRIMITIVE Data types
// Number:
    // BigInt
    let num = 3000429402093352342313n 
    num5 = 5/0  // Infinity
    num2 = 0xff // hexadecimal
    num3 = 1.5e12 //exponential
    num4 = 100_000_000_0 
// String
// Boolean


j = false
console.log(j == 0) // This means can the numerical value of j be 0, false is  0 so Yes

k = true
console.log(k === 1) // This means is k the same as 1 in terms of value and type, k is a boolean and 1 is numerical so..
console.log(k !== 1) // The opposite

// Logical Operators

g = 5; h = 0
console.log(g, h)

console.log(g > 1 && h < 10)

console.log(g < 3 && h == 0)

console.log(g > 10 || h < g)

console.log(!(g === 5))

// It automatically converts strings to an integer and does the calculation
console.log("123" + 10) // it thinks this is concetenation
console.log("123" * 2) + 10

val = "gwen" * 10
console.log(val) // gives a NaN
console.log(isNaN(val))

console.log(42 / 0) // isFinite()

function random(a,b){
    sum = a + b;
    return sum;
}
console.log(random(2,7))


//  Local and Global variable
// for js, you have to specify that the variable is a local variable using var
gl = 123
gl2 = 345
function globalLocal() {
    var gl = 432 // Local variable
    gl2 = 567 // It changes the global variable
}
globalLocal()
console.log(gl, gl2)


// Arrays 
    // linear arrays
a1 = [1 ,3, 5]
arr = Array('b', 'rt', 'l')
a1.push('first')
    // associative structures
ass = {'name': 34, 'code': 'javascript'}
console.log(ass['name'])
console.log(ass.code)

// Control Structures
var r = 7;
if (r < 3) {
    console.log('less');
} else if (r == 3) {
    console.log('same');
} else {
    console.log('greater');
}

var fuel = 10
while (fuel > 5){
    console.log('rovm')
    fuel --; // or fuel -=1
}

let i = 1
do{
    console.log(i);
    i++
}while(i<=5)

for(var ct = 1; ct < 10; ct++ ) {
    if (ct == 5) break;
    console.log(ct)
    if (ct % 2 == 0) continue;
    console.log('odd')

}
balls = {'soccer':'football', 'golf':'golf ball', 'tennis':'balls'};
for(ball in balls){
    console.log(balls[ball]);
}

// type conversion and coercion
let con = String(6)
let beat = Number('123')
x = 8
x = x + '' // converts to string
console.log(typeof(x));
j = x - 2 // converts to number
x = +x + 2 // +x converts x to a number
console.log(x);

let mix = parseInt('123,Navin') //converts a string to a number
console.log(mix); 

console.log(!j);
console.log(Boolean(7)); // all numbers and strings are ture- Truthy value
console.log(Boolean(0)); // Fasly value
console.log(Boolean(null)); // Fasly 
console.log(Boolean(undefined)); // Fasly
console.log(Boolean(''));  // Fasly

console.log(true + true);



let numb = 4
let f = numb++ // Post Increment = Assignment then Increment
console.log(f, numb);

let numb2 = 10
let another = --numb2 //Pre decrement = Decrement then assignment
console.log(another, numb2);

console.log("Wet" < "Gun"); // It converts the ASCII values 

let gh = 1, y = 45, k = 6


let givenValue = 5
if (givenValue % 2 === 0)
    console.log("Even")
else
    console.log("Odd")

// Ternary operator
console.log(givenValue % 2 === 0? 'Even': 'Odd')

// Switch Statement 

let day = "Saturday"

switch(day){
    case 'Monday':
        console.log('7am')
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log('4am')
        break;
    case 'Friday':
        console.log('9am')
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('8am')
        break;
    default:
        console.log('typo, Case sensitive')
}
// Template literal
let LastNumber = 8
console.log(`This is template literal ${LastNumber}`)

let um = 5678432
let mu = ""
while(um>0){
    jk = um % 10
    console.log(jk)
    um = parseInt(um/10)
    mu += jk
}
console.log(Number(mu))
*/
let aliens = {
    'user': 'Renny',
    'tech': 'Python',
    'laptop' : {
        make : 'Mac',
        cpu : 'Core i7',
        ram : '12gb',
    }

}
// delete alien.user
console.log(aliens)
