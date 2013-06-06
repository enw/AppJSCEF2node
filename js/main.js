function send_CEF2node ( msg ) {
    var evt = new window.Event('CEF2node');
    evt.data = msg;
    window.document.dispatchEvent(evt);
}
