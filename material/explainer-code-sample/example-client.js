Servient = require("@node-wot/core").Servient
HttpClientFactory = require("@node-wot/binding-http").HttpClientFactory

Helpers = require("@node-wot/core").Helpers

// create Servient and add HTTP binding
let servient = new Servient();
servient.addClientFactory(new HttpClientFactory(null));

let wotHelper = new Helpers(servient);
wotHelper.fetch("http://localhost:8080/Agriculture").then(async (td) => {
    try {
        servient.start().then((WoT) => {
            WoT.consume(td).then((thing) => {
                // read humidity and temperature sensor
                thing.readProperty("humidity").then((h) => {
                    console.log("Humidity: " + h);
                });
                thing.readProperty("temperature").then((t) => {
                    console.log("Temperature: " + t);
                });

                // subscribe to tooDry event and turn on sprinkler system
                // ...
            });
        });
    } catch (err) {
        console.error("Script error:", err);
    }
}).catch((err) => { console.error("Fetch error:", err); });