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

//my code
var arr=[4,6,5,8,0,4,0,9,5];

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


//sir code
var corret=[];
arr.sort()  // [0,0,3,3,4,5,5,8,9];
var final=[]

for(var i=0;i<arr.length;i++){
  // console.log('array output',arr[i])

  var j=i+1;
  var y=i-1;
  if(arr[y]!==arr[i] && arr[i]!==arr[j])
  {
    final.push(arr[i])
  }
 
}
var corret=[];
