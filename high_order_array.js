const arr = [1,2,3,4,5]

// for(const num of arr)
// {
//     console.log(num);
// }

// const greetings = "Hello worlds"
// for(const greet of greetings ){
//     console.log(`Each char ${greet}`)
// }
// Map stores unique values

const map = new Map()
map.set('IN', "India")
map.set('US', "United state")
map.set('Fr', "France")
// console.log(map);

const my_obs = {
    game1: "GAme1",
    game2: "Hulk"
}
for(const [key,value] of my_obs){
    console.log(key);  
}

