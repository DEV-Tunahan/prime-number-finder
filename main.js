let count = 2;
function isPrime(){
    for (let divider = 2; divider < count; divider++){
        if (count % divider == 0){
            return false;
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