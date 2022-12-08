

let pro1 = new Promise(function (resolve, reject) {
    let x = 10
    let y = 10
    if (x == y) {
        resolve('I am solved')
    }
    else {
        reject('I am rejected')
    }
})

pro1.then(function(str){
    console.log(str)
}),function(str2){
    console.log(str2)
}