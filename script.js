//Promises are really useful for doing things in the background that will
//take a really long time like loading images from another server


let p=new Promise((resolve,reject)=>{
    let a=1+2;
    if(a==1)
        resolve('Success')
    else
        reject('Failed')
});




p.then((message)=>{
    console.log('This is the message for promise resolved '+message);
}).catch((message)=>{
    console.log('This is the message for promise rejected '+message);
});