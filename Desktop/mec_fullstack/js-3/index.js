//======================== question 1
// sum=0
// function countMultiples(){
//     for(var i=1; i<=20; i++){
//         if(i%5==0){
//             sum=sum+1
//         }   
//     }document.writeln(sum)
// }

// countMultiples()


//======================== question 2

// function printSquares(){
//     for(var i=1; i<=4; i++){
//         square= i**2
//         document.writeln(i,"^","2 = ",square,  "<br>")

//     }
// }

// printSquares()

//======================== question 3

// sumOdd=0
// function oddSummation(){
//     for(var i=1; i<=12; i++){
//         if(i%2 !=0){
//             sumOdd=i+sumOdd
//         }
//         else{
//             //document.writeln("do not calculate")
//         }

//     }document.writeln(sumOdd)
// }
// oddSummation()

//======================== question 4

// sumEven=0
// function evenSummation(){
//     for(var i=1; i<=12; i++){
//         if(i%2 ==0){
//             sumEven=i+sumEven
//         }
//         else{
//             //document.writeln("do not calculate")
//         }

//     }document.writeln(sumEven)
// }
// evenSummation()


//======================== question 5

// var userName= prompt("enter your name");
// var age= +prompt("enter your age");
// var address=prompt("enter your address"); 

// function printUserData(x,y,z){
//     document.writeln("Name:" , x, "<br>");
//     document.writeln("Age:" , y, "<br>");
//     document.writeln("Address:" , z, "<br>");

// }

// printUserData( userName, age, address)



//======================= question 6


// function printDigitSum() {
//     var num = +(prompt("Enter a number:")); 
//     var sum = 0;

//     while (num > 0) {
//         sum =sum + num % 10; 
//         num = Math.floor(num / 10); 
//     }

//     document.writeln("Sum of digits:" , sum); 
// }


// printDigitSum();