async = require('async'); 

// require(async); 

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    // result now equals 'done'
});

function myFirstFunction(callback) {
    									console.log( ' myFirstFunction'); 
    callback(null, 'one', 'two');  
}
function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two'
	console.log( ' my-2-Function arg1 =', arg1);     
	console.log( ' my-2-Function arg2 =', arg2);     	
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'three'
                      console.log( ' my-3- Function arg1 =', arg1);     	
    callback(null, 'done');
}


// UNDERSTNDING
function myFirstFunction(callback) {
	//  processing the data / whatever/ mongo 
    callback(null, 'one', 'two');  
}

// you can pass any fooba or any function as a parameter and after //  processing the data / whatever/ mongo 
// it will return  / passed it on to next function after packaaging it wia the callback function. 

