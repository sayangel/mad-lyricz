

function blank(a){
 if(a.value == a.defaultValue){
  a.value = "Noun";
  a.style.color='green';
 }
}

function fill(a){
 if(a.value == ""){
  a.value = a.defaultValue;
  a.style.color='red';
 }
}