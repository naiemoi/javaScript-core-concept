let money;
console.log(money)
function add (a,b){
    console.log('value of a and b',a,b);
}
add()
console.log(money)
function add1(a,b){
    if(a===undefined || b===undefined){
        return;
    }
    if(a && b){
        const sum=a+b;
        return sum
    }
}
const result=console.log(add1(3))
const phone={
    brand:'samsung',price:33333
}
console.log(phone.color)
const banks=['sonali','rupali','chitra']
delete banks[1];
console.log(banks[1])
console.log(typeof null)