// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (result) {
        result.json().then(function (json) {
            console.log(json);
            //   get json random (but not .random cuz thats an math method
            let randomPlanetIndex = Math.floor((Math.random() * json.length));
            // console.log(randomPlanetIndex);

            let randomPlanet = json[randomPlanetIndex];
            // console.log(randomPlanet)
            let planetInfo = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${randomPlanet.name}</li>
                    <li>Diameter: ${randomPlanet.diameter}</li>
                    <li>Star: ${randomPlanet.star}</li>
                    <li>Distance from Earth: ${randomPlanet.distance}</li>
                    <li>Number of Moons: ${randomPlanet.moons}</li>
                </ol>
                <img src="${randomPlanet.image}"></img>`
            // console.log(planetInfo);
            let missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = planetInfo;
        });
    });
    // });

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {

        let pilotName = document.getElementById("pilotName");
        let copilotName = document.getElementById("copilotName");
        let fuelLevel = document.getElementById("fuelLevel");
        let cargoMass = document.getElementById("cargoMass");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let cargoStatus = document.getElementById("cargoStatus");



        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
        } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
            alert("Please enter a valid name.");
        } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Please enter a number for Fuel Level and Cargo Mass");

        } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} Ready.`;
            fuelStatus.innerHTML = "You need at least 10,000L of fuel to launch.";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";

        } else if (fuelLevel.value >= 10000 && cargoMass.value > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} Ready.`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "You need less than 10,000kg of cargo to launch.";

        } else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} Ready.`;
            fuelStatus.innerHTML = "You need at least 10,000L of fuel to launch.";
            cargoStatus.innerHTML = "You need less than 10,000kg of cargo to launch.";

        } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready.`;
            copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} Ready.`;
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        event.preventDefault();

    });

});



