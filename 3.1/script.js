// document.querySelectorAll("h4")[0].innerHTML = "ALL DONE!"
let ctr =0

function callback () {
    document.querySelectorAll("h4")[0].innerHTML = ctr

    console.log(ctr);
    ctr+=1;
    
}

callback();
callback();
callback();
callback();
