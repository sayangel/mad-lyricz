require([
  '$api/models',
  '$views/list#List',
  '$views/buttons'
], function(models, List, buttons) {
  'use strict';




  var doPlaylistForAlbum = function() {
    var playlist = models.Playlist.fromURI('spotify:user:123072721:playlist:2koKhAxjGZ572fxhWF3xug');
    var list = List.forPlaylist(playlist);
    document.getElementById('playlistContainer').appendChild(list.node);
    list.init();

        var sing_button = buttons.Button.withLabel('SING IT');
    var player_buttons = document.getElementById('player-buttons');
    player_buttons.appendChild(sing_button.node);

    sing_button.addEventListener('click', skipPrevious);

    function skipPrevious(){
      var selection = list.getSelection();
      models.player.playTrack(models.Track.fromURI(selection.uris[0]));
      models.application.openURI('spotify:app:madlyricz-app:index');
    }
  };

  exports.doPlaylistForAlbum = doPlaylistForAlbum;
});
