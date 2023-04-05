
function buycar(cb1,cb2,cb3){
    
        setTimeout(()=>{console.log("buycar")
        cb1(cb2,cb3);
    },5000)
    
}


function manali(cb2,cb3){
   
        setTimeout(()=>{console.log("plan a trip to manali")
        cb2(cb3);
    },2000)
    
    
}

function reachedmanali(cb3){
   
        setTimeout(()=>{console.log("reached manali !!!!")
        cb3();
    },3000)
    
}

function manalifood(){
   
        setTimeout(()=>{console.log("eat tasty food at manali !!!!")
    },2000)
    
}
buycar(manali,reachedmanali,manalifood);
//output
// buycar
// plan a trip to manali
// reached manali !!!!
// eat tasty food at manali !!!!


