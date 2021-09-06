// input ky ly package install and use ky ly import
"use strict"
const ps=require("prompt-sync");
const prompt=ps();
var input=prompt('Enter size:')
var arr=[];

for(var i=0;i<input;i++)
{
   arr[i]=prompt('Enter number:')
}
 for(var i=0;i<arr.length;i++)
{
  
//     console.log('output=  '+arr[i])   
    var j;
    for(j=0;j<arr.length;j++)
    {
            if(i===j)
            {
                    continue
            }
            if(arr[i]===arr[j])
            {
                    break
            }
    }
    if(j===arr.length)
    {
            console.log('\none time out::'+arr[i])
    }
    
  }
  
           
 


