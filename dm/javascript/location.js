Vue.component('place', {
    template: '#place-template',
    props: {
        name: String,
        item: String,
        terrain: String,
        text: String,
        end: Number,
        index: Number
    }
});
var app = new Vue({
    el: '#app',
    data: {
        printable: []
    },
    methods: {
        filter() {
            let vm = this;
            let query = window.location.search.substr(1).split('&').reduce((accumulator, singleQueryParam) => {
                const [key, value] = singleQueryParam.split('=');
                accumulator[key] = value;
                return accumulator;
            }, {});

            locations.forEach((item) => {
                if (item.hex === query.hex)
                    vm.printable.push(item);
            })

            document.title = 'Hex ' + query.hex.toUpperCase();
        }
    },
    beforeMount: function() {
        this.filter();
    }
});