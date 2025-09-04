function pakiBhai(man,patro,patri){
    //console.log('ok boss i am trying',man)
    if(patri){
        man(patro)
    }
    else{
        console.log('vert sad')
    }
}

function callSomeone(person){
    console.log('calling',person);
}
callSomeone('naiem')
pakiBhai(callSomeone,'alfa','bita')