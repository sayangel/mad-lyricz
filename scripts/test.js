require(['$api/models'
], function(models) {
var getPOS = function(input, replacements)
{

var words = new Lexer().lex(input);
var taggedWords = new POSTagger().tag(words);
    // document.writeln(input)
var rep_array = [];

for(var i=0;i<replacements.length;i++){
    rep_array[i] = replacements[i].value;
}
    var rand_n = Math.ceil(Math.random()*4)+1;
    var rand_v = Math.ceil(Math.random()*2)+5;
    var rand_j = Math.ceil(Math.random()*2)-1;

    var rand_noun = rep_array[rand_n];
    var         rand_verb = rep_array[rand_v];
    var rand_adj = rep_array[rand_j];

    var index = Math.ceil(Math.random()*taggedWords.length);

    var taggedWord = taggedWords[index];
    var tag = taggedWord[1];

    var new_lyrics_string;

    var new_lyrics_string = [];

for (var x in taggedWords) {
    var taggedWord = taggedWords[x];
    var word = taggedWord[0];
    var tag = taggedWord[1];

    if(x==index){
        if(tag[0] = 'N'){
            word = rand_noun;
        }
        else if(tag[0] = 'V'){
            word = rand_verb;
        }
        else if(tag[0] = 'J'){
            word = rand_adj;
        }
        else{
        }
    }

    new_lyrics_string+= " ";
    new_lyrics_string+= word;
}

return new_lyrics_string;
}

  exports.getPOS = getPOS;
});
