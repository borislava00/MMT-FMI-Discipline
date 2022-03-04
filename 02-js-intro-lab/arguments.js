function foo(x, y) {
    console.log(x, y);
    for (const arg of arguments) {
        console.log(arg);
    }

    //let args = Array.prototype.slice.bind(arguments)();
    let args = Array.from(arguments);
    let sum = args.reduce((a,x) => a * x);
    console.log(sum);
}

foo(1,2,3,4,5);