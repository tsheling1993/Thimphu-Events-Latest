module.exports={
    show: function (url, title, options) {
        cordova.exec(function(){}, function(){}, "CordovaPluginPhotoviewer", "show", [url, title, options]);
    }
}
