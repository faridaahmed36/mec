//================================================================
// Question 1.1 ==========================
// function countE(){
//     let word = prompt("Enter a word that consists of letter 'E'");
//     let count=0
//     for (let i=0; i<= word.length; i++){
//         if (word[i] === 'E' || word[i] === 'e') {
//             count++;
//         }

//     }document.writeln("The letter 'E' appears ",count, " times in the word ", word);

// }
// countE()


// Question 1.2 =================================
// function totalSum(){
//     let sum=0
//     let count = +prompt("How many numbers do you want to enter?"); 
//     for (let i = 0; i < count; i++) {
//                 let getNumber = +prompt("Enter a number:"); 
//                 if (getNumber==0 || sum + getNumber > 100){
//                     break;
//                 }
//                 else{
//                     sum+= getNumber

//                 }
//     } document.writeln("Sum of total numbers entered: ", sum)

// }
// totalSum()

// Question 1.3 ================================

// function mathematicalOperation(){
//     let arr = []; 
//     let sum=0;
//     let multiplication = 1;
//     let division;

//     for (let i = 0; i < 3; i++) {
//         let getNumber = +prompt("Enter a number:"); 
//         arr.push(getNumber); 
//         sum+= getNumber;
//         multiplication*= getNumber;
//         //division/= getNumber;
//         division = arr[0] / arr[1] / arr[2];
//     }
//     document.writeln("Sum of 3 values " ,arr, " : " , sum , "<br>")
//     document.writeln("Multiplication of 3 values ",arr, " : ", multiplication, "<br>")
//     document.writeln("Division of 3 values ",arr, " : ", division)

// }
// mathematicalOperation()


// Question 1.3 fizzbuzz=============================
// let num = +prompt("Enter a number:")

//     if (num % 3 == 0 && num % 5 == 0) {
//         document.writeln("Fizz Buzz");
//     } else if (num % 3 == 0) {
//         document.writeln("Fizz");
//     } else if (num % 5 == 0) {
//         document.writeln("Buzz");
//     } else {
//         document.writeln("None");
//     }


// Question 1.4 Who Am I? =================

// let fly=confirm("Do you fly?"); 

// if(fly) 
// {
//     let wild=confirm("Are you wild?") 
//   if(wild)
//   {
//     console.log("Eagle");
    
//   }else{
//     console.log("Parrot");
//   }
// }
// else{
//     let sea=confirm("Do you live under sea?") 
//   if(sea){
//     let wild=confirm("Are you wild?")
//       if(wild)
//         {
//           console.log("Shark");
          
//         }else{
//           console.log("Dolphin");
//         }
//    }
//    else{
//     let wild=confirm("Are you wild?")
//     if(wild)
//       {
//         console.log("Lion");
        
//       }else{
//         console.log("Cat");
//       }

//    }
// }

// Question 1.6 ================================

// function personsNames(names) {      //with help from searching and AI

//     for (let i = names.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [names[i], names[j]] = [names[j], names[i]];
//     }

//     return [names[0], names[1]];
// }

// let names = ["Ahmed", "Islam", "Sandra", "Fatma", "Ali"];
// let randomNames = personsNames(names);
// console.log("Two random names:", randomNames);
