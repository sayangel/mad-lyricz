

var words = new Lexer().lex("These are a bunch of lyrics");
var taggedWords = new POSTagger().tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    document.writeln(word + " /" + tag);  
    if(tag[0]=='J' || tag[0]=='N' || tag[0]=='R' || tag[0]=='V'){
    	document.writeln(word + " /" + tag);  
    }
    
}

// Adjective: JJ, JJR, JJS 
// Noun: NN, NNP, NNPS, NNS 
// Adverb: RB, RBR, RBS 
// Verb: VB, VBD

// Look at the first letter of the tag, if it is J, N R, V, then keep the tag. 