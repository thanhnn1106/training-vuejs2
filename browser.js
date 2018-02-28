$(document).ready(function(){
    new Vue({
        el:'#app7',
        data: {
            worlds: ['Terran', 'L24-D', 'Ares', 'New Kroy', 'Sebek', 'Vestra'],
            newWorld:''
        },
        methods: {}
    });
    new Vue({
        el:'#app6',
        methods: {
            toast() {
                this.toastedBreads++
            },
            test(msg) {
                alert(msg);
            }
        },
        data: {
            toastedBreads: 0
        }
    });
    new Vue({
        el:'#app5',
        data: {
            countdown: 10,
        }
    });
    new Vue({
        el:'#app4',
        data: {
            animals: {"dog": "woof", "cat": "meow", "bird": "tweet"}
        }
    });
    new Vue({
        el:'#app3',
        data: {
            animals: ["dog", "cat", "bird"],
            sounds: ["woof", "meow", "meow"]
        }
    });
    new Vue({
        el:'#app2',
            data: {
                countWorlds: [10, 9, 0, 7, 6, 5, 4, 3, 2, 1]
        }
    });
    new Vue({
        el:'#app1',
        data: {
            countWorlds: 5 + 2 + 1 + 1
        }
    });
    new Vue({
        el:'#app',
            data: {
            countWorlds: 5 + 1 + 1 + 1
        }
    });

});
