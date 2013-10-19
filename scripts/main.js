var replacements;
var active=false;

$( "form" ).submit(function( event ) {
        replacements = $( this ).serializeArray();
        event.preventDefault();
        
});

require([
  '$api/models',
  'scripts/language-example',
  'scripts/playlist-example',
  'scripts/lyrics',
  '$views/buttons'
], function(models, languageExample, playlistExample,lyrics, buttons) {
  'use strict';

$("form").submit(function (e) {
      e.preventDefault();
      models.player.play();
      lyrics.updateLyrics(replacements);
      setInterval(function(){lyrics.updateLyrics(replacements)},1000);
      var form = document.getElementById('form');
      document.getElementById("form").reset();
      active = true;
      setPage();

});

  models.application.load('arguments').done(pages);

  models.application.addEventListener('arguments',pages);

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
      models.player.pause();
    }
    
  }

  var setPage = function()
  {
    if(active == true)
    {
      document.getElementById("form");
      form.style.display = 'none';
    }

    else if(active == false)
    {
      document.getElementById("form");
      form.style.display = 'block';
    }
  }

});
