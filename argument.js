function add (a,b){
    const sum=a+b;
    //console.log(a,b);
    console.log(arguments)
    const para=[...arguments]
    console.log(para)
}
add(3,4,7);