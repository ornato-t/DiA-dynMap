function getRandomValue(array) {
    const maxVal = array[array.length - 1].max
    let randomNumber = Math.floor(Math.random() * maxVal) + 1;

    for (let i = 0; i < array.length; i++) {
        if (randomNumber >= array[i].min && randomNumber <= array[i].max) {
            return array[i].value;
        }
    }

    return "Error"
}

const businessRanges = [
    { min: 1, max: 20, value: "No Businesses" },
    { min: 21, max: 25, value: "Baker" },
    { min: 26, max: 30, value: "Tavern/Inn" },
    { min: 31, max: 35, value: "Butcher" },
    { min: 36, max: 40, value: "Market" },
    { min: 41, max: 43, value: "Blacksmith" },
    { min: 44, max: 46, value: "Cartwright" },
    { min: 47, max: 49, value: "Public Bath" },
    { min: 50, max: 52, value: "Weaver" },
    { min: 53, max: 55, value: "Cobbler"},
    { min: 56, max: 58, value: "Dyer" },
    { min: 59, max: 61, value: "Fishmonger" },
    { min: 62, max: 64, value: "Potter" },
    { min: 65, max: 67, value: "Rope/Net-Maker" },
    { min: 68, max: 70, value: "Stable" },
    { min: 71, max: 72, value: "Stonecutter" },
    { min: 73, max: 74, value: "Miller" },
    { min: 75, max: 76, value: "Chiurgeon" },
    { min: 77, max: 78, value: "Bowyer/Fletcher" },
    { min: 79, max: 80, value: "Tannery" },
    { min: 81, max: 82, value: "Scribe/Notary" },
    { min: 83, max: 84, value: "Carpenter" },
    { min: 85, max: 86, value: "Glassblower" },
    { min: 87, max: 88, value: "Tinker" },
    { min: 89, max: 89, value: "Scholarium" },
    { min: 90, max: 90, value: "Alchemist" },
    { min: 91, max: 91, value: "Theater" },
    { min: 92, max: 92, value: "Painter/Sculptor" },
    { min: 93, max: 93, value: "Goldsmith/Silversmith" },
    { min: 94, max: 94, value: "Jeweler" },
    { min: 95, max: 95, value: "Spice Merchant" },
    { min: 96, max: 96, value: "Cartographer" },
    { min: 97, max: 97, value: "Perfumer" },
    { min: 98, max: 98, value: "Religious Chapel" },
    { min: 99, max: 99, value: "Distiller" },
    { min: 100, max: 100, value: "Moneylender" }
];

const buildingDamageRanges = [
    {min: 1, max: 4, value: "No Damage"},
    {min: 5, max: 6, value: "Fire"},
    {min: 7, max: 7, value: "Looted"},
    {min: 8, max: 8, value: "Boarded Up / Fortified"}
]

const jobRanges = [
    { min: 1, max: 4, value: "Farmer" },
    { min: 5, max: 7, value: "Servant" },
    { min: 8, max: 9, value: "Fisherman" },
    { min: 10, max: 11, value: "Street Vendor" },
    { min: 12, max: 13, value: "Beggar" },
    { min: 14, max: 14, value: "Sailor" },
    { min: 15, max: 15, value: "Soldier" },
    { min: 16, max: 16, value: "Spy" },
    { min: 17, max: 17, value: "Assassin" },
    { min: 18, max: 18, value: "Thief" },
    { min: 19, max: 19, value: "Courtier" },
    { min: 20, max: 20, value: "Lawyer" }
];

const crisisOptions = [
    { min: 1, max: 4, value: "No Current Crisis" },
    { min: 5, max: 5, value: "Food" },
    { min: 6, max: 6, value: "Water" },
    { min: 7, max: 7, value: "Injured" },
    { min: 8, max: 8, value: "Trapped" },
    { min: 9, max: 9, value: "Escort" },
    { min: 10, max: 10, value: "Under Attack" },
    { min: 11, max: 12, value: "Roll Again Twice" }
];


function generateRandomBusiness() {
    return getRandomValue(businessRanges);
}

function generateRandomBuildingDamage() {
    return getRandomValue(buildingDamageRanges)
}

function generateRandomBuildingWithDamage() {
    let business = generateRandomBusiness();
    let damage = generateRandomBuildingDamage();

    return {business, damage}
}

function generateRandomJob() {
    return getRandomValue(jobRanges)
}

function generateRandomCrisis() {
    let randomVal = getRandomValue(crisisOptions);
    if (randomVal === "Roll Again Twice") {
        let crisisOne, crisisTwo;
        do {
            crisisOne = getRandomValue(crisisOptions);
        } while (crisisOne === "Roll Again Twice");

        do {
            crisisTwo = getRandomValue(crisisOptions);
        } while (crisisTwo === "Roll Again Twice");

        if (crisisOne === "No Current Crisis") {
            return crisisTwo;
        } else if (crisisTwo === "No Current Crisis") {
            return crisisOne;
        }

        return crisisOne + " and " + crisisTwo;
    }
    return randomVal;
}

function generateRandomNPC() {
    let job = generateRandomJob()
    let crisis = generateRandomCrisis()

    return {job, crisis}
}