Servient = require("@node-wot/core").Servient
HttpServer = require("@node-wot/binding-http").HttpServer

Helpers = require("@node-wot/core").Helpers

// create Servient add HTTP binding
let servient = new Servient();
servient.addServer(new HttpServer());

servient.start().then((WoT) => {
	WoT.produce({
		"@context": "https://www.w3.org/2019/wot/td/v1",
		"id": "urn:dev:ops:Agriculture-1234",
		"title": "Agriculture",
		"base": "https://myagriculture.example.com/",
		"securityDefinitions": {
			"nosec_sc": {
				"scheme": "nosec"
			}
		},
		"security": ["nosec_sc"],
		"properties": {
			"temperature": {
				"description": "Temperature in Celsius",
				"type": "number",
				"forms": [{
					"href": "temperature"
				}]
			},
			"humidity": {
				"description": "Humidity in %",
				"type": "number",
				"forms": [{
					"href": "humidity"
				}]
			}
		},
		"actions": {
			"sprinkle": {
				"description": "Turn on sprinkler system",
				"data": {
					"description": "Time in minutes",
					"type": "integer"
				},
				"forms": [{
					"href": "sprinkle"
				}]
			}
		},
		"events": {
			"tooDry": {
				"description": "Informs if it is too try",
				"data": {
					"type": "string"
				},
				"forms": [{
					"href": "tooDry"
				}]
			}
		}
	}).then((thing) => {
		console.log("Produced " + thing.getThingDescription().title);
		thing.writeProperty("humidity", 0.45)
		thing.writeProperty("temperature", 22.5)

		thing.expose().then(() => {
			console.info(thing.getThingDescription().title + " ready");
			console.info("TD : " + JSON.stringify(thing.getThingDescription()));
			thing.readProperty("humidity").then((c) => {
				console.log("humidity is " + c);
			});
			thing.readProperty("temperature").then((c) => {
				console.log("temperature is " + c);
			});
		});
	});
});