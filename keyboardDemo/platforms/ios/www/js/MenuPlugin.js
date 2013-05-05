var toolMenu = {
    initialize: function() {
        cordova.exec(function(err){ }, function(err){alert(err);}, "ToolMenu", "initialize", []);
    }
};