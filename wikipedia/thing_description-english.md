= Thing Description =

Thing Description (TD)<ref name=":0">{{Cite web|url=https://www.w3.org/TR/2019/CR-wot-thing-description-20191106/Overview.html|title=Web of Things (WoT) Thing Description|website=www.w3.org|access-date=2019-11-17}}</ref> is a digital document that describes the metadata and interfaces of [[IoT]] devices. It allows to establish an agreement between the device and its user, which can be other devices or humans. It is proposed by the [[W3C]] [[Web of Things]] (WoT) Working Group as the core technology to enable interoperability in the [[IoT]]. It aims to be the only document needed to construct the required requests to interact with the device and to discover the capabilities of it, without any prior knowledge of how the device works, such as text-based instructions, API descriptions etc. A TD can be served by the device itself or obtained from a third party, such as a database, another device etc. This allows TDs to be represented and serialized in different formats or languages. The most common format of serialization is [[JSON-LD]].

<br />Along with TD, W3C works on other WoT related standards. Most notably, WoT Architecture<ref name=":1">{{Cite web|url=https://www.w3.org/TR/2019/CR-wot-architecture-20191106/Overview.html|title=Web of Things (WoT) Architecture|website=www.w3.org|access-date=2019-11-17}}</ref> explains different entities in a WoT system as well as the general vocabulary that is valid for all the WoT related specifications. WoT Scripting API<ref name=":2">{{Cite web|url=https://www.w3.org/TR/2019/WD-wot-scripting-api-20191028/Overview.html|title=Web of Things (WoT) Scripting API|website=www.w3.org|access-date=2019-11-17}}</ref>, along with the reference implementation eclipse/node-wot<ref name=":3">{{Citation|title=thingweb.node-wot. Contribute to eclipse/thingweb.node-wot development by creating an account on GitHub|date=2019-11-14|url=https://github.com/eclipse/thingweb.node-wot|publisher=Eclipse Foundation|access-date=2019-11-17}}</ref> show how TD enables a standardized scripting for interacting with IoT devices or to program and expose these devices to the Web.

{{Infobox file format
| name = Thing Description
| icon = [[File:ThingDescription.svg|ThingDescription]]
| iconcaption = The logo of the latest version, [[Thing Description]]
| extension = .td .json
| mime = application/td+json
| developer = [[W3C]]
| type = [[JSON-LD]]
| url = https://www.w3.org/TR/2019/CR-wot-thing-description-20191106/
| free = Yes
| genre = [[W3C recommendation]]
}}

== Thing Description Examples ==

Below is an example TD serialized in JSON-LD format, which has one property, one action and one event. The IoT device represented by this TD uses the [[HTTP]] protocol but a TD can represent any protocol with a [[URI scheme]], as shown in the further examples below.<syntaxhighlight lang="json-ld" line="1">
{
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:32473-WoTLamp-1234",
    "title": "MyLampThing",
    "securityDefinitions": {
        "basic_sc": {"scheme": "basic", "in":"header"}
    },
    "security": ["basic_sc"],
    "properties": {
        "status" : {
            "type": "string",
            "forms": [{
                "href": "https://mylamp.example.com/status",
                "htv:methodName":"GET"
            }]
        }
    },
    "actions": {
        "toggle" : {
            "forms": [{
                "href": "https://mylamp.example.com/toggle",
                "htv:methodName":"POST"
            }]
        }
    },
    "events":{
        "overheating":{
            "data": {"type": "string"},
            "forms": [{
                "href": "https://mylamp.example.com/oh",
                "htv:methodName":"GET",
                "subprotocol": "longpoll"
            }]
        }
    }
}
</syntaxhighlight>This TD represents an Internet connected lamp, which could be thought as a simple version of a [[Philips Hue]] lamp.

From this TD example, a client know that there exists one Property affordance with the title ''status'' (lines 10-16). In addition, information is provided in lines 13-14 that this Property is readable with an HTTP GET request to the URI <code><nowiki>https://mylamp.example.com/status</nowiki></code>, and will return a string-based status value. In a similar manner, an Action affordance is specified to toggle the switch status using the POST method on the <code><nowiki>https://mylamp.example.com/toggle</nowiki></code> resource. The Event affordance enables a mechanism for asynchronous messages to be sent by a Thing. Here, a subscription to be notified upon a possible overheating event of the lamp can be obtained by using HTTP with its long polling subprotocol on <code><nowiki>https://mylamp.example.com/oh</nowiki></code>. The use of the GET or POST method is stated explicitly but can be omitted using the default assumptions stated in the TD specification.

This example also specifies the <code>basic</code> security scheme, requiring a username and password for access. A security scheme is first given a name and its corresponding scheme in the <code>securityDefinitions</code> and then activated by specifying that name in a <code>security</code> section. In combination with the use of the HTTP protocol this example demonstrates the use of HTTP Basic Authentication.


Below is the same connected lamp but using [[MQTT]] protocol and no security.<syntaxhighlight lang="json-ld" line="1">
{
    "@context": [
        "https://www.w3.org/2019/wot/td/v1",
        {"mqv": "http://www.example.org/mqtt-binding#"}
    ],
    "id": "urn:dev:ops:32473-WoTLamp-1234",
    "title": "MyLampThing",
    "securityDefinitions": {
        "nosec_sc": {"scheme": "nosec"}
    },
    "security": ["nosec_sc"],
    "properties": {
        "status" : {
            "type": "string",
            "forms": [{
                "href": "mqtt://mylamp.example.com/status",
                "mqv:controlPacketValue": "SUBSCRIBE"
            }]
        }
    },
    "actions": {
        "toggle" : {
            "forms": [{
                "href": "mqtt://mylamp.example.com/toggle",
                "mqv:controlPacketValue": "PUBLISH"
            }]
        }
    },
    "events":{
        "overheating":{
            "data": {"type": "string"},
            "forms": [{
                "href": "mqtt://mylamp.example.com/oh",
                "mqv:controlPacketValue": "SUBSCRIBE"
            }]
        }
    }
}
</syntaxhighlight>Differently from the last TD, here the forms include MQTT protocol as specified by the WoT Binding Templates<ref name=":4">{{Cite web|url=https://www.w3.org/TR/wot-binding-templates/Overview.html|title=Web of Things (WoT) Protocol Binding Templates|website=www.w3.org|access-date=2019-11-17}}</ref>. More specifically, lines 17, 25 and 34 describe what message types should be used to use the affordances. For example, instead of HTTP GET and longpoll subprotocol to observe the overheating event, a client can subscribe to this event using the MQTT protocol. <br />

== Interaction Affordances ==
Thing Description classifies ways to interact with an IoT device as Interaction Affordances, named '''Property''', '''Action''' and '''Event'''. 

==== Property Affordance ====
An Interaction Affordance that exposes state of an IoT device. This state can then be retrieved (read) and optionally updated (write). Devices can also choose to make Properties observable by pushing the new state after a change.

==== Action Affordance ====
An Interaction Affordance that allows to invoke a function of an IoT device, which manipulates state (e.g., toggling a lamp on or off) or triggers a process on the device (e.g., dim a lamp over time).

==== Event Affordance ====
An Interaction Affordance that describes an event source, which asynchronously pushes event data to the subscribers of the event (e.g., overheating alerts).

== See also ==

* [[Web of Things]]
* W3C Web of Things Thing Description<ref name=":0" />
* W3C Web of Things Architecture<ref name=":1" />
* W3C Web of Things Binding Templates<ref name=":4" />
* W3C Web of Things Scripting API<ref name=":2" />
* eclipse/node-wot<ref name=":3" />
* WoTify<ref>{{Cite web|url=https://wotify.org/|title=WoTify: A Platform for discovering and contributing to WoT|last=|first=|date=|website=wotify.org|url-status=live|archive-url=|archive-date=|access-date=2019-11-17}}</ref>
* W3C WoT Main Page<ref>{{Cite web|url=https://www.w3.org/WoT/Overview.html|title=W3C Web of Things at W3C|website=www.w3.org|access-date=2019-11-17}}</ref>

== References ==