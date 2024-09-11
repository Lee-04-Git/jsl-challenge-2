const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

function checkForValidPhoneNumber(phone) {

    /*
     loop continues as long as i is the length
     of the phone string.
     after each iteration, increase by 1
    */
    for (let i = 0; i < phone.length; i++) {
        if (phone[i] < '0' || phone[i] > '9') {
            return false;
         }
    }
    return true;
}

/* 
 primaryPhone & secondaryPhone is the placeholder values
 for the checkForValidPhoneNumber function
*/
const primaryValid = checkForValidPhoneNumber(primaryPhone);
const secondaryValid = checkForValidPhoneNumber(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );
