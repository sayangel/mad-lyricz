require([
  '$api/models',
  '$views/image#Image'
], function(models, Image) {
  'use strict';

  var doCoverForAlbum = function() {
    var album = models.Album.fromURI('spotify:album:2mCuMNdJkoyiXFhsQCLLqw');
    var image = Image.forAlbum(album, {width: 1000, height: 1000, player: true});
    document.getElementById('albumCoverContainer').appendChild(image.node);
  };




  exports.doCoverForAlbum = doCoverForAlbum;
});
