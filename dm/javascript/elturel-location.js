Vue.component('place', {
    template: '#place-template',
    props: {
        node: Object
    }
});
var app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        loadData(){
            let query = window.location.search.substring(1);
            let vars = query.split('&')

            const nodeId = vars[0].split("=")[1]
            document.title = 'Location ' + nodeId;
            
            const loc = locations.find(location => location.numId === nodeId);

            
            if (loc) {
                this.locationData = loc;
            }
        }
    },
    beforeMount: function() {
        this.loadData()
    }
});