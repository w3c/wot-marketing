// #WARNING# DO NOT USE - NOT UP-TO-DATE
WoT.produce({
	"@context": "https://www.w3.org/2019/wot/td/v1",
	"id": "urn:dev:ops:Agriculture-1234",
	"title": "SoilSensor",
	"description": "A sample soil sensor used in agriculture",
	"base": "https://myagriculture.example.com/",
	"securityDefinitions": {
		"nosec_sc": {
			"scheme": "nosec"
		}
	},
	"security": ["nosec_sc"],
	"properties": {
		"temperature": {
			"description": "Temperature",
			"type": "number",
			"unit": "Celsius",
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
	"events": {
		"tooDry": {
			"description": "Informs if the soil is too try",
			"data": {
				"type": "string"
			},
			"forms": [{
				"href": "tooDry"
			}]
		}
	}
}).then((thing) => {
	// The ExposedThing object is ready to be configured

	// Initialize Thing properties
	thing.writeProperty("humidity", 0.45)
	thing.writeProperty("temperature", 22.5)

	thing.expose().then(() => {
		/*
		* Web Thing SoilSensor is now ready and available at
		* http://localhost:8080/SoilSensor
		*/

		thing.readProperty("humidity").then((c) => {
			console.log("humidity is " + c);
		});
		thing.readProperty("temperature").then((c) => {
			console.log("temperature is " + c);
		});
	});
});