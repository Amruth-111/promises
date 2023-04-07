//promise
console.log('person 1 shows ticket');

console.log('person 2 shows ticket');

let wifebringsticket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket")
    },1000)
})
const getpopcorn=wifebringsticket.then((t)=>{
    console.log("wife : i have tickets")
    console.log("husband :we should go in");
    console.log("wife: No iam hungry");

    return new Promise((resolve, reject)=>{
        resolve(`${t},popcorn`);
    })

})
const getbutter=getpopcorn.then((t)=>{
    console.log("i have got some popcorn");
    console.log("husband :we should go in");
    console.log("wife: i need butter in my popcorn");

    return new Promise((resolve, reject)=>{
        resolve(`${t},butter`);
    });
})

const getcolddrinks=getbutter.then((t)=>{
    console.log("husband:now can we please get in");
    console.log("wife:no baby i need colddrinks");
    console.log("uffooo okay i will get it");

    return new Promise((resolve, reject)=>{resolve(`${t},i have bought u coldrinks`)})
})
getcolddrinks.then((t)=>{
    console.log(t);
})

console.log('person 4 shows ticket');

console.log('person 5 shows ticket');

// wifebringsticket.then((t)=>{
//     console.log(`person 3 shows ${t}`);
// })
