# WoT Explainer Video Script

Here are the [original storyboard slides](https://github.com/w3c/wot-marketing/blob/master/material/wot_explainer_script.pdf),
screenshots of which are shown below.
However, please note that the images in the storyboard are only meant to be suggestive, 
and the text on the storyboard slides does not match the current script given as text below.

## General Requirements
* Imagery and text should be unbiased with respect to gender and race.
   - There are two stakeholders, the "winemaker" and the "developers".
   - The script has been written to avoid pronouns or to use gender-neutral "they"
   - Developers is plural to avoid grammatical issues with verb agreement.
   - The pronoun "they" is occasionally used in the singular to refer to the winemaker.
* Characters should either have no gender or be evenly balanced with respect to gender.
* Given the limited number of characters available, characters should not have an identifiable race.
   - One possible suggestion: use animal characters.
* Visual style should be simple, clean, and professional.
* Color choices should make the video accessible to color-blind individuals.
   - Avoid distinctions along only a red-green hue axis
* Text should be large and as readable as possible
   - Normal text should use a proportional sans-serif font
   - Code examples when shown should use a fixed-width font such as Courier

## Scene 1: The Winemaker
![Scene01](script_images/Scene01.png)
* Spoken: 
   - A winemaker is looking for ways to increase productivity while maintaining excellent product quality.
* Staging: Far-away view of vineyard (maybe animation that zooms in from clouds...)

## Scene 2: Sensors and Sprinklers
![Scene02](script_images/Scene02.png)
* Spoken:
   - To monitor and control growing conditions, 
     the winemaker plans to install humidity and temperature sensors, 
     and a sprinkler system.
* Staging: 
   - Keep zooming in, stop on a closeup of some grapes on the vine
   - Show addition of sensors and sprinkler system (eg have them pop up in the field)
   
## Scene 3: Web Service for Weather Forecasts
* Spoken:
   - Weather forecast data from an online web service would also be useful in order 
     to predict watering requirements.
* Staging: 
   - Show data coming from cloud
   - Since it's weather data, can be from an actual cloud.
   - Data can be 0's and 1's falling as rain...
   
## Scene 4: Contacting the Web Agency
![Scene04](script_images/Scene04.png)
* Spoken:
   - The winemaker decides to engage an IT consultant. 
   - The winemaker would like to use the developer of their web presence to realize an IoT solution.
* Text (it and the map should be "built" as the result of a simulated online search):
   - Web Agency
   - Rosental 7, Munich, Germany
   - phone: +49 89 12345678
   - twitter: @webagency
   - The Web Agency provides solutions for your web and social media presence

* Staging: "Build" the result of an online search for a web solution provider

## Scene 5: Web Agency Developers
![Scene05](script_images/Scene05.png)
* Spoken:
   - The developers at Web Agency like the new challenge and are willing to broaden their IoT knowledge.
   - They are experts in both web frontend and backend technologies using Node JS.
   - However, they are worried about the interoperability problems that they experienced 
     in a previous IoT project.
* Staging:
    - Show picture of a developer hacking away, but then scratching his/her/their head, 
      shuddering a little at some bad memories of a past project 
      (maybe a thought bubble showing the consultant vainly trying to plug 
      together two incompatible connectors)
* Comments:
    - IoT should be pronounced Eye-oh-Tee.  Node JS is Node-Jay-Ess. 
    - We're going to assume the viewer knows what IoT (Internet of Things) is and have chosen not
      to define it.
    
## Scene 6: WoT, Tools, and Domains
![Scene06](script_images/Scene06.png)
* Spoken: 
    - After searching online for a solution, 
      the developers find information on the Web of Things, 
      also known as Double-U-oh-Tee: "WoT".
    - WoT is a W3C activity that enables Web developers to become IoT developers 
      using the tools and frameworks they love.
    - WoT can be applied to many different IoT domains,
      such as Manufacturing or Building Automation,
      but is also applicable to the winemaker's problem in the Agriculture domain.
* Staging (Updates that there should be two scenes):
    - Simulate an online search, typing in "IoT interoperability solution using web technology" 
      into a search box, then show some results popping up (represented as icons and logos)
    - WoT logo popping up should co-incide with narration speaking "WoT"
    - Other logos (JS, etc) should pop up with the phrase "tools and frameworks they love"
         - Use the following "tool" logos: HTML, JSON, JS (Javascript), Typescript, Node-RED, 
           Angular, RDF, React, and Vue
    - Clear the tools and frameworks logos, and then when domains are being talked about show
      "domain" logos
         - Domain logos (as in slide above): Building Automation, Manufacturing, Smart Grid, 
           Smart City, Healthcare, Agriculture, Cloud Systems... 
         - When "Building Automation", "Manufacturing", and "Agriculture" are mentioned, 
           highlight the corressponding logo
    
* Comments:
    - When spoken, introduction of the WoT acronym needs to be explicit.  Unlike IoT, we give it
      an explicit definition.  WoT should be pronounced as "Whot", except when the acronym is first
      spelled out.
    
## Scene 7: Learning About WoT
![Scene07](script_images/Scene07.png)
* Spoken:
    - The developers are happy to find a bunch of WoT tutorials on thingweb.io, YouTube, and GitHub.
    - With node-wot, various protocol bindings like HTTP, MQTT, and CoAP, and a browser bundle, 
      the developers easily create a full stack IoT solution.
    - Their solution connects all the devices and includes a great user interface built with web technology.
* Staging:
    - Show code rapidly being built, and a mock user interface popping up
    - User interface mock-up should have a set of icons for watering (a water drop icon),
      weather sensing functions (sun, rain, etc) on a web page, and a map of the vineyard.
    - Maybe a representation of "tutorials" should also flow down the right side of the screen 
      (icons representation of videos, documents, etc) when those are mentioned.
    
## Scene 8: Modular Development
![Scene08](script_images/Scene08.png)
* Spoken:
    - Instead of creating a one-off, proprietary solution, 
      the developers use the WoT methodology to create IoT building blocks.
    - These building blocks extend their existing Web technologies portfolio.
    - Thing Descriptions, WoT application templates, and IoT semantics are now in 
      the same portfolio of reusable modules as HTML pages, Javascript packages, 
      or CSS from former web projects
* Staging: 
    - Show a structure metaphorically being built from a collection of blocks
    
## Scene 9: Thing Descriptions
![Scene09](script_images/Scene09.png)
* Spoken:
    - The main element of the WoT methodology is the Thing Description, also known as a Tee-Dee.
    - The TD is comparable to an index.html for Things
* Staging: 
    - Show a Thing/device (perhaps a sprinkler or sensor from the opening)
    - Show a "tag" attached to it (perhaps with a WoT TD logo, which we will provide)
    - Open tag, zoom in, see JSON of TD (which we will provide...)
* Comments: 
    - Picture above represents only the final step of zoom
    - The TD acronym needs to be explicitly introduced; 
      also include "WoT TD" in text superimposed on top of the screen, along with the TD logo

## Scene 10: Questions and Answers
![Scene10](script_images/Scene10.png)
* Spoken: Various questions can be answered by the information in the TD
* Text: (answers to various questions pop up sequentially in a circular array around WoT TD logo; 
  do not need to be spoken)
    - Identification 
    - Data organization
    - Access
    - Units  
    - Types
    - Interactions
    - Security 
    - Relationships
* Staging: 
    - Developer has a thought bubble, zoom into it to set stage...
    - Text elements above should show up one by one, get "checked off"
    
## Scene 11: Becoming IoT Experts
![Scene11](script_images/Scene11.png)
* Spoken:
   - Instead of fiddling around for months,
     the developers create the IoT solution in just a few sprints by combining WoT TDs,
     WoT protocol bindings, and WoT scripting with their web expertise.
   - The developers gain confidence in IoT and from now on consider themselves experts 
     in both Web and IoT technologies.
* Staging:
   - Imaging showing high-speed development, maybe playing off "sprint" 
     (eg show developers running down a track)
    
## Scene 12: Next Job
![Scene12](script_images/Scene12.png)
* Spoken:
    - Now the developers are ready to tackle their next IoT challenge.
* Text (on job posting): 
    - Extend a hotel's building automation system with home automation components 
      and give the house technician a nice user interface for operating it
* Staging:
    - Show job board
    - Zoom in on a job posting with the above written text, picture of a hotel
    - Zoom to WoT logo when talk about methodology
    
## Scene 13: WoT Logo Closing
Spoken:
  - And yes, WoT is THE methodlogy they will use.
![Scene13](script_images/Scene13.png)
* Staging:
    - zoom into WoT logo, hold

   
