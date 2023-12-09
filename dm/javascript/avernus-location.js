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
        },
        renderTerrain(item) {
            switch (item.terrain[0]) {
                case 'ash':
                    return 'ashlands'
                case 'bog':
                    return 'caustic bogs'
                case 'brambles':
                    return 'bone brambles'
                case 'cracks':
                    return 'wasteland, cracked'
                case 'fire':
                    return 'plains of fire'
                case 'hills':
                    return 'hills, avernian'
                case 'mountains':
                    return 'mountains, avernian'
                case 'volcano':
                    return 'volcanic plains'
                case 'waste':
                    return 'wastelands'
                default:
                    console.log('Error, unknown terrain')
                    return ('???')
            }
        }
    },
    beforeMount: function() {
        this.filter();
    }
});