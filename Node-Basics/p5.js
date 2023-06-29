// assert module (package) -> exception (Run time errors) handling

const assert = require('assert')

// assert(10 >  12)

const x =[
    {
        name: "Raj"
    }
];

const y = {
    name: "raj"
};

const z = [
    {
        name: "Raj"
    }
];

assert.deepStrictEqual(x,y) // structure,datatype,propwerty,case

// assert.notDeepStrictEqual(x,z)
