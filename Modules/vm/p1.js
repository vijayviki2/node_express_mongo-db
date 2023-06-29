const vm = require('vm')

let user = {
    name : "Raj",
    email : "raj@gmail.com",
    mobile : "9087654321"
}

console.log('before =',user)

vm.createContext(user)
vm.runInContext(`name="Ram" ; email="ram@gmail"`, user)

console.log('after=',user)