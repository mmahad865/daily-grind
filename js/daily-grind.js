//alert("can you see this !!")


let myDate = new Date();

let today = myDate.getDay();

//today =3;

switch(today){

    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;

    case 4:
        today = "Thursday";
    break;

    case 5:
        today = "Friday";
    break;

    case 6:
        today = "Saturday";
    break;

    default:
        today = "Not sure what day it is!";
}

coffee = {
    name: "Bubble Tea",
    color: "pink",
    pic: "daily-grind\images\bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    day: "Wednesday",
    desc: `I like me some bubble tea!`
}

//alert(today);
console.log(coffee);