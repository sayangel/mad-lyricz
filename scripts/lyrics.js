require([
  '$api/models',
  'scripts/test'
], function(models, analyzer) {
  'use strict';

  var i = 0;
  var lyrics;
  var time = 0;
  var playing = true;

  var getLyrics = function(onComplete) {
    var newArtist;
    var currArtist = "";
    var newSong;
    var currSong = "";

    // Get the currently-playing track
    models.player.load('track').done(updateCurrentTrack);
        models.player.load('position')
  .done(
    function(p){
      time = p.position;
    });
    // Update the DOM when the song changes
    models.player.addEventListener('change', updateCurrentTrack);
        function updateCurrentTrack(){
            //var currentHTML = document.getElementById('current-track');
            if (models.player.track == null) {
                currentHTML.innerHTML = 'No track currently playing';
            } 
            else {
                time = 0;
                i=0;
                var artists = models.player.track.artists;
                var artists_array = [];
                for(var i=0;i<artists.length;i++) {
                    artists_array.push(artists[i].name);
                }
                newArtist = artists[0].name;
                newSong = models.player.track.name;

                //currentHTML.innerHTML = 'Now playing: ' + currArtist;
                //currentHTML.innerHTML += ' - ' + currSong;
                //currentHTML.innerHTML += '</br>http://test.lyricfind.com/api_service/lyric.do?apikey=5b42afc32fb44235ebb1b9028e1051d1&lrckey=ebde523fdd21e7ba7c8e28600a6af088&reqtype=default&trackid=artistname:'+currArtist+',trackname:'+currSong+'&format=lrc';


            }

                function createRequest() {
                  var result = null;
                  if (window.XMLHttpRequest) {
                    // FireFox, Safari, etc.
                    result = new XMLHttpRequest();
                  }
                  else if (window.ActiveXObject) {
                    // MSIE
                    result = new ActiveXObject("Microsoft.XMLHTTP");
                  } 
                  else {
                    // No known mechanism -- consider aborting the application
                  }
                  return result;
                  }

                  var req = createRequest(); // defined above
                  // Create the callback:
                  req.onreadystatechange = function() {
                    if (req.readyState != 4) return; // Not there yet
                    if (req.status != 200) {
                      // Handle request failure here...
                      return;
                    }
                    // Request successful, read the response
                    var resp = req.responseText;
                    var obj = eval ("(" + resp + ")");
                    console.log(obj);
                    onComplete(obj);
                    //return obj;


                }

                var url= 'http://test.lyricfind.com/api_service/lyric.do?apikey=5b42afc32fb44235ebb1b9028e1051d1&lrckey=ebde523fdd21e7ba7c8e28600a6af088&reqtype=default&trackid=artistname:'+newArtist+',trackname:'+newSong+'&format=lrc&output=json';
              console.log("SENDING REQUEST");
                req.open("GET", url, true);
                req.send();
            

        }


  };

  var saveLyrics = function(obj){
      lyrics = obj;
  }

  var showLyrics = function(x, replacements){
    var currentHTML = document.getElementById('lyrics');
    var new_lyrics = analyzer.getPOS(lyrics.track.lrc[x].line, replacements);
    currentHTML.innerHTML = new_lyrics;
    //analyzer.getPOS(lyrics.track.lyrics);
                        //console.log(lyrics.track.lyrics);
                        //console.log(lyrics.track.lrc[x]);
                        //document.write('<h1>'+lyrics.track.lrc[x].line+'</h1>');
  }

  var updateLyrics = function(replacements){

    models.player.load('position').done(updateTime);
    if(i<lyrics.track.lrc.length)
    {
      if(lyrics.track.lrc[i].milliseconds==null)
      {
        i++;
      }
      if(lyrics.track.lrc[i].milliseconds < (time+500))
      {
        showLyrics(i, replacements)
        i++;
      }
      else
      {

      }
    }
    else
    {
      i = 0;
    }
  }

  function updateTime(){
    console.log("POSITION");
    time = models.player.position;
    console.log(time);
    console.log("")
  }


  exports.getLyrics = getLyrics;
  exports.showLyrics = showLyrics;
  exports.saveLyrics = saveLyrics;
  exports.updateLyrics = updateLyrics;
});
