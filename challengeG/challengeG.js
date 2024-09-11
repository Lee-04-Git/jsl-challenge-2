let FREE_WARNING = 'Free shipping only applies to single customer orders';
let BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
let NONE_SELECTED = '0';

let customers = '1'; // Assuming '1' is a string for this case
let userLocation = 'RSA'; // South Africa
let currency = null; // To be set based on location
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * (NONE_SELECTED === '0' ? 0 : 1); // Fixed initialization
let batteries = 35 * 2;
let pens = 5 * (NONE_SELECTED === '0' ? 0 : 1); // Fixed initialization
let shipping = null; // To be set based on location

currency = "$"; // Fixed assignment of currency

// Set shipping based on userLocation
if (userLocation === 'RSA') {
    shipping = 400; // Fixed assignment of shipping cost
    currency = 'R'; // Set currency for South Africa
} else if (userLocation === 'NAM') {
    shipping = 600;
    currency = '$'; // Set currency for Namibia
    console.warn(NONE_SELECTED);
} else {
    shipping = 800;
}

// Calculate total cost without shipping
let totalCost = shoes + batteries + pens + shirts + toys;

// Check if free shipping conditions are met
if (totalCost >= (userLocation === 'RSA' ? 1000 : 60) && (userLocation === 'RSA' || userLocation === 'NAM') && customers === '1') {
    shipping = 0; // Free shipping
} else if (shipping === 0 && customers !== '1') {
    console.log(FREE_WARNING); // Show warning if conditions are not met
}

// Check if the user is from North Korea
if (userLocation === 'NK') {
    console.warn(BANNED_WARNING); // Show banned warning
} else {
    console.warn('price', currency, totalCost + shipping); // Log the price including shipping
}

