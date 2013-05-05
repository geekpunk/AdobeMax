var app = {
    
    initialize: function () {
        this.bind();
    },
    bind: function () {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function () {
        
        var $field = $('#demoField');
        
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        
        // run the context menu plugin
        toolMenu.initialize();

        // search needs to be placed in a form
        // as well as setting the name and type
        // adds search button on ios / android
        $('#search').click(function () {
            app.clear();
            $field.attr('name', 'search');
            $field.attr('type', 'search');
        });

        // adds the GO button on ios
        $('#web').click(function () {
            app.clear();
            $field.attr('type', 'url');
        });

        // flips to number keyboard
        // pattern is needed to switch to the dialer
        // on ios
        $('#number').click(function () {
            app.clear();
            $field.attr('type', 'number');
            $field.attr('pattern', '[0-9]*');
        });

        // email adds the @ to the keyboard
        $('#email').click(function () {
            app.clear();
            $field.attr('type', 'email');
        });

    },
    clear: function () {
        var $field = $('#demoField');
        $field.attr('type', 'text');
        $field.attr('pattern', '');
        $field.attr('name', '');
    }
};
