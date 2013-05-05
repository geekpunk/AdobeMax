var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        var $field = $('#demoField');

        $('#search').click(function(){
            app.clear();
            $field.attr('name','search');
            $field.attr('type','search');
        });
        $('#web').click(function(){
            app.clear();
            $field.attr('type','url');
        });
        $('#number').click(function(){
            app.clear();
            $field.attr('type','number');
            $field.attr('pattern','[0-9]*');
        });
        $('#email').click(function(){
            app.clear();
            $field.attr('type','email');
        });

    },
    clear: function(){
        var $field = $('#demoField');

        $field.attr('type','text');
        $field.attr('pattern','');
        $field.attr('name','');

    }
};
