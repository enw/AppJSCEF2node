# send messages in AppJS from CEF 'client' to NodeJS 'server'

  [ ON WEB APP ]
  send_CEF2node ( "start" );
  send_CEF2node ( { subject:"hello!", message:"Can you belive this guy???" } );
  send_CEF2node ( { subject:"change", body:{x:32,y:19} } );

# listen for messages on nodejs in window.on('ready')
  [ IN NODE APPJS WINDOW READY HANDLER ]
  window.document.addEventListener('CEF2node', function (e) {
    // handle e.data message from CEF
  });


