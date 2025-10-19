let a=4;
a.name=6;// this saves the property but imidietly discards it because a.name is primitive
console.log(a);

console.log(a.__proto__.name);//this will look for Number.prototypes
console.log(a.name);

// we save the property if be declare itr like object 
let b=new Number(6);
b.name="Govind";
console.log(b.name);

function check(){
    console.log("Hello proto");  
}
check.username="govind"
console.log(typeof check);
console.log(check.username);

