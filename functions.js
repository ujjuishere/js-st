//function is one package that can be used multiple times

function saymyname(){
    console.log("Your_name")
}

function userloginmsg(username){
    return `${username} just logged in`
}
console.log(userloginmsg("hitesh"))

function calculate(num1){
    return num1
}

console.log(calculate(8));
// but what if we need to pass more than one

function calc(...num1){
    return num1;
}

console.log(calc(200,400,500));

// (...) is a rest operator, apne aap append ho jaati hai

const user = {
    username: "ujjwal",
    price: 199
}

function handleobj(anyobj){
    console.log(`User name is ${anyobj.username} and price is ${anyobj.price}`);
    
}
 handleobj(user)