// Code your solution in this file!
function distanceFromHqInBlocks(street) {
//returns the number of blocks given a value
const Headquarters = 42;
return Math.abs(street - Headquarters);   
}

function distanceFromHqInFeet(street) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(street);
    return distanceInBlocks * feetPerBlock;   
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    return Math.abs(startBlock - endBlock) * feetPerBlock;  
}

const street = 50;
const distanceInBlocks = distanceFromHqInBlocks(street);
console.log(distanceInBlocks);

const distanceInFeet = distanceFromHqInFeet(street);
console.log(distanceInFeet);

const startBlock = 34;
const endBlock = 38;
const distanceTravelled = distanceTravelledInFeet(startBlock, endBlock);
console.log(distanceTravelled);

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
    if (distance <= 400) {
        farePrice = 0;

    } else if (distance <= 2000) {
        farePrice = (distance - 400) * 0.02;

    } else if (distance <= 2500){
        farePrice = 25;

    } else {
        farePrice = 'cannot calculate fare for distance over 2500 feet'
    }

    return farePrice;
    
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
    if (distance <= 400) {
        farePrice = 0;
    } else if (distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    } else if (distance <= 2500){
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}