// Print the numbers 1, 2, 3, 4, 5 with each number printed after a corresponding delay of 1 second, 2 seconds, and so on.

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function (){
            console.log(i);
        }, i* 1000);
    }

    console.log("Nilanshi Jain")
}
x();
