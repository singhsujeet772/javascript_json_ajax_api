const url = `https://jsonplaceholder.typicode.com/posts`;

function onfulFilMent(result){
    console.log(result);
}

function onRejection(error){
    console.log(error);
}

function prom(complete){
    return new Promise(function(resolve,reject){
        console.log(`Fetching Data, Please wait...`)
        setTimeout(() => {
            if(complete){
                resolve('Promise Resolved');
            }else{
                reject('Error in Promise');
            }
        }, 5000);
    });
}


prom(false).then(onfulFilMent).catch(onRejection);