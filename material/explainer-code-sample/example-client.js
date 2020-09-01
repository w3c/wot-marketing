WoTHelpers.fetch("https://farm.com/SoilSensor").then(async (td) => {
    WoT.consume(td).then((thing) => {
        // read and log humidity and temperature sensors
        setInterval(() => {
            thing.readProperty("humidity").then((h) => {
                ui.humidityGraph.log("Humidity", h);
            }
            thing.readProperty("temperature").then((t) => {
                ui.temperatureGraph.log("Temperature", t);
            }
        }, 10*1000); // 10 seconds
        // if soil dry, sprinkle for 5m
        thing.subscribeEvent("tooDry", () => {
            thing.invokeAction("startSprinkler", { "timeout": 5*60 });
        })
    });
}).catch((err) => { console.error("Fetch error:", err); });
