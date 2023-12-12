let encounters = [
  {
    id: 1,
    title: "Collapsed Building",
    text: `<div>
    <p>A quake rocks the city, and a building collapses in the distance. The characters hear cries for help emerging from the rubble.</p>
    <p>To keep the trapped victims from suffocating or being crushed, the characters must succeed on a total of six ability checks to rescue them before incurring three failures. The base DC for these checks is 10. Possible checks could include Strength (Athletics) checks to remove debris, Dexterity (Acrobatics) checks to squeeze into tight places, Intelligence (Investigation) checks to determine the best place to dig or support the structure, or Wisdom (Perception) checks to notice dangerous areas threatening to collapse further. You might also decide that magic or other abilities could result in automatic successes.</p>
    <p>During the rescue, the commotion might attract devils (see "Hateful Patrol" below) or other unwelcome attention.</p>
    <p>If the characters succeed in the rescue attempt, they pull out three lawful good shield dwarves from beneath the collapsed building: Strovin Ironfist, Kartra Boulderstern, and Velkora Ashenwell. Strovin and Kartra are laborers (use the commoner stat block), but Velkora is a mason and an acolyte of the dwarven god Moradin. Her healing powers would be a welcome resource at the High Hall. All three dwarves speak Common and Dwarvish, and have darkvision out to a range of 60 feet. They also have resistance to poison damage and advantage on saving throws against being poisoned.</p>
</div>
`,
  },
  {
    id: 2,
    title: "Cry for Help",
    text: `<div>
    <p>The characters hear a voice shouting for help. If they follow the voice, they find a male human under attack by two bulezau (see page 230 for their stat block) that slipped past the devils and climbed the infernal binding posts to Elturel.</p>
    <p>If the characters save the man, he introduces himself as Orin Ragron, a blacksmith who had a shop in Elturel. Orin is actually an incubus in disguise named Faltrax. The incubus is trying to gain information on the defenses of Elturel, which it then plans to sell to the highest fiendish bidder. If the characters discover Faltrax's true nature, the incubus flees.</p>
</div>
`,
  },
  {
    id: 3,
    title: "Ghastly Meal",
    text: `<div>
    <p>The characters catch a glimpse of four cloaked figures sneaking out of an alleyway and into a residence, as if trying not to be seen. If the characters enter the residence, they see four ghasts standing around a table eating the remains of a human family that perished here during the trip to Avernus. The ghasts reek of death and decay.</p>
    <p>When the ghasts are dealt with, a successful DC 10 Wisdom (Perception) check discerns a faint crying coming from a cupboard. Inside is a young girl called Shorah Hevrun. A noncombatant, she immediately attaches herself to the first character who is kind to her. Shorah insists on accompanying the characters until she feels safe. If they can get her to the High Hall, each character gains inspiration, and the survivors there can see to Shorah's care.</p>
</div>
`,
  },
  {
    id: 4,
    title: "Ghoul Pack",
    text: `<div>
    <p>Seven ghouls roam the streets of Elturel, looking for their next meal. Their leader, formerly an adventuring rogue, wears magical studded leather armor that increases its AC to 13 (see "Treasure" below). These former citizens of the city died when Elturel was drawn into Avernus. Their souls were corrupted by the terrible power of the plane, leaving them in these undead forms.</p>
    <p><strong>Treasure.</strong> The ghoul leader wears +1 studded leather armor, carries an explorer's pack, and sports a belt pouch holding a potion of invisibility.</p>
</div>
`,
  },
  {
    id: 5,
    title: "Hateful Patrol",
    text: `<div>
    <p>A merregon (see page 238 for its stat block) leads three spined devils through the streets, looking for mortal survivors or demons that have slipped past the devilish forces below the city. The spined devils grumble in Infernal, unhappy about being up here when they could be fighting demons in the battle below. The merregon takes their insolence in silence.</p>
    </div>`,
  },
  {
    id: 6,
    title: "Imp Sales Pitch",
    text: `<div>
        <p>As the characters pass an alleyway, they notice an imp talking with a halfling. The two are focused on each other, making it easy for characters to get close enough to overhear the conversation in Common. The halfling, a baker (commoner) named Pilster Pebblehuck, has been hiding with his family in the basement of their bakery. They are running out of food, so Pilster has braved the streets to search for provisions. The imp, Perchillux, is offering Pilster a month's worth of food for the low price of his soul. Pilster is preparing to sign the contract as the characters come upon the pair.</p>
        <p>The contract is written on parchment made of halfling skin. If any character interrupts the signing and asks to read the contract, the imp tells them this is none of their business. Pilster welcomes the interruption, however, since he is having second thoughts about the deal, and he hands the contract to the characters. A successful DC 15 Intelligence (Investigation) check penetrates the dense and convoluted text of the contract, which will give the imp the souls of Pilster's entire family if Pilster signs it.</p>
        <p>If the characters attack the imp, it turns invisible and attempts to escape as quickly as possible. If the characters save Pilster from selling his soul, he thanks the characters and begs them to get him and his family to safety. His wife, Merrywile, and their three children are nearby.</p>
        <p><strong>Treasure:</strong> In addition to the contract, the imp carries a soul coin (see page 225) from a previous interaction that it plans to give to its master.</p>
    </div>`,
  },
  {
    id: 7,
    title: "Narzugon Cavalier",
    text: `<div>
    <p>A narzugoo (see page 239 for its stat block) patrols the streets of Elturel on the back of a nightmare equipped with infernal tack (see page 224). The devil has orders to hunt down and destroy any demons that might have slipped past the battle on the ground below and gained access to the city.</p>
<p>When Lulu sees the creature, she tells the characters that it is very powerful and should not be confronted.</p>
    </div>`,
  },
  {
    id: 8,
    title: "Spouts of Hellfire",
    text: `<div>
    <p>The characters see a charred humanoid corpse in the middle of the street, clutching a silvered longsword in its hand. When any creature moves within 5 feet of the corpse, a gout of hellfire erupts from it. Any creature within 5 feet of the corpse must make a DC 12 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.</p>
<p><strong>Treasure:</strong> If the corpse is examined further, an intact vial is found in its charred belt pouch. The vial contains a potion of giant strength (frost).</p>
    </div>`,
  },
  {
    id: 9,
    title: "Vrock Philosophy",
    text: `<div>
    <p>A vrock fled the battle and flew up to the city to ponder its role in all things. As long as the characters leave it alone, it doesn't attack. If they approach, it speaks with them, using its telepathy to communicate with one character at a time if none of the characters speaks Abyssal. The vrock pontificates on the vagaries and possible meanings of existence.</p>
<p>If the characters treat it nicely, indulge it in its ponderings, and succeed on a DC 13 Charisma (Persuasion) check, they can get it to do them one small favor. If they attack it, the vrock repays their hostility in kind.</p>
<p>Favors from the vrock might include providing information about what's happening beneath the city, about what forces guard the bridges between the city's east and west sections, or about the demons' plan to use a portal to enter the city (see area Gl2 on page 69), although it doesn't know where that portal is.</p>
    </div>`,
  },
  {
    id: 10,
    title: "Zombie Horde",
    text: `<div>
    <p>As the characters pass a building, they hear a pounding coming from the front door. The door is stuck but not locked, requiring a successful DC 15 Strength check to force it open. If the characters do this, twelve zombies burst from the building as an avalanche of undead bodies, burying anyone standing near the door in the pile. This leaves those characters and the zombies prone at the start of combat.</p>
    <p>If the characters deal with the zombies and search the building, they discover that it was a school. Five casks, each holding three gallons of fresh water, are stored in the basement.</p>
    </div>`,
  },
  {
    id: 11,
    title: "A River Ran Through It",
    text: `
        <div>
            <p>Alta Tron, a chaotic neutral female human enchanter (see appendix A), approaches the characters, introducing herself as a mystical engineer and claiming to have developed a device that can allow a group safe passage across the rift separating the east and west sides of the city. If the characters agree to help Alta successfully test the device, she agrees to build the characters one for their own.</p>
            <p>Though extremely skilled, the engineer is a bit mad and suffers from bouts of delusions of grandeur. A successful DC 14 Wisdom (Insight) check notices something a bit off about her.</p>
            <p>The device is intended to create an invisible bridge across the rift that lasts for five minutes. Examination of the rune-covered metallic device reveals no useful information, as there is no way of surmising how it was built.</p>
            <h4>The Experiment</h4>
            <p>When activated, the device indeed creates a magical bridge that cannot be seen by any means other than with truesight. The bridge, unknowingly to the party, extends only 50 feet across. A character crossing the bridge must make a successful DC 12 Dexterity saving throw to notice. In addition, after five rounds, the bridge begins to collapse. A successful DC 13 Wisdom (Perception) check notices small wisps of smoke coming out of the machine, while a successful DC 13 Intelligence (Arcana) check discovers there are only moments left before the device fails. Characters on the bridge when the device begins to fail can rush back to solid ground with a successful DC 14 Strength (Athletics) or Dexterity (Acrobatics) check.</p>
            <p>Characters that fail and cannot fly, levitate, or teleport fall several hundred feet into the River Styx (see chapter 3 of Baldur’s Gate: Descent into Avernus).</p>
            <h4>Attracting the Guards</h4>
            <p>During the test, there’s a 1 in 10 chance the party is noticed by the guards stationed on Torm’s Bridges, attracting a patrol of 2d4 spined devils.</p>
            <h4>Treasure</h4>
            <p>If the characters attempted to help Alta in good faith, they’re rewarded with an uncommon magical item of the DM’s choice.</p>
        </div>
        `,
  },
  {
    id: 12,
    title: "Abandoned Trunk",
    text: `<div>
    <p>There is a small, dusty trunk sitting on the side of the street, made from gray wood with a tarnished bronze latch and no lock. Roll a d4 to determine the contents.</p>
    <ul>
        <li><strong>1.</strong> A set of antique silverware, worth 240 gp.</li>
        <li><strong>2.</strong> A complete set of the Encyclopedia Esoterica, worth 150 gp to the right buyer.</li>
        <li><strong>3.</strong> The trunk is a mimic with 90 hit points.</li>
        <li><strong>4.</strong> As the characters approach the trunk, a desperate-looking human gladiator with a tattooed face pushes past and says, “I saw it first!” Inside is the corpse of a small dog.</li>
    </ul>
</div>
`,
  },
  {
    id: 13,
    title: "Alchemist Shop",
    text: `<div>
    <p>The characters pass a building that emits a sweet smell. The building’s locked door can be opened with a successful DC 15 Dexterity check by a character proficient with thieves’ tools, or smashed down with a DC 20 Strength (Athletics) check.</p>
    <p>Once inside, the characters see the building was obviously an alchemist’s shop. No one is inside, and most of the chemicals and equipment were destroyed.</p>
    <h4>Treasure</h4>
    <p>There is a single intact cask brimming with alchemist’s fire. There is enough liquid in the cask to fill ten glass vials, which can be found with a quick search of shelves. Alternatively, the entire cask can be detonated, having the same effect as a fireball spell (spell save DC 15).</p>
</div>
`,
  },
  {
    id: 14,
    title: "Fiendish Trap",
    text: `<div>
    <p>The characters come across a human with a rope around his neck hanging from a tree. His hands grasp the rope at his throat, allowing him to breathe, but he is obviously losing his fight to survive.</p>
    <p>Two barghests (see appendix A) in goblin form hide and watch the struggling victim, hoping that his predicament draws out other survivors for the pair to kill, extort, or torment. They were planning to sneak into Elturel and eat some innocent souls at the fateful moment when the city came to Avernus.</p>
    <p>The human is Alihor (neutral good commoner), a tailor who survived the trip to the Nine Hells but could not find a safe place to hide. He is cowardly and traumatized by the experience.</p>
</div>
`,
  },
  {
    id: 15,
    title: "Forbidden Delights",
    text: `<div>
    <p>The party finds a torn piece of parchment on the road depicting an advertisement for a magician-run pastry shop called Forbidden Delights. If the party heads to the shop, they find it locked, but after one round, the proprietor opens the door and beckons them to come inside.</p>
    <p>Bulmor, the human proprietor, and his two sisters, Tevra and Maribe, claim to be hiding from devil patrols, but are actually three dybbuk (see appendix A) spies that killed the real owners and possessed their corpses. They attempt to lure the party far enough into the shop before locking the door and attacking.</p>
    <p>A character who spends 1 minute searching the shop and makes a successful DC 12 Intelligence (Investigation) check finds 1d4 intact magical pastries, each with the effects of a specific potion when they’re consumed. As they’re unmarked, their effects on are unknown. Upon consumption, roll a d6 to determine the pastry’s effects:</p>
    <table>
        <tr>
            <th>d6</th>
            <th>Effect</th>
        </tr>
        <tr>
            <td>1</td>
            <td>potion of greater healing</td>
        </tr>
        <tr>
            <td>2</td>
            <td>potion of diminution</td>
        </tr>
        <tr>
            <td>3</td>
            <td>potion of poison</td>
        </tr>
        <tr>
            <td>4</td>
            <td>elixir of health</td>
        </tr>
        <tr>
            <td>5</td>
            <td>potion of growth</td>
        </tr>
        <tr>
            <td>6</td>
            <td>philter of love</td>
        </tr>
    </table>
</div>
`,
  },
  {
    id: 16,
    title: "Hellrider Uprising",
    text: `<div>
    <p>A group of three Hellriders (knights) each mounted on a warhorse are losing a battle with six spined devils (alternatively, Hell Knights which are now fighting their former allies). If the devils notice the characters, four of them attack the characters while the others continue to battle the Hellriders.</p>
    <p>If the characters aid the Hellriders in defeating their foes, the knights thank the characters, giving them any advice about the city they have to offer before riding off in search of other fiends (see chapter 2 in Baldur’s Gate: Descent into Avernus).</p>
    <p>If the characters do not aid the Hellriders, the Hellriders lose the battle.</p>
</div>
`,
  },
  {
    id: 17,
    title: "Injured Knight",
    text: `<div>
    <p>As the characters turn a corner, they see a human knight fell a bearded devil, just as the knight is struck with the devil’s glaive. The knight falls even though she does not look very injured.</p>
    <p>The knight is Beryl Corth (lawful good female human knight), and she is suffering from an infernal wound from the devil’s glaive. The wound continues bleeding (1d10 damage per round) until it is treated with a successful DC 12 Wisdom (Medicine) check or Beryl receives magical healing. She has 40 hit points when the characters encounter her.</p>
    <p>If the characters can save her, she tells them that she has been wandering the city, looking for survivors and fighting monsters. She knows little else of the happenings elsewhere.</p>
</div>
`,
  },
  {
    id: 18,
    title: "Keeper of the Keys",
    text: `<div>
    <p>A chain devil wandering the streets of Elturel named Luchetto makes eye contact with a character and communicates the following message telepathically: “Keys for sale. You interested?”</p>
    <p>Luchetto wears a leather coat lined with keys of all shapes and sizes, made of various materials. Some are shiny and brand new; others are rusted and splattered with blood. Luchetto is a “collector” and hopes that someday he can find a key to unbind his chains. He appreciates the craft that goes into key-making and wants to make some easy money. Each key costs 1 sp. Luchetto is also willing to trade a key for a key. There is a 50 percent chance Luchetto has a key that could help the characters.</p>
</div>
`,
  },
  {
    id: 19,
    title: "Kid Warlock",
    text: `<div>
    <p>A child wearing dark robes inscribed with silver sigils approaches the characters. She claims to be a warlock and demands they help her. Roll a d4 to determine her identity.</p>
    <ul>
        <li><strong>1.</strong> She is an ordinary child (noncombatant), but the stress of the situation has led her poor mind to imagine she is a powerful warlock. She commands the characters to procure a large supply of boiled sweets for her, or face her patron’s wrath.</li>
        <li><strong>2.</strong> She is not a child but a halfling warlock of the archfey (see appendix A). While fighting a group of ogres near Daggerdale, a miscast misty step spell saw her accidentally transported to Elturel just before it shifted to Avernus. She has no money or supplies but offers to help the characters achieve their immediate goal if they promise to take her back home when they leave.</li>
        <li><strong>3.</strong> She is a warlock of the archfey (see appendix A) and a child prodigy with magic. Her father (along with 4d6 other commoners) is being held by four bearded devils in an old villa in the southern part of the city. The devils plan to sell them all into slavery. She pleads with the characters to help her free her father and offers magical favors in return.</li>
        <li><strong>4.</strong> She is a succubus disguised as a very young warlock. She claims to have been orphaned in the disaster and offers to help the party if they let her join them. She plans to secretly charm one of the characters and use that person to rob them all.</li>
    </ul>
</div>
`,
  },
  {
    id: 20,
    title: "Mad Cultists",
    text: `<div>
    <p>Most of the citizens of Elturel who survived the trip to Avernus either fled to the High Hall, locked themselves in their homes or businesses to hide, or perished at the hands of fiendish creatures in the days since their arrival. A few, however, went mad. Zariel sensed this madness and sent these people mad visions that drive their actions. These people have carved an image of a sword into their foreheads and roam the streets, slaughtering anything in their path – although Zariel has ordered her devilish servants to give them pass.</p>
    <p>The characters see five cult fanatics beating on doors, breaking windows, and otherwise wreaking havoc. If the fanatics see the characters, they immediately attack. If defeated and questioned, the cult fanatics ramble madly about fallen angels, flaming swords, and the entire city being plunged into the Styx to be “purified and made one with the darkness.”</p>
</div>
`,
  },
  {
    id: 21,
    title: "Nasty Weather",
    text: `<div>
    <p>The characters are walking down the street when acidic rain begins falling from the sky. A balding human man in a fur robe stands in the doorway of a little terrace and beckons them inside to escape the weather. He cryptically says that they might also learn something to their advantage. Roll a d4 to determine the man’s identity.</p>
    <ul>
        <li><strong>1.</strong> He is a vampire spawn and attacks the party as soon as he secures the front door. He has a stash of 150 gp.</li>
        <li><strong>2.</strong> He is an enchanter (see appendix A) who casts a 5th level charm person spell in order to charm the entire party. If the enchantment succeeds, he takes the party to a nearby group of four bearded devils, offering them as prisoners in return for his own freedom.</li>
        <li><strong>3.</strong> He is a priest who worships the same deity as one of the characters. The deity has instructed him to give the characters a special blessing, which grants each of them 2d8 temporary hit points.</li>
        <li><strong>4.</strong> He is a Harper spy and has a secret chamber beneath his floor. He won’t accompany the party but allows them to use his secret chamber to safely rest.</li>
    </ul>
</div>
`,
  },
  {
    id: 22,
    title: "Nycaloth Thugs",
    text: `<div>
    <p>Eldizon and Merrowdown, two nycaloths, see Elturel’s predicament as their golden opportunity. The pair deserted their brigade in the Blood War battle to travel to the city. Now that they’re here, they plan to use force, guile, or both to take the city. Then they can hand it over to the highest bidder and move to a plane with lots of sunshine and refreshing drinks.</p>
    <p>When the nycaloths spot the characters, the pair follow invisibly then wait for the characters to split up or rest. The yugoloths appear and threaten the smallest group of characters for money, magic items, or Lulu. The nycaloths are cowards. As soon as one is reduced to less than half its hit points, both flee.</p>
</div>
`,
  },
  {
    id: 23,
    title: "Obsessed Avenger",
    text: `<div>
    <p>When Elturel came to Avernus, retired adventurer Estellen Sohl was sitting down to eat with her family. A lawful good human mage of no small power, Estellen was able to protect her family for a short time, but recently devils overran her home and killed them.</p>
    <p>Mad with grief, Estellen now wanders the streets, killing any devils, demons, or other evil creatures she can find. She knows the tricks of devils well, so she assumes anyone she encounters to be a devil in disguise.</p>
    <p>When they meet her, the characters must converse with Estellen with great care. If they say or do anything that can be misconstrued as an evil or treacherous act, she acts them immediately. Estellen has only one spell slot of each level remaining.</p>
    <p>A successful DC 15 Charisma (Persuasion) check can reassure the mage, or a DC 15 Wisdom (Medicine) check can diagnose Estellen’s madness. Even if dealt with carefully, Estellen wants to die killing as many of the fiends as possible. Characters might be able, however, to point her in a direction that favors them.</p>
</div>
`,
  },
  {
    id: 24,
    title: "Priestess of Lathander",
    text: `<div>
    <p>The characters encounter Mona Kirando (lawful good female human priest) as she attempts to lead a family of four homeless commoners (named Brella, Fargus, Tomdon, and Yan) to safety.</p>
    <p>If the middle-aged priestess of Lathander notices the characters, Mona introduces herself. If the characters are kind to her, Mona offers her spells to heal them. If the characters threaten the NPCs or commit any evil acts in her presence, Mona takes no chances and attacks while yelling for her companions to flee.</p>
</div>
`,
  },
  {
    id: 25,
    title: "Rakshasa Hustler",
    text: `<div>
    <p>Jalrai is a rakshasa who sees Elturel’s plight as an opportunity to get rich. When the city falls, she plans to take her money to the Material Plane and use it to hire an army of minions.</p>
    <p>Jalrai searches Elturel in the form of a wood elf priestess of Tyr named Calissa Arven. She convinces survivors to trust her and give her access to their hiding places. When she finds their refuges, she devours them and takes their belongings, storing them in a portable hole.</p>
    <p>The characters encounter Jalrai as she leaves a residence where she just devoured a family of four. When the rakshasa notices the characters, she offers to travel with them and aid them on whatever quest they have. A successful DC 20 Wisdom (Insight) check reveals her as a fiend. Jalrai does not attack the characters if confronted; instead she flies or uses plane shift to escape.</p>
</div>
`,
  },
  {
    id: 26,
    title: "Skeleton Bonfire",
    text: `<div>
    <p>A pile of mortal bodies fuels an infernal bonfire in the middle of a street. The fire is clearly not natural. A detect magic spell reveals that an aura of necromancy magic radiates from the fire. When the characters get near it, 1d6 skeletons emerge from the fire and attack (they have no ranged weapons). Every round thereafter on initiative count 20, another 1d6 skeletons emerge and attack.</p>
    <p>This continues until a bless spell or similar magic is cast upon the corpses. A successful DC 15 Intelligence (Religion) check made as an action to say a suitable prayer of rest also stops the spawning of more skeletons as the magical fire is quelled.</p>
    <h4>Treasure</h4>
    <p>If the pyre is calmed, the characters can search the pile and find jewelry and coins worth a total of 400 gp.</p>
</div>
`,
  },
  {
    id: 27,
    title: "Necromantic Mist",
    text: `<p>The mist is formed by necromantic energy emitted from the corrupted Companion. A successful DC 10 Intelligence (Investigation) check made to study the mist reveals that it pulsates in sync with the crackling energy of the corrupted Companion.</p>
    <p>Any creature that enters the mist for the first time on a turn or starts its turn there takes 5 (1d10) necrotic damage. Climbing the sides of the pit without equipment requires a successful DC 10 Strength (Athletics) check.</p>
    <<p>One undead creature appears during the time the characters investigate the pit, and more can appear if they leave this area, then return again while Gideon is still at large. Use the Undead Creation table to determine what kind of undead creature is created.</p>
    <table>
      <thead>
        <tr>
          <th>d20 Undead</th>
          <th>d20 Undead</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-4 Skeleton</td>
          <td>13-15 Ghoul</td>
        </tr>
        <tr>
          <td>5-7 Zombie</td>
          <td>16-17 Ghast</td>
        </tr>
        <tr>
          <td>8-10 Shadow</td>
          <td>18-19 Wight</td>
        </tr>
        <tr>
          <td>11-12 Specter</td>
          <td>20 Wraith</td>
        </tr>
      </tbody>
    </table>
    `,
  },
  {
    id: 28,
    title: "Encounter with a Faction",
    text: `<div>
    <h3>Devil Raiders</h3>
    <p>Opportunistic, independent devils raiding Elturel before its ultimate destruction could be independent operators (like the chain devil described above) or used as foreshadowing of the Avernian Warlords (see Part 7E).</p>
    
    <h3>Hell Knights</h3>
    <p>These encounters can establish that the High Knights transformed into the Hell Knights; the destruction of high-level spellcasters; and/or the continued corruption of the Hellriders and Order of the Companion. (Recommendations for Hell Knight stats are given in Part 7G.)</p>
    
    <h3>Zarielite Cultists</h3>
    <p>Highlight that many of these cultists came to Elturel as a sort of pilgrimage AND that the Elturian government has been riddled with Zarielites for decades. They’re mostly just reveling now, but questioning them can fill in a lot of gaps about how Elturel fell and also what’s been happening here since the city arrived in Hell.</p>
    
    <h3>Ikaia’s Followers</h3>
    <p>Not all of whom need be his Sons or Daughters; there are a number of humans who have more less pledged fealty to someone who they feel can protect them in the midst of all this insanity. These encounters are most likely to happen in the east side of the city.</p>
    
    <h3>Ravengard’s Peacekeepers</h3>
    <p>Should probably give the sense that they are overwhelmed, but trying hard. More likely to be encountered in the west side of the city, but if encountered in the east are likely to be overwhelmed (cut off from their comrades when Torm’s Bridges were taken).</p>
    
    <h3>Liashandra’s Demons</h3>
    <p>This faction primarily exists to justify using demon stat blocks in Hell, but you do have some opportunity to establish the larger planar-political situation of the Blood War and the motives behind Zariel’s Elturian recruitment drive. There’s also a slim opportunity for some enemy-of-my-enemy action, as Liashandra’s primary mission is to sabotage the Fall of Elturel, so feel free to tack in that direction for demonic encounters.</p>
</div>
`,
  },
  {
    id: 29,
    title: "Encounter with a Faction",
    text: `<div>
    <h3>Devil Raiders</h3>
    <p>Opportunistic, independent devils raiding Elturel before its ultimate destruction could be independent operators (like the chain devil described above) or used as foreshadowing of the Avernian Warlords (see Part 7E).</p>
    
    <h3>Hell Knights</h3>
    <p>These encounters can establish that the High Knights transformed into the Hell Knights; the destruction of high-level spellcasters; and/or the continued corruption of the Hellriders and Order of the Companion. (Recommendations for Hell Knight stats are given in Part 7G.)</p>
    
    <h3>Zarielite Cultists</h3>
    <p>Highlight that many of these cultists came to Elturel as a sort of pilgrimage AND that the Elturian government has been riddled with Zarielites for decades. They’re mostly just reveling now, but questioning them can fill in a lot of gaps about how Elturel fell and also what’s been happening here since the city arrived in Hell.</p>
    
    <h3>Ikaia’s Followers</h3>
    <p>Not all of whom need be his Sons or Daughters; there are a number of humans who have more less pledged fealty to someone who they feel can protect them in the midst of all this insanity. These encounters are most likely to happen in the east side of the city.</p>
    
    <h3>Ravengard’s Peacekeepers</h3>
    <p>Should probably give the sense that they are overwhelmed, but trying hard. More likely to be encountered in the west side of the city, but if encountered in the east are likely to be overwhelmed (cut off from their comrades when Torm’s Bridges were taken).</p>
    
    <h3>Liashandra’s Demons</h3>
    <p>This faction primarily exists to justify using demon stat blocks in Hell, but you do have some opportunity to establish the larger planar-political situation of the Blood War and the motives behind Zariel’s Elturian recruitment drive. There’s also a slim opportunity for some enemy-of-my-enemy action, as Liashandra’s primary mission is to sabotage the Fall of Elturel, so feel free to tack in that direction for demonic encounters.</p>
</div>
`,
  },
  {
    id: 30,
    title: "Roll Again Twice & Combine",
    text: ``,
  },
];
