//================== Q1

// arr=[5,13,2,6,7,8]
// var maxNumber=0

// for (var i=1; i< arr.length; i++)
//     {
//         if(arr[i]>maxNumber){
//             maxNumber=arr[i]
//         }

// } document.writeln("The maximum value is: " + maxNumber)


//================= Q2

// function getPositiveNumber() {
//     var count = +prompt("How many numbers do you want to enter?"); 
//     var arr = []; 

//     for (var i = 0; i < count; i++) {
//         var getNumber = +prompt("Enter a number:"); 
//         arr.push(getNumber); 
//     }

//     return arr.filter(function (num) {
//         return num > 0;
//     });
// }

// var positiveNumbers = getPositiveNumber();
// document.write("Positive Numbers: " , positiveNumbers);


//================ Q3

// arr=[10,20,30,40]
// var sum=0

// for(var i=0; i<arr.length; i++){

//     sum+= arr[i]

// } //document.write(sum, "<br>")
// var avg=sum/arr.length 
// document.writeln("Average of numbers: ",avg)


//================ Q4 option 1

// arr=[10,20,30,40]
// var sum=0

// for(var i=0; i<arr.length; i++){

//     sum+= arr[i]

// } document.write(sum, "<br>")

//==========================================  option 2
// function summation(){

//     var arr = [];
//     var getNumber;
//     var sum=0;
//     var count = +prompt("How many numbers do you want to sum?"); 

//     for (var i = 0; i < count; i++){
//          getNumber= +prompt("Enter a number:")
//          arr.push(getNumber);
//          sum+= getNumber;
    
//     } document.write("sum: ",sum, "<br>")
// }
// summation();




//=========================== Q5

// var num=17;
// function checkPrime(number){

//     if (number <= 1) {
//         return false; 
//     }

//     for (var i = 2; i <= num; i++) {
//         if (number % i === 0) {
//             return false; 
//         }
//     }


//     return true;
// }

// checkPrime();
