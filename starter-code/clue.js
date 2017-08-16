
var MrGreen = {
  firstName: 'Jacob',
  lastName:  'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'};

var DrOrchid = {firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'};

var ProfPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: 22,
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'};

  var MissScarlet ={
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past,',
  age: 31,
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'};

 var MrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: 36,
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité',};

 var MrMustard ={
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: 62,
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player', };

var Rope={ name:"Rope", Weight: 10};
var Knife = {name:"Knife", Weight: 8};
var Candlestick = {name:"Candlestick", Weight: 2};
var Dumbbell = {name:"Dumbbell", Weight: 30};
var Poison = {name:"Poison", Weight: 2};
var Axe = {name:"Axe", Weight: 15};
var Bat = {name:"Bat", Weight: 13};
var Trophy = {name:"Trophy", Weight: 25};
var Pistol = {name:"Pistol", Weight: 20};

var people =[MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard];

var weapons=[Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];

var rooms = ['Dinning Room',
'Conservatory',
'Kitchen',
'Study',
'Library',
'Billiard Room',
'Lounge',
'Ballroom',
'Hall',
'Spa',
'Living Room',
'Observatory',
'Theater',
'Guest House',
'Patio'];

function random_selector(a) {
  var cardsNumber = a.length;
  var cardRandom = Math.random()*(cardsNumber-1);
  return a[Math.floor(cardRandom)];
}

function pick_mistery() {
  var murderer = random_selector(people);
  var room = random_selector(rooms);
  var weapon = random_selector(weapons);
  return [murderer.firstName, room, weapon.name];
}

function reveal_mistery(mistery) {
  console.log("The murderer is " +  mistery[0] + ", the weapon is a " + mistery[2] + " and the place is the " + mistery[1]);
}

console.log("Picking cards...");
var mistery_envelope = pick_mistery();
console.log("Placing the cards into the envelope!");
reveal_mistery(mistery_envelope);
