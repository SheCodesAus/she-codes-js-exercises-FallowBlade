function showName() {
    let username = document.getElementById("name-text").value;
    console.log(`Hi, ${username}`);
}


// This is a FOR LOOP which allows you to repeat a code 10 times ///

for (let count = 0; count < 10; count++) {
    console.log(count);

}
// FOR LOOP

// FOR LOOP ARRAY = LIST OF ITEMS //

let pets = ["dog", "bird", "cat", "mouse"]
console.log(pets);
pets.push("hamster");
// This prints out list of all above + the hamster
console.log(pets);
// This prints out a list of all the above, EXCEPT the Hamster
console.log(pets[0]);
console.log(pets[3]);


// FOR LIST OF PETS
for (let index = 0; index < pets.length; index++) {
    console.log(pets[index]);
}
// This creates a list where each list item is added underenath the next, e.g.:
// dog
// bird
// cat
// mouse

pets.forEach((pet) => {
    console.log(pet);

});



// CONDITIONALS //

let child = "Jameson"
if (child === "Wolfgang") {
    console.log("Wolfgang is a child");
} else if (child === "Koko") {
    console.log("the child is not Wolfgang, they're 2nd best");
} else {
    console.log("The child is not Wolfgang or Koko, I guess they're OK")
}



// the === signs means EXACT match, use 3 equals when comparing things

// EXERCISES//
// let username = "Isabelle Lange";
// console.log(`Hello, ${username}`);

// let num1 = 3;
// let num2 = 2;
// let total = num1 + num2;
// console.log(total);

// function example(){
//     console.log("G'day mate, hope you are functionally OK!");
// }

// example();

// function add() {
//     let x = 5;
//     let y = 3;
//     let result = x + y;
//     console.log(result);
// }

// add();

// function add(x, y) {
//     let result = x + y;
//     console.log(result);
// }

// add(5, 3);
// add(10, 3);
// add(100, 200);
