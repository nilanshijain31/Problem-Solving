// Write a code for a e-commerce website creating a consumer's and producer's part with the help of promise and promise chaining
const cart = ["shoes","jeans","suits"];

const promise = createOrder(cart); //orderId

promise
 .then(function(orderId) {
    console.log(orderId);
    return orderId;
 })
 .then(function(orderId) {
    return proceedToPayment(orderId);
 })
 .then(function(paymentInfo) {
    console.log(paymentInfo);
 })
 .catch(function (err) {
    console.log(err.message);
 });


 /// Producer

function createOrder (cart) {
    const pr = new Promise (function (resolve, reject) {
        // createOrser
        // validateCart
        //orderId
        if (!validateCart (cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }
        // Logic for createOrder
        const orderId ='12345';
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    ///
    return new Promise(function (resolve, reject) {
        resolve ("Payment Successful");
    });
}

function validateCart(cart) {
    return true;
}
