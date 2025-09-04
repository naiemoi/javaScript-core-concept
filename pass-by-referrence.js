const mamun={name:'mamun',cash:44444};
const ratan={name:'ratan',cash:333333}
console.log('before the function',mamun,ratan)
//non premitive values are passed by referrenced
function totalMoney(person1,person2){
    person1.cash=0;
    person2.cash=person2.cash/2;
    const totalMoney=person1.cash+person2.cash
    return totalMoney

}
const balance=totalMoney(mamun,ratan)
console.log('the balnce',balance)
console.log('after the function',mamun,ratan)