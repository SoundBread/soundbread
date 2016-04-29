function desktop_run(){

    const remote = require('electron').remote;
    const app = remote.app;
    const globalShortcut = remote.globalShortcut;

    // Register a 'CommandOrControl+X' shortcut listener.
    var ret = globalShortcut.register('CommandOrControl+X', function() {
      console.log('CommandOrControl+X is pressed');
    });

    if (!ret) {
      console.log('registration failed');
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+X'));

    // Bind global shortcuts
    $('.soundItem[data-globalkeycode]').each(function(){
      var self = this;
      var gsc = globalShortcut.register($(self).data('globalkeycode'), function(){
        console.log('Play sound: '+ self.id);
        $(self).click();
      });

      if (!gsc) {
        console.log('registration failed');
      }
    });
};
