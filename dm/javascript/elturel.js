let locationComponent = {
  template: "#location-template",
  props: {
    x: Number,
    y: Number,
    numId: String,
  },
  computed: {
    styleObject() {
      return {
        position: "absolute",
        top: this.y + "px",
        left: this.x + "px",
      };
    },
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
    calculateLineStyle(location1, location2) {
        console.log(location1.numId)
        console.log(location2.numId)
      if (!location2) {
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
        border: "1px solid white",
        backgroundColor: "black",
        zIndex: 20
      };
    },
  },
};

var app = new Vue({
  el: "#app",
  data: {
    locations: locations,
  },
  components: {
    "map-grid": mapComponent,
  },
});
