define([
    'lodash',
    'backbone'
], function (_, Backbone) {

    var TodoModel = Backbone.Model.extend({
        defaults : {
            title : '',
            completed : false,
            order : 0
        },
        settings : {
            validation : {
                rules : {
                    title : {
                        "required" : true,
                        "min" : 5
                    }
                }
            }
        },
        toggle : function () {
            this.save({
                completed : !this.get('completed')
            });
        }
    });
    return TodoModel;
});