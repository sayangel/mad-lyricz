require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example'
], function(models, languageExample, coverExample, buttonExample, playlistExample) {
  'use strict';

  models.application.load('arguments').done(pages);

  models.application.addEventListener('arguments',pages);

  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();

  function pages() {
    var args = models.application.arguments;
    var current = document.getElementById(args[0]);
    var sections = document.getElementsByClassName('section');
    for (var i=0; i < sections.length; i++){
      sections[i].style.display = 'none';
    }
    current.style.display = 'block';
  }


});
