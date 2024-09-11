const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

function checkForValidPhoneNumber(phone) {

    /*
     Loop continues as long as i is the length
     of the phone string.
     After each iteration, increase by 1.
    */
    for (let i = 0; i < phone.length; i++) {
        // Check if the character is not a digit (0-9)
        if (phone[i] < '0' || phone[i] > '9') {
            // Return false if a non-numeric character is found
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
