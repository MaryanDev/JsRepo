define(['vue'],
    function (Vue) {
        var _self = {}

        _self.initialyze = function () {
            Vue.component('todo-item',
            {
                props: ['todo'],
                template: '<li>{{ todo.text }}</li>'
            });


            var app1 = new Vue({
                el: "#comp1",
                data: {
                    groceryList: [
                        { id: 0, text: 'Vegetables' },
                        { id: 1, text: 'Cheese' },
                        { id: 2, text: 'Whatever else humans are supposed to eat' }
                    ]
                }
            });
        }

        return _self;
    });