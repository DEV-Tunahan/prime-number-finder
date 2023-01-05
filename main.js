let count = 2;
function isPrime(){
    for (let divider = 2; divider < (count / 2); divider++){
        if (count % divider == 0){
            return false;
            // break;
    }
}
    return true;
}

while (count <= 1000000){
    if (isPrime() == true){
        console.log (count);
    }
    count++;
}

setInterval(function() {
    console.log("timer that keeps nodejs processing running");
}, 1000 * 60 * 60);

// create an input field

