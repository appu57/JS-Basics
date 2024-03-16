//classes are hoisted not initialised

// console.log(name);  throws ReferenceError: Cannot access 'name' before initialization

class name{

}

console.log(name); 


"###############################################################################################################################################################"

const {
    a='default', //assigning default value which will assigned to a,b,c,d,e only if value mapped is undefined or doesn't exist whereas null,false maps as null,false 
    b='default',
    c='default',
    d='default',
    e='default'
} = {a:null,b:undefined,c:false,d:0}

console.log({a,b,c,d,e});