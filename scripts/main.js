window.onload = require([
  '$api/models',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example',
  'scripts/lyrics'
], function(models, languageExample, coverExample, buttonExample, playlistExample,lyrics) {
  'use strict';

  models.application.load('arguments').done(pages);

  models.application.addEventListener('arguments',pages);

  setInterval(function(){lyrics.updateLyrics()},1000);

  var obj;

  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();
  lyrics.getLyrics(lyrics.saveLyrics);

  function pages() {
    var args = models.application.arguments;
    var current = document.getElementById(args[0]);
    var sections = document.getElementsByClassName('section');
    for (var i=0; i < sections.length; i++){
      sections[i].style.display = 'none';
    }
    current.style.display = 'block';
    if(args[0]=='index')
    {
      //models.player.pause();
    }
    
  }


});
