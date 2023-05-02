// for (let i = 0; i < 10; i++) {

//     if (i > 3) {
//         console.log(`This number is greater than three! Current iteration is ${i}`);
//     } else if (i === 3) {
//         console.log(`This number is three!`);
//     }
//     else {
//         console.log(`This number is less than three! Current iteration is ${i}`);
//     }

// }


const greetingDiv = document.getElementById("greeting");

let petName = "Kim";

function greetPet(name) {
    if (name === "Bubbles") {
        return `Woof woof! Gidday mate!`
    } else if (name === "Kim") {
        return `Meow! What's going on?`
    } else {
        return `Hey I don't recognise you, ${name}!`
    }
}

// running the greet pet function, with an argument
// our argument is the petName we declared earlier

// render our greeting
greetingDiv.innerHTML = greetPet(petName);

// ---Random number generator---
const treasureMessage = document.getElementById("treasure-message");
let treasureRoll = Math.floor(Math.random() * 100);

function openTreasure() {
    console.log(treasureRoll);
    // 70% chance of getting 5 gold
    if (treasureRoll >= 0 && treasureRoll <= 69) {
        return `You recieved 5 gold! Nice.`
    }
    // 20% chance of getting suit of armour
    if (treasureRoll >= 70 && treasureRoll <= 90) {
        return `You recieved a suit of armour! Wow!`
    }
    // 10% chance of getting a rare relic
    return `You recieved a rare relic! Holy moley!`
}

treasureMessage.innerHTML = openTreasure();




