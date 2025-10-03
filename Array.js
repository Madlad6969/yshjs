// let arr=[]

// for(let i=0;i<= 10;i++){
//     arr[i]=i
    
// }

// console.log(arr);
// console.log(arr[4]);

// let arr=[32,62,35,46,92,45]


//  let max=0
// for(let i=0;i<arr.length;i++){
//     max=Math.max(max,arr[i])
    
// }
// console.log(max);



// let difference=Infinity
// let index=0
// let secondlargest=0

// for(let i=0;i<arr.length;i++){

//     if(arr[i]==max)continue
//     difference=Math.min(difference,max-arr[i])

//     index=arr.indexOf(max-difference)
// }

// secondlargest=arr[index]
// console.log(secondlargest);

// let sortedArray=arr.sort()
// console.log(arr.length-2);



let arr=[23,45,46,74,32]

n=arr.length
let first=0
let last=n-1

while(last>=first){
    let temp=arr[last]
    arr[first]=arr[last]
    arr[last]=temp
    first++
    last --

}
console.log(arr);
