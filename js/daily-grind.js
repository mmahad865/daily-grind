//alert("can you see this !!")


function coffeeTemplate(){
    return `<p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    `;

}


let myDate = new Date();

let today = myDate.getDay();
let coffee = "";
//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);
//today =3;

switch(today){

    case 0:
        today = "Sunday";
        coffee = {
            name: "caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel-latte",
            color: "tan",
            day: "Sunday",
            desc: `It's better latte than never!`
        }
    break;

    case 1:
        today = "Monday";
        coffee = {
            name: "Bubble Tea",
            color: "pink",
            pic: "daily-grind\images\bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some bubble tea!`
        }
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha latte",
            color: "brown",
            day: "Tuesday",
            desc: `I heart chocolate!`
        };
        
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew coffee",
            color: "black",
            day: "Wednesday",
            desc: `Cold-brew is the best!`
        };
        
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a espresso shot",
            color: "white",
            day: "Thursday",
            desc: `We all need a drip!`
        };
        
    break;

    case 5:
        today = "Friday";
         coffee = {
            name: "pumpkin-spice-latte",
            pic: "images/mocha.jpg",
            alt: "A picture of a pumpkin-spice-latte",
            color: "orange",
            day: "Friday",
            desc: `Yay! It's Friday and that means, it's pumpkin-spice-latte time!`
        }
    break;

    case 6:
        today = "Saturday";
         coffee = {
            name: "Bubble Tea",
            color: "pink",
            pic: "daily-grind\images\bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `I like me some bubble tea!`
        }
    break;

    default:
        today = "Not sure what day it is!";
         coffee = {
            name: "frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
            color: "green",
            day: "Saturday",
            desc: `Frapp it your way!`
        }
}

// coffee = {
//     name: "Bubble Tea",
//     color: "pink",
//     pic: "daily-grind\images\bubble-tea.jpg",
//     alt: "A picture of a bubble tea",
//     day: "Wednesday",
//     desc: `I like me some bubble tea!`
// }

//alert(today);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
console.log(coffee);