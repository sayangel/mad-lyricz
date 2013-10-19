require([
  '$api/models'
], function(models, Image, buttons) {
  'use strict';

  var showLyrics = function() {
    var album = models.Track.fromURI('spotify:track:2y4lAQpi5VTNLu2ldeTdUH');
    var image = Image.forTrack(album, {width: 300, height: 300, player: false});
    document.getElementById('albumCoverContainer').appendChild(image.node);
    var button = buttons.Button.withLabel('Play me');
    var buttons_example = document.getElementById('buttons-example');
    buttons_example.appendChild(button.node);
  };

  exports.showLyrics = showLyrics;
});
