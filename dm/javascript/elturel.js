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
