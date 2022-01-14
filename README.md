# DiA-dynMap
A dynamic map for the Dungeons and Dragons module "Baldur's Gate - Descent into Avernus"

This web application animates a map of the First Layer of Hell, in accordance with the [Alexandrian Remix](https://thealexandrian.net/wordpress/44214/roleplaying-games/remixing-avernus), by Justin Alexander.

# How it works
The map works based on a hexcrawl structure. The Alexandrian covers the subject extensively on [his blog](https://thealexandrian.net/wordpress/46020/roleplaying-games/5e-hexcrawl) but in a nutshell it is a game structure optimised for open world, exploration-based scenarios.

This app tries to help the DM (and possibly the players) visualize the information by providing a comprehensive and quickly accessible overview of the entire gaming area.

# The application
The Alexandrian did a brilliant job writing the description of each location, creating a consistent worldbuilding and coming up with the structure itself. However, the way the information is presented to the user is (in my opinion, of course) a bit fragmentated and inconvenient to look at, especially during prep time. This is where DiA-dynMap comes into play!

The app prints a grid of semi-transparent hexagons on the postermap of Avernus, adding a name label to each location. Additionally, it's possible to click on a hexagon opening a new page detailing the entire description written by The Alexandrian plus a handy reference for any notable item (I.E. dream machine components) present and the type of terrain featured by the hex.

It is also possible to swap the background map with a simplified one which shows the type of terrain featured by every hex.

_Disclaimer: as pointed out by a user on The Alexandrian's discord, on some location pages there are DM's Guild affiliate links. Do note that those link where copy-pasted along with everything else from The Alexandrian's blog and thus belong to him._

# Player view
The Alexandrian [says the following](https://thealexandrian.net/wordpress/46020/roleplaying-games/5e-hexcrawl), regarding involving players in the hexcrawl structure:
>I found that the abstraction of the hex was extremely convenient on the GM’s side of the screen (for tracking navigation, keying encounters, and so forth), but had a negative impact on the other side of the screen. I wanted the players interacting with the game world, not with the abstraction. Therefore, the hexes in the Alexandrian Hexcrawl were a player-unknown structure.

That is a fair argument but while I was playing the Remix at my table I noticed that my players tended to lose themselves on the map, forgetting where they currently where or failing to understand where they were headed. 

Other groups may or may not face the same issue, either way in order to help my players' journey through Avernus, I created a player view which filters out any DMs-only detail and lets them keep track of their exploration without spoiling any unexplored areas.

The player view lets the players see only the hexes they have already explored or whose location they are aware of. It does not let them open the location specific page (which contains secret DMs-only notes) nor interact with the map in any way. Additionally, any info they are not supposed to see is not present in the app at all; this means that they cannot see your notes even if they start analyzing the code line by line.

Unforunately this implies additional complexity on the technical side, specifically because:
 + You will need to host a server with your very own player view running on it
 + You will have to update a file tracking the locations explored by your players as your campaign goes on

Therefore I advise any non tech savy DM against using it. Further details on how to set the player view can be found in the [using this app](#using-this-app) paragraph.

# Live demos
Here are two demos for the DM view and the player view:
+ [DM view](https://ornato-t.github.io/DiA-dynMap/dm/) (static site running on my personal Github Page)
+ [Player view](https://diadynmap-player.glitch.me/) (node.js application running on [glitch.com](https://glitch.com), a free hosting service)

The player view pictures a group's map right after they leave Fort knucklebones, knowing only the positions of Kolasiah the warlord, Uldrak the tinker and the elemental galleon on the river Styx. Explored location are marked with a red hexagon, known and unexplored locations are marked with a dark brown-ish colour. Any unknown locations are not shown at all.

# Using this app
The DM view works as-it-is both locally (even offline!) and remotely on any static website hosting service (there's plenty of free ones out there). The out of the box dataset contains all the info provided by The Alexandrian on his blog, however you can customize it to your heart's content if you feel like it, see [below](#data-structure) how.

As I have already mentioned the player view is a bit trickier to set up. The easiest way would probably be setting up a Glitch project and manually editing the file with the text editor they provide. Other alternatives could be:
+ Easier: running the server on your local network, on your own PC. Only doable if you play in person and all of your players are connected to the same wifi network. Check out how to [run the player view locally](https://github.com/ornato-t/DiA-dynMap/wiki/Setting-up-a-locally-running-player-view) on the app's wiki page.
+ Harder: forking this repository (or even better, importing it as a template) and setting up a custom web application, making a commit everytime you need to update something. Works both online and in person but is quite complicated to set up. You'll need to find a host provider capable of running node.js. Some free options are Heroku and AWS.

Whichever you'll choose, I suggest you download the latest player view [release](https://github.com/ornato-t/DiA-dynMap/releases), which provides a .zip archive containing everything you'll need.

Do note that if you were to download the whole repository you'd first need to copy `/data/data.js` under `/player/data` and load only the `/player` folder on the hosting service of your choiche (Glitch, Heroku, AWS...).
# Technical details
## Dependencies
DM view:
+ vue.js

Player view:
+ vue.js
+ node.js
+ express.js

## Repository structure
```bash
├───data
├───dm
│   ├───images
│   │   └───tiles
│   ├───javascript
│   └───style
└───player
    ├───data
    └───frontend
        ├───images
        ├───javascript
        └───style
```
`/data`  contains the `data.js` file, which contains the dataset used by the app when it fills the map. 

`/dm` contains the DM view. It pulls the dataset directly from `/data`.  
`index.html`  contains the map page, `locations.html` contains the location specific page.  
`/dm/images/tiles` contains the map tiles used for the terrain map in `index.html`.

`/player` contains the player view. The empty `/player/data` folder is where `data.js` needs to be copied for the player view implementation to work. 
`/player/frontend` is similar in contents to `/dm` but without the location specific page and the terrain map.

## Data structure
`data.js` exports a JSON file with the following schema:
```
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "",
  "title": "Data",
  "description": "Dataset for the DiA-dynMap",
  "type": "object",
  "properties": {
    "hex": {
      "description": "Hexagon on the grid (lowercase), ex: 'a1'.",
      "type": "string"
    },
    "name": {
      "description": "Location name.",
      "type": "string"
    },
    "text": {
      "description": "Location text, as written by The Alexandrian.",
      "type": "string"
    },
    "terrain": {
      "description": "Terrain featured in the hex. [0] is the hex terrain. [1] is an optional value for special terrains, such as the Pit of Shummrath.",
      "type": "array",
      "items": {
        "type": "string",
        "enum": [ "ash", "bog", "brambles", "cracks", "fire", "hills", "mountains", "volcano", "waste" ]
      },
      "minItems": 1
    },
    "status": {
      "description": "Optional field, used in player view. Marks wether a location is ['Unknown', 'Known', 'Explored'].",
      "type": "string",
      "enum": ["U", "K", "E"]
    },
    "item": {
      "description": "Optional field, marks any dream machine component present in the location.",
      "type": "string"
    }
  },
  "required": [ "hex", "name", "text", "terrain" ]
}
```