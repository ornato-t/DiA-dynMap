let locations = [{
        hex: "a1",
        name: "Avernian tarpit",
        text: "<p>A vast tarpit several hundred feet across. The is hot enough to burn (1d6 fire damage) and it is constantly bubbling. Dangers include:</p> <ul> <li>A large gas bubble explodes, spattering those within 10 feet with hot tar. DC 12 Dexterity saving throw or 1d6 fire damage.</li> <li>Getting stuck in the tar. (It counts as difficult terrain a[nd requires a DC 14 Strength check to pass safely or a DC 18 Strength check to escape once stuck. If stuck, the victim will slowly sink into the tar, becoming submerged 3d6 rounds later.)</li> <li>Jets of flame spontaneously erupt from particularly strong outgassing.</li> <li>The gas itself can be toxic, requiring a DC 16 Constitution saving throw. On a failure, characters are affected as per a <em>confusion</em> spell, rolling on the custom table below once per minute to determine their actions. At the end of each minute, they can attempt another saving throw.</li> </ul> <p>There are several small outcroppings of rock and solid-ish land dotted throughout the tarpit. On one of these is a giant boulder of gold that gleams in the strange, reddish light of Avernus. (The boulder is actually pyrite; fool’s gold.)</p> <table id=\"wp-table-reloaded-id-159-no-1\" class=\"wp-table-reloaded wp-table-reloaded-id-159\"> <thead> <tr class=\"row-1 odd\"> <th class=\"column-1\"><strong>d10</strong></th> <th class=\"column-2\"><strong>Tar Confusion Effect</strong></th> </tr> </thead> <tbody> <tr class=\"row-2 even\"> <td class=\"column-1\">1-2</td> <td class=\"column-2\">Uncontrollable laughter, as per a <em>Tasha's hideous laughter</em> spell</td> </tr> <tr class=\"row-3 odd\"> <td class=\"column-1\">3-5</td> <td class=\"column-2\">Believes the tar is delicious food and will attempt to eat it. (The tar inflicts 1d6 fire damage, or 3d6 fire damage if swallowed. It is also poisonous, requiring a DC 12 Constitution saving throw to avoid an additional 2d6 damage accompanied by vomiting.)</td> </tr> <tr class=\"row-4 even\"> <td class=\"column-1\">6-7</td> <td class=\"column-2\">Move in a random direction (possibly motivated by hallucinations).</td> </tr> <tr class=\"row-5 odd\"> <td class=\"column-1\">8</td> <td class=\"column-2\">Takes no actions.</td> </tr> <tr class=\"row-6 even\"> <td class=\"column-1\">9-10</td> <td class=\"column-2\">Attacks a random nearby creature.</td> </tr> </tbody> </table>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "a2",
        name: "Obelisk of Ubbalux",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 98.</li> </ul> <p>A set of <strong>astral pistons</strong> within the obelisk are intrinsic to Ubbalux’ prison. The pistons can only be accessed if Ubbalux is freed.</p> <p><strong>FREEING UBBALUX</strong>:</p> <ul> <li>As described in <em>Descent Into Avernus</em>, Ubbalux has heard of the Mirror of Mephistar (Hex I1) and believes Mephistopheles can unravel the riddle.</li> <li>Bel built the prison and could free him. Ubbalux can also point them towards Bel’s Forge (Hex H2). (If it seems reasonable, Ubbalux might still be under the impression that Bel is the Archduke of Hell.)</li> <li>You can also solve Bel’s original “riddle” (see below).</li> </ul> <p><strong>INVESTIGATING THE STONES</strong>: Bel told Ubbalux that the secret to escaping the prison was hidden in the arcane runes etched across the standing stones. The trick is that crucial information is located on the outside of the stones, where Ubbalux can’t see it.</p> <ul> <li>A DC 12 Intelligence (Arcana) check indicates that each of the outer standing stones is associated with one of the schools of magic.</li> <li>A character who speaks Infernal or succeeds on a DC 18 Intelligence (Arcana) check will notice that each standing stone has a cartouche containing two syllables, one of which is either the first or second syllable of the associated school of magic in Infernal and the other appears to be a nonsense syllable.</li> <li>A similar cartouche appear on the inside of the stone (where Ubbalux can see it, although you can also look across the circle and see them from outside) with a similar pairing of the first or second syllable of the associated school of magic in Infernal (whichever one isn’t on the outside) and a nonsense syllable. </li> </ul> <p><strong>SOLVING THE RIDDLE</strong>: Combining the two “nonsense” syllables on each stone forms a command word associated with that stone. You can intuit the correct order of the syllables by looking at the matched syllable from the school of magic. (So the syllable in the cartouche with the first syllable of the school of magic should be the first syllable of the command word and the second syllable should be the second.)</p> <p>To release Ubbalux, you need to place your hand on each stone and speak the associated command word (suffering the effect described on pg. 98 of <em>Decent Into Avernus</em>). Once this has been done with all eight stones, the energy field drops: Ubbalux is freed and the central obelisk can be accessed.</p> <table id=\"wp-table-reloaded-id-160-no-1\" class=\"wp-table-reloaded wp-table-reloaded-id-160\"> <thead> <tr class=\"row-1 odd\"> <th class=\"column-1\"><strong>Stone (School)</strong></th> <th class=\"column-2\"><strong>Outer Cartouche (Infernal)</strong></th> <th class=\"column-3\"><strong>Inner Cartouche (Infernal)</strong></th> <th class=\"column-4\"><strong>Outer Cartouche (Translated)</strong></th> <th class=\"column-5\"><strong>Inner Cartouche (Translated)</strong></th> <th class=\"column-6\"><strong>Command Word</strong></th> </tr> </thead> <tbody> <tr class=\"row-2 even\"> <td class=\"column-1\">Abjuration</td> <td class=\"column-2\">TOZ / BO</td> <td class=\"column-3\">DRIK / XUUN</td> <td class=\"column-4\">AB / BO</td> <td class=\"column-5\">JUR / XUUN</td> <td class=\"column-6\">BOXUUN</td> </tr> <tr class=\"row-3 odd\"> <td class=\"column-1\">Conjuration</td> <td class=\"column-2\">ATH / LA</td> <td class=\"column-3\">DIG / KRI</td> <td class=\"column-4\">JUR / LA</td> <td class=\"column-5\">CON / KRI</td> <td class=\"column-6\">KRILA</td> </tr> <tr class=\"row-4 even\"> <td class=\"column-1\">Divination</td> <td class=\"column-2\">LA / ITH</td> <td class=\"column-3\">ROT / IFE</td> <td class=\"column-4\">DIV / ITH</td> <td class=\"column-5\">IN / IFE</td> <td class=\"column-6\">ITHIFE</td> </tr> <tr class=\"row-5 odd\"> <td class=\"column-1\">Enchantment</td> <td class=\"column-2\">THOS / UN</td> <td class=\"column-3\">DRER / ECK</td> <td class=\"column-4\">CHAN / UN</td> <td class=\"column-5\">EN /ECK</td> <td class=\"column-6\">ECKUN</td> </tr> <tr class=\"row-6 even\"> <td class=\"column-1\">Evocation</td> <td class=\"column-2\">OOD / LE</td> <td class=\"column-3\">WAR / ARG</td> <td class=\"column-4\">CAT / LE</td> <td class=\"column-5\">EVO / ARG</td> <td class=\"column-6\">ARGLE</td> </tr> <tr class=\"row-7 odd\"> <td class=\"column-1\">Illusion</td> <td class=\"column-2\">THRUN / JAO</td> <td class=\"column-3\">ZOG / KOUM</td> <td class=\"column-4\">ILL / JAO</td> <td class=\"column-5\">US / KOUM</td> <td class=\"column-6\">JAOKOUM</td> </tr> <tr class=\"row-8 even\"> <td class=\"column-1\">Necromancy</td> <td class=\"column-2\">DRIK / ARK</td> <td class=\"column-3\">THAL / KIL</td> <td class=\"column-4\">NEC / ARK</td> <td class=\"column-5\">RO / IL</td> <td class=\"column-6\">ARKIL</td> </tr> <tr class=\"row-9 odd\"> <td class=\"column-1\">Transmutation</td> <td class=\"column-2\">MAM / YA</td> <td class=\"column-3\">OTH / ARK</td> <td class=\"column-4\">MUT / YA</td> <td class=\"column-5\">TRANS / ARK</td> <td class=\"column-6\">ARKYA</td> </tr> </tbody> </table>",
        terrain: ["waste"],
        status: "U",
        item: "astral pistons"
    },
    {
        hex: "a3",
        name: "Ooze harvesters",
        text: "<ul> <li>Pit of Shummrath</li> <li><a href=\"https://dysonlogos.blog/2019/09/26/demonpillars/\">Map by Dyson Logos</a></li> </ul> <p>Treacherous stone steps are carved into the cliff face surrounding the Pit of Shummrath, leading down to a miserable village which has been built upon a shelf of rock which thrusts out into the green ooze.</p> <p>A pair of piscoloths and a gaggle of sahuagin overseers dominate a population of enslaved half-fiend goblins who dredge sludge from the Pit and bottle it. These are shipped to the piscolothian cities in the dark waters beneath the ice of Stygia, where the oil-slick like telepathic emanations of the sludge are a kind of delicacy used to spice food.</p> <p><strong>Asmodean Cavern</strong>: The mouth of a cave at the base of the cliffs in the goblin village leads to several chambers containing ancient fiendish pillars. The four faces of each pillar are covered with worn runes in an archaic form of Infernal and the bas reliefs of various devil faces. Touching the runes causes the devil faces on the matching pillar to animate and recite them. Collectively they tell of the Trial of Asmodeus and the rights given to Asmodeus under the First Law by the ruling of Primus, Lord of the Modrons. This site is recorded as being one of sixty-six such memorials erected to record this epochal event.</p> <p>The goblins lived in these caverns, but several years ago they were flooded by a sudden undulation of the Pit. Shummrathian ooze still lingers in the depths of the cave, creating a hostile environment for the goblins who still squat here.</p> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2019/09/26/demonpillars/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210620a.png\" width=\"503\" height=\"452\"></a> </p>",
        terrain: ["waste", "pit"],
        status: "U",
        item: ""
    },
    {
        hex: "a4",
        name: "Arches of Ulloch",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 103</li> </ul> <p>The Arches of Ulloch allow the mass transport of entire armies, but they require the use of a <strong>tuned keystone</strong> (similar to the planar tuning fork required for a <em>plane shift</em> spell) to align them with a particular plane of existence.</p> <p>One of the arches currently has an ancient <strong>Avernian keystone</strong>, allowing teleportation to anywhere within Avernus.</p> <p>Creating a new tuned keystone requires:</p> <ul> <li>Either the original plans (located in Bel’s Fortress, Hex H2) or a DC 20 Intelligence (Arcana) check to reverse engineer the existing keystone.</li> <li>50 soul coins worth of raw materials.</li> <li>An appropriate workshop (such as those located in Bel’s Fortress, Fort Knucklebones, or other Warlord armories). </li> </ul> <blockquote> <p><em>Note: There is an unkeyed keystone in the Dump (Hex H1).</em></p> </blockquote>",
        terrain: ["waste"],
        status: "U",
        item: ""
    },
    {
        hex: "a5",
        name: "Warlord lair: the lost golgari",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/297172/Warlords-of-Avernus?affiliate_id=81207\"><em>Warlords of Avernus</em></a>, p. 8</li> <li><a href=\"https://dysonlogos.blog/2019/09/09/flintcrown/\">Map by Dyson Logos</a></li> </ul> <p>This is the lair of Kolasiah, the Infernal Medusa, and the Lost Golgari, who have come to Avernus from Ravnica. Kolasiah seeks a way of returning home and would value any news of a powerful spellcaster not allied with Zariel. </p> <p><strong>Entrance Ramp</strong>: Infernal warmachines come roaring down the ramp and are parked in a cluster around the central stone pillar.</p> <p><strong>Forge</strong>: In the central pillar of the rock at the bottom of the entrance ramp there is a forge and garage run by Malargan the Oni. See <a href=\"https://www.dmsguild.com/product/294349/Forges-of-Avernus?affiliate_id=81207\"><em>Forges of Avernus</em></a>, p. 4. A set of <strong>astral pistons </strong>can be found here.</p> <p>For more details on the Avernian warlords, see <a href=\"https://thealexandrian.net/wordpress/46667/roleplaying-games/remixing-avernus-part-7f-warlords-of-avernus\">Part 7E</a> of the Remix.</p> <blockquote> <p><em>Design Note: As written in </em>Warlords of Avernus<em>, the Lost Golgari have been reduced to a fraction of their former strength. You can either lean into that (with chunks of their base here being deserted) or I would potentially go the other way and bolster her to have a larger number of infernal machines and riders.</em></p> </blockquote> <p> <a href=\"https://dysonlogos.blog/2019/09/09/flintcrown/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210620b.png\" width=\"500\" height=\"500\"></a> </p>",
        terrain: ["mountains"],
        status: "K",
        item: "astral pistons"
    },
    {
        hex: "a6",
        name: "Warlord lair: Bitter Breath's marauders",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/303705/Bitter-Rivals--an-Eventyr-Games-adventure-for-Baldurs-Gate-Descent-into-Avernus?affiliate_id=81207\"><em>Bitter Rivals</em></a>, p. 5</li> <li><em>Descent Into Avernus</em>, p. 90</li> </ul> <p>For more details on the Avernian warlords, see <a href=\"https://thealexandrian.net/wordpress/46667/roleplaying-games/remixing-avernus-part-7f-warlords-of-avernus\">Part 7E</a> of the Remix.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "b1",
        name: "Arkhan’s tower",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 110</li> </ul> <p>For Arkhan’s Tower, we would like to prep:</p> <ul> <li>A complete map of the tower.</li> <li>An adversary roster of the denizens. (<em>Descent Into Avernus</em>, p. 110-11 does provide a comprehensive list of creatures to add to the roster.)</li> </ul> <p>For the map, I will recommend PogS’ <a href=\"https://www.reddit.com/r/DescentintoAvernus/comments/lf7lr6/arkhans_tower_hatchery/\">excellent original cartography</a>.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "b2",
        name: "Ferryman's port",
        text: "<ul> <li>On River</li> </ul> <p>There are charonadaemon ferry stations on both shores of the Styx here. There are commissions available for travel up- and downriver, but most regular travel simply crosses the river to the other station.</p> <p><strong>Sudok’s Mart</strong>: The station on the contra-Dis side of the river is larger and contains a small market overseen by a yugoloth named Sudok.</p>",
        terrain: ["waste", "pit"],
        status: "U",
        item: ""
    },
    {
        hex: "b2",
        name: "Alvskraema caravanserai",
        text: "<ul> <li><a href=\"https://dysonlogos.blog/2019/07/01/winekraken/\">Map by Dyson Logos</a></li> <li>On Bridge (Across Pit of Shummrath)</li> </ul> <p>The Alvskraema caravanserai is located next to the bridge which crosses the Pit of Shummrath. It is jointly operated by Brarumoch, Haskari, and Meltrus.</p> <p><strong>Brarumoch</strong>: Operates the common room and runs the kitchen. The caravanserai’s specialty is elf meat. Brarumoch has a supplier who hunts and butchers elves on the Material Plane; here they are considered an expensive delicacy known as <em>alvskraema</em>.</p> <p>(This doesn’t mean that any elf walking through the door will be set upon and butchered. That’s not the sort of thing you do to a customer.)</p> <p><strong>Haskari</strong>: Operates a weapons forge. He specializes in creating cacophonous weapons, which allow those wielding them to speak and understand Abyssal. (See <a href=\"https://www.dmsguild.com/product/294349/Forges-of-Avernus?affiliate_id=81207\"><em>Forges of Avernus</em></a>.)</p> <p><strong>Meltrus</strong>: Specializes in repairing and building infernal machines. He and Haskari are constantly squabbling over shop space.</p> <blockquote> <p><em>Design Note: Note that the name Alvskraema is more or less “Elfscream” in Old Norse. It’s designed to echo the Elfsong Tavern from Baldur’s Gate. Thanks to Flallen from <a href=\"https://twitch.tv/thealexandirian\">my Twitch chat</a> for the suggestion of Elfscream Tavern.</em></p> </blockquote> <p> <a href=\"https://dysonlogos.blog/2019/07/01/winekraken/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210620c.png\" width=\"500\" height=\"446\"></a> </p>",
        terrain: ["waste", "pit"],
        status: "U",
        item: ""
    },

    {
        hex: "b3",
        name: "With-queen's abode",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/293787/Dance-of-the-Deathless-Frost?affiliate_id=81207\"><em>Dance of Deathless Frost</em></a></li> </ul> <p>Tasha keeps a summer home in Avernus, as described in <a href=\"https://www.dmsguild.com/product/293787/Dance-of-the-Deathless-Frost?affiliate_id=81207\"><em>Dance of Deathless Frost</em></a><em>.</em> She is aware of <strong>Kostchtchie’s phylactery</strong>, knows that Baba Yaga knows its resting place, and is able to summon Baba Yaga’s hut. </p>",
        terrain: ["waste"],
        status: "U",
        item: ""
    },
    {
        hex: "b4",
        name: "Red Ruth's lair",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 107</li> </ul> <p>Red Ruth has a <strong>heartstone</strong>.</p>",
        terrain: ["brambles"],
        status: "U",
        item: "heartstone"
    },
    {
        hex: "b5",
        name: "Bone crater",
        text: "<p>A large meteor impact crater formed by a huge skull (more than ten feet across) that’s partially embedded at the center of the crater.</p>",
        terrain: ["ash"],
        status: "U",
        item: ""
    },
    {
        hex: "b6",
        name: "Warlord lair: soul collectors",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/297172/Warlords-of-Avernus?affiliate_id=81207\"><em>Warlords of Avernus</em></a>, p. 2</li> <li><a href=\"https://dysonlogos.blog/2020/11/09/shrine-of-the-demon-eskarna/\">Map by Dyson Logos</a></li> </ul> <p>This is the lair of the warlord Algoran and his gang, the Soul Collectors.</p> <p><strong>Shrine to Eskarna</strong>: Algoran discovered an ancient shrine dedicated to the demon Eskarna. It was built countless aeons ago at a time during which the demons had pushed the front lines of the Blood War deep into Avernus. Long abandoned and forgotten, it was discovered by Algoran and converted into a gladiatorial arena. </p> <p><strong>Gladiatorial Arena</strong>: Watched over by the well-worn statue of Eskarna, Algoran hosts gladiatorial competitions here which attract a varied crowd of visitors and competitors.</p> <p><strong>Cogbox</strong>: Algoran recently acquired a modron slave as a wager during the gladiatorial fights. The modron has a <strong>Nirvanan cogbox</strong>. The modron might be willing to trade it for anyone who can help them gain their freedom; alternatively, if Algoran learns its value, he will seize it and try to make a deal (or wager) himself.</p> <p><strong>Shaaksuraar’s Armory</strong>: A “mountain of a sahuagin-werebear” called Shaaksuraar oversees a productive weapons forge for Algoran. This is located in the river cavern; Shaaksuraar goes on swims through the subterranean river and also quenches his fresh-forged weapons in the waters here. See <a href=\"https://www.dmsguild.com/product/294349/Forges-of-Avernus?affiliate_id=81207\"><em>Forges of Avernus</em></a>, p. 3.</p> <p>For more details on the Avernian warlords, see <a href=\"https://thealexandrian.net/wordpress/46667/roleplaying-games/remixing-avernus-part-7f-warlords-of-avernus\">Part 7E</a> of the Remix.</p> <blockquote> <p><em>Design Note: The concept of Eskarna comes <a href=\"https://dysonlogos.blog/2020/11/09/shrine-of-the-demon-eskarna/\">from Dyson’s original key</a> for this map, although we have reduced it to an ancient ruin here. In Forges of Avernus, Shaaksuraar manages the Goregut Armory, but the Goreguts’ lair (Hex J3) in the Remix has been destroyed by Princeps Kovik (Hex J5). I’ve reassigned Shaaksuraar to Algoran, but you could also make this part of his backstory: That he worked for Raggadragga until his forge was destroyed by Kovik. (To add extra drama, perhaps Shaaksuraar betrayed Raggadragga to Koviks for a large payment of soul coins before transferring his services to his new forge here.)</em></p> </blockquote> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2020/11/09/shrine-of-the-demon-eskarna/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210620d.png\" width=\"501\" height=\"401\"></a> </p>",
        terrain: ["mountains"],
        status: "U",
        item: "Nirvanan Cogbox"
    },
    {
        hex: "c1",
        name: "Monument of Tiamat",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 112</li> </ul> <p>Through the mouth of a colossal dragon’s skull, a tunnel passes back to Tiamat’s Lair. The tunnel is really more of a highway. (The size of the dragon skull really cannot be overstated.) Arkhan the Cruel and his followers are currently in a camp just down the hill from the dragon skull.</p> <p><strong>Tiamat’s Lair</strong>: The mountain is a prison, although Tiamat has successfully tested the limits of that prison many times. Her lair is like an onion, with layers upon layers of caverns always worming their way deeper and deeper towards her five lairs (and many false lairs). Some of these tunnels actually ooze across planar boundaries. In one place, for example, her lair is connected or consanguineous with the Dragonspawn Pits of Azharul (another draconic deity whom Tiamat destroyed and subsumed a century ago).</p> <p>The highway leads to the outer fortifications of Tiamat’s lair, which stand guard upon the Gate Tower of Dis. This fluted tower stands in the middle of a truly mammoth cavern, surrounded by temporary merchant camps and stockyard-type infrastructure. The tower actually pierces through the planar boundaries between the layers of Hell. Inside the tower, a huge ramp leads down for a seemingly absurd distance (it take several hours to descend) before emerging out of a tower on the outskirts of Dis, the infernal city which is the second layer of Hell.</p> <p>At the opposite end of the lair, atop the mountain peaks, are five towers – one for each of Tiamat’s chromatic heads – which rear up into the sky in a crown-shaped redoubt. These towers serve as entrances for draconic followers of Tiamat.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "c2",
        name: "Pillar of skulls",
        text: "<ul> <li>Visible 1 (Visible 2 on a clear day, as per a mountain)</li> </ul> <p>A terrifying tower of demon skulls, stacked more than a mile high. These are trophy-skulls claimed during the Blood War and placed in this monument during the time when the frontlines were located along the River Styx.</p> <p><strong>The Rift Mound</strong>: Near the base of the Pillar of Skulls is a second mound, reaching perhaps fifty feet high. These skulls were piled here during the Rift War. Inspection will reveal that they are not demonic (they are actually baatorian, although a DC 16 Intelligence (Arcana) check is necessary to recognize that).</p> <p>On an obsidian sarsen at the base of the mound are carved the following words in Infernal: FORGET NOT THE GLORIES OF THE BATTLE OF LOST MEMORIES. SEE BEFORE YOU THE ENEMIES OF HELL AND REMEMBER THEIR FOLLY. WE HONOR FOREVER THE DEEDS OF ZARIEL, SHE WHO ROSE BY HER BLADE. SHE WHO TRIUMPHED IN THE RIFT WAR. SHE WHO IS NEW-CROWNED ARCHDUCHESS OF AVERNUS.</p>",
        terrain: ["waste"],
        status: "U",
        item: ""
    },
    {
        hex: "c3",
        name: "Baazit's cage",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 100</li> <li>On the Edge of the Pit of Shummrath</li> </ul> <p>There are a dozen iron cages suspended over the edge of the Pit of Shummrath and designed to dunk their occupants into the demonic goo. When the PCs first arrive here, one of them is occupied by Baazit (DIA, p. 100). On future visits, there is a 1 in 4 chance of a new prisoner (which can be generated using the wandering encounter tables for Avernus).</p>",
        terrain: ["cracks", "pit"],
        status: "U",
        item: ""
    },
    {
        hex: "c4",
        name: "Temple of Dak-Thael",
        text: "<ul> <li><a href=\"https://www.drivethrurpg.com/product/348937/Vysianters-Guide-to-the-Red-Wastes-of-Avernus?affiliate_id=81207\"><em>Vysianter’s Guide to the Red Wastes</em></a></li> </ul> <p>These ruins were once the sanctum of the Queen of Lilies, who ruled over a verdant paradise before it was swept away by the sands of Avernus.</p> <blockquote> <p><em>Design Note: As written, the Queen of Lilies was an ancient Archduchess of Avernus. You might position her as having served in the armies of Ashmedai (i.e., Asmodeus) when he conquered the plane. Alternatively, with even greater revision, the Queen of Lilies might have ruled here BEFORE the Fall of Avernus and the paradise described here is what Avernus was like prior to the events of the Averniad.</em></p> </blockquote>",
        terrain: ["hills"],
        status: "U",
        item: ""
    },
    {
        hex: "c5",
        name: "Crypt of the hellriders",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 101-3</li> </ul> <p><strong>MEETING OLANTHIUS / QUESTIONING THE GHOSTS</strong>: These conversations are detailed in <a href=\"https://thealexandrian.net/wordpress/46059/roleplaying-games/remixing-avernus-part-6d-l-questioning-the-hellriders\"><em>Part 6D-L: Questioning the Hellriders</em></a><em>.</em></p>",
        terrain: ["ash"],
        status: "U",
        item: ""
    },
    {
        hex: "c6",
        name: "Avernus that was",
        text: "<ul> <li><a href=\"https://dysonlogos.blog/2019/08/03/diadem/\">Map by Dyson Logos</a></li> </ul> <p>A narrow crack in the rock leads to a stone stair leading deep into the earth. At the heart of this shrine is a small, verdant patch of the glorious paradise which Avernus once was. Just fifty feet across, this patch of the Avernus That Was has been preserved for eons.</p> <p>Lore of the Averniad is preserved here, speaking of how the forces of many different planes sought to claim Avernus for themselves; and of Asmodeus’ betrayal that led to Avernus becoming aligned with Hell.</p> <p>This place is anathema to those with fiendish blood, who simply cannot enter (as if presented with an impenetrable invisible wall upon the threshold). Full fiends cannot even perceive the place unless forced to do so (for example, if they see someone else passing within).</p> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2019/08/03/diadem/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210622a.png\" width=\"500\" height=\"560\"></a> </p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "d1",
        name: "Malignant tributary",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/289061/Encounters-in-Avernus?affiliate_id=81207\"><em>Encounters in Avernus</em></a>, p. 14</li> <li>On River</li> </ul> <p>The tributary of the Styx shown on the hexmap here is known as the Malignant Tributary and has strange effects on those who drink from it (as described in <em>Encounters in Avernus</em>).</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "d2",
        name: "Warlord lair: Carol D'vown",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/297172/Warlords-of-Avernus?affiliate_id=81207\"><em>Warlords of Avernus</em></a>, p. 4</li> <li><a href=\"https://dysonlogos.blog/2020/02/06/isopillar/\">Map by Dyson Logos</a></li> <li>On the Styx</li> </ul> <p>D’vown has a <strong>Heartstone</strong>, which she uses in her alchemical experiments.</p> <p>Carol’s tower squats on the banks of the Styx near where a tributary from the Pit of Shummrath joins the river. She takes samples from the Styx, the Pit, and the effluvium mixture of the two and experiments to see what alchemical “delights” she can discover from them.</p> <p>Carol is in a relationship with Feonor (Hex I2), having met her at Mahadi’s Wandering Emporium years ago. There is a 1 in 6 chance that Feonor and 1d4-1 members of her gang are visiting Carol here.</p> <p>For more details on the Avernian warlords, see <a href=\"https://thealexandrian.net/wordpress/46667/roleplaying-games/remixing-avernus-part-7f-warlords-of-avernus\">Part 7E</a> of the Remix.</p> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2020/02/06/isopillar/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210622b.png\" width=\"500\" height=\"270\"></a> </p>",
        terrain: ["cracks", "pit"],
        status: "U",
        item: "heartstone"
    },
    {
        hex: "d2",
        name: "The Shummrath dam",
        text: "<p>A huge dam has been erected at one end of the Pit of Shummrath, preventing the ooze from flowing out into the Styx. (Stygian waters are periodically let into the Pit through a similar dam at the other end.) Sometimes the dam leaks and sometimes it overflows; the river canyons beyond this dam are thus lined with a sickly sludge made up Stygian water and Shummrathian ooze, leading to strange mutations amongst the flora and fauna.</p>",
        terrain: ["cracks", "pit"],
        status: "U",
        item: ""
    },
    {
        hex: "d3",
        name: "Demon zapper",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 106</li> </ul> <p>A <strong>Nirvanan cogbox</strong> is part of the apparatus which imprisons the unicorn. Removing the cogbox without damaging it is a DC 14 Intelligence (Arcana) check. Removing the cogbox disables the device.</p>",
        terrain: ["hills"],
        status: "U",
        item: "Nirvanan Cogbox"
    },
    {
        hex: "d4",
        name: "Bloody crescent",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/303705/Bitter-Rivals--an-Eventyr-Games-adventure-for-Baldurs-Gate-Descent-into-Avernus?affiliate_id=81207\"><em>Bitter Rivals</em></a>, p. 5</li> </ul> <p>An enormous rock shaped like a semicircle, providing a sort of half-pipe. The Warlords of Avernus use it for stunt duels on their infernal war-machines.</p>",
        terrain: ["waste"],
        status: "U",
        item: ""
    },
    {
        hex: "d5",
        name: "Uldrak's grave",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 109</li> </ul> <p>Uldrak was the son of Gond. The interior of his helmet has been transformed into a tinker’s shop, serving as a pit stop for infernal machines that need cheap repairs. Among his supplies are a set of <strong>astral pistons</strong>.</p> <p>There’s a 1 in 6 chance that 1d4 riders from a warlord’s band are here getting their machines checked out. If so, there is an additional 1 in 6 chance that the warlord themselves are present.</p>",
        terrain: ["fire"],
        status: "K",
        item: "astral pistons"
    },
    {
        hex: "d6",
        name: "Elder tempest",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/293787/Dance-of-the-Deathless-Frost?affiliate_id=81207\"><em>Dance of Deathless Frost</em></a></li> </ul> <p>A mighty, elemental storm rages around this mountain peak to a distance of 1d6+4 miles. At the eye of the storm is the Tree of Life, beneath which lies <strong>Kostchtchie’s phylactery</strong>, as described in the module.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "e1",
        name: "Weatherstone keep",
        text: "<ul> <li><em><a href=\"https://www.dmsguild.com/product/295212/DDAL0909-Ruined-Prospects?affiliate_id=81207\">Ruined Prospects</a></em></li> </ul> <p>This outpost is occupied by abishai loyal to Tiamat, supported by a small force of legion devils (merregon).</p> <p><strong>The Lost Hellrider</strong>: Beneath Weatherstone Keep is an ancient, heretical Temple of Torm. After the defeat of the Zarielites during the Charge of the Hellriders, one of the fleeing Hellriders reached this Keep and, following the divine guidance of Torm, sought refuge in the temple. The Hellrider was placed into a state of suspended animation and remains there still, protected by Torm’s holy ground.</p> <p>If the PCs awake the Hellrider, use <em><a href=\"https://thealexandrian.net/wordpress/46059/roleplaying-games/remixing-avernus-part-6d-l-questioning-the-hellriders\">Part 6D-L Questioning the Hellriders</a></em> to determine what he knows.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "e2",
        name: "Tentacular mine",
        text: "<p>A huge, open pit surrounded by fields of reddish slag is ringed with colossal, writhing tentacles.</p> <p>The pit is a mine for green Baatorian steel. The tentacles are the groping extremities of a carcinomatous baatorian which is buried here. Its squirming extremities pose a constant danger to the miners.</p> <p><strong>Baatorian Steel</strong>: Baatorian steel can only be mined on Avernus, and its supply is often limited due to the logistical difficulties created by the Blood War. A piercing or slashing weapon crafted from Baatorian steel deals +1 damage and has a +1 bonus to attack rolls. (This is not a magical enhancement and does not stack with magical bonuses.)</p> <p>Green baatorian steel is even rarer. It has the same properties, but can also be more easily crafted into <em>swords of wounding</em> (and so most green Baatorian steel blades are such).</p> <p><strong>Baatorian Dream Machine</strong>: In the depths of the mine there is a technomantic device, built on somewhat similar principles to Mad Maggie’s dream machine, which keeps the cancroid baatorian dormant in a slumbering dream. Its effective range is limited, however, which is why the tentacles are most active (and dangerous) at the surface.</p> <p>The machine includes a <strong>Nirvanan cogbox</strong>. If the cogbox is removed (or the machine otherwise disabled), however, the baatorian will awake and rip the mine apart.</p>",
        terrain: ["waste"],
        status: "U",
        item: "Nirvanan Cogbox"
    },
    {
        hex: "e3",
        name: "Hellwasp nest",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 95</li> </ul> <p>No changes from the published text.</p>",
        terrain: ["hills"],
        status: "U",
        item: ""
    },
    {
        hex: "e4",
        name: "Tower of Urm",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 97</li> </ul> <p>There is a 1 in 4 chance that the tower is present (check per day if the PCs camp out at the site).</p> <p>If the tower is not present, the iron foundations should be considered a <strong>Hidden</strong> location unless the PCs are specifically traveling along the edge of the lake or on the island itself. Spotting the foundations from the shores of the lake requires a DC 14 Wisdom (Perception) check.</p> <p>Mordenkainen can provide a <strong>Heartstone</strong> or <strong>Phlegethosian sand</strong>. His asking price for either is 30 soul coins, unless the PCs have done him some form of great service (like saving his life from an assassin).</p> <p><strong>Assassination/Kidnapping</strong>: Why not both? The assembled devils include both those secretly plotting to assassinate Mordenkainen and those who will kidnap the PCs if that seems advantageous.</p> <p><strong>Tower Maps</strong>: Ideally, we would also like to prep maps of Mordenkainen’s tower. <a href=\"https://www.dmsguild.com/product/293787/Dance-of-the-Deathless-Frost?affiliate_id=81207\"><em>Dance of Deathless Frost</em></a> includes some notes for potential features and security measures.</p>",
        terrain: ["waste"],
        status: "U",
        item: "heartstone, Phlegethosian sand"
    },
    {
        hex: "e5",
        name: "Sibriex",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 116</li> </ul> <p>The sibriex knows:</p> <ul> <li>The location of the nine adamantine rods (as described in the adventure).</li> <li>Leads on a location for each of the four dream machine components (roll on the Quest of the Dream Machine rumor table in <a href=\"https://thealexandrian.net/wordpress/45073/roleplaying-games/remixing-avernus-part-6c-quest-of-the-dream-machine\">Part 6C</a>).</li> <li>A brief <em>précis</em> of the Averniad and Zariel’s Long March (see <a href=\"https://thealexandrian.net/wordpress/45372/roleplaying-games/remixing-avernus-part-6d-a-lulus-memories-on-mount-celestia\">Part 6D</a>).</li> </ul>",
        terrain: ["fire"],
        status: "U",
        item: ""
    },
    {
        hex: "e6",
        name: "Discordant spire",
        text: "<ul> <li><em><a href=\"https://www.dmsguild.com/product/304029/DDAL0012-Infernal-Encounters?affiliate_id=81207\">Infernal Encounters</a></em>, p. 34</li> </ul> <p>A strange obelisk 30 foot square that rises 80 feet into the air. It is formed from some native Avernian stone; a scintillating shade of red that seems alien to mortal eyes. Each side of the obelisk bares dozens of mouths singing a discordant tune.</p> <p><strong>Phalaeraphe</strong>: Within the obelisk (which is actually a tower), lives a devil with a beautiful singing voice. She operates a small, private lounge where powerful and influential devils come to hear her sing, drink from a rich selection of blood-liquors, and socialize. If given the proper incentive, she can quietly arrange private meetings with influential devils. (Not warlords, no such fiendish filth would be welcome here. Zariel? Too high. But people who know Zariel? Bel? Signifier Hraxioch, commander of the 9<sup>th</sup> Cohort (Hex J6)? Quite possibly.)</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "f1",
        name: "Drogoloth mines",
        text: "<ul> <li><a href=\"https://www.drivethrurpg.com/product/348937/Vysianters-Guide-to-the-Red-Wastes-of-Avernus?affiliate_id=81207\"><em>Vysianter’s Guide to the Red Wastes</em></a></li> </ul> <p>These mines of adamantine and orichalcum are worked by still-living mortals who have been captured by devil slave-gangs or who have been bound to service through ill-conceived bargains. Caravans drag the raw ore to the Purple City (Hex F2), from whence it is shipped downriver to Bel’s Forge (Hex H2) to be made into weapons for the front lines of the Blood War.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "f2",
        name: "The purple city",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/347124/Tyrants-of-the-Purple-City?affiliate_id=81207\"><em>Tyrant of the Purple City</em></a></li> <li>On River</li> </ul> <p><strong>Baron Barur Tolmanen</strong>: The Lord of the Purple City served with Zariel in the Rift War. In addition to telling the tales of the Rift War often during his disturbing, gluttonous feasts, various memorials around the city glorify the events of the Rift War (and Tolmanen’s role in it).</p> <p><strong>The March</strong>: Lux Arakxis, the leader of this criminal organization, has been obsessed with finding the Sword of Zariel, mounting numerous expeditions to little effect over the years. He knows the Sword was lost after the Charge of the Hellriders, and he will wax rhapsodic about the tale of their ride into Hell (recounting the identities of the Three Generals and events following the kidnapping of Yael, who he’s certain took the Sword from the final battle… although his personal theory is that she stole it and betrayed Zariel.)</p> <p>The March also uses <strong>heartstones</strong> for planning their heists.</p> <p><strong>Archmagi of Thraxai</strong>: Agamemnova Hex, the leader of the Archmagi of Thraxai, once met Lulu while she was being imprisoned in the Wandering Emporium.</p>",
        terrain: ["waste"],
        status: "U",
        item: "heartstone"
    },
    {
        hex: "f3",
        name: "Vale of demons",
        text: "<ul> <li><em><a href=\"https://www.dmsguild.com/product/304029/DDAL0012-Infernal-Encounters?affiliate_id=81207\">Infernal Encounters</a></em>, p. 5</li> </ul> <p>A valley filled with hundreds of demon heads placed on tall pikes. Ten of the demon heads have been transformed into <strong>vargouilles</strong> (<em><a href=\"https://www.amazon.com/exec/obidos/ASIN/0786966017/digitalcomi0a-20\">Volo’s Guide to Monsters</a></em>, p. 195).</p>",
        terrain: ["hills"],
        status: "U",
        item: ""
    },
    {
        hex: "f4",
        name: "Bloody cist",
        text: "<ul> <li>Visible</li> <li><em>Descent Into Avernus</em>, p. 134</li> </ul> <p>There are several important changes to this location:</p> <ul> <li>The citadel cannot be seen; it is completely subsumed by the Cyst.</li> <li>No one knows that this is where the Sword of Zariel lies hidden. As noted previously, this secret is held only in Lulu’s lost memories.</li> <li>Therefore, there are no devils or demons here excavating the site. (You could have them here just harvesting the bloody pulp of the cyst for one reason or another, but you’d want to make significant changes to the key.)</li> <li>Yael’s ghost does not give the PCs’ visions of Idyllglen. (They already experienced those in the Dream Machine.) See <a href=\"https://thealexandrian.net/?p=46059\">Part 6D-L</a> for what happens when the PCs encounter her.</li> </ul> <blockquote> <p><em>Design Note: As mentioned previously, the goal is for the PCs to recognize the Bloody Cyst so that the moment that it’s revealed as the hiding place of the Sword of Zariel it’s a cool revelation and not a, “Wait? Where?” moment. (It’s okay if they need to follow up on their vision; lots of people in this area of Avernus know the location of the Bloody Cyst and can direct them – it’s just not ideal.)</em></p> <p><em>It’s positioned in Hex F4 because (a) characters crossing the bridge in Hex G5a will likely run into it and (b) this also makes it a convenient landmark for NPCs to use while giving directions.</em></p> <p><em>One of my <a href=\"https://patreon.com/justinalexander\">patrons</a> also recommended that Mahadi’s Emporium could be camped out at the base of the Bloody Cyst at some point.</em></p> </blockquote>",
        terrain: ["waste"],
        status: "U",
        item: ""
    },
    {
        hex: "f5",
        name: "That's a big spear",
        text: "<ul> <li><em><a href=\"https://www.dmsguild.com/product/304029/DDAL0012-Infernal-Encounters?affiliate_id=81207\">Infernal Encounters</a></em>, p. 10</li> </ul> <p>An immense spear, nearly 100 feet in length, is impaled into the ground; the skeletal hand of whatever colossal creature once wielded it still clutches the cracked leather wrapped around its shaft.</p>",
        terrain: ["fire"],
        status: "U",
        item: ""
    },
    {
        hex: "f6",
        name: "Ruins of a warlord's lair",
        text: "<ul> <li><a href=\"https://dysonlogos.blog/2019/07/11/greymail/\">Map by Dyson Logos</a></li> </ul> <p>This stronghold carved into the side of the mountain was once the lair of the warlord Jevvka of Osternia. Her gang crossed the Powers That Be in Avernus and a cohort of the Blood Legions sacked the compound, leaving it in ruins. Jevvka herself was crucified to the back wall. Her corpse hangs there still, along with a warning painted in her own blood: WITNESS THE WRATH OF BEL. LET IT STAND AS WARNING TO THOSE WHO DOUBT HIS POWER.</p> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2019/07/11/greymail/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210624a.png\" width=\"500\" height=\"500\"></a> </p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "g1",
        name: "Adjunt court of hell",
        text: "<p>A tall, perfectly square tower filled with a Kafka-esque bureaucracy. Although lower staff members are devils of various sorts, the judges and upper management are Rilmani – perfect embodiments of neutrality who oversee and resolve disputes over infernal contracts.</p> <p>These courts operate under the authority of Primus, as established in the Trial of Asmodeus. (The history of the Trial, along with “fun” facts like Zariel’s small part in that ancient history, can likely be established if anyone asks questions.)</p> <p>Research at the court can also provide useful information about how infernal contracts (like the contract Zariel uses to hold Elturel in Avernus) can be broken. PCs might think to litigate the Elturian contract, but that probably won’t pan out unless the PCs go to truly extraordinary efforts (which will almost certainly earn them the eternal enmity of the forces of neutrality if it is ever discovered): the contract is, legally speaking, impregnable.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "g2",
        name: "Dretch crack",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/289061/Encounters-in-Avernus?affiliate_id=81207\"><em>Encounters in Avernus</em></a>, p. 8</li> </ul> <p>One of the narrow cracks in the ground here leads to a large cavern filled with dretches.</p>",
        terrain: ["cracks"],
        status: "U",
        item: ""
    },
    {
        hex: "g2",
        name: "Stygian ramps",
        text: "<ul> <li>On River</li> </ul> <p>There are a pair of ramps facing each other across the Styx. Those riding&nbsp; infernal warmachines can leap the river here. (Although if you miss, of course, you’ll end up splashing down in the waters of the Styx, most likely ruining both your machine and your mind.)</p>",
        terrain: ["cracks"],
        status: "U",
        item: ""
    },
    {
        hex: "g3",
        name: "Haruman's hill",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 92</li> <li>On River</li> </ul> <p>See <a href=\"https://thealexandrian.net/?p=46059\">Part 6D-L: Questioning the Hellriders</a>.</p>",
        terrain: ["cracks"],
        status: "U",
        item: ""
    },
    {
        hex: "g4",
        name: "Pool of ichor",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/289061/Encounters-in-Avernus?affiliate_id=81207\"><em>Encounters in Avernus</em></a>, p. 10</li> </ul> <p>“The ongoing Blood War has left substantial pools of demon ichor all over Avernus.”</p>",
        terrain: ["hills"],
        status: "U",
        item: ""
    },
    {
        hex: "g5",
        name: "Zariel's bridge",
        text: "<p>A bridge spans the Styx here, guarded on each end by a Styx Watchtower. The original bridge which stood here was destroyed during the Rift War and the new bridge was dedicated to Zariel’s glorious victory and ascension to Archduchess. Bas reliefs along the bridge depict various incidents from Zariel’s life, with accompany infernal inscriptions:</p> <ul> <li><strong>Averniad</strong>: Zariel is depicted (anachronistically in her fiendish form) in the midst of a lush, verdant paradise. (Inscription: “She served in the armies of the Lord of the Nine in the younger days, when Avernus had not yet become the Ninth.”)</li> <li><strong>Zariel &amp; Lulu</strong>: Zariel (anachronistically in her fiendish form) is depicted with Lulu, Yael, Haruman, and five devils. Their names are listed in Infernal cartouches (the otherwise unknwon devil’s names being given as Zilannen, Tozromon, Brullmerath, Xilka, and Venthroxoth). (Inscription: “In memory of her comrades lost over the long eons of struggle.”)</li> <li><strong>Zariel’s Fall</strong>: Zariel is depicted kneeling before Asmodeus, her wings aflame as her “impurities” are burnt away. (Inscription: “At the feet of the Archfiend her heart was opened to the truth, and she ascended to the ranks of the esteemed.”)</li> <li><strong>Zariel’s Imprisonment</strong>: Zariel is depicted in chains. Above her are the five heads of Tiamat. (Inscription: “At the false word of the coward Bel, she was sealed in the prisons of the Progenitor.” <em>Note</em>: <em>One of Tiamat’s titles is the Progenitor of Hell</em>.)</li> <li><strong>Second Avernian March</strong>: Zariel is on the front lines of a titanic battle between devils and strange creatures which seem neither demon nor devil. A DC 16 Intelligence (Arcana) check recognizes the creatures as baatorians. (Inscription: “In glory did she triumph where false Bel failed, in the name of the Lord of Nessus.”)</li> <li><strong>Zariel Becomes Archduchess</strong>: Zariel is crowned by Asmodeus. (“All hail the Archduchess of Avernus, may she rule eternal at the left hand of the Archfiend.”)</li> </ul>",
        terrain: ["waste"],
        status: "U",
        item: ""
    },
    {
        hex: "g5",
        name: "Plagueshield point",
        text: "<p>A bridge spans the Styx here, guarded on each end by a Styx Watchtower. The original bridge which stood here was destroyed during the Rift War and the new bridge was dedicated to Zariel’s glorious victory and ascension to Archduchess. Bas reliefs along the bridge depict various incidents from Zariel’s life, with accompany infernal inscriptions:</p> <ul> <li><strong>Averniad</strong>: Zariel is depicted (anachronistically in her fiendish form) in the midst of a lush, verdant paradise. (Inscription: “She served in the armies of the Lord of the Nine in the younger days, when Avernus had not yet become the Ninth.”)</li> <li><strong>Zariel &amp; Lulu</strong>: Zariel (anachronistically in her fiendish form) is depicted with Lulu, Yael, Haruman, and five devils. Their names are listed in Infernal cartouches (the otherwise unknwon devil’s names being given as Zilannen, Tozromon, Brullmerath, Xilka, and Venthroxoth). (Inscription: “In memory of her comrades lost over the long eons of struggle.”)</li> <li><strong>Zariel’s Fall</strong>: Zariel is depicted kneeling before Asmodeus, her wings aflame as her “impurities” are burnt away. (Inscription: “At the feet of the Archfiend her heart was opened to the truth, and she ascended to the ranks of the esteemed.”)</li> <li><strong>Zariel’s Imprisonment</strong>: Zariel is depicted in chains. Above her are the five heads of Tiamat. (Inscription: “At the false word of the coward Bel, she was sealed in the prisons of the Progenitor.” <em>Note</em>: <em>One of Tiamat’s titles is the Progenitor of Hell</em>.)</li> <li><strong>Second Avernian March</strong>: Zariel is on the front lines of a titanic battle between devils and strange creatures which seem neither demon nor devil. A DC 16 Intelligence (Arcana) check recognizes the creatures as baatorians. (Inscription: “In glory did she triumph where false Bel failed, in the name of the Lord of Nessus.”)</li> <li><strong>Zariel Becomes Archduchess</strong>: Zariel is crowned by Asmodeus. (“All hail the Archduchess of Avernus, may she rule eternal at the left hand of the Archfiend.”)</li> </ul><ul> <li><em><a href=\"https://www.dmsguild.com/product/291677/DDAL0907-The-Diabolical-Dive?affiliate_id=81207\">The Diabolical Dive</a></em></li> <li>On the Styx (under the river)</li> </ul> <p>A drow citadel which was built around a magical geode (which now serves as a demonic prison) and was sucked into Hell, where it fell to the bottom of the Styx.</p> <p>Commander Ljubomir, who now oversees the tower, is enjoying considerable prestige from the bargain he wrought which resulted in the tower’s capture. As it’s a recent acquisition, its function as a secure holding facility for demons near the front lines of the Blood War is only just being spun up.</p> <p><strong>Geode Prison</strong>: The large geode at the heart of Plagueshield Point contains multitudes. It’s not exactly larger on the inside than the outside. Rather, every version of its “inside” is out of phase with the others and can be accessed only one at a time. (However, gazing through different facets of the geode reveals the others.)</p> <p><strong>Demonologist’s Tower</strong>: When Respen (see Shadowswimmer Tower, Hex I6) worked here, he used a <strong>heartstone</strong> in his research and it can still be found here.</p>",
        terrain: ["waste"],
        status: "U",
        item: "heartstone"
    },
    {
        hex: "g6",
        name: "Wrecked flying fortress",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 118</li> </ul> <p>The flying fortresses are built to a standard plan and have been for aeons. By thoroughly exploring the wreck, the PCs can learn the layout of the fortresses (which may assist them if they wish to mount a raid or heist on Zariel’s fortress).</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "h1",
        name: "The dump",
        text: "<ul> <li><em><a href=\"https://www.dmsguild.com/product/290898/DDAL0906-Infernal-Insurgency?affiliate_id=81207\">Infernal Insurgency</a></em></li> </ul> <p>The Dump was once the Void Chateau, a strange house in Waterdeep owned by a mage known as Chalice Void. The chateau eventually vanished from Waterdeep and reappeared in various towns along the Sword Coast, before settling once more on a hill outside of the village of Amphail. One morning there was a terrible howling sound and the chateau vanished from the Material Plane forever.</p> <p>It had somehow become embedded in the banks of the River Styx. It now serves as a munitions dump, supplying materiel to the frontlines of the Blood War.</p> <p>The Dump contains an <strong>unkeyed keystone</strong> to the Arches of Ulloch (hex A4), which can be rekeyed with only 10 soul coins of raw materials.</p>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "h2",
        name: "Bel's forge",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 113</li> </ul> <p>Bel’s Forge is too small. You should either:</p> <ul> <li>Revise the lore so that this is just one of many such forward-positioned forges that serve the front lines of the Blood War. (Bel could perhaps have been specifically banished to this demeaning frontier posting by Zariel, information which could be seeded into the rumor tables.)</li> <li>Significantly revise the Forge so that it is a much, much larger complex with tunnels and workshops riddling the entire volcano.</li> </ul> <p>Bel’s Forge uses <strong>Phlegethosian sand</strong> to quench certain types of infernal blades.</p>",
        terrain: ["volcano"],
        status: "U",
        item: "Phlegethosian sand"
    },
    {
        hex: "h3",
        name: "Dock of fallen cities / Elturel",
        text: "<p>See <a href=\"https://thealexandrian.net/?p=44687\">Part 5</a> and <a href=\"https://thealexandrian.net/?p=45005\">Part 6B</a>.</p>",
        terrain: ["waste"],
        status: "E",
        item: ""
    },
    {
        hex: "h4",
        name: "Stygian dock",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 123</li> <li>On River</li> </ul> <p>Bazelsteen has a set of <strong>astral pistons</strong> that he keeps for repairing antique infernal machines, which he’ll exchange for assistance with Test Run 221 (DIA, p. 124).</p> <p>50% chance that a flying fortress is docked. 1 in 3 chance that it’s Zariel’s.</p> <blockquote> <p><em>Design Note: Developing the commanders of the other two flying fortresses currently making regular pit stops at this dock might be something worth pursuing.</em></p> </blockquote>",
        terrain: ["waste"],
        status: "U",
        item: "astral pistons"
    },
    {
        hex: "h5",
        name: "Elemental galleon",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/294570/Abyssal-Incursion?affiliate_id=81207\"><em>Abyssal Incursion</em></a>, p. 4</li> <li>On River</li> </ul> <p>The <em>Mirror’s Edge</em>, an elemental galleon from the world of Eberron, has crashed on the shores of the Styx.</p>",
        terrain: ["waste"],
        status: "K",
        item: ""
    },
    {
        hex: "h6",
        name: "Modron outpost",
        text: "<ul> <li>Visible 2 (volcano) / Hidden (outpost, see below)</li> </ul> <p>Clinging to the inside wall of a volcano’s caldera is a modron outpost. A huge geothermal spike thrusts down into the volcano below, powering a clockwork menagerie of technomantic marvels within the outpost. Upon occasion, the outpost extends an astral antenna above the rim of the volcano to take readings and also broadcast transplanar reports. The antenna can also provide access to the outpost.</p> <p>(When this antenna is raised, it can be visible to a great distance. The outpost should otherwise be considered a Hidden location.)</p> <p>The modrons use this outpost to monitor the Blood War. Its presence is known to the local Blood Legions and tolerated: partly because they’ve learned that if they destroy these monitoring outposts, the modrons just build more; partly because the modrons have also been known to trade valuable technomantic items upon occasion.</p> <p>The modrons have a supply of <strong>Nivanan cogboxes</strong>.</p>",
        terrain: ["volcano"],
        status: "U",
        item: ""
    },
    {
        hex: "i1",
        name: "Mirror of Mephistar",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 99</li> </ul> <p>Rigorath can offer the PCs knowledge about:</p> <ul> <li>Leads on a location for the four dream machine components (roll on the Quest of the Dream Machine rumor table in <a href=\"https://thealexandrian.net/wordpress/45073/roleplaying-games/remixing-avernus-part-6c-quest-of-the-dream-machine\">Part 6C</a>).</li> <li>Details of Zariel’s history, particularly her fall after the Battle of Avernus and her role in the Reckoning.</li> <li>Whatever other valuable knowledge seems relevant and/or requested by the PCs. (Perhaps pass-keys to Zariel’s flying fortress?)</li> </ul>",
        terrain: ["mountains"],
        status: "U",
        item: ""
    },
    {
        hex: "i2",
        name: "Warlord lair: Feonor's lair",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 91</li> <li><a href=\"https://dysonlogos.blog/2020/09/10/pentagon-cove/\">Map by Dyson Logos</a></li> <li>On the Styx</li> </ul> <p>Feonar has a supply of <strong>Phlegethosian sand</strong> which is useful for her necromantic work.</p> <p>Feonor is in a relationship with Carol D’Vown (Hex D2). She previously was in a relationship with Mahadi, but fell in love with D’Vown when she met her at the Wandering Emporium. There is a 1 in 4 chance that D’vown and her gang of infernal constructs are visiting Feonor here.</p> <p><strong>The Amphibious Warlord</strong>: Feonor has a number of amphibious infernal machines, including some which can operate on both water and land. Her lair is built around a cavern located along the Styx.</p> <p><strong>Ossuary Arsenal</strong>: Lady Bladeharrow is an undead devil forgemaster created by Feonor herself. She is described in <em>Forges of Avernus</em>, p. 4.</p> <blockquote> <p><em>Design Note: As described in Forges of Avernus, Lady Bladeharrow has a “mobile forge” called the Ossuary. We are removing the mobile concept and ensconcing her in Feonor’s Lair. Remember that soul coins can be used to create undead, so Feonor is likely to have a substantial cache of them.</em></p> </blockquote> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2020/09/10/pentagon-cove/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210628a.png\" width=\"500\" height=\"465\"></a> </p>",
        terrain: ["waste"],
        status: "U",
        item: "Phlegethosian sand"
    },
    {
        hex: "i3",
        name: "Circle of flames",
        text: "<p>This site resembles a druidic stone circle (like Stonehenge), but the sarsens are formed from plasmic masses of flame. Half sunken into the acidic muck (much of it polluted run-off from Bel’s Forge, Hex H2), several of the flame-sarsens gutter and flicker like torches on the verge of being blown out.</p>",
        terrain: ["bog"],
        status: "U",
        item: ""
    },
    {
        hex: "i4",
        name: "Fort knucklebones",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 80</li> </ul> <p>See <a href=\"https://thealexandrian.net/wordpress/45073/roleplaying-games/remixing-avernus-part-6c-quest-of-the-dream-machine\">Part 6C</a>.</p>",
        terrain: ["waste"],
        status: "E",
        item: ""
    },
    {
        hex: "i5",
        name: "Spawning trees",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 96</li> </ul> <p>The devilish work crew knows details of the surrounding area (major landmarks, keyed locations, etc.) to a distance of two hexes.</p>",
        terrain: ["volcano"],
        status: "U",
        item: ""
    },
    {
        hex: "i6",
        name: "Shadowswimmer tower",
        text: "<ul> <li><em><a href=\"https://www.dmsguild.com/product/291677/DDAL0907-The-Diabolical-Dive?affiliate_id=81207\">The Diabolical Dive</a></em></li> <li>On River</li> </ul> <p>Respen Shadowswimmer escaped Plagueshield Point (Hex G5b) shortly after it was sucked into Hell and eventually found his way to this abandoned tower, which he has made his own. An arcane researcher, he is fascinated by the properties of the Styx and has been researching its long-term effects on various creatures. Most recently this has resulted in the creation Stygian behemoths.</p> <p>Respen Shadowswimmer used a <strong>heartstone</strong> during his research at Plagueshield Point, but wasn’t able to bring it along. He’d dearly prize a replacement, as he thinks it would prove invaluable in continuing his research here.</p> <hr>",
        terrain: ["waste"],
        status: "U",
        item: "heartstone"
    },
    {
        hex: "j1",
        name: "Siegeworks of Dis",
        text: "<p>A tower of reddish, Avernian stone thrusts into the sky near a gaping black maw tunneled into the side of an obsidian peak.</p> <p><strong>Abandoned Tower</strong>: The tower was once barracks and armory for hundreds of Blood Legion troops, with half-finished construction suggesting it was destined to house thousands more. But the tower stands unfinished and empty today, its strategic purpose lost with the end of the Reckoning and the abandonment of the mineworks.</p> <p><strong>Mineworks</strong>: The tunnel is artificial, having been carved into the mountain. The work was begun during the Reckoning, when Zariel was laying siege to Dis. Stymied by the defenses of Dis, Zariel had the idea to create a second passage between the first and second levels of Hell.</p> <p>At the bottom of the shaft is an infernal drill that, in that bygone era, might have been able to pierce the planar boundaries and undermine Dis. With the end of the war, the drill was abandoned and has long since decayed to uselessness. However, <strong>astral pistons</strong> were used in its construction and can be salvaged.</p> <p><strong>Hellwasp Nests</strong>: The tunnel struck a number of natural caves and other cavities. Hellwasps have established a hive in one of these.</p> <blockquote> <p><em>Note: You could fill this dungeon with any number of cross-chambers filled with various denizens or Avernian wildlife (or even stranger stuff). Particularly relevant would be anyone seeking to hide from Avernian authorities. (Perhaps there’s a force of inbred demons who got stuck behind the lines when the Blood War moved Abyss-ward. Or even Baatorians who escaped Zariel’s wrath at the end of the Rift War.) Some of these inhabitants could have blocked the main passage, forcing the PCs to either excavate or find a route around the blockage.</em></p> </blockquote>",
        terrain: ["mountains"],
        status: "U",
        item: "astral pistons"
    },
    {
        hex: "j2",
        name: "Kostchtchie's maw",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 104</li> </ul> <p>Kostchtchie is more than willing to team up against Zariel if freed. What form that assistance takes will depend a lot on the plan the PCs propose (don’t feel bound by the adventure’s script here).</p> <p>As described in <a href=\"https://www.dmsguild.com/product/293787/Dance-of-the-Deathless-Frost?affiliate_id=81207\"><em>Dance of Deathless Frost</em></a>, the demon cannot be permanently killed unless <strong>Kostchtchie’s phylactery</strong> is destroyed. This is why Zariel has imprisoned Kostchtchie instead of killing him. PCs who obtain the phylactery (see the Witch-Queen’s Abode, Hex B3) would have something of value to Zariel… and even greater value to Kostchtchie.</p>",
        terrain: ["hills"],
        status: "U",
        item: ""
    },
    {
        hex: "j3",
        name: "Warlord lair: Goreguts gang",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 87</li> <li><a href=\"https://dysonlogos.blog/2019/07/05/onyx/\">Map by Dyson Logos</a></li> </ul> <p>Raggadragga and his gang got into a war with Princeps Kovik and the 8<sup>th</sup> Remnant (Hex J5), which the Goreguts decisively lost. Raggadragga and a ragged band of survivors managed to escape, but their lair was ravaged by Kovik.</p> <p><strong>Inverted Crucifixes</strong>: Kovik took the dead and nailed them to inverted crucifixes in the former courtyard. Words blasted into the stone wall here read, “Damned be those who challenge Princeps Kovik of the 8<sup>th</sup>.” There are three dead wereboars and five dead wererats.</p> <p><strong>Ruined War Machines</strong>: Three burned out husks of what were once infernal war machines are just outside the walls.</p> <p>Raggadragga has several potential scenario hooks related to these recent events:</p> <ul> <li>He’s actively seeking anyone with resources or skills who might help him rebuild the lair.</li> <li>He’s also looking for alternative locations for a lair (including the possibility of seizing one).</li> <li>He also would like to return to the lair long enough to bury his dead.</li> <li>He’d like to stage a raid on the 8<sup>th</sup> Remnant’s lair (Hex J5) to steal back the infernal war machines they took from him.</li> </ul> <p>For more details on the Avernian warlords, see <a href=\"https://thealexandrian.net/wordpress/46667/roleplaying-games/remixing-avernus-part-7f-warlords-of-avernus\">Part 7E</a> of the Remix.</p> <blockquote> <p><em>Design Note: As you’re working up the key for this location, think about dropping clues pointing to both its original owners (the Goreguts) and its destroyer (Princeps Kovik).</em></p> </blockquote> <p> <a href=\"https://dysonlogos.blog/2019/07/05/onyx/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210628b.png\" width=\"501\" height=\"494\"></a> </p>",
        terrain: ["bog"],
        status: "U",
        item: ""
    },
    {
        hex: "j4",
        name: "Temple of the broken prince",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/314130/Temple-of-the-Broken-Prince?affiliate_id=81207\"><em>Temple of the Broken Prince</em></a></li> </ul> <p>This dungeon is located beneath a razed demonic fortress that was wiped out when Zariel’s forces drove back the front lines of the Blood War from the banks of the Styx.</p>",
        terrain: ["brambles"],
        status: "U",
        item: ""
    },
    {
        hex: "j5",
        name: "Warlord lair: The Eighth remnant",
        text: "<ul> <li><em>Descent Into Avernus</em>, p. 91</li> <li><a href=\"https://dysonlogos.blog/2020/05/11/the-old-fort/\">Map by Dyson Logos</a></li> </ul> <p>Princeps Kovik and the Eighth Remnant are ensconced within the bone brambles. Signifier Hraxioch of the 9<sup>th</sup> Cohort (Hex J6) has been charged with hunting down these rebels and there is a constant guerilla warfare of sorts between them within the twisted eaves of the brambles.</p> <p><strong>Fetterworks</strong>: The Eighth Remnant has a forge for weapons and infernal machines maintained by an enslaved centaur named Hobblehoof. See <a href=\"https://www.dmsguild.com/product/294349/Forges-of-Avernus?affiliate_id=81207\"><em>Forges of Avernus</em></a>, p. 3.</p> <p>For more details on the Avernian warlords, see <a href=\"https://thealexandrian.net/wordpress/46667/roleplaying-games/remixing-avernus-part-7f-warlords-of-avernus\">Part 7E</a> of the Remix.</p> <p style=\"text-align: center;\"> <a href=\"https://dysonlogos.blog/2020/05/11/the-old-fort/\"><img loading=\"lazy\" class=\"aligncenter \" src=\"https://thealexandrian.net/images/20210628c.png\" width=\"500\" height=\"409\"></a> </p>",
        terrain: ["brambles"],
        status: "U",
        item: ""
    },
    {
        hex: "j6",
        name: "Camp of the 9th cohort",
        text: "<ul> <li><a href=\"https://www.dmsguild.com/product/289061/Encounters-in-Avernus?affiliate_id=81207\"><em>Encounters in Avernus</em></a>, p. 5</li> <li>Visible</li> </ul> <p>Camped on a low mesa overlooking the area is the 9<sup>th</sup> Cohort of the 497<sup>th</sup> Infantry Legion (9/497) commanded by the chain devil Signifier Hraxioch.</p> <p>The 9<sup>th</sup> is charged with guarding the narrow pass between the mountains and the Styx here. From atop the mesa, they can see the entirety of this hex. Characters passing through this hex are likely to be spotted and a patrol sent out to intercept them.</p>",
        terrain: ["hills"],
        status: "U",
        item: ""
    }
];

if (typeof module !== 'undefined')
    module.exports = locations