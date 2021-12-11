// PerScholas Assignment: D4D3: Radio Object & Animal Class
// Date: 12-11-2021
// Dev: Matthew Jenifer 
// Contact: matthewjenifer@brownbuddha.biz
// EarCandy: https://tinyurl.com/y5k8lrw9

// Radio Object
const radio = {
    //Give it a property called stations and make the value an array of station objects
    stations: [{
            //Give each station object a property called name and songs.
            name: "power123",
            //Name should be a string and should be an array of song objects.
            songs: [{
                    //Song object should have two properties: title and artist
                    artist: "Gil Scott Heron",
                    title: "Pieces of a Man",
                },
                {
                    artist: "ACDC",
                    title: "Back in Black",
                },
                {
                    artist: "Bjork",
                    title: "Army of Me",
                },
                {
                    artist: "Mobb Deep",
                    title: "Drink Away the Pain",
                },
            ],
        },
        {
            name: "power124",
            songs: [{
                    artist: "Silk Sonic",
                    title: "Smoking By the Window",
                },
                {
                    artist: "Stevie Ray Vaughn",
                    title: "Heavens Door",
                },
                {
                    artist: "Beyonce",
                    title: "Single Ladies",
                },
                {
                    artist: "Black Keys",
                    title: "Gold On the Ceiling",
                },
            ],
        },
    ],

    //Create a method on your radio object that changes the station randomly. 
    changeStation() {
        // find random number, use that number to access a station, and then access a song in that station
        let stationIndex = Math.floor(Math.random() * 2);
        return this.stations[stationIndex];
    },
};

newStation = radio.changeStation();

let nextInd = Math.floor(Math.random() * newStation.songs.length);

//When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
console.log(
    `Now Playing: ${newStation.songs[nextInd].title} by ${newStation.songs[nextInd].artist}`
);

//============= ANIMAL CLASS ===============

//Create an Animal class.. 
class Puppy {
    //..that will have name, color, age, and legs properties.
    constructor(name, color, age, legs) {
        this.name = name
        this.color = color
        this.age = age
        this.legs = legs
    }

    //Create different methods for Animal class.
    speak() {
        console.log('grrrr')
    }

    sitRex() {
        console.log('*sits* *wags tail*')
    }
}

const pup = new Puppy('Rex', 'brown', 3, 4)

console.log(pup)
pup.speak()
pup.sitRex()