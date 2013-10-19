require([
  '$api/models'
], function(models) {
  'use strict';

  var i = 0;
  var lyrics;

  var getLyrics = function(onComplete) {
    var currArtist;
    var currSong;

    // Get the currently-playing track
    models.player.load('track').done(updateCurrentTrack);

    // Update the DOM when the song changes
    models.player.addEventListener('change', updateCurrentTrack);
        function updateCurrentTrack(){
            //var currentHTML = document.getElementById('current-track');
            if (models.player.track == null) {
                currentHTML.innerHTML = 'No track currently playing';
            } 
            else {
                var artists = models.player.track.artists;
                var artists_array = [];
                for(var i=0;i<artists.length;i++) {
                    artists_array.push(artists[i].name);
                }
                currArtist = artists[0].name;
                currSong = models.player.track.name;
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
                  onComplete(obj);
                  //return obj;


                }

                var url= 'http://test.lyricfind.com/api_service/lyric.do?apikey=5b42afc32fb44235ebb1b9028e1051d1&lrckey=ebde523fdd21e7ba7c8e28600a6af088&reqtype=default&trackid=artistname:'+currArtist+',trackname:'+currSong+'&format=lrc&output=json';

                req.open("GET", url, true);
                req.send();


        }


  };

  var saveLyrics = function(obj){
      lyrics = obj;
      console.log(lyrics);
  }

  var showLyrics = function(x){
    var currentHTML = document.getElementById('lyrics');
    currentHTML.innerHTML = lyrics.track.lrc[x].line;
                        console.log(lyrics);
                        console.log(lyrics.track.lrc[x]);
                        //document.write('<h1>'+lyrics.track.lrc[x].line+'</h1>');
  }

  var updateLyrics = function(){
    
    if(i<lyrics.track.lrc.length)
    {
      i++;
    }
    else
    {
      i = 0;
    }
    showLyrics(i)
    console.log('beep');
  }


  exports.getLyrics = getLyrics;
  exports.showLyrics = showLyrics;
  exports.saveLyrics = saveLyrics;
  exports.updateLyrics = updateLyrics;
});
