require([
  '$api/models',
  '$views/list#List'
], function(models, List) {
  'use strict';

  var doPlaylistForAlbum = function() {
    var playlist = models.Playlist.fromURI('spotify:user:123072721:playlist:2koKhAxjGZ572fxhWF3xug');
    var list = List.forPlaylist(playlist);
    document.getElementById('playlistContainer').appendChild(list.node);
    list.init();
  };

  exports.doPlaylistForAlbum = doPlaylistForAlbum;
});
