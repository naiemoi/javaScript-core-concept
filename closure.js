// function counter(){
//     let count=1;
//     function innerFunction(){

//     }
//     return innerFunction
// }
// const output = counter();
// console.log(output)

function counter (){
    let count=30;
    return function(user){
        count+=1;
        console.log('hello mamma',user,count);
    }
}
// const innerFunction=counter()
// innerFunction()
// innerFunction()

const rahimCounter=counter()
rahimCounter('rahim')
rahimCounter('rahim')  
const karimCounter=counter()
karimCounter('karim')
karimCounter('karim') 
const rahimCounter('rahim')