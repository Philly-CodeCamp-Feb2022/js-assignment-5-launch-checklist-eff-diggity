// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(testInput === string) {

   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() { //asynch (tells us its going to be an asynchronous fxn)and await-(exicute code afterawait) request a promise and wait for it to happen
    let planetsReturned;//fxn only partially complete - have to add url to fetch and return responce.json

    planetsReturned = await fetch().then( function(response) {//then do something with the responce to get responce object to tuen into a "friendly" json object
        });

    return planetsReturned;
}

function pickPlanet(planets) {//plantes = array of plantes
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
