const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

	document.getElementById('calculateBtn').addEventListener('click', function () {
		if (hourOfDay === 0 && minuteOfDay === 0) {
		const taxAsDecimal = parseFloat(tax.replace('%', '')) / 100;
		const startingAfterTax = salary * (1 - taxAsDecimal);
		const balance = startingAfterTax - transport - food - rent;
		document.getElementById('balance').innerText = '$' + balance.toFixed(2);
	}
});	