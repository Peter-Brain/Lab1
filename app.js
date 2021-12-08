let str=new String('i stiil seen your shadow in my room');
let  m = new Array();
m=str.split(' ');
console.log(m);



function sort(array){
    array.sort();
    console.log(array);
}
  
sort(m);
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(27,36));

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
  }

var mas = new Array();
mas1 = '1,2,3,4,5,6';
mas=mas1.split(',');
console.log(shuffle(mas));

function calend(a,b){
    if (a==1||a==3||a==5||a==7||a==8||a==10||a==12)console.log('31');
    else if(a==2){
        if(b%4)console.log('28');
        else console.log('29');

    }
    else console.log('30');
}

calend(7,200);
const persons=[
    {name:'Jhon' , age:27, check: true}, {name:'Peter' , age:25, check: false}, {name:'Mary' , age:28, check: true},
    
     {name:'Jhon' , age:25, check: true}, {name:'Peter' , age:5, check: false},
         {name:'Mary' , age:2, check: true}
    ]
    persons.sort( (person1, person2)=> {
        if (person1.name < person2.name) return 1;
        else if (person1.name > person2.name) return -1;
        else  {
            if (person1.age < person2.age) return -1;
            else return 1;
     } });
    console.log(persons);
    
    