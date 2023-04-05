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

buycar().then((msg)=>{
    console.log(msg);
    manali().then((msg)=>{
        console.log(msg);
        reachedmanali().then((msg)=>{
            console.log(msg);
            manalifood().then((msg)=>{
                console.log(msg);
            })
        })

    })
})

// OUTPUT
// buycar
// plan a trip to manali
// reached manali !!!!
// eat tasty food at manali !!!!



//