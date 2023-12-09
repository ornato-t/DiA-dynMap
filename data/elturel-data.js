let locations = [
  {
    x: 976,
    y: 392,
    numId: "1",
    connectedTo: ["2", "8", "6c", "6b", "9b"],
    name: "Arrival Point",
    text: "The PCs arrive at a nondescript point in the Dock District. Streetcrawling will flesh out this area.",
  },
  {
    x: 875,
    y: 540,
    numId: "2",
    connectedTo: ["1", "9b", "3"],
    name: "Shiarra's Market",
    text: `<p>Shiarra was the near-legendary first High Rider of Elturel. It’s said that the market is located on the very spot where she called a concord of the local lordlings after driving the Ogre Lord out of the crude stone bastion which then stood atop the tor. (Some tales tell that the Ogre had taken her son. Others that it had stolen her sword.) These lordlings pledged fealty to each other and formed the Riders of Elturel (they wouldn’t become the Hellriders for many more years).</p>
    <p>Shiarra was the near-legendary first High Rider of Elturel. It’s said that the market is located on the very spot where she called a concord of the local lordlings after driving the Ogre Lord out of the crude stone bastion which then stood atop the tor. (Some tales tell that the Ogre had taken her son. Others that it had stolen her sword.) These lordlings pledged fealty to each other and formed the Riders of Elturel (they wouldn’t become the Hellriders for many more years).</p>
    <p>The market is now where High Rider Ikaia holds court. He’s able to bring supplies up through the Market’s access to the Maze and distribute them. There’s a soup kitchen running more or less 24/7, and the market stalls are slowly being converted into a tent city for those who have nowhere else to go. Ikaia is also beginning to organize armed patrols (most accompanied by a vampiric Son or Daughter) to distribute supplies to those who can’t reach the Market.</p>`,
  },
  {
    x: 870,
    y: 640,
    numId: "3",
    connectedTo: ["2", "5", "4"],
    name: "Dragoneye Docks",
    text: "<p>The main docks of Elturel. In addition to the Dragoneye Coster that the docks take their names from (see below), there were a number of other costers active here, including the Thousand-Heads Trading Coster and a regional house maintained by the Seven Suns Coster (which is based out of Baldur’s Gate). One of the six-wagon ferries that used to cross the river here was flipped upside down onto the Dockside Trot when Elturel was sucked into Hell.</p>",
  },
  {
    x: 942,
    y: 696,
    numId: "4",
    connectedTo: ["3", "5", "6a"],
    name: "Dragoneye Dealing Coster",
    text: "<p>The Dragoneye Coster has dominated trade in Elturel for centuries. They have an entire walled compound in the city’s docks, which has been commandeered by Liashandra’s demon platoon.</p>",
  },
  {
    x: 757,
    y: 672,
    numId: "5",
    connectedTo: ["3", "4"],
    name: "The Dock House",
    text: "<p>The estate of Marisima Rathanda, a former Hellrider and the harbormaster who ran the Dragoneye Docks. This location is described in Hellturel.</p>",
  },
  {
    x: 1063,
    y: 587,
    numId: "6a",
    connectedTo: ["4", "6b"],
    name: "Lava Docks",
    text: "<p>A river of lava pours through the canals on the east side of town. Most of the Canal Docks have been destroyed by fire.</p>",
  },
  {
    x: 1085,
    y: 440,
    numId: "6b",
    connectedTo: ["1", "6c", "6a"],
    name: "Lava Docks",
    text: "<p>A river of lava pours through the canals on the east side of town. Most of the Canal Docks have been destroyed by fire.</p>",
  },
  {
    x: 1037,
    y: 300,
    numId: "6c",
    connectedTo: ["1", "6b", "7"],
    name: "Lava Docks",
    text: "<p>A river of lava pours through the canals on the east side of town. Most of the Canal Docks have been destroyed by fire.</p>",
  },
  {
    x: 1033,
    y: 208,
    numId: "7",
    connectedTo: ["6c", "8"],
    name: "Keep of The Twin Suns",
    text: "<p>The Dusk Road, which runs northeast from Elturel to Triel, entered the city through the Dusk Gate. The stronghold of the Keep of the Twin Suns was built directly on the opposite side of the canal from Dusk Gate, and actually arched above the Dusk Road, acting almost like a second gatehouse.</p><p>The Keep was badly damaged during the initial fighting after Elturel’s fall (when Hell Knights erupted and began slaughtering their comrades) and by the canal-side fires that followed. A small band of knights from the Order of the Companion have holed up inside the west tower. They’re scared, confused, and leaderless.</p>",
  },
  {
    x: 880,
    y: 260,
    numId: "8",
    connectedTo: ["9a", "9b", "1", "7"],
    name: "A Pair of Black Antlers",
    text: "<p>Located on the west side of Maidensbridge Street, just south of where it swings westward to cross first Torm’s Bridges and then the Maidens Bridge. This was the best-known of Elturel’s taverns. A dimly lit, wood-paneled place adorned with a pair of stag’s antlers fully twenty feet across, along with many adventurers’ relics and paraphernalia.</p><p>The tavern was described in Volo’s Guide to the Sword Coast. There’s also a version in Hellturel, in which a group of besieging devils have trapped a group of demons inside. If you use this version, I recommend making the devils outside Hell Knights. The demons inside belong to Liashandra’s mission and were out scouting when they got cornered here.</p>",
  },
  {
    x: 831,
    y: 213,
    numId: "9a",
    connectedTo: ["8", "10"],
    name: "Torm's Bridges",
    text: "<p>These bridges are described in <em>Descent Into Avernus</em> (p. 58). The ravine which they cross was created during the Spellplague.</p><p>Your choice whether the devils here are Hell Knights (seeking to keep the city divided) or a group of Avernian devil raiders (charging a steep toll; perhaps even demanding soul coins). Or both. Different factions could control each bridge. The factions controlling each bridge could even change over time (perhaps with assistance from the PCs).</p><p>Note that Torm’s Blade goes from the Dock Districts directly to the top of the bluff, so the angle of the bridge must be incredibly steep.</p>",
  },
  {
    x: 783,
    y: 325,
    numId: "9b",
    connectedTo: ["8", "1", "2", "20"],
    name: "Torm's Bridges",
    text: "<p>These bridges are described in <em>Descent Into Avernus</em> (p. 58). The ravine which they cross was created during the Spellplague.</p><p>Your choice whether the devils here are Hell Knights (seeking to keep the city divided) or a group of Avernian devil raiders (charging a steep toll; perhaps even demanding soul coins). Or both. Different factions could control each bridge. The factions controlling each bridge could even change over time (perhaps with assistance from the PCs).</p><p>Note that Torm’s Blade goes from the Dock Districts directly to the top of the bluff, so the angle of the bridge must be incredibly steep.</p>",
  },
  {
    x: 672,
    y: 170,
    numId: "10",
    connectedTo: ["11", "13", "9a"],
    name: "Maiden's Bridge",
    text: "<p>Not far from where the waters of Maiden’s Leap plunge into the canals of the Dock District, the Maiden’s Bridge crosses the canal. The canal is now filled with lava, but the bridge still stands, joining the western and eastern halves of the city.</p><p>Note: Although this is visually confusing on the Hellturel poster map, you can’t simply walk up into the Gardens from the north. You have to cross at Torm’s Blade from the east or work your way up the switchback in the west.</p>",
  },
  {
    x: 395,
    y: 163,
    numId: "11",
    connectedTo: ["10", "12", "13"],
    name: "Helm's Shieldhall",
    text: "<p>Helm’s Shieldhall is a fortress temple dedicated to the god Helm and the citadel of the Hellriders. It has been completely taken over by the Hell Knights and serves as their base of operations in Elturel.</p><p>The Shieldhall is also another opportunity to highlight the history of the city and, importantly, the Hellriders themselves. Much of this will be the publicly known history of the famous Hellride (see the tale told in Part 4A: The Road to Candlekeep), but you can build on that knowledge now with more specifics. (For example, you might include a few statues of famous knights known to have perished on the ride — i.e., those they’ll meet later who are now damned to Hell.) Hiding away a Secret History of the Knights of Elturel that confirms Lulu’s memories of Zariel leading the knights is also an option.</p>",
  },
  {
    x: 312,
    y: 190,
    numId: "12",
    connectedTo: ["11", "13", "14"],
    name: "West Gate",
    text: "<p>The West Gate used to lead to Skulbask Road, heading northwest into the Fields of the Dead. Now it looks out almost directly onto one of the chains dragging Elturel down towards the Styx.</p>",
  },
  {
    x: 425,
    y: 350,
    numId: "13",
    connectedTo: ["10", "11", "12", "14", "17"],
    name: "Owlbear Butcher Shop",
    text: "<p>Cultists of Zariel have taken over an exotic meats butcher shop. This location is detailed in Hellturel.</p>",
  },
  {
    x: 293,
    y: 463,
    numId: "14",
    connectedTo: ["12", "13", "17", "16", "15"],
    name: "Tower of Ber Nolmien",
    text: "<p>This is a ruined wizard’s tower that belonged to Bèr Nölmien. Iolanthe Oshrat — whose brother, Wembra Oshrat, was murdered in Baldur’s Gate — was Nölmien’s apprentice. The remains of the teleportation circle Nölmien was using to evacuate people during Elturel’s fall can still be found in the ruins. Nölmien’s body can also be found here. Hell Knights assaulted the tower and killed him.</p><p>This is one of several sites where powerful spellcasters were targeted and killed. It also provides the other side of Iolanthe’s story if the PCs spoke with her.</p>",
  },
  {
    x: 164,
    y: 512,
    numId: "15",
    connectedTo: ["14", "16"],
    name: "Grand Cementery",
    text: "<p>Described in <em>Descent Into Avernus</em> (p. 64) and <a href='https://thealexandrian.net/?p=44933'>Part 5E</a>.</p>",
  },
  {
    x: 230,
    y: 698,
    numId: "16",
    connectedTo: ["15", "14", "17"],
    name: "West Docks",
    text: "<p>The West Docks are smaller and separately managed from the Dragoneye Docks. As noted above, most travelers arriving at the city via the river came in through the West Docks, so they’re surrounded by a lot of inns and travelhouses. The Redeye Costers unofficially ran the West Docks. They weren’t actually a proper coster; it’s an ironic name for an organized crime group. The docks themselves were almost completely destroyed, having split off from the mass of Elturel and plummeted into the Dock of Fallen Cities below.</p>",
  },
  {
    x: 420,
    y: 540,
    numId: "17",
    connectedTo: ["13", "14", "16", "21"],
    name: "Western Switchback",
    text: "<p>To reach the High District from Westerly, you have to take a switchback road up the western face of the tor.</p>",
  },
  {
    x: 559,
    y: 512,
    numId: "18a",
    connectedTo: ["21", "20", "22"],
    name: "The Gardens",
    text: `<p>As you can see on the map, the Gardens run the entire length of the bluff. Their design emphasizes dark-leafed bowers; a touch of the natural in the heart of the city. At night, the soft glimmer of glow-lilies that curl liana-like around the tree-trunks filled the Gardens. A stream erupted from the cliff-face beneath the High Hall, sending a bubbling brook down the middle of the Gardens to eventually plunge over the Maiden’s Leap.</p>
    <p>All of that is gone now: The spring beneath High Hall has been transformed by the trip to Hell and now belches forth a stream of lava. The natural growth has wilted beneath the strange skies of Avernus or been burnt away by the lava.</p>
    <p>There is a procession of statues dedicated to the High Observers through the park:</p>
    <ul>
    <li>Naja Bellandi’s statue stands near the Maiden’s Leap (at the spot where she leapt on the Night of the Red Coup).</li>
    <li>Cathasach Restat’s statue is found near the midpoint of the Gardens.</li>
    <li>Thavius Kreeg’s statue stands on a rocky outcropping in the middle of the stream near the spring of its headwaters. Now it’s surrounded by lava, its features basking in a demonic red light.</li>
    </ul>`,
  },
  {
    x: 635,
    y: 296,
    numId: "18b",
    connectedTo: ["19", "20"],
    name: "The Gardens",
    text: `<p>As you can see on the map, the Gardens run the entire length of the bluff. Their design emphasizes dark-leafed bowers; a touch of the natural in the heart of the city. At night, the soft glimmer of glow-lilies that curl liana-like around the tree-trunks filled the Gardens. A stream erupted from the cliff-face beneath the High Hall, sending a bubbling brook down the middle of the Gardens to eventually plunge over the Maiden’s Leap.</p>
    <p>All of that is gone now: The spring beneath High Hall has been transformed by the trip to Hell and now belches forth a stream of lava. The natural growth has wilted beneath the strange skies of Avernus or been burnt away by the lava.</p>
    <p>There is a procession of statues dedicated to the High Observers through the park:</p>
    <ul>
    <li>Naja Bellandi’s statue stands near the Maiden’s Leap (at the spot where she leapt on the Night of the Red Coup).</li>
    <li>Cathasach Restat’s statue is found near the midpoint of the Gardens.</li>
    <li>Thavius Kreeg’s statue stands on a rocky outcropping in the middle of the stream near the spring of its headwaters. Now it’s surrounded by lava, its features basking in a demonic red light.</li>
    </ul>`,
  },
  { x: 653, y: 232, numId: "19", connectedTo: ["18b"], name: "Maiden's Leap", text: "<p>The Maiden’s Leap is a cascade at the north end of the Gardens atop the bluff. A spectacular series of falls plunge down the face of the bluff and into the canals below. Both the cascade and the canals are now lava.</p>" },
  {
    x: 640,
    y: 370,
    numId: "20",
    connectedTo: ["18a", "18b", "21", "9b"],
    name: "Symbril's House",
    text: "<p>A small, cozy inn near Maiden’s Leap in the High District. It overlooks (and opens into) the Garden. A Zarielite cult had rented rooms here to ride Elturel into Hell, and now they’ve taken over the joint. They might waylay travelers in the Gardens and/or be plotting to sabotage Ravengard’s efforts in the High Hall in some way</p>",
  },
  {
    x: 514,
    y: 390,
    numId: "21",
    connectedTo: ["17", "20", "18a"],
    name: "Old High Harvest Home",
    text: `<p>High Harvest Home was once a temple dedicated to Chauntea. During the High Harvest Slaughter, High Rider Ikaia’s vampires broke into the temple and murdered the entire congregation which had taken refuge there. Hundreds were killed and Chauntea worship in the city was virtually wiped out.</p>
    <p>Old High Harvest Home was converted into administrative offices, eventually housing the Imperial Commission (which managed the administration of the other cities of Elturgard). The old sanctuary, however, became a memorial to the Slaughter. It contains hundreds of featureless, life-size statues of white ash, each representing one of those killed here.</p>
    <p>Every floor of the building has a huge balcony/patio looking on the western face of the building, looking out over the lower city.</p>
    <p>There are currently a number of dead bodies in the upstairs offices: A Hell Knight erupted here and killed a number of people in the initial chaos.</p>
    `,
  },
  { x: 524, y: 593, numId: "22", connectedTo: ["18a"], name: "The High Hall", text: `Described in <em>Descent Into Avernus</em> (p. 58) and <a href="https://thealexandrian.net/?p=44925">Part 5D</a>.` },
];

if (typeof module !== "undefined") module.exports = locations;
