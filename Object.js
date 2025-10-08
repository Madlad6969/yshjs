// let obj={
//     name:"Yatharth",
//     class:"12th grade",
//     roll_no:38,
//     phone_no:+917977600409


// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// for(let key in obj){
//     console.log(`${key}:${obj[key]}`);
    
// }


let obj={
    name:"Yatharth",
    class:"12th grade",
    roll_no:38,
    address:[{
        street:"Devipada",
        city:"Mumbai",
        pincode:400066,
        State:"Maharashtra"
    },

    {
        street:"Yogi nagar",
        city:"Mumbai",
        pincode:400096,
        State:"Maharashtra"


    }


],
address_loop:function(){
    for(let i=0;i<this.address.length;i++){
        console.log(`Address ${i+1}`);
        
        let keys=Object.keys(this.address[i])

        keys.forEach(key=>{
            console.log(`${key}:${obj.address[i][key]}`);
        })
        
        
    }
}


}

// console.log(obj.name);
// console.log(obj.class);
// console.log(obj.roll_no);

// obj.address_loop()
// console.log(Object.entries(obj));

// console.log(Object.entries(obj.address[0]));





//  function greet(){
//    let greeting="hello"
//    function display(){
//     console.log(greeting);
    
//    }
//    display()
// }

// greet()


// let x=90
// let y=9;

// [x,y]=[y,x]
// console.log(x);
// console.log(y);



// function banking(){
//          let deposit=Number(prompt("Enter the amt to deposit"))

//          function checkbalance(){
//             console.log(deposit);
            
//          }


//          function withdraw(){
//              let deposit=Number(prompt("Enter the amt to deposit"))
//             if(withdraw<=checkbalance){
//                 console.log("yes withdraw is possoble");
                
//             }else{
//                 console.log("not possible");
                
//             }
            
//          }


// }




class car{
    constructor(name,color,price,average){
        this.name=name
        this.color=color
        this.price=price
        this.average=average
    }
        display(){
            console.log(this.name);
             console.log(this.color);
              console.log(this.price);
               console.log(this.average);
        }
    
}

let c1=new car("Hyundai","Black","12L",60)
console.log(c1);
let{name,color,price,average}=c1;

class electricCar extends car{
    constructor(Battery_name,Capacity,Charging_time){
        super("Tesla","White","70L",120)
        this.Battery_name=Battery_name
        this.Capacity=Capacity
        this.Charging_time=Charging_time
        
    }
        display(){
            console.log( this.Battery_name);
             console.log(this.Capacity);
              console.log(this.Charging_time);
               
        }
    
}


let e1=new electricCar("xyz","2000kw","20H")
console.log(e1);

// let e1=new electricCar("Tesla","White","70L",120)
// console.log(e1);


// class Student{
//     constructor(name,age,course,fees){
//         this.name=name
//         this.age=age
//         this.course=course
//         this.fees=fees
//     }
//         display(){
//             console.log(this.name);
//              console.log(this.age);
//               console.log(this.course);
//                console.log(this.fees);
//         }
    
// }

// let s1=new Student("Yatharth",22,"React",10000)
// console.log(s1);

