const cars = {

camry:{

name:"2024 Toyota Camry",

price:"₦15,000,000",
horsepower: "301 hp",
gascylinders:"4 cylinders",
interiorcolour:"red",
image:"https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600",
description:"A reliable midsize sedan featuring excellent fuel economy, a spacious cabin, advanced safety technology, and a comfortable ride for families and professionals."

},

accord:{

name:"2024 Honda Accord",

price:"₦17,000,000",
horsepower: "301 hp",
gascylinders:"4 cylinders",
interiorcolour:"red",
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600",

description:"A stylish sedan with a premium interior, modern infotainment system, smooth handling, and outstanding fuel efficiency."

},

bmw:{

name:"2024 BMW X5",

price:"₦30,000,000",
horsepower: "301 hp",
gascylinders:"4 cylinders",
interiorcolour:"red",
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",

description:"Luxury SUV with twin-turbo performance, leather interior, panoramic sunroof, intelligent driving assistance, and premium comfort."

},

mercedes:{

name:"2024 Mercedes C-Class",

price:"₦25,000,000",
horsepower: "301 hp",
gascylinders:"4 cylinders",
interiorcolour:"red",
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",

description:"Elegant luxury sedan equipped with digital cockpit, ambient lighting, advanced driver assistance, and exceptional comfort."

},

tesla:{

name:"2024 Tesla Model 3",

price:"₦45,000,000",
horsepower: "301 hp",
gascylinders:"4 cylinders",
interiorcolour:"red",
image:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600",

description:"All-electric sedan with long driving range, Autopilot capabilities, instant acceleration, and cutting-edge technology."

},

lexus:{

name:"2024 Lexus RX",

price:"₦50,000,000",
horsepower: "301 hp",
gascylinders:"4 cylinders",
interiorcolour:"red",
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600",

description:"Luxury crossover SUV offering premium comfort, hybrid efficiency, advanced safety systems, and refined styling."

}

};

const params = new URLSearchParams(window.location.search);

const car = params.get("car");

document.getElementById("carImage").src = cars[car].image;

document.getElementById("carName").textContent = cars[car].name;

document.getElementById("carPrice").textContent = cars[car].price;

document.getElementById("carDescription").textContent = cars[car].description;
document.getElementById("carHorsepower").textContent = cars[car].horsepower;
document.getElementById("carCylinders").textContent = cars[car].gascylinders;
document.getElementById("carInteriorColour").textContent = cars[car].interiorcolour;

const addToCartButton = document.querySelector("button");