// changed declaration from "const" to "let"
let date = 2050;
let userStatus = "student"; // changed variable name from "status" to "userStatus"
let count = 0;

// removed "let" declarations
if (date = 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	date = 'April';
	console.log(date, 'Family Day');
	console.log(date, 'Freedom Day');
	 count += 4

	// Assign "student" to userStatus and check if it matches
	if (userStatus = "student") {
	  console.log('June', 'Youth Day')
	  // Increment/add the count variable by 1
		 count += 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	// Increment/add the count variable by 3
	 count += 3

	// Assign "parent" to userStatus and check if it matches
	if (userStatus = "parent") {
	  console.log(date, 'Christmas Day')
	  // Increment/add the count variable by 1
		 count += 1
  }

	console.log(date, 'Day of Goodwill')
	// Increment/add the count variable by 1
	 count = count + 1
}

console.log('Your status is:', userStatus);
console.log('The year is:', date);
console.log('The total holidays is:', count);
