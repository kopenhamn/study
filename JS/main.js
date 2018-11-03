//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    let result = "";

    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i]['firstName'] && contacts[i][prop]) {
            result = contacts[i][prop];
            console.log(result);
            return result;
        }
    }

    for (let i = 0; i < contacts.length; i++) {
        if (name != contacts[i]['firstName']) {
            return "No such contact";
        } else if (prop != contacts[i][prop]) {
            return "No such property";
        }
    }
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
