// const array =[
//     {name:"JS",type:"scripting"},
//     {name:"JS",type:"scripting"}

// ]

// console.log(Object.group)




//compard with primitive to non primitive , non primitive will convert to primitive with help of to string() that exists in prototype chaining but below is  not prototype chaining 
//let a; below function will not be execute to make it execute use below
let a={  
   flag:1,
   toString:function(){
    return this.flag++;
   }
}

if(a==1 && a==2) //each time we call a , the flag is incremented and returns 1 , 2,3,4
{
    console.log(":");
}