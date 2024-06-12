// Print the numbers 1, 2, 3, 4, 5 with each number printed after a corresponding delay of 1 second, 2 seconds, and so on.

function x() {
    for (var i=1; i <=5; i++) {
        function close (x) {
            setTimeout(function (){
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }

    console.log("Nilanshi Jain");
}
x();