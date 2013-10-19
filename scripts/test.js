

var words = new Lexer().lex("Angel is a super cool super super poorly  super super good Mexican");
var taggedWords = new POSTagger().tag(words);

    var j_counter = 0;
    var n_counter = 0;
    var r_counter = 0;
    var v_counter = 0;
    var o_counter = 0;

    var j_tracker = [];
    var n_tracker = [];
    var r_tracker = [];
    var v_tracker = [];
    var o_tracker = [];

    var nouns=[];
    var verbs=[];
    var adverbs=[];
    var adjectives=[];
    var others = [];

for (var i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];


    if(tag[0]=='N'){
		nouns[n_counter] = word;
		n_tracker[n_counter] = i;
		n_counter++;
    }
    else if(tag[0]=='J'){
		adjectives[j_counter] = word;
		j_tracker[j_counter] = i;
		j_counter++;
    }
    else if(tag[0]=='R'){
		adverbs[n_counter] = word;
		r_tracker[r_counter] = i;
		r_counter++;
    }
    else if(tag[0]=='V'){

		verbs[n_counter] = word;
		v_tracker[v_counter] = i;
		v_counter++;
    }
    else {

        others[o_counter] = word;
        o_tracker[o_counter] = i;
        o_counter++;
    }

}


var dividing_factor = 10;

// ADJECTIVES
var num_to_change_j = Math.ceil(j_counter/dividing_factor);
var pool =[];
for(var i=0;i<=j_counter;i++){pool[i]=i}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var new_pool = shuffle(pool);

for(var i=0;i<=num_to_change_j;i++){
    adjectives[new_pool[i]]="poop";
}

// NOUNS

var num_to_change_n = Math.ceil(n_counter/dividing_factor);
var pool =[];
for(var i=0;i<=n_counter;i++){pool[i]=i}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var new_pool = shuffle(pool);

for(var i=0;i<=num_to_change_n;i++){
    nouns[new_pool[i]]="boob";
}

//VERBS

var num_to_change_v = Math.ceil(v_counter/dividing_factor);
var pool =[];
for(var i=0;i<=v_counter;i++){pool[i]=i}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var new_pool = shuffle(pool);

for(var i=0;i<=num_to_change_v;i++){
    verbs[new_pool[i]]="barnyard";
}

//ADVERBS
var num_to_change_r = Math.ceil(r_counter/dividing_factor);
var pool4 =[];
for(var i=0;i<=r_counter;i++){pool4[i]=i}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var new_pool = shuffle(pool4);

for(var i=0;i<=num_to_change_j;i++){
    adverbs[new_pool[i]]="puppy";
}


// document.writeln(new_pool);
// document.writeln("</br>nouns (" + n_counter + "):" + nouns)
// document.writeln("</br>verbs: " + verbs)
// document.writeln("</br>adverbs: " + adverbs)
// document.writeln("</br>adjectives (" + j_tracker + "):"+ adjectives)



var new_lyrics = [];

for(var a=0;a<=nouns.length;a++){new_lyrics[n_tracker[a]]=nouns[a]}
for (var a=0;a<=verbs.length;a++){new_lyrics[v_tracker[a]]=verbs[a]}
for (var a=0;a<=adverbs.length;a++){new_lyrics[r_tracker[a]]=adverbs[a]}
for (var a=0;a<=adjectives.length;a++){new_lyrics[j_tracker[a]]=adjectives[a]}
for (var a=0;a<=others.length;a++){new_lyrics[o_tracker[a]]=others[a]}



document.writeln("<br>" + new_lyrics);

