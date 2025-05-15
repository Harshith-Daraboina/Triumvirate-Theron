class Promise2{
    constructor(fn){
        this.fn=fn;
        this.fn(() => {
            // console.log("Promisified!");
            this.resolves.forEach((fn) => fn());
        })
    }

    then(fn){
        if (!this.resolves){
            this.resolves =[];
        }
        this.resolves.push(fn);
    }
}
function setTimeoutPromisified(duration){
    return new Promise2( function (resolve){
        console.log(resolve);
        setTimeout(resolve , duration);
    })
}

setTimeoutPromisified(3000).then(function (){
    console.log("hello!");
    setTimeoutPromisified(3000).then(function (){
        console.log("hi there!");
        setTimeoutPromisified(3000).then(function (){
            console.log("How are you!");
        })
    })
})