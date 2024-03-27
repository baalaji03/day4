//1.ODD NUMBER FROM GIVEN ARRAY:
// NORMAL FUNCTION METHOD:
// var result=[];
// function odd(arr)
// {
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//         result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//Anonymous Function:
// var result=[];
// var odd = function (arr)
// {
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//         result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(odd([1,2,3,4,5,6,7,8,9,10,11]));

//IIFE FUNCTION:
// var result=[];
// (function(arr)
// {
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//         result.push(arr[i]);
//         }
//     }
//     console.log(result);
// }
// )
// ([1,2,3,4,5,6,7,8,9,10,11,12,13]);
//--------------------------------------------------------------------------------------
//2.Convert all the strings to title caps in a string array 

// Normal function:

// function title(arr)
// {
//   var b=[];
//   for(var i=0;i<arr.length;i++)
//   {
//     if(i===0)
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else if(arr[i-1]===" ")
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else
//     {
//       b[i]=arr[i];
//     }
//   }
//     var str=b.join('');
//     return str;
//   }
// console.log(title("welcome to javascript"));

//Anonymous Function:

// var  title=function(arr)
// {
//   var b=[];
//   for(var i=0;i<arr.length;i++)
//   {
//     if(i===0)
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else if(arr[i-1]===" ")
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else
//     {
//       b[i]=arr[i];
//     }
//   }
//     var str=b.join('');
//     return str;
//   }
// console.log(title("welcome to javascript"));

//IIFE FUNCTION:

// console.log((function(arr)
// {
//   var b=[];
//   for(var i=0;i<arr.length;i++)
//   {
//     if(i===0)
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else if(arr[i-1]===" ")
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else
//     {
//       b[i]=arr[i];
//     }
//   }
//     var str=b.join('');
//     return str;
//   })
//   ("welcome to javascript"));

//--------------------------------------------------------------------------------------
//3.Sum of all the numbers in an array

//Normal function:

// var result =0;
// function sum(arr)
// {
//     for(var i=0;i<arr.length;i++)
//     {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));

//Anonymous Function:

// var result =0;
// var sum=function(arr)
// {
//     for(var i=0;i<arr.length;i++)
//     {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));

//IIFE FUNCTION:

// var result =0;
// (function(arr)
// {
//     for(var i=0;i<arr.length;i++)
//     {
//         result += arr[i];
//     }
//     console.log(result);
// }
// )
// ([1,2,3,4,5,6,7,8,9,10]);

//--------------------------------------------------------------------------------------
//4.Return all the prime numbers in an array:

//Normal Function:
//  function prime(arr)
// {
//     for(var i=0;i<arr.length;i++)
//     {
//         var flag=0;
        
//             for(var j=2;j<arr[i];j++)
//             {
//                 if(+arr[i]%j===0)
//                 {
//                     flag=1;
//                     break;
//                 }
//             }
//             if(flag===0)
//             {
//               process.stdout.write(arr[i]+" ");
              
//             }
//     }
    
//  }
//  prime([1,2,3,4,5,6,7,8,9,10,11,12,15,17,19,21,27,29,31,37]);

//Anonymous Function:
// var prime=function(arr)
// {
//    for(var i=0;i<arr.length;i++)
//    {
//        var flag=0;
       
//            for(var j=2;j<arr[i];j++)
//            {
//                if(+arr[i]%j===0)
//                {
//                    flag=1;
//                    break;
//                }
//            }
//            if(flag===0)
//            {
//              process.stdout.write(arr[i]+" ");
             
//            }
//    }
   
// }
// prime([1,2,3,4,5,6,7,8,9,10,11,12,15,17,19,21,27,29,31,37]);

//IIFE FUNCTION:

// (function(arr)
// {
//    for(var i=0;i<arr.length;i++)
//    {
//        var flag=0;
       
//            for(var j=2;j<arr[i];j++)
//            {
//                if(+arr[i]%j===0)
//                {
//                    flag=1;
//                    break;
//                }
//            }
//            if(flag===0)
//            {
//              process.stdout.write(arr[i]+" ");
             
//            }
//    }
   
// }
// ([1,2,3,4,5,6,7,8,9,10,11,12,15,17,19,21,27,29,31,37]);

//--------------------------------------------------------------------------------------

//5.Return all the Palindromes in an array:

//Normal function:
// function palin(arr)
// {
//   for(var i=0;i<arr.length;i++)
//   {
//     var a=arr[i].split("").reverse().join("");
   
//     if(arr[i]===a)
//     {
//       console.log("palindrome");
//     }
//     else
//     {
//       console.log("not palindrome");
//     }
//   }
// }
// palin(["mam","bike","madam","racecar","bala","malayalam"]);

//Anonymous Function:
// var palin=function(arr)
// {
//   for(var i=0;i<arr.length;i++)
//   {
//     var a=arr[i].split("").reverse().join("");
   
//     if(arr[i]===a)
//     {
//       console.log("palindrome");
//     }
//     else
//     {
//       console.log("not palindrome");
//     }
//   }
// }
// palin(["mam","bike","madam","racecar","bala","malayalam"]);

//IIFE FUNCTION:
// (function(arr)
// {
//   for(var i=0;i<arr.length;i++)
//   {
//     var a=arr[i].split("").reverse().join("");
   
//     if(arr[i]===a)
//     {
//       console.log("palindrome");
//     }
//     else
//     {
//       console.log("not palindrome");
//     }
//   }
// })
// (["mam","bike","madam","racecar","baab","bala","malayalam"]);

//--------------------------------------------------------------------------------------

// 6.Return median of two sorted arrays of the same size.

//Normal function:

// function median(arr)
// {
//   var n=arr.length;
//   var med;
//   if(n%2===0)
//   {
//     med=(arr[(n/2)-1]+arr[((n/2)+1)-1])/2;
    
//   }
//   else
//   {
//     med=arr[((n+1)/2)-1];
//   }
//   return med;
// }
// var arr1=[1,2,3,4];
// var arr2=[5,6,7,8];
// var arr3=arr1.concat(arr2);
// arr3.sort(function (a,b) {
//    return a-b;
//});
// console.log(median(arr3));

//Anonymous Function:

// var median=function(arr)
// {
//   var n=arr.length;
//   var med;
//   if(n%2===0)
//   {
//     med=(arr[(n/2)-1]+arr[((n/2)+1)-1])/2;
    
//   }
//   else
//   {
//     med=arr[((n+1)/2)-1];
//   }
//   return med;
// }
// var arr1=[1,2,3,4];
// var arr2=[5,6,7,8,9];
// var arr3=arr1.concat(arr2);
// arr3.sort(function (a,b) {
//    return a-b;
//});
// console.log(median(arr3));

//IIFE FUNCTION:

// console.log((function(arr1,arr2)
// {
//  var arr3=arr1.concat(arr2);
// arr3.sort(function(a,b) {
//   return a-b;
// });
//   var n=arr3.length;
//   var med;
//   if(n%2===0)
//   {
//     med=(arr3[(n/2)-1]+arr3[((n/2)+1)-1])/2;
    
//   }
//   else
//   {
//     med=arr3[((n+1)/2)-1];
//   }
//   return med;
// })
// ([1,4,6,8,9],[2,3,5,7,10]));

//--------------------------------------------------------------------------------------

//7.Remove duplicates from an array:

//Normal Function: 
// function dup(arr)
// {
//   return Array.from(new Set(arr));
// }
// console.log(dup([1,1,2,3,3,4,5,6,5,3,8,7,9]));

//Anonymous Function:
// var dup=function(arr)
// {
//   return Array.from(new Set(arr));
// }
// console.log(dup([1,1,2,3,3,4,5,6,5,3,8,7,9]));

//IIFE FUNCTION:
// console.log((function(arr)
// {
//   return Array.from(new Set(arr));
// })
// ([1,1,2,3,3,4,5,6,5,3,8,7,9]));

//--------------------------------------------------------------------------------------

//8.Rotate an array K times:

//Normal Function: 

// function rotate(arr)
// {
// var n=arr.length;
// var k=n;
// for(var i=0;i<k;i++)
// {
// var s=arr.shift();
// arr.push(s)
// }
// return arr;
// }
// var str=[1,2,3,4];
// console.log(rotate(str));

//Anonymous Function:

// var rotate=function(arr)
// {
// var n=arr.length;
// var k=n;
// for(var i=0;i<k;i++)
// {
// var s=arr.shift();
// arr.push(s)
// }
// return arr;
// }
// var str=[1,2,3,4];
// console.log(rotate(str));


//IIFE FUNCTION:

// var rotate=(arr)=>
// {
// var n=arr.length;
// var k=n;
// for(var i=0;i<k;i++)
// {
// var s=arr.shift();
// arr.push(s)
// }
// return arr;
// }
// var str=[1,2,3,4];
// console.log(rotate(str));


//--------------------------------------------------------------------------------------

//ARROW FUNCTION:

//1.ODD NUMBER FROM GIVEN ARRAY:

// var result=[];
// var odd=(arr)=>
// {
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!==0){
//         result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//--------------------------------------------------------------------------------------

//2.Convert all the strings to title caps in a string array:

// var title=(arr)=>
// {
//   var b=[];
//   for(var i=0;i<arr.length;i++)
//   {
//     if(i===0)
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else if(arr[i-1]===" ")
//     {
//       b[i]=arr[i].toUpperCase();
//     }
//     else
//     {
//       b[i]=arr[i];
//     }
//   }
//     var str=b.join('');
//     return str;
//   }
// console.log(title("welcome to javascript"));

//--------------------------------------------------------------------------------------

//3.Sum of all the numbers in an array

// var result =0;
// var sum=(arr)=>
// {
//     for(var i=0;i<arr.length;i++)
//     {
//         result += arr[i];
//     }
//     return result;
// }
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));

//--------------------------------------------------------------------------------------

//4.Return all the prime numbers in an array:

//  var prime=(arr)=>
// {
//     for(var i=0;i<arr.length;i++)
//     {
//         var flag=0;
        
//             for(var j=2;j<arr[i];j++)
//             {
//                 if(+arr[i]%j===0)
//                 {
//                     flag=1;
//                     break;
//                 }
//             }
//             if(flag===0)
//             {
//               process.stdout.write(arr[i]+" ");
              
//             }
//     }
    
//  }
//  prime([1,2,3,4,5,6,7,8,9,10,11,12,15,17,19,21,27,29,31,37]);

//--------------------------------------------------------------------------------------

//5.Return all the Palindromes in an array:

// var palin=(arr)=>
// {
//   for(var i=0;i<arr.length;i++)
//   {
//     var a=arr[i].split("").reverse().join("");
   
//     if(arr[i]===a)
//     {
//       console.log("palindrome");
//     }
//     else
//     {
//       console.log("not palindrome");
//     }
//   }
// }
// palin(["mam","bike","madam","racecar","bala","malayalam"]);
