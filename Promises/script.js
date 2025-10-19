const promise1= new Promise((response,reject)=>{
    setTimeout(()=>{
        console.log("Inside promise")
        response()
    },3000)
})
promise1.then(()=>{
    console.log("Promise consumed")
})

const promise2 = new Promise((response,reject)=>{
    setTimeout(()=>{
        response({username:"Govind kumar", password:"@dkjkjvb347"})
    },1000)
})

promise2.then((res)=>{
    console.log(res);
    console.log(res.username);
    console.log(res.password);
})