const token_receive_time = 1680758930991
const currentDateTime  = new Date();
const validTime = new Date(currentDateTime - 5 * 60000);
const tokenReceiveDateTime = new Date(token_receive_time);

// var today  = new Date(1680757342292);

// var MS_PER_MINUTE = 60000;
// var myStartDate = new Date(today - 5 * MS_PER_MINUTE);

// console.log(today);
 console.log(tokenReceiveDateTime.toLocaleTimeString("en-US",));
 console.log(validTime.toLocaleTimeString("en-US",));

if (tokenReceiveDateTime < validTime) {





    ś
    console.log("First Date is greater than Second Date.");
    
    
    
    } else { 
    
    
    
    console.log("Second Two is greater than the First Date.");
    
    
    
    }