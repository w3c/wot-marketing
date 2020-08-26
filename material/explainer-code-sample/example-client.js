WoTHelpers.fetch("http://localhost:8080/SoilSensor").then(async (td) => {
    WoT.consume(td).then((thing) => {
        // read humidity and temperature sensor
        thing.readProperty("humidity").then((h) => {
            console.log("Humidity: " + h);
        });
        thing.readProperty("temperature").then((t) => {
            console.log("Temperature: " + t);
        });
        thing.subscribeEvent("tooDry",()=>{
            // Activate a remote sprinkler
        })
    });
}).catch((err) => { console.error("Fetch error:", err); });