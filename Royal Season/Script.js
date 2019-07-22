

var login = 'royal';
var password = 4321;



function check(a, b) {
    
var a = document.getElementById('a').value;
var b = document.getElementById('b').value; 
    
    if ((a == login) && (b == password)) {alert('Congrats, you have successfully logged into your own account.')} else {alert('Wrong Login or Password. Please, try again.')} };






var guests = 1;
var nights = 1;

 document.getElementById("guests").innerHTML = guests;
 document.getElementById("nights").innerHTML = nights;



function moreGuests() {

    var p = document.getElementById("guests");

    guests = guests + 1;

    p.innerHTML = guests;};

function lessGuests() {

    var p = document.getElementById("guests");

    guests = guests - 1;

    p.innerHTML = guests;};





function moreNights() {
    
    var p = document.getElementById("nights"); 
    
    nights = nights + 1;
    
    p.innerHTML = nights;};

function lessNights() {

    var p = document.getElementById("nights");

    nights = nights - 1;

    p.innerHTML = nights;};