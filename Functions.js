// const { useCallback } = require("react");

// function parameterizedFunction(name="Shyam"){
//     console.log(`Hello ${name}`);
    
// }

// parameterizedFunction();


// function Hobbies(name,...Hobbies){
//     console.log(`My name is ${name} and my hobbies are ${Hobbies}`);
    
// }

// Hobbies("Yatharth","Reading","Video Games")



// function Multiplication(num1,num2){
//     console.log(num1*num2);
    
// }


// Multiplication(78,80)




// function Subtraction(num1,num2){
//     console.log(num1-num2);
    
// }


// Subtraction(9,8)




// setTimeout(function(){
//     console.log("My name is yatharth");
    
// },6000)

let greet =(ysh)=>{

    return ysh()
}

let greetme=()=>{
    console.log("Bonjour!! Je'm'appelle Yatharth");
    
}

greet(greetme);


for(i=0;i<100;i++){
    if(i%3==0)continue;
    else console.log((i));
    
}


for(i=0;i<100;i++){
    if(i==98)break;
    else console.log(i);
    
}

