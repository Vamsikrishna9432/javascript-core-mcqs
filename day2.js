 /*
 shortest javascript program and how you say it is shortest javascript program.
 what is hoisting and what is the use of hoisting?
 which type of language is javascript? 
 what is temmporal dead zone in javascript? when it occurs.
 explain scope, lexical environment and scope chain?
 what is block an block scope and where it is used?
 what is execution context? explain about it.
 what are clousers? when we use clousers. 
 what is call stack in javascript?
 what is event loop, callback queue, microtask queue?
 what are diffrent types of functions? explain them. 
 */



 // Question 1 

 console.log(Ques1);
 QuestFn1();

 var Ques1 = "Question 1";

 function QuestFn1(){
      console.log("Question Function 1");
 }

 /* 

 a. undefined
    Question Function 1

 b. error: Not Defined 
    Question Function 1

 c. error: Syntax error

 */

 // Question 2 

 
 QuestFn2();
 
 var QuestFn2 = function() {
      console.log("Question Function 2");
 }

  /*                    
 a. Question Function 2

 b. error: Syntax error

 c. TypeError : QuestFn2 is not a function
 */

 // Question 3 

 QuestFn3();
 
 var QuestFn3 = () => {
      console.log("Question Function 3");
 }


  /*                    
 a. Question Function 2

 b. error: Syntax error

 c. TypeError : QuestFn2 is not a function
 */

 // Question 4 

 console.log(Quest4);

 let Quest4 = "Question 4";

/*                    
 a. Reference error: Quest4 cannot accesss before value assigned

 b. Syntax error: Quest 4 cannot access before
 
 */

 // Question 5  

 console.log(Quest5);

 const Quest5 = "Question 5";

/*                    
a. Reference error: Quest4 cannot accesss before value assigned

 b. Syntax error: Quest 4 cannot access before
*/

 // Question 6 

 let  Quest6 ;
 
 console.log(Quest6);

 Quest6 = "wert";

 console.log(Quest6);

 Quest6 = function() {
   console.log("Question function 6");
 }

 Quest6();


/*   

 a. error : cannot assign diffrent type to same variable

 b.  undefined 
     wert 
     Question Function 6

*/

 // Question 7 
 
 const Quest7;              // correct or false
 const Quest7 = "vamsi";     
 Quest7 = 10000;   

/*                    
 a. 
 b. 
 c.
*/

 // Question 8  

 var a = 10;
 var a = "vamsi krishna";
 var a = function(){
    console.log("a is printed")
 }

 console.log(a); 


/*                    
 a. 
 b. 
 c.
*/

 // Question 9

 let a = 10;
 let a = "vamsi krishna";
console.log(a);

 /*                    
 a. 
 b. 
 c.
 */

// Question 10 

let Quest10 = "vamsi";
var Quest10 = "Hskjx";


 /*                    
 a. 
 b. 
 c.
 */

// Question 11 

var Quest11 = "11";

{
   var Quest11 = "11";
}

 /*                    
 a. 
 b. 
 c.
 */


// Questio 12  


let Quest12 = "11";

{
   var Quest12 = "11";
}


 /*                    
 a. 
 b. 
 c.
 */


// Question 13 


function Quest13() {
     var a = 100; 

     function Quest13inside() {
         console.log(a);
     }

     Quest13inside();
}

Quest13();

 /*                    
 a. 
 b. 
 c.
 */

// Question 14

function Quest14() {

   function Quest14inside() {
       console.log(a);
   }

   Quest13inside();
}

Quest14();

 /*                    
 a. 
 b. 
 c.
 */

// Question 15 

function quest15outer() {

      function Quest15() {
      
            function Quest15inside1() {
                console.log(a);
            }
         
            Quest15inside1();
      }

      Quest15();

}

quest15outer(); 


 /*                    
 a. 
 b. 
 c.
 */


// Question 16 

var ab = 100000000;

function Quest16() {
    
   function Quest16inside() {
       console.log(a);
   }
   
   return Quest16inside;
}

Quest16()();


 /*                    
 a. 
 b. 
 c.
 */


// Question 17 

function Quest17() {
    
   function Quest17inside() {
       console.log(a);
   }
   
   return Quest17inside;
}

Quest17()();


 /*                    
 a. 
 b. 
 c.
 */


// question 18 

function quest18outer() {
    var a = 10;

   function Quest15() {
   
         function Quest15inside1() {
             console.log(a);
         }
      
         return Quest15inside1;
   }

   return Quest15;

}

quest15outer()()();  


 /*                    
 a. 
 b. 
 c.
 */

//  Question 19 

console.log("vamsi krishna 1");

setTimeout(() => {
   console.log("vamsi printed after 1 second");
}, 1000);


console.log("vamsi krishna 2");
console.log("vamsi krihna 3");
console.log("vamsi krishna upto 100");

setTimeout(() => {
   console.log("vamsi printed after 0 second");
}, 0);


 /*                    
 a. 
 b. 
 c.
 */

// Question 20 

console.log("vamsi krishna 1");

setTimeout(() => {
   console.log("vamsi printed after 1 second");
}, 1000);


console.log("vamsi krishna 2");
console.log("vamsi krihna 3");
console.log("vamsi krishna upto 100");

fetch("www.google.com")
.then((response) => {
   return response.json();
}).then((data) => {
   console.log(data);
}).catch((err) => {
   console.log(err);
})

setTimeout(() => {
   console.log("vamsi printed after 0 second");
}, 20000);


 /*                    
 a. 
 b. 
 c.
 */