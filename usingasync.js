function buycar(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve("buycar")
    },5000)
    })
}
function manali(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve("plan a trip to manali")
    },2000)
    })
    
}

function reachedmanali(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve("reached manali !!!!")
    },3000)
    })
}

function manalifood(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve("eat tasty food at manali !!!!")
    },2000)
    })
}

async function fun1(){
    const msg=await buycar();
    console.log(msg);
    const msg1=await manali();
    console.log(msg1);
    const msg2=await reachedmanali();
    console.log(msg2);
    const msg3=await manalifood();
    console.log(msg3);
}

fun1();
