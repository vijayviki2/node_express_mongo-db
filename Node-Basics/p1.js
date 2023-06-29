const  x = 123
let y = 24

if( x > y ) {
    console.log('x is greater than y')
} else {
    console.log(' y is greater than x')
}


//  loop

for(let i=1; i<= 10; i++){
    console.log(x, "*", i , "=", x*i);
}


let users = ["john", "david", "viki", "dom"];
users.forEach(element =>{
    console.log('my name is ', element)
})