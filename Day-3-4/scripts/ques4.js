let Friends = [{
        name: "pooja",
        age: 20,
        country: "India",
        hobbies: ['draw', 'dance', 'cook']
    },
    {
        name: "viji",
        age: 27,
        country: "Moscow",
        hobbies: ['play', 'coin collection', 'hack']
    },
    {
        name: "Sam",
        age: 25,
        country: "New york",
        hobbies: ['sing', 'write', 'play']
    },
    {
        name: "Guna",
        age: 22,
        country: "New jersey",
        hobbies: ['gardening', 'guitar playing', 'cook']
    }
];

console.log("friends having age less than 30:");

function getAge() {
    for (let i = 0; i < Friends.length; i++) {
        if (Friends[i].age < 30) {
            const element = Friends[i];
            console.log('Name: ${element.name}\nAge:${element.age}\nCountry:${element.country}\nHobbies:${element.hobbies}');

        }
    }
}
getAge();
console.log("friends belong to the Country India:");

function getCountry() {
    for (let i = 0; i < Friends.length; i++) {
        if (Friends[i].country == "India") {
            const element = Friends[i];
            console.log('Name: ${element.name}\nAge:${element.age}\nCountry:${element.country}\nHobbies:${element.hobbies}');

        }
    }
}
getCountry();
