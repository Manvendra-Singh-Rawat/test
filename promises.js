let p = new Promise(resolve, reject)
{
    let a = 1 + 1;

    if(a == 2)
    {
        resolve('success');
    }
    else
    {
        reject('failed');
    }
}

p.then((message) => {console.log("inside then" + message)}).catch((message) => {console.log("in catch" + message)})