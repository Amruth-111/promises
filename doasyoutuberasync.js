async function movie()
{

console.log('person 1 shows ticket');

console.log('person 2 shows ticket');
const premovie=async() =>{
    let wifebringsticket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket")
        },1000)
    })
    const getpopcorn=new Promise((resolve, reject)=>{
            resolve(`popcorn`);

        })
    const getbutter=new Promise((resolve, reject)=>{
        resolve(`butter`);
    });

    const getcolddrinks= new Promise((resolve, reject)=>
    {
        resolve(` coldrinks`)
    });

    
    
    let ticket=await wifebringsticket;
    console.log("wife : i have tickets")
    console.log("husband :we should go in");
    console.log("wife: No iam hungry");
    
    let popcorn=await getpopcorn;

    console.log(`i have got some ${popcorn}`);
    console.log("husband :we should go in");
    console.log("wife: i need butter in my popcorn");

    let butter=await getbutter;

    console.log(`husband:i have got ${butter} on popcorn popcorn`);
    console.log("husband :we should go in");
    console.log("wife :no i need coldrinks");
   
    let colddrinks = await getcolddrinks;
    console.log("husband:uffooo okay i will get it");
    console.log(`husband:yeh lo ${colddrinks}`);
    console.log("wife :sure lets gooooooooooooooooo");
  
    
    return ticket;
};

premovie().then((n) =>{
    console.log(`person 3 shows the ${n}`);
})

console.log('person 4 shows ticket');

console.log('person 5 shows ticket');
}

movie();