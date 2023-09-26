// var person = new Object ();

// person ["firstname"] = "Ylli";
// person ["lastname"] = "Citaku"

// var firstNameProperty = 'firstname';

// console.log( person);
// console.log(person[firstNameProperty]);
// console.log( person.lastname);


// person.address = new Object();

// person.address.city = 'Klina';
// person.address.street ="My street";

// console.log(person.address);
// // console.log(person["address"])

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// var Yli  = {
//     name:'Ylli', 
//     lastname:"citaku",
//     address: {
//         street: "Sinan Morina",
//         city: "klina",
//         State: "KS"
//     }    
// };

// function greet(person){
//     console.log('Hi '+ person.name)
// }

// // greet(Yli);
// greet({
//     name: 'Jelo',
//     lastname: 'Une'
// })



// var greet = 'Hello';
// var greet = 'Hola';

// console.log(greet);

// var english = {
//     greetings: {
//         basic: 'Hello'
//     }
// };
// var spanish = {};

// english.greet = 'Hello!'
// spanish.greet = 'Hola!';

// console.log(english)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// var objectLiteral = {
//     firstname: 'Ylli',
//     isAProgrammer: true
// }

// console.log(JSON.stringify(objectLiteral));  converts  object literal to JSON

// var jsonValue = JSON.parse('{"firstname": "Meri", "isAProgramer": true}');   converts JSON to object literal

// console.log(jsonValue)




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// function greet (){
//     console.log('hi');
// }

// var anonymousGreet = function(){
//     console.log('hi')
// }

// anonymousGreet();



// function log(a){
//     console.log(a);
//     a();
// }


// log(function(){
//     console.log('hellooo')
// });



// by value (primitives) By value: when you create a new variable and its value its the same with an old variable, then new spots in memory is created. Usually with primitive types,
// var a =3;
// var b;

// b = a;
// a=2;

// console.log(a);
// console.log(b);


// // by reference (all objects (including functions) it points in the same location in memory that old variable does).

// var c = {greeting: 'hi'};
// var d;

// d = c;
// d.greeting = 'Helloooo' //mutate

// console.log(c)
// console.log(d)



// // by reference (even as parameters)
// function changeGreeting(obj){
//     obj.greeting = 'Hola'; 
// }

// changeGreeting(d);

// console.log(c);
// console.log(d);



// // equals operator sets up new memory space (new address)
// c = {greeting: 'Howdy'};
// console.log(c);
// console.log(d);


// function a(){
//     console.log(this);
//     this.newV = 'hello'
// }

// var b = function(){
//     console.log(this)
// }

// a();
// console.log(newV)
// b();


 
// var c = {
//     name : 'The c object',
//     log: function(){
//         var self = this;

//         self.name = 'Updated c object'
//         console.log(self);

//         var setname = function(newName){
//             self.name = newName;
//         }
//         setname('Updated again! The c object')
//         console.log(self)
//     }
// }

// c.log()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// var arr = [
//     1, 
//     false, 
//     {
//         name:'Ylli',
//         address: 'Sinan M'
//     },
//     function(name){
//         var greeting = "Hello ";
//         console.log(greeting + name);
//     },

//     "hello"

// ];

// console.log(arr)
// arr[3](arr[2].name)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// function greet(firstname, lastname, language ){

//     language = language || 'english' // language is undefinded, so undefinded is false
//                                      //  then false || something gives you something

//     if(arguments.length === 0 ){
//         console.log('Missing parameters!');
//         console.log(' - - - - - - - - - - - -')
//         return;
//     }

//     console.log(firstname);
//     console.log(lastname)
//     console.log(language)
//     console.log(arguments)
//     console.log('-------------------------')


// }

// greet();
// greet('ylli');
// greet('ylli', 'citaku')
// greet('ylli', 'citaku', 'shqip')

// function greet(firstname, lastname, language){
    
//     language = language || 'english';

//     if(language = 'english'){
//         console.log('Hello ' + firstname + ' ' + lastname)
//     }

//     if(language = 'spanish'){
//         console.log('Hola ' + firstname + ' ' + lastname)
//     }
// }


// greet('ylli')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Importance of semicolon;  always open braces after return
// function getPerson(){

//     return {
//         firstName: 'yll'
//            }
// }


// console.log(getPerson());


// var firstName, lastname, language;

// var person ={
//     firstName: 'Ylli',
//     lastname: 'Citaku'
// }

// console.log(person)



// function statement
// function greet(name){
//     console.log('Hello '+ name);
// }
// greet('Ylli')

// // using a function expression  (Function expressions arent hoisted (sben me i thirr para se me i deklaru))
// var greetFunc = function(name){
//     console.log('Hello '+ name )
// }
//  greetFunc('Yll')


 // using Immediatly Invoked Function Expression (IIFE)
//  var greeting = function(name){
//     return 'Hello '+ name
//  }('Yllii');

// console.log(greeting)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// (function(name){
    
//     var greeting = 'Hello';
//     console.log(greeting + ' ' + name)
// }('Ylli'))

// console.log(greeting)


// function greet(whattosay){
    
//     return function(name){
//         console.log(whattosay + ' ' + name)
//     }
// }

// var sayHi = greet('Hi')
// sayHi('Yll')


// function buildFunction(){
    
//     var arr = [];

//     for( var i = 0; i < 3; i++){
        
//         arr.push(
//             function(){
//                 console.log(i);
//             }
//         )
//     }

//     return arr;
// }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// var fs = buildFunction();
// fs[0](); // it returns 3, cuz thats the value of i at the moment I execute the function
// fs[1]();
// fs[2]();




// function buildFunction2(){
    
//     var arr = [];

//     for( var i = 0; i < 3; i++){
        
//         arr.push(
//             (function(j){
//                 return function(){
//                     console.log(j )
//                 }
//             }(i))
//         )
//     }

//     return arr;
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// var fs2 = buildFunction2();
// fs2[0](); 
// fs2[1]();
// fs2[2]();



// function makeGreeting(language){

//     return function(firstname, lastname){

//         if(language === 'en'){
//             console.log('Hello ' + firstname + ' ' + lastname);
//         }

//          else  if(language === 'es'){
//             console.log('Hola ' + firstname + ' ' + lastname);
//         }

//         else {
//             console.log('Pershendetje ' + firstname)
//         }
//     }
// }


// var greetEnglish= makeGreeting('en');
// var greetShqip= makeGreeting('es');

// greetEnglish('ylli', 'citaku')



// function sayHiLater(){
//     var greeting = 'Hi!';

//     setTimeout(function(){
//         console.log(greeting)
//     },3000)
// }

// sayHiLater();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// ------------ CALLBACKS
// function tellMe(callback){

//     var a = 1000; 
//     var b = 2000; 

//     callback() // the 'callback, its run the function i give it 
// }


// tellMe(function(){
//     console.log('Im done!')
// })

 // ------------------------.bind(), .apply(), .call(),-----------------------------------------//
 
// var person ={
//     firstname: 'Ylli',
//     lastname: 'Citaku',
//     getFullName: function(){
//         var fullname = this.firstname + ' ' + this.lastname
//         return fullname;
//     }
// }

// var logName = function(lang1, lang2){
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' +lang2);
//     console.log('- - - - - - - - - - - - - - ')
// }

// var logPersonName = logName.bind(person);  // .bind creates a copy of whatever function you are calling it on and tell what the "THIS" variable is. And returns a new function

// logPersonName('en', 'shqip');


// logName.call(person, 'en', 'es'); //.call() it calls a function but also lets me to decide what the this variable will be
// logName.apply(person, ['en', 'germ']) //same as call method, but arguments should be on array

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // Function borrowing (creating a copy of a function but with some preset parameters)
// var person2 = {
//     firstname: 'Eno',
//     lastname: 'Krasniqi'
// }

// console.log(person.getFullName.apply(person2));
// // we took getFullname method from person with apply method and use it on person2

// // Function currying

// function multiply(a,b){
//     return a*b;
// }


// var multipleByTwo = multiply.bind(this,2); // this is the variable a

// console.log(multipleByTwo(4))


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 
// function mapForEach(arr, fn){
//     var newArr = [];
//     for(var i =0; i < arr.length; i++ ){
//         newArr.push(
//             fn(arr[i])
//         )
//     };
//     return newArr;
// }

// var arr1 = [1, 2, 3];
// console.log(arr1);

// var arr2 = mapForEach(arr1, function(item){ // we called a function (mapForEach), gave it an array and told it what to do in each item in the array
//     return item*2
// })

// console.log(arr2)

// var arr3 = mapForEach(arr1, function(item){ 
//     return item > 2 // Krahasimin e arr1, pra na kthen boolean(true), cdo array element qe osht ma i madh se dy. Te kunderten; false
// })
// console.log(arr3);

// var checkPastLimit = function(limiter, item){
//     return item > limiter;
// }

// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr4);

// var checkPastLimitSimplified = function(limiter){
//     return function(limiter, item){
//         return item > limiter;
//     }.bind(this, limiter)
// };

// var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
// console.log(arr5);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// underscorejs.org 

// var arr6 = _.map(arr1, function(item){
//     return item *3
// });

// console.log(arr6);

// var arr7 = _.filter([2,3,4,5,6,7], function(item){
//     return item % 2 ===0; //jep mbetjen 0 gjate pjesimit me 2
// });

// console.log(arr7)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// var person ={
//     firstname: 'Default',
//     lastname: 'Default',
//     getFullName: function(){
//         return this.firstname + ' ' + this.lastname;
//     }
// }

// var ylli = {
//     firstname: 'Ylli',
//     lastname: 'Citaku'
// }

// // we dont do that EVER, only for demo purposes

// ylli.__proto__ = person;

// console.log(ylli.getFullName()); // it doesnt find getFullName on ylli, thas why it looks on person
// console.log(ylli.lastname) // We dont get Default, because of prototype chain

// var jane = {
//     firstname: 'Jane'
// }

// jane.__proto__ = person;
// console.log(jane.getFullName()); // We get Jane Default

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// function Person (firstname, lastname){
    
//     console.log(this)
//     this.firstname = firstname,
//     this.lastname = lastname;
//     console.log('This function is invoked');
// }

// Person.prototype.getFullName = function(){
//     return this.firstname + ' ' + this.lastname;
// }


// var ylli = new Person('Ylli', 'citaku');
// console.log(ylli);

// var eno = new Person('Eno', 'Kras'); //new krijon objekt te ri
// console.log(eno);

// Person.prototype.getFormatFullName = function(){ //ne ket rast getFormat.. i shtohet Person
//     return this.lastname + ', ' + this.firstname;
// }

// console.log(eno.getFormatFullName());


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// String.prototype.isLengthGreaterThan = function(limit){
//     return  this.length > limit;
// }

// console.log('ylli'.isLengthGreaterThan(2));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// var arr = ['Tony', 'Pit', 'Jim'];

// for (var prop in arr){
//     console.log(prop + ': ' + arr[prop])
// }


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
// var person = {
//     firstname: 'Defautl',
//     lastname: 'Default',
//     greet:function(){
//         return 'Hi ' + this.firstname;
//     }
// }

// var ylli = Object.create(person); //Creates an empty object with its prototype pointing at whatever I passed into Object.creaate()
// ylli.firstname = 'Ylli';
// ylli.lastname = 'Citaku';
// console.log(ylli)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// var q = $('ul.people').addClass("newclass").removeClass('people');
// console.log(q);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// const PENDING = 0;
// const FULLFILLED = 1;
// const REJECTED = 2;


// function CustomPromise(executor){
//     let state = PENDING;
//     let value = null;
//     let handlers = [];
//     let catches = [];

//     function resolve(result){
//         if(state !== PENDING) return;
        
//             state = FULLFILLED;
//             value = result;
        
//             handlers.forEach((h)=>h(value))
//     }

//     function reject(err){
//         if(state !== PENDING) return;

//         state = REJECTED;
//         value = err;

//         catches.forEach((c)=>c(err));
//     }

//     this.then = function(callback){
//         if(state === FULLFILLED){
//             callback(value);
//         } else{
//             handlers.push(callback);
//         }
//     }

//     executor(resolve, reject);
// }


// const doWork =(res, rej)=>{
//     setTimeout(() => { res ("Hello world")},1000)

// }
// let someText = new CustomPromise(doWork);

// someText.then((val) => {
//     console.log('First log: ' + val)
// });

// someText.then((val)=>{
//     console.log('Second log: ' + val)
// })

// setTimeout(()=>{
//     someText.then((val)=>{
//         console.log('Third log: ' + val)
//     })
    
// },3000)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// const doWork =(resolve, reject) =>{
//     setTimeout(()=>{resolve('Hello world')}, 1000);
// }

// const doOtherWork =(resolve, reject) =>{
//     setTimeout(()=>{resolve('How are you')}, 3000);
// }


// let someText = new Promise(doWork);
//  someText
// .then((val)=>{
//     console.log('First log: ' + val);
//     return new Promise(doOtherWork)
// })
// .then((val)=>{
//     console.log(val)
// })



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// fetch('db.json')
// .then(response => response.json())
// .then(data => console.log(data))




const doWork =(resolve, reject) =>{
    setTimeout(()=>{resolve('Hello world')}, 1000);
};

const doOtherWork =(resolve, reject) =>{
    setTimeout(()=>{resolve('How are you')}, 1000);
};


async function doAllTheWork(){
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1);

    const otherText = new Promise(doOtherWork);
    const text2 = await otherText;
    console.log(text2);
}

doAllTheWork();
console.log("Done!");










