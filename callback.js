var getUser = (id, callback) => {
    var test = {
        id,
        name: "Vikas"
    }

    setTimeout(() => {
        callback(JSON.stringify(test));
    }, 3000);


}

getUser(31, (test) => {
    console.log(`print ${test}`);
})