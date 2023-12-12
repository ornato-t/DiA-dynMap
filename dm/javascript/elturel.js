let locationComponent = {
  template: "#location-template",
  props: {
    x: Number,
    y: Number,
    numId: String,
    locName: String,
  },
  computed: {
    styleObject() {
      return {
        position: "absolute",
        top: this.y + "px",
        left: this.x + "px",
      };
    },
    urlMaker() {
      return "elturel-locations.html?node=" + this.numId;
    },
    parsedNumId() {
      // Using a regular expression to retain only numbers
      return this.numId.replace(/\D/g, "");
    },
  },
};

let encounterComponent = {
  template: "#encounter-template",
  props: {
    name: String,
    text: String,
  },
};

let mapComponent = {
  template: "#map-template",
  props: {
    locations: Array,
  },
  components: {
    "location-marker": locationComponent,
  },
  methods: {
    calculateLineStyle(location1, location2, numId, numId2) {
      if (!location2 || numId > numId2) {
        // If no matching location is found, return an empty style object or handle the error as needed
        return {};
      }

      const x1 = location1.x;
      const y1 = location1.y;
      const x2 = location2.x;
      const y2 = location2.y;
      const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

      return {
        position: "absolute",
        top: y1 + "px",
        left: x1 + "px",
        width: length + "px",
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
        height: "4px",
        border: "1px solid black",
        backgroundColor: "white",
        zIndex: 20,
      };
    },
  },
};

var app = new Vue({
  el: "#app",
  data: {
    locations: locations,
    generatorsOpen: false,
    encountersOpen: false,
    mapOpen: true,
    business: "",
    damage: "",
    job: "",
    npcName: "",
    crisis: "",
    encounterName: "",
    encounterText: "",
    buildingHistory: [],
    npcHistory: [],
  },
  components: {
    "map-grid": mapComponent,
    encounter: encounterComponent,
  },
  methods: {
    toggleMap() {
      this.generatorsOpen = false;
      this.mapOpen = true;
      this.encountersOpen = false;
    },
    toggleRandomGenerators() {
      this.generatorsOpen = true;
      this.mapOpen = false;
      this.encountersOpen = false;
    },
    toggleEncounters() {
      this.generatorsOpen = false;
      this.mapOpen = false;
      this.encountersOpen = true;

      let encounter = generateElturelEncounter();
      this.encounterName = encounter.title;
      this.encounterText = encounter.text;
    },
    makeBuilding() {
      if (this.business) {
        this.buildingHistory = [
          { business: this.business, damage: this.damage },
          ...this.buildingHistory,
        ];
      }

      const rng = generateRandomBuildingWithDamage();
      this.business = rng.business;
      this.damage = rng.damage;
    },
    makeNPC() {
      if (this.job) {
        this.npcHistory = [
          { job: this.job, crisis: this.crisis, name: this.npcName },
          ...this.npcHistory,
        ];
      }

      const rng = generateRandomNPC();
      this.job = rng.job;
      this.crisis = rng.crisis;
      this.npcName = rng.name;
    },
  },
});
