// input ky ly package install and use ky ly import
"use strict"
// const ps=require("prompt-sync");
// const prompt=ps();
// var output;
// var input=prompt('Enter size:')

// for(var i=0;i<input;i++)
// {
//    arr[i]=prompt('Enter number:')
// }


var arr=[4,6,5,8,0,4,0,9,5];
// var arr=[3,3,5,8,0,4,0,9,5];
var corret=[];
arr.sort()
var final=[]


for(var i=0;i<arr.length;i++){
  // console.log('array output',arr[i])
  var j=i+1;

  if(arr[i]===arr[j])
  {
   
    corret=arr[i]
    
  }
  if(corret!==arr[i])
    {    final.push(arr[i])
    }
}

console.log(final)


  // console.log(corret)


/*this code

// var final = [];  //big O    <= time complexcity    log n^2
// for(var i=0;i<arr.length;i++)
// {
//   var isFind = false;
  
    // console.log('output=  '+arr[i])   
//     var j;
//     for(j=0;j<arr.length;j++)
//     {
//             if(i !== j)
//             {
//                if(arr[i]===arr[j])
//                {
//                 console.log("first",i , j , isFind)
//                 isFind = true;
//                 }
//               }
//         }
       
//     if(isFind===false)
//     {
//       final.push(arr[i])
   
//     }
// }
// console.log(final)

end
*/
    //   sort 
    //  current value = privous next element && value k sath compare













   //extra  code

  //      var final=final+' '+arr[i]
  //      {
  //      var br='['
  //      var sec=']'
     
  //      }   
  //      var final2=br+final+sec
      
  // }
  // console.log(final2)

// var let const  difference
// hoisting   

// var final ;

//   var arr=[1,2,3,4,5,5,4]
//   for(var i=0;i<arr.length;i++)
//     {
//      final=final+' '+arr[i]
//     }
//     var br='['
//     var sec=']'
//     var final2=br+final+sec
//      console.log(final2)
    
// uniqueArray = a.filter(function(item, pos) {
//         return a.indexOf(item) == pos;
//     })
// var array = [1, 3,2,3];






// console.log([...new Set(
//   array.filter((item, pos) => array.indexOf(item) === pos))])


//     let ar = [2,4,7,8,9,8,9,7,4];

//         // Do XOR of all elements and return
//         let res = ar[0];
//         for (let i = 1; i < ar.length; i++)
//         {
//             res=res^ar[i];
//         }
 
// Driver code 
      
        // console.log(
        //    '[' + (res)+']');