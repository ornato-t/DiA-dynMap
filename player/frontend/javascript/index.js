let hexagonComponent = {
  template: "#hexagon-template",
  props: {
    name: String,
    hex: String,
  },
};

let rowComponent = {
  template: "#row-template",
  props: {
    printable: Array,
    element: Array,
    hex: String,
  },
  components: {
    hexagon: hexagonComponent,
  },
};

Vue.component('collapsible-list', {
  name: 'collapsible-list',
  template: '#collapsible-list-template',
  props: {
    items: Array,
  },
  methods: {
    toggle(item) {
      this.$set(item, "expanded", !item.expanded);
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    printable: [],
    locations: [],
    quests: [],
    responseAvailable: false,
    questBoardOpen: false,
  },
  components: {
    row: rowComponent,
  },
  methods: {
    //Receives the processed JSON data from the backend (which performs information hiding). Prints any error in the console
    //The requestedData becomes available on the first update (hence why the responseAvailable flag is used)
    requestData() {
      let vm = this;
      vm.responseAvailable = false;
      // fetch locations
      fetch("/data/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else
            console.log(
              "Server returned " + response.status + " : " + response.statusText
            );
        })
        .then((response) => {
          vm.locations = response;
          vm.responseAvailable = true;
        })
        .catch((err) => {
          console.log(err);
        });

      // fetch quests
      fetch("/data/quests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) return response.json();
          else
            console.log(
              "Server returned " + response.status + " : " + response.statusText
            );
        })
        .then((response) => {
          vm.quests = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //Saves the readable content of the locations array (from JSON) to the less-intuitive printable array
    //requested by the hexagon grid format
    fetchData() {
      let vm = this;
      let loc = vm.locations;
      let rows = Number(loc[loc.length - 1].hex.charAt(1));
      let prev = Object();

      for (i = 0; i < rows; i++) vm.printable[i] = [];

      loc.forEach((item) => {
        if (item.hex != prev.hex) {
          //Regular case (also covers duplicate where first is known and second isn't)
          vm.printable[
            Number(item.hex.charAt(1)) - 1 //2 in 'b2' -1 cause array start at 0
          ][
            parseInt(item.hex.charAt(0), 36) - 9 - 1 //a = 0, b = 1, c = 2
          ] = item;
        } else {
          //Duplicate case
          if (prev.status !== "U" && item.status != "U") {
            //Duplicate case: both known
            vm.printable[
              Number(item.hex.charAt(1)) - 1 //2 in 'b2' -1 cause array start at 0
            ][
              parseInt(item.hex.charAt(0), 36) - 9 - 1 //a = 0, b = 1, c = 2
            ].name += "\n" + item.name;
          } else if (prev.status === "U" && item.status !== "U") {
            //Duplicate case: first unknown, second known
            vm.printable[
              Number(item.hex.charAt(1)) - 1 //2 in 'b2' -1 cause array start at 0
            ][
              parseInt(item.hex.charAt(0), 36) - 9 - 1 //a = 0, b = 1, c = 2
            ] = item;
          }
        }
        prev = item;
      });
    },
    toggleQuests() {
      this.questBoardOpen = !this.questBoardOpen;
    },
  },
  created() {
    this.requestData();
  },
  beforeUpdate() {
    this.fetchData();
  },
});
