Vue.component("hexagon", {
  name: "hexagon",
  template: "#hexagon-template",
  props: {
    name: String,
    hex: String,
  },
});

Vue.component("row", {
  name: "row",
  template: "#row-template",
  props: {
    printable: Array,
    element: Array,
    hex: String,
  },
});

Vue.component("collapsible-list", {
  name: "collapsible-list",
  template: "#collapsible-list-template",
  props: {
    items: Array,
    depth: 0,
  },
  methods: {
    toggle(item) {
      this.$set(item, "expanded", !item.expanded);
      this.$emit("item-clicked", item);
    },
    depthClass(depth) {
      return "depth-" + depth;
    },
  },
});
