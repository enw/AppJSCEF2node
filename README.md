# send messages in AppJS from CEF 'client' to NodeJS 'server'
        var evt = new window.Event('CEF2node');
        evt.data = msg;
        window.document.dispatchEvent(evt);

# listen for messages on nodejs in window.on('ready')
e.g.
    window.document.addEventListener('CEF2node', function (e) {
        // handle e.data message from CEF
    });


