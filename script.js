// Write your JavaScript code here!

window.addEventListener("load", function () {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()- going to be a promise
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {

        let pilotName = document.getElementById("pilotName");
        let copilotName = document.getElementById("copilotName");
        let fuelLevel = document.getElementById("fuelLevel");
        let cargoMass = document.getElementById("cargoMass");

        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
        } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
            alert("Please enter a valid name.");
        } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
            alert("Please enter a number for Fuel Level and Cargo Mass");
        }

        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.getElementById("faultyItems");
        // let pilotStatus = `Pilot ${pilotName.value} Ready.`;
        // let copilotStatus = `Co=Pilot ${copilotName.value} Ready`;
        let pilotsStatus = [
            let pilotStatus = `Pilot ${pilotName.value} Ready.`,
            let copilotStatus = `Co=Pilot ${copilotName.value} Ready`
        ];

        let notReady = [
            launchStatus.innerHTML = "Shuttle not ready for launch",
            launchStatus.style.color = "red"
        ]

        if (fuelLevel.value < 10, 000) {
            // launchStatus.innerHTML = "Shuttle not ready for launch";
            // launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "You need at least 10,000L of fuel to launch.";
            // pilotStatus.innerHTMO = `Pilot ${pilotName.value} Ready.`;
            // copilotStatus = `Co-Pilot ${copilotName.value} Ready.`;
            pilotsStatus;
            notReady;


        } else if (cargoMass.value > 10, 000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            // pilotStatus.innerHTMO = `Pilot ${pilotName.value} Ready.`;
            // copilotStatus = `Co-Pilot ${copilotName.value} Ready.`;
            pilotsStatus;
            notReady;
            cargoStatus.innerHTML = "You need less than 10,000kg of cargo to launch.";


        } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            // pilotStatus.innerHTMO = `Pilot ${pilotName.value} Ready.`;
            // copilotStatus = `Co-Pilot ${copilotName.value} Ready.`;
            pilotsStatus;

        }

        event.preventDefault();

    });

});



